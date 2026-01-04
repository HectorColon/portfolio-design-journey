
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendSlackNotification = async (formData) => {
      const slackWebhookUrl = import.meta.env.VITE_APP_SLACK_WEBHOOK_URL; // Store securely in .env
      const payload = {
        text: `The following ${formData.name} has been subscribe with the following email ${formData.email}`,
      };

      try {
        await axios.post(slackWebhookUrl, JSON.stringify(payload), {
          withCredentials: false,
          transformRequest: [(data, headers) => {
            return data
          }]
        });
        console.log('Notification sent to Slack successfully!');
      } catch (error) {
        console.error('Error sending Slack notification:', error);
      }
    };

  const sendEmail = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const res = await fetch(import.meta.env.VITE_APP_GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded" },
        body: (`Name=${formData.name}&Email=${formData.email}`)
      })

      if (res.status == 200) {
        setFormData({
          name: '',
          email: ''
        })
        sendSlackNotification(formData)
        toast({
          title: "Subscribed!",
          description: "Thank you for subcribing. I'll get back to you soon.",
        });
        setLoading(false)
      } else {
        toast({
          title: "Error",
          description: "There was a problem subscribing. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: `There was a problem problem subscribing. Failed to send: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={sendEmail} className="space-y-6">
      <div className="grid grid-row-1 md:grid-row-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-800 text-white border-gray-700 focus:border-portfolio-primary"
          />
        </div>
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="bg-portfolio-primary hover:bg-portfolio-secondary text-white w-full md:w-auto"
      >
        {loading ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
};

export default ContactForm;

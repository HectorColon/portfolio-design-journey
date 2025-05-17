
import React from 'react';
import ContactForm from '@/components/ui/contact-form/ContactForm';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hcolonsoftdev@gmail.com',
      link: 'mailto:hcolonsoftdev@gmail.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Check my repositories',
      link: 'https://github.com'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        {/* Background title */}
        <div className="absolute top-24 left-0 w-full">
          <h1 className="big-title">MESSAGES</h1>
        </div>
        
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-white">
            Contact <span className="text-gradient">Me</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me using the form below
            or through any of my contact channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-slide-up">
          <div className="lg:col-span-2 bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl text-white font-semibold mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
          
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl text-white font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                    <method.icon size={18} className="text-portfolio-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{method.title}</h4>
                    <a 
                      href={method.link}
                      className="text-gray-400 hover:text-portfolio-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <h4 className="text-white font-medium mb-4">Office Hours</h4>
              <div className="text-gray-400">
                <p>Monday - Friday</p>
                <p>9:00 AM - 5:00 PM AST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

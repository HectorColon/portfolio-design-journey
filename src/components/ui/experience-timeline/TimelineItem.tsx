
import React from 'react';
import { cn } from '@/lib/utils';
import IconBasedOnTitle from '@/components/ui/experience-icons/Timelineicons';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem = ({ 
  title, 
  company, 
  period, 
  description, 
  isLast = false 
}: TimelineItemProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
      <IconBasedOnTitle title={title}  />
        {!isLast && <div className="h-full w-0.5 bg-gray-700"></div>}
      </div>
      <div className="pb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <h3 className="text-xl text-white font-semibold">{title}</h3>
          <span className="text-portfolio-primary">{company}</span>
        </div>
        <div className="text-sm text-gray-400 mt-1">{period}</div>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;

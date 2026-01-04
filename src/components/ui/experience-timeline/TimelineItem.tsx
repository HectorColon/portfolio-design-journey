
import IconBasedOnTitle from '@/components/ui/experience-icons/Timelineicons';
interface TimelineInternalItemProps {
  title: string;
  period: string;
  description: string;
}

interface TimelineItemProps {
  type: string;
  company: string;
  items: [TimelineInternalItemProps]
  isLast?: boolean;
}

const TimelineItem = ({
  company,
  items,
  type,
  isLast = false
}: TimelineItemProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <IconBasedOnTitle type={type} />
        {!isLast && <div className="h-full w-0.5 bg-gray-700"></div>}
      </div>

      <div className="pb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <h3 className="text-md text-white font-semibold text-gradient">{company}</h3>
        </div>
        {items.map((item) => (
          <div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 pt-8">
              <h3 className="text-xl text-white font-semibold">{item.title}</h3>
              <span className='text-white'>|</span>
              <span className="text-portfolio-primary">{item.period}</span>
            </div>
            <div className="text-gray-300 mt-2 text-justify" dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;

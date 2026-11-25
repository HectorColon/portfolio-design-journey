import IconBasedOnTitle from '@/components/ui/experience-icons/Timelineicons';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

interface TimelineInternalItemProps {
  title: string;
  period: string;
  description: string;
}

interface TimelineItemProps {
  type: string;
  company: string;
  items: TimelineInternalItemProps[]
  isLast?: boolean;
}

const TimelineItem = ({
  company,
  items,
  type,
}: TimelineItemProps) => {
  // Lights up once the entry reaches the upper part of the screen.
  const [ref, active] = useInView<HTMLDivElement>({ rootMargin: "0px 0px -45% 0px" });

  return (
    <div ref={ref} className="flex" data-active={active ? "" : undefined}>
      <div className="mr-4 h-fit shrink-0">
        <div
          className={cn(
            "relative z-10 rounded-full bg-black transition-all duration-700 ease-out",
            active ? "text-portfolio-primary scale-110" : "text-gray-500"
          )}
        >
          <span className="tl-ring" aria-hidden />
          <IconBasedOnTitle type={type} />
        </div>
      </div>

      <div className="pb-8 min-w-0">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <h3 className="text-md text-white font-semibold text-gradient">{company}</h3>
        </div>
        {items.map((item) => (
          <div key={item.title + item.period}>
            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 pt-8">
              <h3 className="text-xl text-white font-semibold">{item.title}</h3>
              <span className="font-display text-portfolio-primary tracking-tight">{item.period}</span>
            </div>
            <div
              className="text-gray-300 mt-3 max-w-[68ch] leading-[1.75] text-pretty"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;

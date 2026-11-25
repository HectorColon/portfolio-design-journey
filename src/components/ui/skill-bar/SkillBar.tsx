import { useInView } from '@/hooks/use-in-view';

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ name, percentage, delay = 0 }: SkillBarProps) => {
  const [ref, inView] = useInView<HTMLLIElement>({ rootMargin: "0px 0px -5% 0px" });

  return (
    <li ref={ref} className="mb-4 list-none">
      <div className="flex justify-between items-center mb-1">
        <span className="font-display text-white text-sm tracking-tight">{name}</span>
        {/* <span className="text-gray-400 text-xs">{percentage}%</span> */}
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full w-full origin-left rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-blue transition-transform duration-[1400ms] ease-out"
          style={{
            transform: `scaleX(${inView ? percentage / 100 : 0})`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </li>
  );
};

export default SkillBar;

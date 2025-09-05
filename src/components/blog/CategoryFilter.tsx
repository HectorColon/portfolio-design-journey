import { Button } from "@/components/ui/button";
import { categories } from "@/lib/blog-data";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "ghost"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={`
            transition-all duration-200
            ${selectedCategory === category 
              ? 'text-gradient hover:text-portfolio-primary border border-transparent hover:border-portfolio-primary px-4 py-2 rounded-md transition-all duration-300' 
              : 'text-white hover:text-gradient hover:text-portfolio-primary border border-transparent px-4 py-2 rounded-md transition-all duration-300'
            }
          `}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
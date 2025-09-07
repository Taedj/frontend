import { useState } from "react";
import useCategories from "../../hooks/useCategories";

interface Props {
  categoryHandler: (string) => void;
}

const CategoriesSelector = ({ categoryHandler }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data: categories } = useCategories();
  return (
    <div className="text-lg sm:text-xl md:text-2xl font-normal my-10 sm:my-16 mx-0 text-categories-selector">
      <ul className="flex flex-wrap list-none justify-center gap-4 sm:gap-8">
        {categories?.map((categoryText) => (
          <li
            key={categoryText}
            className="flex flex-col text-center font-semibold items-center py-2 sm:py-4 px-4 sm:px-6 min-w-[6rem] sm:w-40 hover:cursor-pointer"
            onClick={() => {
              categoryHandler(categoryText);
              setSelectedCategory(categoryText);
            }}
          >
            {selectedCategory === categoryText ? (
              <p className="text-primary">{categoryText}</p>
            ) : (
              <p>{categoryText}</p>
            )}
            {selectedCategory === categoryText && (
              <span className="block w-12 sm:w-20 md:w-32 h-1 mt-2 sm:mt-5 bg-primary"></span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSelector;

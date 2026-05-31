import { GoSearch } from "react-icons/go";

export default function SearchBar({ searchSetter }) {
  return (
    <div className="z-30 sticky top-0 w-full h-20 bg-primary-500 p-4">
      <div className="flex gap-2 items-center bg-primary-400/50 w-98/100 h-12 p-3 mb-4 text-secondary mx-auto rounded-2xl">
        <GoSearch size={24} className="box-content border-r-1 pr-2" />
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search clubs"
          onChange={(e) => {
            console.log(e.target.value);
            searchSetter(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

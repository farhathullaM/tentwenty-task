import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const AdminSearchBar = ({
  onSearch,
  placeholder,
}: {
  onSearch: (query: string) => void;
  placeholder: string;
}) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // 500ms debounce

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <div className="flex gap-2 items-center  rounded-md py-2 w-full px-2 border border-[#0000001A] bg-white">
      <Search className="w-4 h-4 text-[#000]" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none placeholder:font-medium placeholder:text-[#00000040] text-sm w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default AdminSearchBar;

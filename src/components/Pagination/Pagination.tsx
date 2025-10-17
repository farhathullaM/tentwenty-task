import { Button } from "../../components/ui/button";

interface PaginationProps {
  total: number;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ total, page, limit, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(total / limit);

  return (
        <div className="flex items-center border-[#E5E7EB] border-2 justify-center rounded-xl text-[#4A5565]">
      {/* Previous */}
      <Button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="py-2 bg-white h-full cursor-pointer rounded-l-xl"
      >
      Previous
      </Button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <div
          key={p}
          className={`w-10 text-center border-l-[#E5E7EB] border-l-2 py-2 select-none text-sm  cursor-pointer font-medium ${
            p === page ? "bg-[#F9FAFB] text-[#1447E6]" : "bg-white"
          }`}
          onClick={() => onPageChange(p)}
        >
          {p}
        </div>
      ))}

      {/* Next */}
      <Button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="py-2 bg-white h-full border-l-[#E5E7EB] border-l-2 cursor-pointer rounded-l-none rounded-r-xl"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;

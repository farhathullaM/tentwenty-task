import type React from "react";
import { cn } from "../../lib/utils";
import { TableCell, TableRow } from "../ui/table";


interface TableMessageProps {
  message: string;
  colSpan?: number;
  className?: string;
}

const TableMessage: React.FC<TableMessageProps> = ({
  message,
  colSpan,
  className,
}) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan}>
        <div className={cn("w-full py-2 text-center", className)}>
          {message}
        </div>
      </TableCell>
    </TableRow>
  );
};

export default TableMessage;

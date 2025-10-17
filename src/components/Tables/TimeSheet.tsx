import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableHeader,
} from "../../components/ui/table";
import { useState } from "react";
import { Link } from "react-router";
import { MoveDown } from "lucide-react";
import StatusBox from "../ui/StatusBox";
import TableMessage from "./TableMessage";
import { useQuery } from "@tanstack/react-query";
import { formatDateRange } from "../../utils/formatDate";
import { getTimeSheets } from "../../services/timeSheet_api";
import CustomSelect from "../ui/CustomSelect";
import {
  dateRangeOptions,
  pageOptions,
  statusOptions,
} from "../../constants/data";
import Pagination from "../Pagination/Pagination";

const TimeSheet = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState<string>("5");
  const [status, setStatus] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["timesheets", page],
    queryFn: () => getTimeSheets(),
  });

  return (
    <div className="bg-white w-[90vw] rounded-md shadow-sm mt-10 flex px-5 py-5 flex-col h-fit gap-5">
      <h1 className="text-4xl font-semibold text-[#111928]">Your Timesheets</h1>

      <div className="flex gap-2 items-center">
        <CustomSelect
          value={status}
          options={statusOptions}
          onChange={setStatus}
          placeholder="Status"
        />

        <CustomSelect
          value={date}
          options={dateRangeOptions}
          onChange={setDate}
          placeholder="Date Range"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow className="bg-[#F9FAFB] font-medium text-[#6B7280]">
            <TableHead>WEEK #</TableHead>
            <TableHead>
              <div className="flex gap-2">
                DATE <MoveDown className="w-4" />
              </div>
            </TableHead>
            <TableHead className="">
              <div className="flex gap-2">
                STATUS <MoveDown className="w-4" />
              </div>
            </TableHead>
            <TableHead className="text-right pr-10">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isError ? (
            <TableMessage
              message={error.message}
              colSpan={4}
              className={"text-red-500"}
            />
          ) : isLoading || isFetching ? (
            <TableMessage message="Fetching sheet..." colSpan={4} />
          ) : data.length === 0 ? (
            <TableMessage message="No Data found" colSpan={4} />
          ) : (
            data?.map((item: any) => (
              <TableRow key={item._id} className="text-[#6B7280] h-14">
                <TableCell className="bg-[#F9FAFB] text-[#111928] font-medium">
                  <span className="px-2">{item.id}</span>
                </TableCell>
                <TableCell>
                  <Link to={`/weeklywork/${item.id}`} className="font-[450]">
                    {formatDateRange(item.dateAssigned, item.deadlineDate)}
                  </Link>
                </TableCell>
                <TableCell>
                  <StatusBox status={item.status} />
                </TableCell>
                <TableCell className="justify-end flex gap-1">
                  <span className="text-[#1C64F2] w-20 text-center py-3 text-[16px] cursor-pointer">
                    {item.status === "incomplete"
                      ? "Update"
                      : item.status === "completed"
                      ? "View"
                      : item.status === "missing"
                      ? "Create"
                      : ""}
                  </span>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <div className="w-full flex justify-between items-center">
        <CustomSelect
          value={limit}
          options={pageOptions}
          onChange={setLimit}
          placeholder="5 per page"
        />
        <Pagination limit={10} page={page} onPageChange={setPage} total={100} />
      </div>
    </div>
  );
};

export default TimeSheet;

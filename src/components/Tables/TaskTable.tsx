import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  TableHeader,
} from "../../components/ui/table";
import { useState } from "react";
import { LogOut } from "lucide-react";
import AddTask from "../Forms/AddTask";
import EditTask from "../Forms/EditTask";
import EditButton from "../ui/EditButton";
import TableMessage from "./TableMessage";
import DeleteButton from "../ui/DeleteButton";
import SheetWrapper from "../ui/SheetWrapper";
import { useQuery } from "@tanstack/react-query";
import ConfirmationBox from "../ui/ConfimationBox";
import { useAuth } from "../../context/AuthContext";
import { getAllTask } from "../../services/task_api";
import useTaskActions from "../../hooks/useTaskActions";
import { formatToDDMMYYYY } from "../../utils/formatDate";
import AdminSearchBar from "../Search/AdminSearchBar";
import StatusBox from "../ui/StatusBox";

const TaskTable = () => {
  const { logout } = useAuth();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { remove } = useTaskActions();
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["tasks", page, search],
    queryFn: () =>
      getAllTask({
        page,
        limit: 10,
        search,
      }),
  });

  return (
    <div className="w-full p-5 bg-[#F9F9F9] flex flex-col gap-5 min-h-screen">
      <h1 className="text-4xl font-medium">Tasks</h1>

      <div className="flex justify-between gap-4">
        <AdminSearchBar
          onSearch={(query: string) => {
            setSearch(query);
          }}
          placeholder="Search"
        />

        <SheetWrapper
          side="right"
          title="Add New Shop"
          trigger={
            <div className="bg-[#e88484] px-3 py-2 flex-nowrap text-nowrap rounded-xl">
              Add Task
            </div>
          }
          children={<AddTask />}
          className="bg-[#F9F9F9]"
        />

        <div
          className="flex gap-2 items-center rounded-md py-2 hover:bg-gray-300 active:bg-gray-400 bg-amber-300  px-4 text-gray-700 cursor-pointer "
          onClick={() => logout()}
        >
          <LogOut /> <span>Logout</span>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right pr-10">Action</TableHead>
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
            <TableMessage message="Fetching task..." colSpan={4} />
          ) : data.tasks?.length === 0 ? (
            <TableMessage message="No task found" colSpan={4} />
          ) : (
            data?.tasks.map((item: any) => (
              <TableRow key={item._id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.priority}</TableCell>
                <TableCell>{formatToDDMMYYYY(item.dueDate)}</TableCell>
                <TableCell>
                  <StatusBox status={item.status} />
                </TableCell>
                <TableCell className="justify-end flex gap-1">
                  <SheetWrapper
                    side="right"
                    title="Edit Shop"
                    trigger={<EditButton />}
                    children={<EditTask task={item} />}
                    className="bg-[#F9F9F9]"
                  />

                  <ConfirmationBox
                    trigger={<DeleteButton />}
                    confirmText="Delete"
                    title="Delete Category"
                    description="Are you sure you want to delete this category? This action cannot be undone."
                    onClick={() => {
                      remove({ id: item._id });
                    }}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TaskTable;

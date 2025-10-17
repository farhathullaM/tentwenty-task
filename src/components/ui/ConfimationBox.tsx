import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../components/ui/alert-dialog";

interface ConfirmationBoxProps {
  confirmText: string;
  title: string;
  description?: string;
  trigger: React.ReactNode;
  onClick?: () => void;
}

const ConfirmationBox: React.FC<ConfirmationBoxProps> = ({
  confirmText,
  title,
  description,
  trigger,
  onClick,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="bg-[#fff]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="outline-none">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#e62a2a] hover:bg-[#e62a2a] cursor-pointer text-[#fff]"
            onClick={onClick}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationBox;

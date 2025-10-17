import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

interface DialogBoxProps {
  title: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  descpription?: string;
}

const DialogBox: React.FC<DialogBoxProps> = ({
  title,
  trigger,
  children,
  descpription,
}) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{descpription}</DialogDescription>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { cn } from "../../lib/utils";
import { type LucideIcon } from "lucide-react";

interface SheetWrapperProps {
  title: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  descpription?: string;
  side?: "top" | "right" | "bottom" | "left";
  className?: string;
  icon?: LucideIcon;
}

const SheetWrapper: React.FC<SheetWrapperProps> = ({
  trigger,
  children,
  title,
  side,
  descpription,
  className,
  icon: Icon,
}) => {
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent
        side={side}
        className={cn(
          "bg-[#fff] rounded-t-xl border-none outline-none",
          className
        )}
      >
        <SheetHeader className="items-center flex w-full">
          <SheetTitle className="flex items-center gap-2 font-normal">
            {Icon && <Icon size={20} />} {title}
          </SheetTitle>
          <SheetDescription>{descpription}</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default SheetWrapper;

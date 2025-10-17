import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface HoverComponentProps {
  trigger: React.ReactNode;

}

const ToolTipCard = ({ trigger }: HoverComponentProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>{trigger}</TooltipTrigger>
      <TooltipContent>
        20/40 hrs
      </TooltipContent>
    </Tooltip>
  );
};

export default ToolTipCard;

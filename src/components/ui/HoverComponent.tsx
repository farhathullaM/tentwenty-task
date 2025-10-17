import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

interface HoverComponentProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const HoverComponent = ({ trigger, children }: HoverComponentProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger>{trigger}</HoverCardTrigger>
      <HoverCardContent className="bg-white">{children}</HoverCardContent>
    </HoverCard>
  );
};

export default HoverComponent;

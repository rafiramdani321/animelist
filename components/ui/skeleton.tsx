import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-[#3a3a3a] to-[#505050] opacity-80",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };

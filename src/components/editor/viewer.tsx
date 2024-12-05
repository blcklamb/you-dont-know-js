import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface ViewerProps extends HTMLAttributes<HTMLDivElement> {
  data: string;
}

export function Viewer({ data, className, ...props }: ViewerProps) {
  return (
    <div
      {...props}
      className={cn("tiptap ", className)}
      dangerouslySetInnerHTML={{
        __html: data,
      }}
    />
  );
}

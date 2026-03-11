import { cn } from "@/lib/utils";
import { ArrowRight, LucideZap, Zap, ZapIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface ShinyButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const ShinyButton = React.forwardRef<HTMLAnchorElement, ShinyButtonProps>(
  ({ className, href, children, ...props }, ref) => {
    return (
      <Link
        href={href ?? "#"}
        ref={ref}
        className={cn(
          "group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border bg-primary px-8 py-2 text-base/7 font-medium text-background transition-all duration-300 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background focus:outline-none focus:ring-2 focus:ring-offset-2",
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <LucideZap className="size-4 shrink-0 stroke-background transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
        </span>
        <div className="absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:left-[120%]"></div>
      </Link>
    );
  }
);

ShinyButton.displayName = "ShinyButton";

import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge"

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
    return (
        <div className={twMerge("bg-gradient-to-br from-medium-violet via-light-violet to-violet-600 animate-pulse rounded-md", className)}
            {...props}
        />
    )
}
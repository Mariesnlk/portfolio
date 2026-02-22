import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
  "text-foreground transition-colors",
  {
    variants: {
      variant: {
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-6",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "p",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : (variant === "muted" || variant === "lead" ? "p" : variant || "p") as any
    return (
      <Comp
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = "Text"

export { Text, textVariants }
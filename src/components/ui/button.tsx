import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 group relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-glow border-2 border-primary/30 font-bold shadow-card hover:scale-105",
        destructive: "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground hover:shadow-neon border-2 border-destructive/40 font-bold shadow-card",
        outline: "border-3 border-primary/60 bg-card/20 backdrop-blur-xl text-foreground hover:bg-primary/20 hover:text-primary hover:border-primary hover:shadow-glow font-bold",
        secondary: "bg-gradient-to-r from-secondary to-secondary-dark text-secondary-foreground hover:shadow-glow border-2 border-secondary/40 font-bold shadow-card",
        ghost: "hover:bg-primary/20 hover:text-primary hover:shadow-glow font-bold transition-all duration-300",
        link: "text-primary underline-offset-4 hover:underline font-bold hover:text-primary-glow",
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-neon transform hover:scale-110 font-bold border-3 border-primary/50 shadow-glow before:absolute before:inset-0 before:bg-gradient-accent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-30",
        glassmorphism: "bg-card/10 backdrop-blur-xl border-2 border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary hover:shadow-glow font-bold shadow-card",
        premium: "bg-gradient-accent text-accent-foreground shadow-neon hover:shadow-elegant transform hover:scale-110 font-bold border-3 border-accent/50 relative overflow-hidden before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:transition-transform before:duration-700 hover:before:translate-x-0",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 rounded-md px-6 text-sm",
        lg: "h-14 rounded-lg px-10 text-base",
        xl: "h-18 rounded-xl px-14 text-lg font-bold",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

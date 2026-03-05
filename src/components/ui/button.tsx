import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary to-accent px-6 py-3 text-slate-950 shadow-glow hover:scale-[1.02]",
        secondary: "border border-white/20 bg-white/5 px-6 py-3 text-foreground hover:bg-white/10",
        ghost: "text-accent hover:text-white",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

type LinkButtonSize = "sm" | "md" | "lg";
type LinkButtonProps = VariantProps<typeof buttonVariants> & {
  href: string;
  children: ReactNode;
  className?: string;
};

export function LinkButton({ href, children, className, variant, size }: LinkButtonProps) {
  const resolvedVariant = variant ?? "primary";
  const resolvedSize: LinkButtonSize = size === "sm" || size === "md" ? size : "md";

  return (
    <Link href={href} className={cn(buttonVariants({ variant: resolvedVariant, size: resolvedSize }), className)}>
      {children}
    </Link>
  );
}

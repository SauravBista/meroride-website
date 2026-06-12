import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "whatsapp" | "disabled";

const variants: Record<Variant, string> = {
  primary: "btn-primary text-white",
  ghost: "btn-ghost text-white",
  whatsapp: "btn-primary text-white",
  disabled:
    "cursor-not-allowed bg-white/10 text-white/40 border border-white/10",
};

type SharedProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonOnlyProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    external?: never;
  };

type LinkOnlyProps = SharedProps & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonOnlyProps | LinkOnlyProps) {
  const {
    variant = "primary",
    className = "",
    children,
    href,
    external,
    ...rest
  } = props;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-250 lg:text-base";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

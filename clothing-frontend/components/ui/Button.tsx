import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  label,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = clsx(
    "inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition",
    variant === "primary" &&
      "bg-white text-black hover:bg-black hover:text-white",
    variant === "outline" &&
      "border border-white text-white hover:bg-white hover:text-black",
    className
  );

  return href ? (
    <Link href={href} className={styles}>
      {label}
    </Link>
  ) : (
    <button className={styles}>{label}</button>
  );
}

import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "whatsapp";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-bold rounded-lg transition-colors min-h-[48px] px-6 py-3 text-base focus-visible:outline focus-visible:outline-2";

  const variants = {
    primary:
      "bg-[#F5A623] text-[#1A1A1A] hover:bg-[#e09720] focus-visible:outline-[#1A1A1A]",
    outline:
      "border-2 border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623] hover:text-[#1A1A1A] focus-visible:outline-[#F5A623]",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1ebe5d] focus-visible:outline-[#25D366]",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

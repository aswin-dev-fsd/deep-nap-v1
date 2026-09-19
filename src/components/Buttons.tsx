import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ href, children, className = "", ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center h-12 px-7 rounded-lg bg-primary-container text-surface-white font-label-nav text-label-nav font-semibold hover:bg-navy-deep transition-all shadow-sm";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

const SecondaryButton = ({ href, children, className = "", ...props }: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center h-12 px-6 rounded-lg bg-transparent text-primary-container font-label-nav text-label-nav font-semibold border-[1.5px] border-primary-container hover:bg-primary-container/5 transition-all";
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

interface WhatsAppButtonProps extends Omit<ButtonProps, 'href'> {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton = ({ 
  phoneNumber = "919600889334", 
  message = "Hello, I would like to get a quote.", 
  children, 
  className = "", 
  ...props 
}: WhatsAppButtonProps) => {
  const baseClasses = "inline-flex items-center gap-2 border-[1.5px] border-primary-container bg-transparent text-primary-container px-4 py-2 rounded-full font-label-nav text-label-nav hover:bg-primary-container hover:text-surface-white transition-all";
  const combinedClasses = `${baseClasses} ${className}`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className={combinedClasses} 
      target="_blank" 
      rel="noopener noreferrer"
      {...(props as any)}
    >
      <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim shrink-0"></span>
      {children || "WhatsApp"}
    </a>
  );
};

export { PrimaryButton, SecondaryButton, WhatsAppButton };

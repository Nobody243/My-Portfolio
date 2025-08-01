"use client";

interface ScrollToTopButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function ScrollToTopButton({ className, children }: ScrollToTopButtonProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleScrollToTop} className={className}>
      {children}
    </button>
  );
}

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 shadow-2xl transition-all duration-300 hover:bg-slate-700/80 hover:scale-110 hover:shadow-3xl active:scale-95 md:h-14 md:w-14 md:bottom-8 md:right-8"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <svg
            className="h-5 w-5 stroke-slate-200 md:h-6 md:w-6"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;


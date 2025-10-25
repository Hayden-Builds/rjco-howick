const Logo = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Abstract Circle SVG */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-spin-slow"
      >
        <defs>
          {/* Gradient 1 */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="1" />
          </linearGradient>

          {/* Gradient 2 */}
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="1" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* First Ring Segment */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#grad1)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          transform="rotate(-30 50 50)"
        />

        {/* Second Ring Segment */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#grad2)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          transform="rotate(45 50 50)"
        />
      </svg>

      {/* Brand Text + Subtitle */}
      <div className="flex flex-col items-start">
        <span className="text-sm sm:text-base md:text-lg font-bold tracking-wider text-gray-800 dark:text-white">
          Honed Design
        </span>
        <span className="text-xs sm:text-xs md:text-sm font-medium text-gray-500 dark:text-gray-400 tracking-wide">
          Redefining the Web
        </span>
      </div>
    </div>
  );
};

export default Logo;
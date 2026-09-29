import { useId } from 'react';

export default function ChevronPattern({
  color = "#334B68",
  opacity = 0.15,
  className = ""
}) {
  const id = useId();
  const patternId = `chevron-pattern-${id}`;

  return (
    <svg
      className={`w-full h-full ${className}`}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 24"
    >
      <defs>
        <pattern
          id={patternId}
          width="24"
          height="12"
          patternUnits="userSpaceOnUse"
        >

          {/* Main chevron */}
          <path
            d="M0 0 L6 6 L12 0 L18 6 L24 0"
            fill="none"
            stroke={color}
            strokeWidth="1"
          />

          {/* Inverted chevron */}
          <path
            d="M0 12 L6 6 L12 12 L18 6 L24 12"
            fill="none"
            stroke={color}
            strokeWidth="1"
          />

          {/* Inner parallel lines */}
          <path
            d="M3 0 L6 3 L9 0"
            fill="none"
            stroke={color}
            strokeWidth="0.7"
          />

          <path
            d="M15 0 L18 3 L21 0"
            fill="none"
            stroke={color}
            strokeWidth="0.7"
          />

          <path
            d="M3 12 L6 9 L9 12"
            fill="none"
            stroke={color}
            strokeWidth="0.7"
          />

          <path
            d="M15 12 L18 9 L21 12"
            fill="none"
            stroke={color}
            strokeWidth="0.7"
          />

        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
      />
    </svg>
  );
}
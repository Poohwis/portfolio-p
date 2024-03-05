import { motion } from "framer-motion";
const BlurredGradientCircle = ({
  id,
  cx,
  cy,
  r,
  stopColor1,
  stopColor2,
}: {
  id: string;
  cx: number;
  cy: number;
  r: number;
  stopColor1: string;
  stopColor2: string;
}) => {
  return (
    <svg className="w-full h-full  absolute">
      <defs>
        <linearGradient
          id={`circleGradient${id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" style={{ stopColor: stopColor1, stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: stopColor2, stopOpacity: 1 }}
          />
        </linearGradient>
        <filter
          id={`blurFilter${id}`}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
        </filter>
      </defs>
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill={`url(#circleGradient${id})`}
        filter={`url(#blurFilter${id})`}
      />
    </svg>
  );
};

export default BlurredGradientCircle;

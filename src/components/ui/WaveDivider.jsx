import { cn } from '@/utils/cn'

/**
 * Premium SVG Wave Divider
 * @param {string} color - The fill color (should match next section's background)
 * @param {boolean} flip - Whether to flip the wave horizontally
 * @param {string} className - Optional positioning classes
 */
export default function WaveDivider({ color = '#FFFFFF', flip = false, className }) {
  return (
    <div
      className={cn(
        "absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none",
        flip && "scale-x-[-1]",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 180"
        className="relative block w-full h-[100px] md:h-[150px] lg:h-[180px]"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          fillOpacity="1"
          d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,138.7C1120,149,1280,133,1360,125.3L1440,117.3L1440,181L1360,181C1280,181,1120,181,960,181C800,181,640,181,480,181C320,181,160,181,80,181L0,181Z"
        />
      </svg>
    </div>
  )
}

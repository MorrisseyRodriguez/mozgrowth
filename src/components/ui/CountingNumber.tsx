import React, { useEffect, useRef } from 'react';
import { useMotionValue, animate, motion, useInView } from 'framer-motion';

interface CountingNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatter?: (value: number) => string;
  className?: string;
}

const CountingNumber: React.FC<CountingNumberProps> = ({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  formatter,
  className = ''
}) => {
  const count = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          const formattedValue = formatter 
            ? formatter(Math.floor(latest))
            : Math.floor(latest).toLocaleString();
          ref.current.textContent = `${prefix}${formattedValue}${suffix}`;
        }
      }
    });

    return controls.stop;
  }, [count, value, duration, prefix, suffix, formatter, isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {prefix}0{suffix}
    </motion.div>
  );
};

export default CountingNumber;
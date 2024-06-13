import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Example = (props) => {
  return (
    <div className="">
      <TiltCard
      names = {props.name} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = (props) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className=" flex items-center justify-center relative sm:h-[25rem] sm:w-[35rem] rounded-xl bg-gradient-to-r from-black to-gray-500"
    >
      <img src={props.names}
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        
        className="w-[95%] inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
      />
        {/* <img src={props.names}
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold text-black"
        >
        </img> */}
    </motion.div>
  );
};

export default Example;
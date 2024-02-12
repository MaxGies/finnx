import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const MysticBox = ({ color }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(-60%,0)" },
    to: { transform: "translate(60%,0)" },
    config: { duration: 1000 },
    reset: true,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div key={key}>
      <animated.div
        className={`min-w-[164px] min-h-[62px] rounded-[10px] bg-denied`}
        style={scrolling}
      ></animated.div>
    </div>
  );
};

const InfinitySlide = () => {
  return (
    <div className="w-full flex gap-[30px] w-[164px] h-[62px] overflow-hidden">
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
      <MysticBox />
    </div>
  );
};

export default InfinitySlide;

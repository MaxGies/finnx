import { useState, useRef, useEffect } from "react";

const Slider = ({ outSetEmployeeAmount }) => {
  const [employeeAmount, setAmployeeAmount] = useState("30");
  const [inputWidth, setInputWidth] = useState(0);
  const progress = Math.ceil(((employeeAmount - 10) / 100) * 100 * 1.1);

  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      const distanceWidth = Math.ceil(
        (inputRef.current.offsetWidth * progress) / 100 / 1.1
      );
      setInputWidth(distanceWidth);
    }
  }, [inputRef.current, employeeAmount]);

  return (
    <div className="p-5 lg:p-0 w-full max-w-[335px] lg:max-w-[552px]">
      <div className="w-full max-w-[335px] lg:max-w-[552px] bg-white-rabbit rounded-[10px] shadow-custom-shadow flex flex-col items-center gap-2.5 p-5">
        <label
          className="font-bold text-sherbet text-xl text-center"
          for="employee"
        >
          พนักงาน {employeeAmount} คน
        </label>
        <input
          type="range"
          id="employee"
          name="employee"
          min="10"
          max="100"
          value={employeeAmount}
          onChange={(e) => {
            setAmployeeAmount(e.target.value);
            outSetEmployeeAmount(e.target.value);
          }}
          ref={inputRef}
          style={{
            backgroundImage: `linear-gradient(to right,#4C71F1 ${progress}%,#DEEDFF ${progress}%)`,
          }}
          className={
            "w-full z-10 max-w-[470px] h-[10px] mt-2.5 appearance-none focus:outline-none rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:z-10 [&::-webkit-slider-thumb]:w-[40px] [&::-webkit-slider-thumb]:h-[40px] [&::-webkit-slider-thumb]:bg-bubblegum [&::-webkit-slider-thumb]:border-[9px] [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-white-rabbit [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-custom-shadow"
          }
          list="amount"
        />
        <div
          id="amount"
          className="flex flex-row justify-between w-full max-w-[470px] text-persian-cat text-xs -mt-2.5 z-0"
        >
          <option value="10" label="10" className="p-0 z-0"></option>
          <option value="100" label="100" className="p-0 z-0"></option>
        </div>
        <div className="w-full pl-0 lg:pl-[28px]">
          <p
            style={{ transform: `translateX(${inputWidth}px)` }}
            className={`w-fit text-sherbet font-bold text-xl`}
          >
            {employeeAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;

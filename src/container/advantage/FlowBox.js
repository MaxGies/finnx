import { Carousel } from "@material-tailwind/react";
import StepApproveImg from "../../assets/step-approved.png";
import StepApproveAlertImg from "../../assets/step-approve-alert.png";
import StepLeaveTypeImg from "../../assets/step-leave-type.png";
import ProgressStepper from "../../components/ProgressSteper";
import ArrowButton from "../../components/ArrowButton";
import { useState } from "react";

const CheckOnline = () => {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

  return (
    <div className="w-full px-[20px] lg:px-[40px] pt-[30px] pb-[30px] lg:pb-0 flex flex-col items-center justify-center gap-[30px] bg-cotton-candy rounded-[10px] shadow-custom-shadow max-w-[552px]">
      <ProgressStepper currentStep={currentActiveIndex} />
      <Carousel
        className="rounded-xl pb-[30px] lg:pb-0"
        navigation={({ setActiveIndex, activeIndex, length }) => {
          setCurrentActiveIndex(activeIndex);

          return (
            <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2 lg:hidden">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-2.5 w-2.5 cursor-pointer rounded-full transition-colors content-[''] ${
                    activeIndex === i ? "bg-bubblegum" : "bg-grey-wolf"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          );
        }}
        prevArrow={({ loop, handlePrev, firstIndex }) => {
          return (
            <button
              onClick={handlePrev}
              disabled={!loop && firstIndex}
              className="!absolute top-2/4 left-px -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
            >
              <ArrowButton />
            </button>
          );
        }}
        nextArrow={({ loop, handleNext, lastIndex }) => (
          <button
            onClick={handleNext}
            disabled={!loop && lastIndex}
            className="!absolute top-2/4 right-px -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <ArrowButton isRight />
          </button>
        )}
      >
        <img
          src={StepLeaveTypeImg}
          alt="Select Leave Type"
          className="h-[293px] w-[301px] m-auto"
        />
        <img
          src={StepApproveImg}
          alt="Confirm Leave"
          className="h-[293px] w-[301px] m-auto"
        />
        <img
          src={StepApproveAlertImg}
          alt="Notification Status Leave"
          className="h-[293px] w-[301px] m-auto"
        />
      </Carousel>
    </div>
  );
};

export default CheckOnline;

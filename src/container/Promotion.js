import Slider from "../components/Slider";
import Package from "../components/Package";

const Promotion = () => {
  return (
    <section className="flex flex-col items-center gap-[40px] w-full px-5 lg:max-w-[940px] lg:px-0">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl lg:text-3xl text-sherbet text-center max-w-[550px]">
          โปรโมชั่นราคาสุดพิเศษ เฉพาะเดือนนี้!
        </h2>
        <p className="font-semibold text-base text-center">
          เลือกแพ็คเกจราคาตามความเหมาะสมของจำนวนพนักงานได้เลย
        </p>
      </div>
      <div className="flex gap-[30px] flex-col flex-wrap items-center justify-center">
        <div className="flex gap-2.5 w-full max-w-[335px]">
          <div className="font-semibold text-base text-white-rabbit w-[30px] h-[30px] bg-bubblegum rounded-full flex items-center justify-center">
            1
          </div>
          <p className="text-bubblegum font-bold text-xl">
            ระบุจำนวนพนักงานในบริษัท
          </p>
        </div>
        <Slider />
        <div className="flex gap-2.5 w-full max-w-[335px]">
          <div className="font-semibold text-base text-white-rabbit w-[30px] h-[30px] bg-bubblegum rounded-full flex items-center justify-center">
            2
          </div>
          <p className="text-bubblegum font-bold text-xl">
            เลือกแผนบริการตามความต้องการ
          </p>
        </div>
        <Package />
      </div>
    </section>
  );
};

export default Promotion;

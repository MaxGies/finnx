import Auth from "./advantage/Auth";
import CheckOnline from "./advantage/CheckOnline";
import DeptManage from "./advantage/DeptManage";
import Employee from "./advantage/Employee";
import FlowText from "./advantage/FlowText";
import FlowBox from "./advantage/FlowBox";

const Advantage = () => {
  return (
    <section className="flex flex-col items-center gap-[30px] w-full px-5 lg:max-w-[940px] lg:px-0">
      <div className="flex flex-col items-center gap-2.5">
        <h2 className="font-bold text-2xl lg:text-3xl text-sherbet text-center max-w-[550px]">
          จุดเด่น และรายละเอียดแต่ละเมนู
        </h2>
      </div>
      <div className="flex gap-[30px] flex-col lg:flex-row flex-wrap items-center justify-center">
        <FlowText />
        <FlowBox />
        <div className="w-full lg:max-h-[668px] flex flex-col lg:flex-wrap gap-[30px] items-center justify-center">
          <CheckOnline />
          <Auth />
          <Employee />
        </div>
        <DeptManage />
      </div>
    </section>
  );
};

export default Advantage;

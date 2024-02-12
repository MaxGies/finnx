import CircleIcon from "../components/CircleIcon";

const Overview = () => {
  return (
    <section className="flex flex-col items-center gap-10 px-[20px]">
      <div className="flex flex-col items-center gap-2.5">
        <p className="font-semibold text-base text-center">ภาพรวมของ Vannila</p>
        <h2 className="font-bold text-2xl lg:text-3xl text-sherbet text-center max-w-[550px]">
          โปรแกรม HR บริหารงานบุคคล
          <br />
          ใช้ง่าย ใช้งานผ่าน LINE OA
        </h2>
      </div>
      <div className="flex items-center flex-wrap justify-around gap-[30px] lg:gap-20">
        <CircleIcon isBig>
          แจ้งวันลาออนไลน์ <br />
          ผ่าน LINE OA
        </CircleIcon>
        <CircleIcon isBig>
          อนุมัติวันลา <br />
          ออนไลน์
        </CircleIcon>
        <CircleIcon isBig>
          จัดการแผนก <br />
          ต่างๆ
        </CircleIcon>
        <CircleIcon isBig>
          จัดการข้อมูล <br />
          เพื่อนร่วมงาน
        </CircleIcon>
        <CircleIcon isBig>
          จัดการวันหยุด <br />
          และปฏิทินวันหยุด
        </CircleIcon>
      </div>
    </section>
  );
};

export default Overview;

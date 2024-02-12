import CircleIcon from "../../components/CircleIcon";

const FlowText = () => {
  return (
    <div className="w-full p-[30px] lg:px-[40px] flex flex-col gap-2.5 bg-white-rabbit rounded-[10px] shadow-custom-shadow max-w-[358px]">
      <h2 className="font-bold text-2xl text-sherbet max-w-[280px]">
        Leave Request & Management
      </h2>
      <p className="font-semibold text-base">
        จัดการวันลา และแจ้งวันลาออนไลน์ผ่าน LINE OA
      </p>
      <p className="font-semibold text-base text-persian-cat">
        ระบบวันลาออนไลน์ ่ส่งคำขอวันลาทาง LINE OA และอนุมัติวันลาจากที่ใดก็ได้
        ยังสามารถจัดการวันลา และประเภทต่างๆ ได้อย่างอิสระ
      </p>
      <div className="flex justify-between items-center mt-[11px] lg:mt-[24px]">
        <CircleIcon>แจ้งวันลา</CircleIcon>
        <CircleIcon>อนุมัติวันลา</CircleIcon>
        <CircleIcon>กำหนดวันลา</CircleIcon>
      </div>
    </div>
  );
};

export default FlowText;

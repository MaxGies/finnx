import CircleIcon from "../../components/CircleIcon";

const Employee = () => {
  return (
    <div className="w-full p-[30px] lg:p-[40px] flex flex-col gap-2.5 bg-white-rabbit rounded-[10px] shadow-custom-shadow max-w-[455px] order-2 lg:order-3">
      <h3 className="font-bold text-2xl text-sherbet max-w-[280px]">
        Employee’s Profile
      </h3>
      <p className="font-semibold text-base">
        หน้าโปรไฟล์ส่วนตัว เลือกดูจำนวนวันลาคงเหลือ แยกตามประเภทต่างๆ
        และดูประวัติการทำงานของบริษัท ได้ตลอดเวลาผ่าน LINE OA
      </p>
      <div className="flex gap-8 items-center mt-[20px] lg:mt-[28px]">
        <CircleIcon>
          วันลา <br />
          คงเหลือ
        </CircleIcon>
        <CircleIcon>
          โปรไฟล์ <br />
          ส่วนตัว
        </CircleIcon>
        <CircleIcon>
          ประวัติ <br />
          การทำงาน
        </CircleIcon>
      </div>
      <h3 className="font-bold text-2xl text-sherbet max-w-[280px] mt-[10px] lg:mt-[32px]">
        Employee’s Management
      </h3>
      <p className="font-semibold text-base lg:mt-[16px]">
        จัดการ แก้ไขข้อมูลเพื่อนร่วมงาน กำหนดสิทธิ์ในการใช้งานของระบบ HR
      </p>
      <div className="flex items-center mt-[20px] lg:mt-[28px] gap-8">
        <CircleIcon>
          แก้ไข <br />
          ข้อมูล
        </CircleIcon>
        <CircleIcon>
          ระดับสิทธิ์ <br />
          การใช้งาน
        </CircleIcon>
      </div>
    </div>
  );
};

export default Employee;

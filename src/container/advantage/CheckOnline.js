import LeaveProfileImg from "../../assets/leave-profile.png";

const CheckOnline = () => {
  return (
    <div className="w-full px-[30px] pt-[30px] flex flex-col items-center justify-center gap-[22px] bg-white-rabbit rounded-[10px] shadow-custom-shadow max-w-[455px] order-1">
      <p className="font-semibold text-xl text-center text-bubblegum">
        ตรวจสอบวันลาผ่านหน้าโปรไฟล์
      </p>
      <img
        src={LeaveProfileImg}
        alt={"Leave Profile"}
        className={"w-[275px] h-[282px] lg:w-[293px] lg:h-[301px]"}
      />
    </div>
  );
};

export default CheckOnline;

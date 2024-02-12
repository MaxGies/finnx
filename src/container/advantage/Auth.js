import PermissionImg from "../../assets/permission.png";

const Auth = () => {
  return (
    <div className="w-full px-[40px] py-[30px] flex flex-col lg:flex-row items-center justify-center gap-[22px] bg-cotton-candy rounded-[10px] shadow-custom-shadow max-w-[455px] order-3 lg:order-2">
      <p className="font-semibold text-xl text-center text-bubblegum">
        กำหนดระดับ สิทธิ์ใช้งาน
      </p>
      <img
        src={PermissionImg}
        alt={"Permission"}
        className={"w-[224px] h-[197px]"}
      />
    </div>
  );
};

export default Auth;

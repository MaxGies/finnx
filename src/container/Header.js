import AppPreviewImg from "../assets/app-preview.png";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="flex w-[-webkit-fill-available] max-w-[1134px] bg-white-rabbit flex-col gap-5 rounded-[10px] mx-[20px] justify-center items-center lg:flex-row-reverse py-[30px] px-[22px] lg:py-[56px] shadow-custom-shadow">
      <img
        src={AppPreviewImg}
        width={531}
        height={372}
        alt="App Preview"
        className="w-[292px] h-[204px] lg:w-[531px] lg:h-[372px]"
      />
      <div className="flex flex-col items-center lg:items-start gap-[10px] max-w-[358px]">
        <h1 className="font-bold text-3xl text-sherbet text-center lg:text-left">
          แอปลางานออนไลน์ ผ่าน LINE OA
        </h1>
        <p className="font-bold text-xl text-center lg:text-left">
          แจ้งและอนุมัติวันลาออนไลน์ ใช้งานง่าย ผ่าน LINE OA
          ไม่ต้องติดตั้งแอปเพิ่ม
        </p>
        <Button
          isFullWidth
          isSecondary
          width="max-w-[260px] mt-[20px] lg:mt-[10px]"
        >
          ดูรายละเอียด
        </Button>
        <Button isFullWidth width="max-w-[260px] mt-[10px]">
          เริ่มต้นใช้งาน
        </Button>
      </div>
    </header>
  );
};

export default Header;

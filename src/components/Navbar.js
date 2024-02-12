import Button from "./Button";
import VannilaLogoImg from "../assets/vannila-logo.png";
import { useState } from "react";

const Navbar = ({ navSelect, setNavSelect }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <nav
      className={`flex justify-between items-center w-full pt-[20px] px-[20px] lg:px-0 lg:pt-[40px] max-w-[1134px] m-auto bg-vannila z-50 gap-[30px]`}
    >
      <a href="#" className="min-w-[164px] z-50">
        <img width={164} height={83} src={VannilaLogoImg} alt="vannila-logo" />
      </a>
      <div
        className={`items-center ${
          isShowMenu ? "" : "max-w-[940px]"
        } bg-vannila z-40 w-full lg:flex ${
          isShowMenu
            ? "flex gap-[30px] absolute top-0 inset-x-0 flex-col items-center h-screen px-5 pt-[163px]"
            : "hidden gap-[111px]"
        }`}
      >
        <div
          className={`gap-[30px] font-bold text-xl w-full bg-vannila lg:flex ${
            isShowMenu ? "flex flex-col items-center" : "hidden"
          }`}
        >
          <a
            href="#"
            onClick={() => setNavSelect("home")}
            className={`${
              navSelect === "home" && "text-bubblegum"
            } whitespace-nowrap`}
          >
            หน้าแรก
          </a>
          <a
            href="#"
            onClick={() => setNavSelect("pros")}
            className={`${
              navSelect === "pros" && "text-bubblegum"
            } whitespace-nowrap`}
          >
            จุดเด่น
          </a>
          <a
            href="#"
            onClick={() => setNavSelect("price")}
            className={`${
              navSelect === "price" && "text-bubblegum"
            } whitespace-nowrap`}
          >
            ราคา
          </a>
          <a
            href="#"
            onClick={() => setNavSelect("article")}
            className={`${
              navSelect === "article" && "text-bubblegum"
            } whitespace-nowrap`}
          >
            บทความ
          </a>
          <a
            href="#"
            onClick={() => setNavSelect("contact")}
            className={`${
              navSelect === "contact" && "text-bubblegum"
            } whitespace-nowrap`}
          >
            ติดต่อเรา
          </a>
        </div>
        <div
          className={`gap-[30px] items-center max-w-[388px] w-full lg:flex ${
            isShowMenu ? "flex flex-col items-center gap-[20px]" : "hidden"
          }`}
        >
          <Button
            isSecondary
            width={"flex grow whitespace-nowrap w-full lg:max-w-[164px]"}
          >
            เข้าสู่ระบบ
          </Button>
          <Button width={"flex grow whitespace-nowrap w-full lg:max-w-[194px]"}>
            เริ่มต้นใช้งาน
          </Button>
        </div>
      </div>
      <div
        className={`max-w-[121px] z-50 lg:${isShowMenu ? "block" : "hidden"}`}
      >
        {isShowMenu ? (
          <svg
            onClick={() => setIsShowMenu(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M22.2262 5.55957C23.04 4.74577 23.04 3.42415 22.2262 2.61035C21.4124 1.79655 20.0908 1.79655 19.277 2.61035L12.4215 9.47233L5.55957 2.61686C4.74577 1.80306 3.42415 1.80306 2.61035 2.61686C1.79655 3.43066 1.79655 4.75228 2.61035 5.56608L9.47233 12.4215L2.61686 19.2835C1.80306 20.0973 1.80306 21.4189 2.61686 22.2327C3.43066 23.0466 4.75228 23.0466 5.56608 22.2327L12.4215 15.3708L19.2835 22.2262C20.0973 23.04 21.4189 23.04 22.2327 22.2262C23.0466 21.4124 23.0466 20.0908 22.2327 19.277L15.3708 12.4215L22.2262 5.55957Z"
              fill="#4C71F1"
            />
          </svg>
        ) : (
          <Button isSecondary onClick={() => setIsShowMenu(true)}>
            เมนู
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

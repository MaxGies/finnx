import VannilaIogoImg from "../assets/vannila-logo.png";
import { LineIcon, FacebookIcon, TikTokIcon } from "../utils/Icon";

const Footer = ({ navSelect, setNavSelect }) => {
  return (
    <div className="flex flex-col gap-[30px] p-5 pt-[30px] lg:pt-[50px] w-full max-w-[1134px] m-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30px] items-center px-[80px] lg:px-0">
        <img
          src={VannilaIogoImg}
          alt="Vannila logo img"
          className="w-[164px]"
        />
        <div
          className={`gap-[20px_40px] font-semibold text-base w-full bg-vannila flex flex-row items-center justify-around flex-wrap lg:justify-start`}
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
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[30px] border-t-[3px] border-solid border-grey-wolf pt-[30px]">
        <div className="flex flex-col lg:flex-row items-center gap-[20px_30px]">
          <p className="font-semibold text-base text-center">ตั้งค่าคุกกี้</p>
          <p className="font-semibold text-base text-center">
            ข้อตกลงและเงื่อนไข
          </p>
          <p className="font-semibold text-base text-center">
            นโยบายการใช้คุกกี้
          </p>
          <p className="font-semibold text-base text-center">
            นโยบายการคุ้มครองข้อมูลส่วนบุคคล
          </p>
        </div>
        <div className="flex gap-[30px] items-center">
          <LineIcon />
          <FacebookIcon />
          <TikTokIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;

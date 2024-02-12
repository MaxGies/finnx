import ConeImg from "../assets/pricing-cone.png";
import SundaeImg from "../assets/pricing-sundae.png";
import QuartImg from "../assets/pricing-quart.png";
import { CircleCheckMintIcon } from "../utils/Icon";
import Button from "./Button";
import { useState } from "react";

const packageType = [
  {
    name: "Cone",
    price: 590,
    originalPrice: 350,
    img: ConeImg,
    smallDisplayOrder: 2,
  },
  {
    name: "Sundae",
    price: 590,
    originalPrice: 690,
    img: SundaeImg,
    smallDisplayOrder: 1,
    isSuggest: true,
  },
  {
    name: "Quart",
    price: 890,
    originalPrice: 1090,
    img: QuartImg,
    smallDisplayOrder: 3,
  },
];

const Package = () => {
  const [packSelect, setPackSelect] = useState("Sundae");
  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-[33px] justify-center items-center lg:max-w-[940px]">
      {packageType.map((pack, index) => {
        return (
          <div
            onClick={() => {
              setPackSelect(pack.name);
            }}
            className={`w-full max-w-[334px] rounded-[10px] flex flex-col relative cursor-pointer order-${
              pack.smallDisplayOrder
            } lg:order-${index + 1} ${
              packSelect === pack.name
                ? "border-2 border-bubblegum bg-cotton-candy"
                : "border-2 border-white-rabbit bg-white-rabbit"
            } ${
              pack.isSuggest &&
              "after:content-['แพ็คเกจแนะนำ!'] after:px-[6px] after:bg-strawberry after:text-white-rabbit after:rounded after:text-base after:text-semibold after:text-white-rabbit after:w-fit after:absolute after:inset-x-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:whitespace-nowrap"
            }`}
          >
            <div
              className={`flex flex-col border-b-2 p-5 lg:pb-10 ${
                packSelect === pack.name
                  ? "border-bubblegum"
                  : "border-polar-bear"
              }`}
            >
              <div className="flex gap-2.5 items-center">
                <img src={pack.img} alt="Cone" width={40} height={40} />
                <p className="font-bold text-2xl text-sherbet">{pack.name}</p>
              </div>
              <p className="font-bold text-2xl text-avocado">
                {pack.price} บาท/เดือน{" "}
                <span className="text-black-panther text-base font-semibold line-through decoration-2">
                  {pack.originalPrice} บาท
                </span>
              </p>
            </div>
            <div className="flex flex-col p-5 gap-3">
              <div className="flex gap-2.5">
                <CircleCheckMintIcon />
                <p className="text-base font-semibold max-w-[216px]">
                  แจ้ง และอนุมัติวันลาที่ไหนก็ได้ ผ่าน LINE OA
                </p>
              </div>
              <div className="flex gap-2.5">
                <CircleCheckMintIcon />
                <p className="text-base font-semibold max-w-[216px]">
                  วันลาคงเหลือแต่ละประเภท ประวัติการลา/อนุมัติ
                </p>
              </div>
              <div className="flex gap-2.5">
                <CircleCheckMintIcon />
                <p className="text-base font-semibold max-w-[216px]">
                  กำหนดระดับสิทธิ์การใช้งาน
                </p>
              </div>
              <div className="flex gap-2.5">
                <CircleCheckMintIcon />
                <p className="text-base font-semibold max-w-[216px]">
                  กำหนดรูปแบบ และจัดการ วันหยุด วันลาพักร้อน
                </p>
              </div>
              <div className="flex gap-2.5">
                <CircleCheckMintIcon />
                <p className="text-base font-semibold max-w-[216px]">
                  จัดการข้อมูลแผนก และพนักงาน
                </p>
              </div>
              <Button width={"mt-2.5 mx-5"}>ทดลองใช้ฟรี 30 วัน</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Package;

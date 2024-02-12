import CircleIcon from "../../components/CircleIcon";
import { ManageDeptIcon } from "../../utils/Icon";
import DeptEditImg from "../../assets/dept-edit.png";
import DeptManageImg from "../../assets/dept-magnage.png";
import DeptTransferImg from "../../assets/dept-transfer.png";
import { useState } from "react";

const configDept = {
  deptManage: "Department Manage",
  deptEdit: "Department Edit",
  deptTransfer: "Department Transfer",
};

const DeptManage = () => {
  const [deptStep, setDeptStep] = useState("Department Manage");

  return (
    <div className="w-full p-[30px] lg:p-[40px] flex flex-col lg:flex-row items-center justify-center gap-[30px] bg-white-rabbit rounded-[10px] shadow-custom-shadow max-w-[940px]">
      <div className="w-full max-w-[318px] flex flex-col gap-2.5">
        <h3 className="font-bold text-2xl text-sherbet max-w-[280px]">
          Department Management
        </h3>
        <p className="font-semibold text-base">จัดการแผนก บริหารงานบุคคล</p>
        <p className="font-semibold text-base text-persian-cat">
          เลือกจัดการเพื่อนร่วมงานเรียงตามแผนก ย้ายเพื่อนร่วมงาน
          หรือแก้ไขข้อมูลเพื่อนร่วมงานโดยละเอียด
        </p>
        <div className="flex items-center mt-[20px] lg:mt-[3px] gap-8">
          <CircleIcon>
            จัดการ
            <br />
            แผนก
          </CircleIcon>
          <CircleIcon>
            แก้ไข
            <br />
            แผนก
          </CircleIcon>
          <CircleIcon>
            ย้าย
            <br />
            แผนก
          </CircleIcon>
        </div>
      </div>
      <div className="w-full max-w-[275px] lg:max-w-[512px] flex flex-col items-center justify-center gap-5 lg:gap-[13px]">
        <div className="flex justify-between items-center w-full">
          <div
            onClick={() => {
              setDeptStep(configDept.deptManage);
            }}
            className={`flex gap-2.5 items-center cursor-pointer ${
              deptStep === configDept.deptManage
                ? "text-bubblegum border-b-2 border-bubblegum"
                : "text-grey-wolf"
            }`}
          >
            <ManageDeptIcon />
            <p
              className={`font-bold text-xl ${
                deptStep === configDept.deptManage
                  ? "text-bubblegum"
                  : "text-black-panther"
              }`}
            >
              จัดการ<span className="hidden lg:inline">แผนก</span>
            </p>
          </div>
          <div
            onClick={() => {
              setDeptStep(configDept.deptEdit);
            }}
            className={`flex gap-2.5 items-center cursor-pointer ${
              deptStep === configDept.deptEdit
                ? "text-bubblegum border-b-2 border-bubblegum"
                : "text-grey-wolf"
            }`}
          >
            <ManageDeptIcon />
            <p
              className={`font-bold text-xl ${
                deptStep === configDept.deptEdit
                  ? "text-bubblegum"
                  : "text-black-panther"
              }`}
            >
              แก้ไข<span className="hidden lg:inline">แผนก</span>
            </p>
          </div>
          <div
            onClick={() => {
              setDeptStep(configDept.deptTransfer);
            }}
            className={`flex gap-2.5 items-center cursor-pointer ${
              deptStep === configDept.deptTransfer
                ? "text-bubblegum border-b-2 border-bubblegum"
                : "text-grey-wolf"
            }`}
          >
            <ManageDeptIcon />
            <p
              className={`font-bold text-xl ${
                deptStep === configDept.deptTransfer
                  ? "text-bubblegum"
                  : "text-black-panther"
              }`}
            >
              ย้าย<span className="hidden lg:inline">แผนก</span>
            </p>
          </div>
        </div>
        <img
          src={
            deptStep === configDept.deptManage
              ? DeptManageImg
              : deptStep === configDept.deptEdit
              ? DeptEditImg
              : DeptTransferImg
          }
          alt={deptStep}
        />
      </div>
    </div>
  );
};

export default DeptManage;

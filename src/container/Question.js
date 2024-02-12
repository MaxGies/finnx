import { PlusBox, MinusBox } from "../utils/Icon";
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return <>{id === open ? <MinusBox /> : <PlusBox />}</>;
}

const Question = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="px-5 lg:px-0">
      <div className="w-full py-[30px] px-[20px] lg:p-[40px] flex flex-col items-center justify-center gap-[20px] lg:gap-[30px] bg-white-rabbit rounded-[10px] shadow-custom-shadow max-w-[940px]">
        <h2 className="text-2xl font-bold text-sherbet text-center">
          คำถามที่พบบ่อย
        </h2>
        <div className="flex gap-[30px] flex-col lg:flex-row justify-center">
          <div className="flex flex-col gap-5">
            <Accordion
              open={open === 1}
              icon={<Icon id={1} open={open} />}
              className="border-b-2 border-gray-wolf"
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className={
                  "font-semibold text-base text-black-panther border-0 p-0 pb-2.5"
                }
              >
                What is Lorem Ipsum?
              </AccordionHeader>
              <AccordionBody
                className={
                  "font-medium text-xs text-black-panther pb-2.5 pt-0 pr-[31px]"
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={<Icon id={2} open={open} />}
              className="border-b-2 border-gray-wolf"
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className={
                  "font-semibold text-base text-black-panther border-0 p-0 pb-2.5"
                }
              >
                What is Lorem Ipsum?
              </AccordionHeader>
              <AccordionBody
                className={
                  "font-medium text-xs text-black-panther pb-2.5 pt-0 pr-[31px]"
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={<Icon id={3} open={open} />}
              className="border-b-2 border-gray-wolf"
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className={
                  "font-semibold text-base text-black-panther border-0 p-0 pb-2.5"
                }
              >
                What is Lorem Ipsum?
              </AccordionHeader>
              <AccordionBody
                className={
                  "font-medium text-xs text-black-panther pb-2.5 pt-0 pr-[31px]"
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              icon={<Icon id={4} open={open} />}
              className="border-b-2 border-gray-wolf"
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className={
                  "font-semibold text-base text-black-panther border-0 p-0 pb-2.5"
                }
              >
                What is Lorem Ipsum?
              </AccordionHeader>
              <AccordionBody
                className={
                  "font-medium text-xs text-black-panther pb-2.5 pt-0 pr-[31px]"
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="flex-col gap-5 hidden lg:flex">
            <Accordion
              open={open === 5}
              icon={<Icon id={5} open={open} />}
              className="border-b-2 border-gray-wolf"
            >
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className={
                  "font-semibold text-base text-black-panther border-0 p-0 pb-2.5"
                }
              >
                What is Lorem Ipsum?
              </AccordionHeader>
              <AccordionBody
                className={
                  "font-medium text-xs text-black-panther pb-2.5 pt-0 pr-[31px]"
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 6}
              icon={<Icon id={6} open={open} />}
              className="border-b-2 border-gray-wolf"
            >
              <AccordionHeader
                onClick={() => handleOpen(6)}
                className={
                  "font-semibold text-base text-black-panther border-0 p-0 pb-2.5"
                }
              >
                What is Lorem Ipsum?
              </AccordionHeader>
              <AccordionBody
                className={
                  "font-medium text-xs text-black-panther pb-2.5 pt-0 pr-[31px]"
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 7}
              icon={<Icon id={7} open={open} />}
              className="border-b-2 border-gray-wolf"
            >
              <AccordionHeader
                onClick={() => handleOpen(7)}
                className={
                  "font-semibold text-base text-black-panther border-0 p-0 pb-2.5"
                }
              >
                What is Lorem Ipsum?
              </AccordionHeader>
              <AccordionBody
                className={
                  "font-medium text-xs text-black-panther pb-2.5 pt-0 pr-[31px]"
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 8}
              icon={<Icon id={8} open={open} />}
              className="border-b-2 border-gray-wolf"
            >
              <AccordionHeader
                onClick={() => handleOpen(8)}
                className={
                  "font-semibold text-base text-black-panther border-0 p-0 pb-2.5"
                }
              >
                What is Lorem Ipsum?
              </AccordionHeader>
              <AccordionBody
                className={
                  "font-medium text-xs text-black-panther pb-2.5 pt-0 pr-[31px]"
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

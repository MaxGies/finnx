const CircleIcon = ({ children, customStyle, isBig }) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div
        className={`${
          isBig ? "w-[92px] h-[92px] p-[26px]" : "w-[67px] h-[67px] p-[18px]"
        } rounded-full bg-bubblegum flex items-center justify-center ${
          customStyle ?? ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className={isBig ? "w-[40px] h-[40px]" : "w-[30px] h-[30px]"}
        >
          <g clipPath="url(#clip0_901_740)">
            <g clipPath="url(#clip1_901_740)">
              <path
                d="M16.8281 7.5H11.25H8.42188H7.5V8.1875V11.25V14.4062V21.3594L0.015625 15.8203C0.140625 14.4062 0.867187 13.0938 2.02344 12.2422L3.75 10.9609V7.5C3.75 5.42969 5.42969 3.75 7.5 3.75H13.4844L17.3828 0.867188C18.1406 0.304688 19.0547 0 20 0C20.9453 0 21.8594 0.304688 22.6172 0.859375L26.5156 3.75H32.5C34.5703 3.75 36.25 5.42969 36.25 7.5V10.9609L37.9766 12.2422C39.1328 13.0938 39.8594 14.4062 39.9844 15.8203L32.5 21.3594V14.4062V11.25V8.1875V7.5H31.5781H28.75H23.1719H16.8281ZM0 35V18.9141L17 31.5078C17.8672 32.1484 18.9219 32.5 20 32.5C21.0781 32.5 22.1328 32.1562 23 31.5078L40 18.9141V35C40 37.7578 37.7578 40 35 40H5C2.24219 40 0 37.7578 0 35ZM13.75 12.5H26.25C26.9375 12.5 27.5 13.0625 27.5 13.75C27.5 14.4375 26.9375 15 26.25 15H13.75C13.0625 15 12.5 14.4375 12.5 13.75C12.5 13.0625 13.0625 12.5 13.75 12.5ZM13.75 17.5H26.25C26.9375 17.5 27.5 18.0625 27.5 18.75C27.5 19.4375 26.9375 20 26.25 20H13.75C13.0625 20 12.5 19.4375 12.5 18.75C12.5 18.0625 13.0625 17.5 13.75 17.5Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_901_740">
              <rect width="40" height="40" fill="white" />
            </clipPath>
            <clipPath id="clip1_901_740">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p className="font-semibold text-base text-center">{children}</p>
    </div>
  );
};

export default CircleIcon;

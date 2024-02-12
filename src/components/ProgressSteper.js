const ProgressStepper = ({ currentStep }) => {
  const configMockupData = [
    { underText: "แจ้งวันลา", isThisStep: false, iconName: "request" },
    { underText: "อนุมัติวันลา", isThisStep: true, iconName: "accept" },
    { underText: "พักร้อน!", isThisStep: false, iconName: "vacation" },
  ];

  return (
    <ol className="flex items-center w-[281px] px-4 py-2 pb-8">
      {configMockupData.map((step, index, self) => {
        return (
          <li
            key={step.underText}
            className={`flex items-center ${
              index + 1 === self.length
                ? ""
                : "w-full after:content-[''] after:w-full after:h-1 after:border-white-rabbit after:border-4 after:inline-block"
            }`}
          >
            <span
              className={`flex items-center justify-center w-[30px] h-[30px] relative ${
                index === currentStep ? "bg-bubblegum" : "bg-white-rabbit"
              } rounded-full shrink-0`}
            >
              {selectIcon(step.iconName, index === currentStep)}
              <p
                className={`absolute top-full w-max pt-1 font-semibold text-base ${
                  index === currentStep
                    ? "text-bubblegum"
                    : "text-black-panther"
                }`}
              >
                {step.underText}
              </p>
            </span>
          </li>
        );
      })}
    </ol>
  );
};

export default ProgressStepper;

const selectIcon = (iconName, isThisStepUse) => {
  switch (iconName) {
    case "request":
      return (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isThisStepUse ? "text-white-rabbit" : "text-bubblegum"
          }`}
        >
          <path
            d="M6.31055 2.8125H4.21875H3.1582H2.8125V3.07031V4.21875V5.40234V8.00977L0.00585938 5.93262C0.0527344 5.40234 0.325195 4.91016 0.758789 4.59082L1.40625 4.11035V2.8125C1.40625 2.03613 2.03613 1.40625 2.8125 1.40625H5.05664L6.51855 0.325195C6.80273 0.114258 7.14551 0 7.5 0C7.85449 0 8.19727 0.114258 8.48145 0.322266L9.94336 1.40625H12.1875C12.9639 1.40625 13.5938 2.03613 13.5938 2.8125V4.11035L14.2412 4.59082C14.6748 4.91016 14.9473 5.40234 14.9941 5.93262L12.1875 8.00977V5.40234V4.21875V3.07031V2.8125H11.8418H10.7812H8.68945H6.31055ZM0 13.125V7.09277L6.375 11.8154C6.7002 12.0557 7.0957 12.1875 7.5 12.1875C7.9043 12.1875 8.2998 12.0586 8.625 11.8154L15 7.09277V13.125C15 14.1592 14.1592 15 13.125 15H1.875C0.84082 15 0 14.1592 0 13.125ZM5.15625 4.6875H9.84375C10.1016 4.6875 10.3125 4.89844 10.3125 5.15625C10.3125 5.41406 10.1016 5.625 9.84375 5.625H5.15625C4.89844 5.625 4.6875 5.41406 4.6875 5.15625C4.6875 4.89844 4.89844 4.6875 5.15625 4.6875ZM5.15625 6.5625H9.84375C10.1016 6.5625 10.3125 6.77344 10.3125 7.03125C10.3125 7.28906 10.1016 7.5 9.84375 7.5H5.15625C4.89844 7.5 4.6875 7.28906 4.6875 7.03125C4.6875 6.77344 4.89844 6.5625 5.15625 6.5625Z"
            fill="currentColor"
          />
        </svg>
      );
    case "accept":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isThisStepUse ? "text-white-rabbit" : "text-bubblegum"
          }`}
        >
          <path
            d="M10.0156 6.53711C10.0156 6.02734 10.2852 5.56445 10.5986 5.16016C10.9678 4.68262 11.1875 4.08496 11.1875 3.4375C11.1875 1.88477 9.92773 0.625 8.375 0.625C6.82227 0.625 5.5625 1.88477 5.5625 3.4375C5.5625 4.08496 5.78223 4.68262 6.15137 5.16016C6.46484 5.56445 6.73438 6.02734 6.73438 6.53711C6.73438 7.41309 6.02246 8.125 5.14648 8.125H4.15625C2.34277 8.125 0.875 9.59277 0.875 11.4062C0.875 12.0186 1.26758 12.54 1.8125 12.7334V14.2188C1.8125 14.9951 2.44238 15.625 3.21875 15.625H13.5312C14.3076 15.625 14.9375 14.9951 14.9375 14.2188V12.7334C15.4824 12.54 15.875 12.0186 15.875 11.4062C15.875 9.59277 14.4072 8.125 12.5938 8.125H11.6035C10.7275 8.125 10.0156 7.41309 10.0156 6.53711ZM13.0625 12.8125V13.75H3.6875V12.8125H13.0625Z"
            fill="currentColor"
          />
        </svg>
      );
    case "vacation":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isThisStepUse ? "text-white-rabbit" : "text-bubblegum"
          }`}
        >
          <g clipPath="url(#clip0_913_1125)">
            <g clipPath="url(#clip1_913_1125)">
              <path
                d="M9.89323 7.70313L8.32812 7.13281L6.44792 12.2917H1.70833C1.2474 12.2917 0.875 12.6641 0.875 13.125C0.875 13.5859 1.2474 13.9583 1.70833 13.9583H15.0417C15.5026 13.9583 15.875 13.5859 15.875 13.125C15.875 12.6641 15.5026 12.2917 15.0417 12.2917H8.22135L9.89062 7.70313H9.89323ZM13.0469 7.69792L12.9609 7.9349L14.724 8.57552C15.1953 8.7474 15.7135 8.46615 15.7552 7.96615C15.9245 5.92188 15.1328 3.91667 13.651 2.53646C13.7031 2.74479 13.7344 2.96094 13.7396 3.18229L13.7448 3.33854C13.7917 4.82292 13.5547 6.30208 13.0469 7.69792ZM12.9062 3.20573C12.8776 2.3099 12.3203 1.51823 11.4896 1.1901C11.4661 1.17969 11.4401 1.17188 11.4167 1.16146C10.5573 0.856771 9.59896 1.09896 8.99219 1.78125L8.88802 1.89844C7.96875 2.92448 7.25521 4.11979 6.78125 5.41667L6.69531 5.65365L12.1771 7.64844L12.263 7.41146C12.7344 6.11458 12.9557 4.74219 12.9115 3.36198L12.9062 3.20573ZM3.66667 3.5651C3.3776 3.97396 3.59375 4.52344 4.0651 4.69531L5.91406 5.36719L6 5.13021C6.50781 3.73438 7.27865 2.44792 8.26823 1.34115L8.3724 1.22396C8.53385 1.04427 8.71354 0.885417 8.90625 0.75C6.83333 0.815104 4.8776 1.84896 3.66667 3.5625V3.5651Z"
                fill="currentColor"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_913_1125">
              <rect
                width="15"
                height="15"
                fill="white"
                transform="translate(0.875 0.625)"
              />
            </clipPath>
            <clipPath id="clip1_913_1125">
              <rect
                width="15"
                height="13.3333"
                fill="white"
                transform="translate(0.875 0.625)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return <></>;
  }
};

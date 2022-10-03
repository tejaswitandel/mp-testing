import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-[40px]",
  h2: "lg:text-[19px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px]",
  h3: "font-bold lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px]",
  h4: "lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px]",
  h5: "xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] lg:text-[9px]",
  h6: "2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

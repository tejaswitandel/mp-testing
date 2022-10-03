import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcFillWhiteA700: "bg-white_A700",
  srcFillGray100: "bg-gray_100",
  OutlineGray500: "border border-gray_500 border-solid",
};
const shapes = {
  srcRoundedBorder16: "rounded-radius16",
  RoundedBorder8: "rounded-radius8",
};
const sizes = {
  smSrc: "lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] p-[20px]",
  mdSrc:
    "xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] pb-[16px] lg:pb-[8px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] pt-[23px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[8px]",
  sm: "lg:pb-[4px] 2xl:pb-[6px] xl:pb-[6px] 3xl:pb-[8px] pb-[9px] 2xl:pt-[10px] 3xl:pt-[12px] pt-[14px] lg:pt-[7px] xl:pt-[9px] lg:px-[4px] 2xl:px-[6px] xl:px-[6px] 3xl:px-[8px] px-[9px]",
  md: "2xl:p-[10px] 3xl:p-[12px] p-[14px] lg:p-[7px] xl:p-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcRoundedBorder16", "RoundedBorder8"]),
  variant: PropTypes.oneOf([
    "srcFillWhiteA700",
    "srcFillGray100",
    "OutlineGray500",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder8",
  variant: "OutlineGray500",
  size: "md",
};

export { Input };

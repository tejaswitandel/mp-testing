import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  CustomBorderTL8:
    "rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[0]",
  CustomBorderLR8:
    "rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px]",
  RoundedBorder16: "rounded-radius16",
  CustomBorderTL16:
    "rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0]",
  CustomBorderBL12:
    "rounded-bl-[12px] rounded-br-[12px] rounded-tl-[0] rounded-tr-[12px]",
  icbRoundedBorder16: "rounded-radius16",
  icbRoundedBorder4: "rounded-radius4",
  icbRoundedBorder8: "rounded-radius8",
};
const variants = {
  FillWhiteA700: "bg-white_A700 text-bluegray_900",
  FillAmber600: "bg-amber_600 text-white_A700",
  FillGray100: "bg-gray_100 text-gray_500",
  OutlineLightgreen500:
    "bg-light_green_500_19 border border-light_green_500 border-solid text-light_green_500",
  OutlineAmber600:
    "bg-amber_600_19 border border-amber_600 border-solid text-amber_600",
  OutlineBlue600:
    "bg-blue_600_19 border border-blue_600 border-solid text-blue_600",
  OutlineLightgreen5001_2:
    "bg-light_green_500_26 border border-light_green_500 border-solid text-light_green_500",
  OutlineAmber6001_2:
    "border border-amber_600 border-solid shadow-bs text-amber_600",
  OutlineRed400:
    "bg-red_A200_19 border border-red_400 border-solid text-red_400",
  FillAmber60063: "bg-amber_600_63 text-amber_600",
  FillDeeporange40019: "bg-deep_orange_400_19 text-amber_600",
  OutlineRed4001_2: "border border-red_400 border-solid text-red_400",
  OutlineGray500:
    "bg-white_A700 border border-gray_500 border-solid text-bluegray_900",
  FillRed400: "bg-red_400 text-white_A700",
  OutlineWhiteA700:
    "bg-white_A700_26 border border-solid border-white_A700 text-white_A700",
  OutlineGray5001_2: "border border-gray_500 border-solid text-bluegray_900",
  FillAmber60071: "bg-amber_600_71 text-bluegray_900",
  Fillffffffff: "bg-colors1",
  Outlinefff8b602: "bg-amber_600_19 border border-colors border-solid",
  Outlinefff8b6021_2: "border border-colors border-solid shadow-bs",
  icbFillAmber600: "bg-amber_600",
  icbFillLightgreen500: "bg-light_green_500",
  icbFillBlue600: "bg-blue_600",
  icbFillGray100: "bg-gray_100",
  icbOutlineBlack90026: "bg-white_A700 shadow-bs1",
  icbFillWhiteA7007f: "bg-white_A700_7f",
  icbOutlineGray300: "border-2 border-gray_300 border-solid",
  icbFillWhiteA700: "bg-white_A700",
};
const sizes = {
  sm: "lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px]",
  md: "p-[11px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px]",
  lg: "xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px]",
  xl: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] p-[19px]",
  "2xl": "lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] p-[23px]",
  "3xl": "lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] p-[31px]",
  smIcn: "p-[2px]",
  mdIcn: "lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px]",
  lgIcn: "p-[11px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px]",
  xlIcn: "xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px]",
  "2xlIcn": "lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] p-[21px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "CustomBorderTL8",
    "CustomBorderLR8",
    "RoundedBorder16",
    "CustomBorderTL16",
    "CustomBorderBL12",
    "icbRoundedBorder16",
    "icbRoundedBorder4",
    "icbRoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillAmber600",
    "FillGray100",
    "OutlineLightgreen500",
    "OutlineAmber600",
    "OutlineBlue600",
    "OutlineLightgreen5001_2",
    "OutlineAmber6001_2",
    "OutlineRed400",
    "FillAmber60063",
    "FillDeeporange40019",
    "OutlineRed4001_2",
    "OutlineGray500",
    "FillRed400",
    "OutlineWhiteA700",
    "OutlineGray5001_2",
    "FillAmber60071",
    "Fillffffffff",
    "Outlinefff8b602",
    "Outlinefff8b6021_2",
    "icbFillAmber600",
    "icbFillLightgreen500",
    "icbFillBlue600",
    "icbFillGray100",
    "icbOutlineBlack90026",
    "icbFillWhiteA7007f",
    "icbOutlineGray300",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };

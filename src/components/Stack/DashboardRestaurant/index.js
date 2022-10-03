import React from "react";

import { Stack, Img, Column, Text, Button } from "components";

const DashboardRestaurant = (props) => {
  return (
    <>
      <Stack className={props.className} compid="931" comptype="Stack">
        <div
          className="absolute bg-gradient  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs3 w-[61%]"
          compid="2:2253"
          comptype="View"
        ></div>
        <Stack
          className="bg-gradient1  rounded-radius16 MaskGroup"
          compid="933"
          comptype="Stack"
        >
          <Img
            src="defaultNoData.png"
            className="MaskGroup"
            compid="2:2255"
            comptype="Image"
            alt="MaskGroup"
          />
          <Column
            className="absolute justify-start right-[6%] top-[11%] w-[82%]"
            compid="881"
            comptype="Column"
          >
            <Column
              className="items-center w-[100%]"
              compid="958"
              comptype="Column"
            >
              <Stack
                className="lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] w-[100%]"
                compid="935"
                comptype="Stack"
              >
                <Img
                  src="defaultNoData.png"
                  className="Vector12"
                  compid="2:2260"
                  comptype="Image"
                  alt="Vector"
                />
                <Text
                  className="UpgradeyourAc2"
                  compid="2:2261"
                  comptype="Text"
                >
                  Upgrade your
                  <br />
                  Account to get more benefits
                </Text>
              </Stack>
            </Column>
            <Button
              className="bg-colors1 font-poppins font-semibold lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-colors2 w-[52%]"
              compid="139"
              comptype="Button"
              shape="RoundedBorder8"
              size="PaddingAll11"
              variant="Fillffffffff"
              fontStyle="PoppinsSemiBold14ff2e2e2e"
            >
              Upgrade
            </Button>
          </Column>
        </Stack>
      </Stack>
    </>
  );
};

export default DashboardRestaurant;

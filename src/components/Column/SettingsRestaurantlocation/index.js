import React from "react";

import { Column, Text, Stack, Img, Row } from "components";

const SettingsRestaurantlocation = (props) => {
  return (
    <>
      <Column className={props.className} compid="2:3652" comptype="Column">
        <Text
          className="font-normal font-poppins lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors3 w-[auto]"
          compid="2:3653"
          comptype="Text"
        >
          Location
        </Text>
        <Column
          className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]"
          compid="1386"
          comptype="Column"
        >
          <Stack
            className="2xl:h-[103px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] outline outline-[1px] outline-colors3 rounded-radius8 w-[100%]"
            compid="1376"
            comptype="Stack"
          >
            <Img
              src="defaultNoData.png"
              className="absolute 2xl:h-[103px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] inset-[0] w-[100%]"
              compid="2:3655"
              comptype="Image"
              alt="form"
            />
            <Row
              className="absolute bottom-[12%] xl:gap-[120px] 2xl:gap-[135px] 3xl:gap-[162px] lg:gap-[96px] grid grid-cols-2 items-start justify-between right-[4%] w-[56%]"
              compid="1340"
              comptype="Row"
            >
              <Img
                src="defaultNoData.png"
                className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                compid="2:3658"
                comptype="Image"
                alt="location"
              />
              <Img
                src="defaultNoData.png"
                className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                compid="2:3662"
                comptype="Image"
                alt="currentlocatio"
              />
            </Row>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default SettingsRestaurantlocation;

import React from "react";

import { Row, Img, Column, Text } from "components";

const Notification = (props) => {
  return (
    <>
      <Row className={props.className} compid="704" comptype="Row">
        <Img
          src="defaultNoData.png"
          className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:mb-[17px] xl:mb-[22px] 2xl:mb-[24px] 3xl:mb-[29px] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
          compid="2:1657"
          comptype="Image"
          alt="icon"
        />
        <Column
          className="justify-start w-[94%]"
          compid="703"
          comptype="Column"
        >
          <Column
            className="items-center w-[100%]"
            compid="742"
            comptype="Column"
          >
            <Row
              className="items-start justify-between w-[100%]"
              compid="702"
              comptype="Row"
            >
              <Text
                className="font-bold font-poppins xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors2 w-[auto]"
                compid="2:1656"
                comptype="Text"
              >
                Order #1
              </Text>
              <Text
                className="font-normal font-poppins lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-colors3 w-[auto]"
                compid="2:1654"
                comptype="Text"
              >
                Monday, June 31 2020
              </Text>
            </Row>
          </Column>
          <Text
            className="font-cairo font-semibold lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] mt-[4px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-colors2 w-[auto]"
            compid="2:1655"
            comptype="Text"
          >
            <span className="text-colors2 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
              Order Accepted
            </span>
            <span className="text-colors2 font-cairo font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
              {" "}
            </span>
            <span className="text-colors2 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
              by restaurant.
            </span>
          </Text>
          <Text className="test_1x1" compid="2:1653" comptype="Text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.{" "}
          </Text>
        </Column>
      </Row>
    </>
  );
};

export default Notification;

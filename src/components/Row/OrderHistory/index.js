import React from "react";

import { Row, Img, Column, Text, Button } from "components";

const OrderHistory = (props) => {
  return (
    <>
      <Row className={props.className} compid="613" comptype="Row">
        <div
          className="border-bw3 border-colors4 border-solid lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:my-[21px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] rounded-radius4 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
          compid="2:1484"
          comptype="View"
        ></div>
        <Img
          src="defaultNoData.png"
          className="lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
          compid="2:1481"
          comptype="Image"
          alt="image"
        />
        <Row
          className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:my-[13px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] w-[45%]"
          compid="671"
          comptype="Row"
        >
          <Column
            className="my-[3px] w-[24%]"
            compid="2:1493"
            comptype="Column"
          >
            <Text
              className="font-poppins font-semibold xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors2 w-[auto]"
              compid="2:1495"
              comptype="Text"
            >
              Pepperoni Pizza
            </Text>
            <Text className="test_1x1" compid="2:1494" comptype="Text">
              1x{" "}
            </Text>
          </Column>
          <Text className="Group671" compid="2:1492" comptype="Text">
            June 1, 2020, 08:22 AM
          </Text>
          <Column
            className="lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[40%]"
            compid="2:1485"
            comptype="Column"
          >
            <Column
              className="items-center w-[100%]"
              compid="678"
              comptype="Column"
            >
              <Row
                className="items-center w-[100%]"
                compid="2:1486"
                comptype="Row"
              >
                <Img
                  src="defaultNoData.png"
                  className="Location"
                  compid="2:1488"
                  comptype="Image"
                  alt="Location"
                />
                <Text className="content4" compid="2:1487" comptype="Text">
                  Elm Street, 23 Yogyakarta
                </Text>
              </Row>
            </Column>
            <Text className="address2" compid="2:1490" comptype="Text">
              2,97 Km
            </Text>
          </Column>
        </Row>
        <Text
          className="font-poppins font-semibold lg:mb-[21px] 2xl:mb-[30px] 3xl:mb-[36px] lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:mt-[20px] 2xl:mt-[29px] 3xl:mt-[35px] xl:my-[26px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors w-[auto]"
          compid="2:1491"
          comptype="Text"
        >
          <span className="text-colors font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
            $
          </span>
          <span className="text-colors font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
            {" "}
          </span>
          <span className="text-colors2 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
            5.59
          </span>
        </Text>
        <Button
          className="bg-amber_600_19 border border-colors border-solid font-poppins font-semibold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-radius16 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-colors w-[10%]"
          compid="79"
          comptype="Button"
          shape="RoundedBorder16"
          size="PaddingAll15"
          variant="Outlinefff8b602"
          fontStyle="PoppinsSemiBold14fff8b602"
        >
          Delivering
        </Button>
        <Button
          className="border border-colors border-solid font-normal font-poppins lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] not-italic 2xl:pb-[11px] xl:pl-[12px] 2xl:pl-[13px] 3xl:pl-[16px] xl:pr-[11px] 2xl:pr-[12px] 3xl:pr-[15px] 2xl:pt-[10px] lg:px-[9px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-radius16 shadow-bs 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-colors w-[8%]"
          compid="2:1478"
          comptype="Button"
          shape="RoundedBorder16"
          size="PaddingAll15"
          variant="Outlinefff8b6021_2"
          fontStyle="PoppinsRegular14fff8b602"
        >
          Order Again
        </Button>
        <Img
          src="defaultNoData.png"
          className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] lg:mr-[24px] xl:mr-[30px] 2xl:mr-[33px] 3xl:mr-[40px] lg:my-[21px] xl:my-[27px] 2xl:my-[30px] 3xl:my-[36px] lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
          compid="2:1496"
          comptype="Image"
          alt="Dots"
        />
      </Row>
    </>
  );
};

export default OrderHistory;

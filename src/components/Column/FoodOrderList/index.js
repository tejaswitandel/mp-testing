import React from "react";

import { Column, Text, Row, Img, Stack, Button } from "components";

const FoodOrderList = (props) => {
  return (
    <>
      <Column className={props.className} compid="2:490" comptype="Column">
        <Text className="GoMeal" compid="2:522" comptype="Text">
          <span className="text-colors2 font-poppins font-bold lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
            GoMeal
          </span>
          <span className="text-colors font-poppins font-bold lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
            .
          </span>
        </Text>
        <Row
          className="items-center lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius16 shadow-bs2 w-[100%]"
          compid="319"
          comptype="Row"
        >
          <Img
            src="defaultNoData.png"
            className="RestaurantLoca"
            compid="2:492"
            comptype="Image"
            alt="RestaurantLoca"
          />
          <Text className="Group319" compid="2:494" comptype="Text">
            Dashboard
          </Text>
        </Row>
        <Row
          className="bg-colors items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius20 w-[100%]"
          compid="320"
          comptype="Row"
        >
          <Img
            src="defaultNoData.png"
            className="DeliveryScoote"
            compid="2:496"
            comptype="Image"
            alt="DeliveryScoote"
          />
          <Text
            className="font-medium font-poppins lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mr-[33px] xl:mr-[42px] 2xl:mr-[47px] 3xl:mr-[56px] lg:my-[12px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors1 w-[auto]"
            compid="2:498"
            comptype="Text"
          >
            Food Order
          </Text>
        </Row>
        <Row
          className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius20 w-[100%]"
          compid="321"
          comptype="Row"
        >
          <Img
            src="defaultNoData.png"
            className="DeliveryScoote"
            compid="2:500"
            comptype="Image"
            alt="Review"
          />
          <Text className="Group321" compid="2:502" comptype="Text">
            Favorite
          </Text>
        </Row>
        <Row
          className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius20 w-[100%]"
          compid="322"
          comptype="Row"
        >
          <Img
            src="defaultNoData.png"
            className="DeliveryScoote"
            compid="2:504"
            comptype="Image"
            alt="OrderDiscussio"
          />
          <Text
            className="font-medium font-poppins lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mr-[43px] xl:mr-[54px] 2xl:mr-[61px] 3xl:mr-[73px] lg:my-[12px] xl:my-[15px] 2xl:my-[16px] 3xl:my-[20px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors3 w-[auto]"
            compid="2:507"
            comptype="Text"
          >
            Message
          </Text>
        </Row>
        <Row
          className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius20 w-[100%]"
          compid="323"
          comptype="Row"
        >
          <Img
            src="defaultNoData.png"
            className="DeliveryScoote"
            compid="2:509"
            comptype="Image"
            alt="24HourFoodDe"
          />
          <Text className="Group323" compid="2:513" comptype="Text">
            Order History
          </Text>
        </Row>
        <Row
          className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius20 w-[100%]"
          compid="324"
          comptype="Row"
        >
          <Img
            src="defaultNoData.png"
            className="DeliveryScoote"
            compid="2:515"
            comptype="Image"
            alt="Bill"
          />
          <Text className="Group324" compid="2:517" comptype="Text">
            Bills
          </Text>
        </Row>
        <Row
          className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius20 w-[100%]"
          compid="325"
          comptype="Row"
        >
          <Img
            src="defaultNoData.png"
            className="DeliveryScoote"
            compid="2:519"
            comptype="Image"
            alt="Setting"
          />
          <Text className="Group325" compid="2:521" comptype="Text">
            Setting
          </Text>
        </Row>
        <Stack
          className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]"
          compid="389"
          comptype="Stack"
        >
          <div
            className="absolute bg-gradient  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-y-[0] left-[20%] right-[19%] rounded-radius32 shadow-bs3 w-[61%]"
            compid="2:481"
            comptype="View"
          ></div>
          <Stack
            className="bg-gradient1  rounded-radius16 MaskGroup"
            compid="391"
            comptype="Stack"
          >
            <Img
              src="defaultNoData.png"
              className="MaskGroup"
              compid="2:483"
              comptype="Image"
              alt="MaskGroup"
            />
            <Column
              className="absolute justify-start right-[6%] top-[11%] w-[82%]"
              compid="327"
              comptype="Column"
            >
              <Column
                className="items-center w-[100%]"
                compid="400"
                comptype="Column"
              >
                <Stack
                  className="lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] w-[100%]"
                  compid="393"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="Vector12"
                    compid="2:488"
                    comptype="Image"
                    alt="Vector"
                  />
                  <Text
                    className="UpgradeyourAc2"
                    compid="2:489"
                    comptype="Text"
                  >
                    Upgrade your
                    <br />
                    Account to Get Free Voucher
                  </Text>
                </Stack>
              </Column>
              <Button
                className="bg-colors1 font-poppins font-semibold lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius8 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center text-colors2 w-[52%]"
                compid="23"
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
      </Column>
    </>
  );
};

export default FoodOrderList;

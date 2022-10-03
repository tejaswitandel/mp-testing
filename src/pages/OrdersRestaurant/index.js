import React from "react";

import { Column, Row, Text, Img, Stack, Button, List, Line } from "components";
import { useNavigate } from "react-router-dom";

const OrdersRestaurantPage = () => {
  const navigate = useNavigate();

  function handleNavigate22() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate23() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate47() {
    navigate("/settingsrestaurant");
  }
  function handleNavigate48() {
    navigate("/customerreviews");
  }
  function handleNavigate49() {
    navigate("/menu");
  }

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:2992"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[98%]"
          compid="1262"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1139" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-end lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:2994"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:3027"
                  as="h1"
                  variant="h1"
                  comptype="Text"
                >
                  <span className="text-bluegray_900 font-poppins font-bold lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
                    GoMeal
                  </span>
                  <span className="text-amber_600 font-poppins font-bold lg:text-[21px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px]">
                    .
                  </span>
                </Text>
                <Column
                  className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  compid="1265"
                  comptype="Column"
                >
                  <Row
                    className="common-pointer bg-amber_600 items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:3007"
                    comptype="Row"
                    onClick={handleNavigate23}
                  >
                    <Img
                      src="images/img_cut.svg"
                      className="Vector"
                      compid="2:3009"
                      comptype="Image"
                      alt="cut"
                    />
                    <Text
                      className="dashboard1"
                      compid="2:3010"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] rounded-radius1416 w-[43%]"
                    compid="2:3011"
                    comptype="Row"
                    onClick={handleNavigate49}
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:3013"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="foodorder"
                      compid="2:3014"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Menu
                    </Text>
                  </Row>
                  <Row
                    className="items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] rounded-radius1204 w-[63%]"
                    compid="2:3015"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:3017"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="foodorder"
                      compid="2:3018"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius1232 w-[52%]"
                    compid="2:3019"
                    comptype="Row"
                    onClick={handleNavigate48}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume1"
                      compid="2:3021"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:3022"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Reviews
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:3023"
                    comptype="Row"
                    onClick={handleNavigate47}
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:3025"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:3026"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[134px] xl:mt-[168px] 2xl:mt-[189px] 3xl:mt-[226px] w-[100%]"
                    compid="2:2996"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:2997"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1104"
                      comptype="Stack"
                    >
                      <Column
                        className="absolute bottom-[0] justify-start right-[0] w-[87%]"
                        compid="1248"
                        comptype="Column"
                      >
                        <Img
                          src="images/img_grid.svg"
                          className="test_grid1"
                          compid="2:3004"
                          comptype="Image"
                          alt="grid"
                        />
                        <Row
                          className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]"
                          compid="1249"
                          comptype="Row"
                        >
                          <Button
                            className="common-pointer font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[49%]"
                            compid="2:3002"
                            comptype="Button"
                            onClick={handleNavigate22}
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillWhiteA700"
                          >
                            Upgrade
                          </Button>
                          <div
                            className="bg-gradient3  3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] rounded-radius5573 w-[46%]"
                            compid="2:3001"
                            comptype="View"
                          ></div>
                        </Row>
                      </Column>
                      <Text
                        className="UpgradeyourAc1"
                        compid="2:3005"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Upgrade your
                        <br />
                        Account to get more benefits
                      </Text>
                    </Stack>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </aside>
          <Column
            className="items-center w-[80%]"
            compid="1261"
            comptype="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compid="1259"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:2993"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Orders
              </Text>
              <Img
                src="images/img_menu.svg"
                className="menu"
                compid="2:3028"
                comptype="Image"
                alt="menu"
              />
            </Row>
            <Row
              className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="1260"
              comptype="Row"
            >
              <Column
                className="bg-white_A700 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[32%]"
                compid="2:3045"
                comptype="Column"
              >
                <Text
                  className="font-bold xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-bluegray_900 w-[auto]"
                  compid="2:3109"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  Order in
                </Text>
                <Row
                  className="items-center xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[92%]"
                  compid="2:3047"
                  comptype="Row"
                >
                  <Button
                    className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[33%]"
                    compid="2:3050"
                    comptype="Button"
                    shape="CustomBorderTL8"
                    size="md"
                    variant="FillAmber600"
                  >
                    Order in
                  </Button>
                  <Button
                    className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[33%]"
                    compid="2:3048"
                    comptype="Button"
                    size="md"
                    variant="FillGray100"
                  >
                    Prepared
                  </Button>
                  <Button
                    className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[33%]"
                    compid="2:3052"
                    comptype="Button"
                    shape="CustomBorderLR8"
                    size="md"
                    variant="FillGray100"
                  >
                    Delivered
                  </Button>
                </Row>
                <Row
                  className="items-center lg:mb-[28px] xl:mb-[36px] 2xl:mb-[40px] 3xl:mb-[48px] xl:ml-[12px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[96%]"
                  compid="1251"
                  comptype="Row"
                >
                  <List
                    className="gap-[0] min-h-[auto] w-[96%]"
                    compid="2:3054"
                    comptype="List"
                    orientation="vertical"
                  >
                    <Row
                      className="bg-white_A700 border border-gray_300 border-solid items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] rounded-radius16 w-[100%]"
                      compid="2:3055"
                      comptype="Row"
                    >
                      <Column
                        className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[1px] w-[61%]"
                        compid="2:3061"
                        comptype="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          compid="2:3062"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Order #1
                        </Text>
                        <Text
                          className="June1202001"
                          compid="2:3063"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-red_400 w-[auto]"
                        compid="2:3060"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          202.00
                        </span>
                      </Text>
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rotate-[90deg] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:3057"
                        comptype="IconButton"
                        shape="icbRoundedBorder8"
                        size="lgIcn"
                        variant="icbFillGray100"
                      >
                        <Img
                          src="images/img_arrowdown_gray_500.svg"
                          className="flex items-center justify-center"
                          alt="arrowdown"
                        />
                      </Button>
                    </Row>
                    <Row
                      className="bg-amber_600_19 border border-amber_600 border-solid items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] rounded-radius16 w-[100%]"
                      compid="2:3064"
                      comptype="Row"
                    >
                      <Column
                        className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[1px] w-[61%]"
                        compid="2:3070"
                        comptype="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          compid="2:3071"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Order #2
                        </Text>
                        <Text
                          className="June1202001"
                          compid="2:3072"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-red_400 w-[auto]"
                        compid="2:3069"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          202.00
                        </span>
                      </Text>
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rotate-[90deg] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:3066"
                        comptype="IconButton"
                        shape="icbRoundedBorder8"
                        size="lgIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_arrowdown_white_A700.svg"
                          className="flex items-center justify-center"
                          alt="arrowdown One"
                        />
                      </Button>
                    </Row>
                    <Row
                      className="bg-white_A700 border border-gray_300 border-solid items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] rounded-radius16 w-[100%]"
                      compid="2:3073"
                      comptype="Row"
                    >
                      <Column
                        className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[1px] w-[61%]"
                        compid="2:3079"
                        comptype="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          compid="2:3080"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Order #3
                        </Text>
                        <Text
                          className="June1202001"
                          compid="2:3081"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-red_400 w-[auto]"
                        compid="2:3078"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          202.00
                        </span>
                      </Text>
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rotate-[90deg] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:3075"
                        comptype="IconButton"
                        shape="icbRoundedBorder8"
                        size="lgIcn"
                        variant="icbFillGray100"
                      >
                        <Img
                          src="images/img_arrowdown_gray_500.svg"
                          className="flex items-center justify-center"
                          alt="arrowdown Two"
                        />
                      </Button>
                    </Row>
                    <Row
                      className="bg-white_A700 border border-gray_300 border-solid items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] rounded-radius16 w-[100%]"
                      compid="2:3082"
                      comptype="Row"
                    >
                      <Column
                        className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[1px] w-[61%]"
                        compid="2:3088"
                        comptype="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          compid="2:3089"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Order #4
                        </Text>
                        <Text
                          className="June1202001"
                          compid="2:3090"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-red_400 w-[auto]"
                        compid="2:3087"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          202.00
                        </span>
                      </Text>
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rotate-[90deg] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:3084"
                        comptype="IconButton"
                        shape="icbRoundedBorder8"
                        size="lgIcn"
                        variant="icbFillGray100"
                      >
                        <Img
                          src="images/img_arrowdown_gray_500.svg"
                          className="flex items-center justify-center"
                          alt="arrowdown Three"
                        />
                      </Button>
                    </Row>
                    <Row
                      className="bg-white_A700 border border-gray_300 border-solid items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] rounded-radius16 w-[100%]"
                      compid="2:3091"
                      comptype="Row"
                    >
                      <Column
                        className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[1px] w-[61%]"
                        compid="2:3097"
                        comptype="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          compid="2:3098"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Order #5
                        </Text>
                        <Text
                          className="June1202001"
                          compid="2:3099"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-red_400 w-[auto]"
                        compid="2:3096"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          202.00
                        </span>
                      </Text>
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rotate-[90deg] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:3093"
                        comptype="IconButton"
                        shape="icbRoundedBorder8"
                        size="lgIcn"
                        variant="icbFillGray100"
                      >
                        <Img
                          src="images/img_arrowdown_gray_500.svg"
                          className="flex items-center justify-center"
                          alt="arrowdown Four"
                        />
                      </Button>
                    </Row>
                    <Row
                      className="bg-white_A700 border border-gray_300 border-solid items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] lg:p-[13px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[22px] rounded-radius16 w-[100%]"
                      compid="2:3100"
                      comptype="Row"
                    >
                      <Column
                        className="lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] mt-[1px] w-[61%]"
                        compid="2:3106"
                        comptype="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          compid="2:3107"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Order #1
                        </Text>
                        <Text
                          className="June1202001"
                          compid="2:3108"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-red_400 w-[auto]"
                        compid="2:3105"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          202.00
                        </span>
                      </Text>
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rotate-[90deg] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:3102"
                        comptype="IconButton"
                        shape="icbRoundedBorder8"
                        size="lgIcn"
                        variant="icbFillGray100"
                      >
                        <Img
                          src="images/img_arrowdown_gray_500.svg"
                          className="flex items-center justify-center"
                          alt="arrowdown Five"
                        />
                      </Button>
                    </Row>
                  </List>
                  <Stack
                    className="lg:h-[351px] xl:h-[438px] 2xl:h-[493px] 3xl:h-[591px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[1%]"
                    compid="2:3110"
                    comptype="Stack"
                  >
                    <Line
                      className="absolute bg-gray_100 lg:h-[351px] xl:h-[438px] 2xl:h-[493px] 3xl:h-[591px] w-[6px]"
                      compid="2:3111"
                      comptype="Line"
                    />
                    <Line
                      className="absolute bg-gray_300 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] top-[0] w-[6px]"
                      compid="2:3112"
                      comptype="Line"
                    />
                  </Stack>
                </Row>
              </Column>
              <Column
                className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[66%]"
                compid="2:3113"
                comptype="Column"
              >
                <Text
                  className="OrderOne"
                  compid="2:3132"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  Order Details
                </Text>
                <Stack
                  className="lg:h-[355px] xl:h-[444px] 2xl:h-[499px] 3xl:h-[598px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]"
                  compid="1247"
                  comptype="Stack"
                >
                  <List
                    className="absolute bottom-[27%] gap-[0] inset-x-[0] min-h-[auto] mx-[auto] w-[93%]"
                    compid="2:3115"
                    comptype="List"
                    orientation="vertical"
                  >
                    <Row className="menu5" compid="2:3124" comptype="Row">
                      <div
                        className="bg-gray_400 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius16 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                        compid="2:3127"
                        comptype="View"
                      ></div>
                      <Column
                        className="w-[79%]"
                        compid="2:3128"
                        comptype="Column"
                      >
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          compid="2:3129"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Pepperoni Pizza
                        </Text>
                        <Text
                          className="x1"
                          compid="2:3130"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          x1
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:3131"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          +
                        </span>
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          5.59
                        </span>
                      </Text>
                    </Row>
                    <Row className="menu5" compid="2:3116" comptype="Row">
                      <div
                        className="bg-gray_400 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius16 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                        compid="2:3119"
                        comptype="View"
                      ></div>
                      <Column
                        className="w-[79%]"
                        compid="2:3120"
                        comptype="Column"
                      >
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          compid="2:3121"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Cheese Burger
                        </Text>
                        <Text
                          className="x1"
                          compid="2:3122"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          x1
                        </Text>
                      </Column>
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:3123"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          +
                        </span>
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          5.59
                        </span>
                      </Text>
                    </Row>
                  </List>
                  <Column
                    className="absolute border border-gray_300 border-solid justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius16 w-[100%]"
                    compid="1105"
                    comptype="Column"
                  >
                    <Row
                      className="items-center mt-[1px] py-[2px] w-[100%]"
                      compid="2:3165"
                      comptype="Row"
                    >
                      <Column
                        className="w-[81%]"
                        compid="2:3166"
                        comptype="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          compid="2:3167"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Order #1
                        </Text>
                        <Text
                          className="June1202001"
                          compid="2:3168"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          June 1, 2020, 08:22 AM
                        </Text>
                      </Column>
                      <Row
                        className="items-center justify-between w-[19%]"
                        compid="1264"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius16 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          compid="2:3170"
                          comptype="View"
                        ></div>
                        <Column
                          className="w-[66%]"
                          compid="1263"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3171"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            Ruby Roben
                          </Text>
                          <Text
                            className="Usersince2020"
                            compid="2:3172"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            User since 2020
                          </Text>
                        </Column>
                      </Row>
                    </Row>
                    <Line
                      className="bg-gray_300 h-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"
                      compid="2:3134"
                      comptype="Line"
                    />
                    <Row
                      className="items-center ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[85%]"
                      compid="1256"
                      comptype="Row"
                    >
                      <Column
                        className="w-[58%]"
                        compid="2:3146"
                        comptype="Column"
                      >
                        <Text
                          className="MondayJuneThirtyOne_One"
                          compid="2:3147"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Delivery Address
                        </Text>
                        <Row
                          className="items-start ml-[3px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[36%]"
                          compid="2:3148"
                          comptype="Row"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] w-[11%]"
                            compid="2:3151"
                            comptype="Image"
                            alt="location"
                          />
                          <Text
                            className="content"
                            compid="2:3149"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Elm Street, 23
                          </Text>
                        </Row>
                        <Text
                          className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-gray_500 w-[84%]"
                          compid="2:3152"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt.{" "}
                        </Text>
                      </Column>
                      <Column
                        className="mb-[1px] w-[42%]"
                        compid="1255"
                        comptype="Column"
                      >
                        <Row
                          className="items-start w-[84%]"
                          compid="1253"
                          comptype="Row"
                        >
                          <Column
                            className="justify-start mb-[1px] w-[75%]"
                            compid="2:3153"
                            comptype="Column"
                          >
                            <Text
                              className="MondayJuneThirtyOne_One"
                              compid="2:3154"
                              as="h6"
                              variant="h6"
                              comptype="Text"
                            >
                              Estimation Time{" "}
                            </Text>
                            <Text
                              className="font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                              compid="2:3155"
                              as="h6"
                              variant="h6"
                              comptype="Text"
                            >
                              10 Min
                            </Text>
                          </Column>
                          <Column
                            className="items-center justify-start mt-[2px] w-[25%]"
                            compid="2:3159"
                            comptype="Column"
                          >
                            <Text
                              className="MondayJuneThirtyOne_One"
                              compid="2:3160"
                              as="h6"
                              variant="h6"
                              comptype="Text"
                            >
                              Payment
                            </Text>
                            <Text
                              className="font-bold lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] text-bluegray_900 w-[auto]"
                              compid="2:3161"
                              as="h6"
                              variant="h6"
                              comptype="Text"
                            >
                              E-Wallet
                            </Text>
                          </Column>
                        </Row>
                        <Row
                          className="items-start justify-evenly lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                          compid="1254"
                          comptype="Row"
                        >
                          <Column
                            className="justify-start w-[63%]"
                            compid="2:3156"
                            comptype="Column"
                          >
                            <Text
                              className="MondayJuneThirtyOne_One"
                              compid="2:3157"
                              as="h6"
                              variant="h6"
                              comptype="Text"
                            >
                              Distance
                            </Text>
                            <Text
                              className="font-bold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                              compid="2:3158"
                              as="h6"
                              variant="h6"
                              comptype="Text"
                            >
                              2.5 Km
                            </Text>
                          </Column>
                          <Column
                            className="justify-start mt-[2px] w-[37%]"
                            compid="2:3162"
                            comptype="Column"
                          >
                            <Text
                              className="MondayJuneThirtyOne_One"
                              compid="2:3163"
                              as="h6"
                              variant="h6"
                              comptype="Text"
                            >
                              Payment Status
                            </Text>
                            <Text
                              className="font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-bluegray_900 w-[auto]"
                              compid="2:3164"
                              as="h6"
                              variant="h6"
                              comptype="Text"
                            >
                              Completed
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </Row>
                    <Line
                      className="bg-gray_300 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]"
                      compid="2:3135"
                      comptype="Line"
                    />
                    <Line
                      className="bg-gray_300 h-[1px] lg:mt-[152px] xl:mt-[190px] 2xl:mt-[214px] 3xl:mt-[257px] w-[100%]"
                      compid="2:3136"
                      comptype="Line"
                    />
                    <Row
                      className="items-start justify-between lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                      compid="2:3142"
                      comptype="Row"
                    >
                      <Text
                        className="Total_Six"
                        compid="2:3143"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Total
                      </Text>
                      <Text
                        className="font-bold text-red_400 w-[auto]"
                        compid="2:3144"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          12.59
                        </span>
                      </Text>
                    </Row>
                  </Column>
                </Stack>
                <Row
                  className="items-center justify-end lg:ml-[259px] xl:ml-[324px] 2xl:ml-[364px] 3xl:ml-[437px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[47%]"
                  compid="1257"
                  comptype="Row"
                >
                  <Button
                    className="font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[46%]"
                    compid="2:3139"
                    comptype="Button"
                    shape="RoundedBorder16"
                    size="xl"
                    variant="OutlineRed4001_2"
                  >
                    Reject Order
                  </Button>
                  <Button
                    className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[49%]"
                    compid="2:3137"
                    comptype="Button"
                    shape="RoundedBorder16"
                    size="xl"
                    variant="FillAmber600"
                  >
                    Accept Order
                  </Button>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default OrdersRestaurantPage;

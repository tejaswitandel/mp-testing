import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Stack,
  Button,
  Input,
  Grid,
  Line,
  List,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const FoodOrderPage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate3() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate28() {
    navigate("/favoritemenu");
  }
  function handleNavigate38() {
    navigate("/settingscustomer");
  }
  function handleNavigate39() {
    navigate("/bills");
  }
  function handleNavigate40() {
    navigate("/orderhistory");
  }
  function handleNavigate41() {
    navigate("/chat");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:476"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[100%]"
          compid="1202"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1132" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:478"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:522"
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
                  className="justify-start lg:mb-[217px] xl:mb-[272px] 2xl:mb-[306px] 3xl:mb-[367px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  compid="1203"
                  comptype="Column"
                >
                  <Row
                    className="common-pointer items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:491"
                    comptype="Row"
                    onClick={handleNavigate}
                  >
                    <Img
                      src="images/img_trash_48X48.svg"
                      className="Vector"
                      compid="2:493"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="dashboard"
                      compid="2:494"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="bg-amber_600 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]"
                    compid="2:495"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_vector_1.svg"
                      className="lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[13%]"
                      compid="2:497"
                      comptype="Image"
                      alt="Vector One"
                    />
                    <Text
                      className="foodorder1"
                      compid="2:498"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius1232 w-[52%]"
                    compid="2:499"
                    comptype="Row"
                    onClick={handleNavigate28}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume"
                      compid="2:501"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:502"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Favorite
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[58%]"
                    compid="2:503"
                    comptype="Row"
                    onClick={handleNavigate41}
                  >
                    <Img
                      src="images/img_orderdiscussio_24X28.svg"
                      className="OrderDiscussio1"
                      compid="2:504"
                      comptype="Image"
                      alt="OrderDiscussio"
                    />
                    <Text
                      className="message1"
                      compid="2:507"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Message
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[73%]"
                    compid="2:508"
                    comptype="Row"
                    onClick={handleNavigate40}
                  >
                    <Img
                      src="images/img_music.svg"
                      className="music"
                      compid="2:509"
                      comptype="Image"
                      alt="music"
                    />
                    <Text
                      className="orderhistory"
                      compid="2:513"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Order History
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius1416 w-[37%]"
                    compid="2:514"
                    comptype="Row"
                    onClick={handleNavigate39}
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:516"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="bills"
                      compid="2:517"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Bills
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:518"
                    comptype="Row"
                    onClick={handleNavigate38}
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:520"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:521"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]"
                    compid="2:480"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:481"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1100"
                      comptype="Stack"
                    >
                      <div
                        className="absolute bg-gradient3  bottom-[0] 3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] right-[0] rounded-radius5573 w-[40%]"
                        compid="2:485"
                        comptype="View"
                      ></div>
                      <Button
                        className="common-pointer absolute bottom-[16%] font-semibold left-[4%] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                        compid="2:486"
                        comptype="Button"
                        onClick={handleNavigate3}
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Upgrade
                      </Button>
                      <Img
                        src="images/img_grid.svg"
                        className="test_grid"
                        compid="2:488"
                        comptype="Image"
                        alt="grid"
                      />
                      <Text
                        className="UpgradeyourAc"
                        compid="2:489"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Upgrade your
                        <br />
                        Account to Get Free Voucher
                      </Text>
                    </Stack>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </aside>
          <Column
            className="items-center w-[56%]"
            compid="1201"
            comptype="Column"
          >
            <Row
              className="items-center justify-between w-[96%]"
              compid="1200"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:477"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Food Order
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="flex w-[49%]"
                compid="2:523"
                comptype="SearchView"
                name="SearchBar"
                placeholder="Search order"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[4px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:ml-[5px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[6px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[7px] 3xl:mr-[10px] my-[auto]"
                    compid="2:525"
                    comptype="Image"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#a098ae"
                      className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[5px] lg:mr-[11px] xl:w-[16px] xl:h-[17px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcRoundedBorder16"
                size="smSrc"
                variant="srcFillWhiteA700"
              ></Input>
            </Row>
            <Grid
              className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] lg:gap-[8px] grid grid-cols-3 lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]"
              compid="1210"
              comptype="Grid"
            >
              <Column
                className="bg-white_A700 items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:528"
                comptype="Column"
              >
                <Text
                  className="OrderOne"
                  compid="2:572"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Order #1
                </Text>
                <Text
                  className="Loremipsumdol_One"
                  compid="2:573"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Nov 11, 2021 , 18:38 PM
                </Text>
                <Column
                  className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                  compid="1204"
                  comptype="Column"
                >
                  <Line
                    className="bg-gray_300 h-[1px] w-[100%]"
                    compid="2:530"
                    comptype="Line"
                  />
                  <Text
                    className="FastFoodResto"
                    compid="2:540"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[54%]"
                    compid="2:533"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1.svg"
                      className="StarOne"
                      compid="2:535"
                      comptype="Image"
                      alt="StarOne"
                    />
                    <Text
                      className="rate"
                      compid="2:536"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:537"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:539"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:531"
                    comptype="Line"
                  />
                  <Row
                    className="items-start justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                    compid="2:541"
                    comptype="Row"
                  >
                    <Text
                      className="MondayJuneThirtyOne"
                      compid="2:542"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Delivery Time{" "}
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:543"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      10 Min
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                    compid="2:544"
                    comptype="Row"
                  >
                    <Text
                      className="Distance"
                      compid="2:545"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Distance
                    </Text>
                    <Text
                      className="test_25Km"
                      compid="2:546"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.5 Km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:532"
                    comptype="Line"
                  />
                  <Text
                    className="columnline"
                    compid="2:550"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Order Menu
                  </Text>
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:551"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:554"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:555"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:556"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Pepperoni Pizza
                      </Text>
                      <Text
                        className="x1"
                        compid="2:557"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:558"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]"
                    compid="2:559"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:562"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:563"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:564"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Cheese Burger
                      </Text>
                      <Text
                        className="x1"
                        compid="2:565"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:566"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:548"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                    compid="2:567"
                    comptype="Row"
                  >
                    <Text
                      className="Total"
                      compid="2:568"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Total
                    </Text>
                    <Text
                      className="test_20200"
                      compid="2:569"
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
                  </Row>
                  <Button
                    className="font-medium lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                    compid="2:570"
                    comptype="Button"
                    shape="RoundedBorder16"
                    size="lg"
                    variant="OutlineLightgreen500"
                  >
                    Completed
                  </Button>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 border border-amber_600 border-solid items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:574"
                comptype="Column"
              >
                <Text
                  className="OrderOne"
                  compid="2:618"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Order #2
                </Text>
                <Text
                  className="Loremipsumdol_One"
                  compid="2:619"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Nov 11, 2021 , 18:38 PM
                </Text>
                <Column
                  className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                  compid="1205"
                  comptype="Column"
                >
                  <Line
                    className="bg-gray_300 h-[1px] w-[100%]"
                    compid="2:576"
                    comptype="Line"
                  />
                  <Text
                    className="FastFoodResto"
                    compid="2:586"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[54%]"
                    compid="2:579"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_16X16.svg"
                      className="StarOne"
                      compid="2:581"
                      comptype="Image"
                      alt="StarOne One"
                    />
                    <Text
                      className="rate"
                      compid="2:582"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:583"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:585"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:577"
                    comptype="Line"
                  />
                  <Row
                    className="items-start justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                    compid="2:587"
                    comptype="Row"
                  >
                    <Text
                      className="MondayJuneThirtyOne"
                      compid="2:588"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Delivery Time{" "}
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:589"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      10 Min
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                    compid="2:590"
                    comptype="Row"
                  >
                    <Text
                      className="Distance"
                      compid="2:591"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Distance
                    </Text>
                    <Text
                      className="test_25Km"
                      compid="2:592"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.5 Km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:578"
                    comptype="Line"
                  />
                  <Text
                    className="columnline"
                    compid="2:596"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Order Menu
                  </Text>
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:597"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:600"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:601"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:602"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Pepperoni Pizza
                      </Text>
                      <Text
                        className="x1"
                        compid="2:603"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:604"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]"
                    compid="2:605"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:608"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:609"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:610"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Cheese Burger
                      </Text>
                      <Text
                        className="x1"
                        compid="2:611"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:612"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:594"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                    compid="2:613"
                    comptype="Row"
                  >
                    <Text
                      className="Total"
                      compid="2:614"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Total
                    </Text>
                    <Text
                      className="test_20200"
                      compid="2:615"
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
                  </Row>
                  <Button
                    className="font-medium lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                    compid="2:616"
                    comptype="Button"
                    shape="RoundedBorder16"
                    size="lg"
                    variant="OutlineAmber600"
                  >
                    Delivering to you
                  </Button>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:620"
                comptype="Column"
              >
                <Text
                  className="OrderOne"
                  compid="2:664"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Order #3
                </Text>
                <Text
                  className="Loremipsumdol_One"
                  compid="2:665"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Nov 11, 2021 , 18:38 PM
                </Text>
                <Column
                  className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                  compid="1206"
                  comptype="Column"
                >
                  <Line
                    className="bg-gray_300 h-[1px] w-[100%]"
                    compid="2:622"
                    comptype="Line"
                  />
                  <Text
                    className="FastFoodResto"
                    compid="2:632"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[54%]"
                    compid="2:625"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_1.svg"
                      className="StarOne"
                      compid="2:627"
                      comptype="Image"
                      alt="StarOne Two"
                    />
                    <Text
                      className="rate"
                      compid="2:628"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:629"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:631"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:623"
                    comptype="Line"
                  />
                  <Row
                    className="items-start justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                    compid="2:633"
                    comptype="Row"
                  >
                    <Text
                      className="MondayJuneThirtyOne"
                      compid="2:634"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Delivery Time{" "}
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:635"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      10 Min
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                    compid="2:636"
                    comptype="Row"
                  >
                    <Text
                      className="Distance"
                      compid="2:637"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Distance
                    </Text>
                    <Text
                      className="test_25Km"
                      compid="2:638"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.5 Km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:624"
                    comptype="Line"
                  />
                  <Text
                    className="columnline"
                    compid="2:642"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Order Menu
                  </Text>
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:643"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:646"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:647"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:648"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Pepperoni Pizza
                      </Text>
                      <Text
                        className="x1"
                        compid="2:649"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:650"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]"
                    compid="2:651"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:654"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:655"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:656"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Cheese Burger
                      </Text>
                      <Text
                        className="x1"
                        compid="2:657"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:658"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:640"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                    compid="2:659"
                    comptype="Row"
                  >
                    <Text
                      className="Total"
                      compid="2:660"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Total
                    </Text>
                    <Text
                      className="test_20200"
                      compid="2:661"
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
                  </Row>
                  <Button
                    className="font-medium lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                    compid="2:662"
                    comptype="Button"
                    shape="RoundedBorder16"
                    size="lg"
                    variant="OutlineBlue600"
                  >
                    Order being prepared
                  </Button>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:666"
                comptype="Column"
              >
                <Text
                  className="OrderOne"
                  compid="2:710"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Order #4
                </Text>
                <Text
                  className="Loremipsumdol_One"
                  compid="2:711"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Nov 11, 2021 , 18:38 PM
                </Text>
                <Column
                  className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                  compid="1207"
                  comptype="Column"
                >
                  <Line
                    className="bg-gray_300 h-[1px] w-[100%]"
                    compid="2:668"
                    comptype="Line"
                  />
                  <Text
                    className="FastFoodResto"
                    compid="2:678"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[54%]"
                    compid="2:671"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_2.svg"
                      className="StarOne"
                      compid="2:673"
                      comptype="Image"
                      alt="StarOne Three"
                    />
                    <Text
                      className="rate"
                      compid="2:674"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:675"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:677"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:669"
                    comptype="Line"
                  />
                  <Row
                    className="items-start justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                    compid="2:679"
                    comptype="Row"
                  >
                    <Text
                      className="MondayJuneThirtyOne"
                      compid="2:680"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Delivery Time{" "}
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:681"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      10 Min
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                    compid="2:682"
                    comptype="Row"
                  >
                    <Text
                      className="Distance"
                      compid="2:683"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Distance
                    </Text>
                    <Text
                      className="test_25Km"
                      compid="2:684"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.5 Km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:670"
                    comptype="Line"
                  />
                  <Text
                    className="columnline"
                    compid="2:688"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Order Menu
                  </Text>
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:689"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:692"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:693"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:694"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Pepperoni Pizza
                      </Text>
                      <Text
                        className="x1"
                        compid="2:695"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:696"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]"
                    compid="2:697"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:700"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:701"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:702"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Cheese Burger
                      </Text>
                      <Text
                        className="x1"
                        compid="2:703"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:704"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:686"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                    compid="2:705"
                    comptype="Row"
                  >
                    <Text
                      className="Total"
                      compid="2:706"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Total
                    </Text>
                    <Text
                      className="test_20200"
                      compid="2:707"
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
                  </Row>
                  <Button
                    className="font-medium lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                    compid="2:708"
                    comptype="Button"
                    shape="RoundedBorder16"
                    size="lg"
                    variant="OutlineLightgreen500"
                  >
                    Completed
                  </Button>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:712"
                comptype="Column"
              >
                <Text
                  className="OrderOne"
                  compid="2:756"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Order #5
                </Text>
                <Text
                  className="Loremipsumdol_One"
                  compid="2:757"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Nov 11, 2021 , 18:38 PM
                </Text>
                <Column
                  className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                  compid="1208"
                  comptype="Column"
                >
                  <Line
                    className="bg-gray_300 h-[1px] w-[100%]"
                    compid="2:714"
                    comptype="Line"
                  />
                  <Text
                    className="FastFoodResto"
                    compid="2:724"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[54%]"
                    compid="2:717"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_3.svg"
                      className="StarOne"
                      compid="2:719"
                      comptype="Image"
                      alt="StarOne Four"
                    />
                    <Text
                      className="rate"
                      compid="2:720"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:721"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:723"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:715"
                    comptype="Line"
                  />
                  <Row
                    className="items-start justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                    compid="2:725"
                    comptype="Row"
                  >
                    <Text
                      className="MondayJuneThirtyOne"
                      compid="2:726"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Delivery Time{" "}
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:727"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      10 Min
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                    compid="2:728"
                    comptype="Row"
                  >
                    <Text
                      className="Distance"
                      compid="2:729"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Distance
                    </Text>
                    <Text
                      className="test_25Km"
                      compid="2:730"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.5 Km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:716"
                    comptype="Line"
                  />
                  <Text
                    className="columnline"
                    compid="2:734"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Order Menu
                  </Text>
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:735"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:738"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:739"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:740"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Pepperoni Pizza
                      </Text>
                      <Text
                        className="x1"
                        compid="2:741"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:742"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]"
                    compid="2:743"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:746"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:747"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:748"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Cheese Burger
                      </Text>
                      <Text
                        className="x1"
                        compid="2:749"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:750"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:732"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                    compid="2:751"
                    comptype="Row"
                  >
                    <Text
                      className="Total"
                      compid="2:752"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Total
                    </Text>
                    <Text
                      className="test_20200"
                      compid="2:753"
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
                  </Row>
                  <Button
                    className="font-medium lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                    compid="2:754"
                    comptype="Button"
                    shape="RoundedBorder16"
                    size="lg"
                    variant="OutlineLightgreen500"
                  >
                    Completed
                  </Button>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:758"
                comptype="Column"
              >
                <Text
                  className="OrderOne"
                  compid="2:802"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Order #6
                </Text>
                <Text
                  className="Loremipsumdol_One"
                  compid="2:803"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Nov 11, 2021 , 18:38 PM
                </Text>
                <Column
                  className="justify-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                  compid="1209"
                  comptype="Column"
                >
                  <Line
                    className="bg-gray_300 h-[1px] w-[100%]"
                    compid="2:760"
                    comptype="Line"
                  />
                  <Text
                    className="FastFoodResto"
                    compid="2:770"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[54%]"
                    compid="2:763"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_4.svg"
                      className="StarOne"
                      compid="2:765"
                      comptype="Image"
                      alt="StarOne Five"
                    />
                    <Text
                      className="rate"
                      compid="2:766"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:767"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:769"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:761"
                    comptype="Line"
                  />
                  <Row
                    className="items-start justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                    compid="2:771"
                    comptype="Row"
                  >
                    <Text
                      className="MondayJuneThirtyOne"
                      compid="2:772"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Delivery Time{" "}
                    </Text>
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:773"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      10 Min
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                    compid="2:774"
                    comptype="Row"
                  >
                    <Text
                      className="Distance"
                      compid="2:775"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Distance
                    </Text>
                    <Text
                      className="test_25Km"
                      compid="2:776"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.5 Km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:762"
                    comptype="Line"
                  />
                  <Text
                    className="columnline"
                    compid="2:780"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Order Menu
                  </Text>
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]"
                    compid="2:781"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:784"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:785"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:786"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Pepperoni Pizza
                      </Text>
                      <Text
                        className="x1"
                        compid="2:787"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:788"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Row
                    className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]"
                    compid="2:789"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                      compid="2:792"
                      comptype="View"
                    ></div>
                    <Column
                      className="w-[52%]"
                      compid="2:793"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:794"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Cheese Burger
                      </Text>
                      <Text
                        className="x1"
                        compid="2:795"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        x1
                      </Text>
                    </Column>
                    <Text
                      className="font-semibold text-bluegray_900 w-[auto]"
                      compid="2:796"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        +
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        5.59
                      </span>
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:778"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                    compid="2:797"
                    comptype="Row"
                  >
                    <Text
                      className="Total"
                      compid="2:798"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Total
                    </Text>
                    <Text
                      className="test_20200"
                      compid="2:799"
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
                  </Row>
                  <Button
                    className="font-medium lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                    compid="2:800"
                    comptype="Button"
                    shape="RoundedBorder16"
                    size="lg"
                    variant="OutlineLightgreen500"
                  >
                    Completed
                  </Button>
                </Column>
              </Column>
            </Grid>
          </Column>
          <Column
            className="bg-white_A700 lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[24%]"
            compid="2:804"
            comptype="Column"
          >
            <Img
              src="images/img_menu_white_A700.svg"
              className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
              compid="2:839"
              comptype="Image"
              alt="menu"
            />
            <Text
              className="OrderTracker"
              compid="2:866"
              as="h4"
              variant="h4"
              comptype="Text"
            >
              Order Tracker
            </Text>
            <Stack
              className="bg-cover bg-repeat lg:h-[201px] xl:h-[251px] 2xl:h-[282px] 3xl:h-[338px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:px-[21px] xl:px-[27px] 2xl:px-[30px] 3xl:px-[36px] lg:w-[200px] xl:w-[250px] 2xl:w-[281px] 3xl:w-[337px]"
              compid="1101"
              style={{ backgroundImage: "url('images/img_group1101.png')" }}
              comptype="Stack"
            >
              <Img
                src="images/img_line.svg"
                className="absolute lg:h-[136px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[228px] inset-y-[0] left-[17%] my-[auto] w-[34%]"
                compid="2:867"
                comptype="Image"
                alt="line Six"
              />
              <Button
                className="absolute bottom-[6%] flex lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] items-center justify-center left-[12%] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[26px]"
                compid="2:868"
                comptype="IconButton"
                shape="icbRoundedBorder16"
                size="smIcn"
                variant="icbFillAmber600"
              >
                <Img
                  src="images/img_reply.svg"
                  className="flex items-center justify-center lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px]"
                  alt="reply"
                />
              </Button>
              <Img
                src="images/img_info.svg"
                className="absolute lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] right-[23%] top-[0] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                compid="2:872"
                comptype="Image"
                alt="info"
              />
            </Stack>
            <Text
              className="YourAddress"
              compid="2:858"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              Your Address
            </Text>
            <Row
              className="items-start ml-[3px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[41%]"
              compid="2:859"
              comptype="Row"
            >
              <Img
                src="images/img_location.svg"
                className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mb-[1px] w-[11%]"
                compid="2:862"
                comptype="Image"
                alt="location"
              />
              <Text
                className="content"
                compid="2:860"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Elm Street, 23
              </Text>
            </Row>
            <Text
              className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] not-italic text-gray_500 w-[95%]"
              compid="2:863"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.{" "}
            </Text>
            <Text
              className="font-bold lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] text-bluegray_900 w-[auto]"
              compid="2:808"
              as="h4"
              variant="h4"
              comptype="Text"
            >
              Order Menu
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]"
              compid="1211"
              comptype="List"
              orientation="vertical"
            >
              <Row className="food_order1" compid="2:809" comptype="Row">
                <div
                  className="bg-gray_400 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius16 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  compid="2:812"
                  comptype="View"
                ></div>
                <Column className="w-[53%]" compid="2:813" comptype="Column">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="2:814"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Pepperoni Pizza
                  </Text>
                  <Text
                    className="x1"
                    compid="2:815"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    x1
                  </Text>
                </Column>
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  compid="2:816"
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
              <Line
                className="self-center w-[100%] h-[1px] bg-gray_300"
                compid="2:838"
                comptype="Line"
              />
              <Row className="food_order1" compid="2:817" comptype="Row">
                <div
                  className="bg-gray_400 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius16 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  compid="2:820"
                  comptype="View"
                ></div>
                <Column className="w-[53%]" compid="2:821" comptype="Column">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="2:822"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Cheese Burger
                  </Text>
                  <Text
                    className="x1"
                    compid="2:823"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    x1
                  </Text>
                </Column>
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  compid="2:824"
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
              <Line
                className="self-center w-[100%] h-[1px] bg-gray_300"
                compid="2:838"
                comptype="Line"
              />
              <Row className="food_order1" compid="2:825" comptype="Row">
                <div
                  className="bg-gray_400 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius16 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  compid="2:828"
                  comptype="View"
                ></div>
                <Column className="w-[53%]" compid="2:829" comptype="Column">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="2:830"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Vegan Pizza
                  </Text>
                  <Text
                    className="x1"
                    compid="2:831"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    x1
                  </Text>
                </Column>
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  compid="2:832"
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
            <Row
              className="items-start justify-between lg:mt-[41px] xl:mt-[51px] 2xl:mt-[57px] 3xl:mt-[69px] w-[100%]"
              compid="2:835"
              comptype="Row"
            >
              <Text
                className="Total_Six"
                compid="2:836"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Total
              </Text>
              <Text
                className="font-medium text-red_400 w-[auto]"
                compid="2:837"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  $
                </span>
                <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  202.00
                </span>
              </Text>
            </Row>
            <Button
              className="font-medium 2xl:mb-[104px] 3xl:mb-[125px] lg:mb-[74px] xl:mb-[92px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              compid="2:833"
              comptype="Button"
              shape="RoundedBorder16"
              size="xl"
              variant="OutlineAmber600"
            >
              Delivering to you
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default FoodOrderPage;

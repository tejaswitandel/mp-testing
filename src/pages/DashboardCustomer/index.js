import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Stack,
  Button,
  Input,
  List,
  RatingBar,
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const DashboardCustomerPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate67() {
    navigate("/chat");
  }
  function handleNavigate68() {
    navigate("/favoritemenu");
  }
  function handleNavigate69() {
    navigate("/settingscustomer");
  }
  function handleNavigate72() {
    navigate("/bills");
  }
  function handleNavigate74() {
    navigate("/orderhistory");
  }
  function handleNavigate76() {
    navigate("/foodorder");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:55"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[100%]"
          compid="1573"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1167" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:57"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:101"
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
                  className="justify-start lg:mb-[294px] xl:mb-[368px] 2xl:mb-[414px] 3xl:mb-[497px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  compid="1574"
                  comptype="Column"
                >
                  <Row
                    className="bg-amber_600 items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:70"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_cut.svg"
                      className="Vector"
                      compid="2:72"
                      comptype="Image"
                      alt="cut"
                    />
                    <Text
                      className="dashboard1"
                      compid="2:73"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius1204 w-[63%]"
                    compid="2:74"
                    comptype="Row"
                    onClick={handleNavigate76}
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:76"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="foodorder"
                      compid="2:77"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius1232 w-[52%]"
                    compid="2:78"
                    comptype="Row"
                    onClick={handleNavigate68}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume"
                      compid="2:80"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:81"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Favorite
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[58%]"
                    compid="2:82"
                    comptype="Row"
                    onClick={handleNavigate67}
                  >
                    <Img
                      src="images/img_orderdiscussio_24X28.svg"
                      className="OrderDiscussio1"
                      compid="2:83"
                      comptype="Image"
                      alt="OrderDiscussio"
                    />
                    <Text
                      className="message1"
                      compid="2:86"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Message
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[73%]"
                    compid="2:87"
                    comptype="Row"
                    onClick={handleNavigate74}
                  >
                    <Img
                      src="images/img_music.svg"
                      className="music"
                      compid="2:88"
                      comptype="Image"
                      alt="music"
                    />
                    <Text
                      className="orderhistory"
                      compid="2:92"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Order History
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius1416 w-[37%]"
                    compid="2:93"
                    comptype="Row"
                    onClick={handleNavigate72}
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:95"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="bills"
                      compid="2:96"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Bills
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:97"
                    comptype="Row"
                    onClick={handleNavigate69}
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:99"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:100"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]"
                    compid="2:59"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:60"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1125"
                      comptype="Stack"
                    >
                      <div
                        className="absolute bg-gradient3  bottom-[0] 3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] right-[0] rounded-radius5573 w-[40%]"
                        compid="2:64"
                        comptype="View"
                      ></div>
                      <Button
                        className="common-pointer absolute bottom-[16%] font-semibold left-[4%] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                        compid="2:65"
                        comptype="Button"
                        onClick={handleNavigate1}
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Upgrade
                      </Button>
                      <Img
                        src="images/img_grid.svg"
                        className="test_grid"
                        compid="2:67"
                        comptype="Image"
                        alt="grid"
                      />
                      <Text
                        className="UpgradeyourAc"
                        compid="2:68"
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
          <Column className="w-[56%]" compid="1572" comptype="Column">
            <Row
              className="items-center justify-between ml-[1px] w-[96%]"
              compid="1568"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:56"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Hello, Samantha
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="flex w-[49%]"
                compid="2:102"
                comptype="SearchView"
                name="SearchBar"
                placeholder="What do you want eat today..."
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:mx-[6px] xl:w-[16px] xl:h-[17px] xl:mx-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mx-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mx-[10px] my-[auto]"
                    compid="2:104"
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
                size="mdSrc"
                variant="srcFillWhiteA700"
              ></Input>
            </Row>
            <Column
              className="bg-cover bg-repeat justify-end ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[96%]"
              compid="2:363"
              style={{ backgroundImage: "url('images/img_banner.svg')" }}
              comptype="Column"
            >
              <Text
                className="leading-[normal] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-white_A700 w-[37%]"
                compid="2:371"
                as="h3"
                variant="h3"
                comptype="Text"
              >
                Get Discount Voucher
                <br />
                Up To 20%{" "}
              </Text>
              <Text
                className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] not-italic text-white_A700 w-[45%]"
                compid="2:372"
                as="h6"
                variant="h6"
                comptype="Text"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.{" "}
              </Text>
            </Column>
            <Row
              className="items-start ml-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] w-[95%]"
              compid="2:236"
              comptype="Row"
            >
              <Text
                className="font-bold mt-[1px] text-bluegray_900 w-[auto]"
                compid="2:237"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Category
              </Text>
              <Text
                className="font-normal lg:ml-[438px] xl:ml-[548px] 2xl:ml-[616px] 3xl:ml-[740px] not-italic text-amber_600 w-[auto]"
                compid="2:238"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                View all
              </Text>
              <Img
                src="images/img_arrowright_amber_600.svg"
                className="lg:h-[5px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] mt-[4px] w-[1%]"
                compid="2:240"
                comptype="Image"
                alt="arrowright"
              />
            </Row>
            <Row
              className="items-center justify-between ml-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[96%]"
              compid="2:107"
              comptype="Row"
            >
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] items-center lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[85px]"
                compid="2:108"
                comptype="Column"
              >
                <Img
                  src="images/img_trash_1.svg"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] mt-[1px] lg:w-[29px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                  compid="2:109"
                  comptype="Image"
                  alt="trash One"
                />
                <Text
                  className="columntrash_one"
                  compid="2:126"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Bakery
                </Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] items-center lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[85px]"
                compid="2:127"
                comptype="Column"
              >
                <Img
                  src="images/img_car_53X55.svg"
                  className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] mt-[1px] w-[55%]"
                  compid="2:128"
                  comptype="Image"
                  alt="car"
                />
                <Text
                  className="columncar"
                  compid="2:152"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Burger
                </Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] items-center lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[85px]"
                compid="2:153"
                comptype="Column"
              >
                <Img
                  src="images/img_car_1.svg"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] mt-[1px] w-[48%]"
                  compid="2:154"
                  comptype="Image"
                  alt="car One"
                />
                <Text
                  className="columntrash_one"
                  compid="2:170"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Beverage
                </Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] items-center lg:px-[16px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[85px]"
                compid="2:171"
                comptype="Column"
              >
                <Img
                  src="images/img_chicken_54X55.svg"
                  className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] w-[56%]"
                  compid="2:172"
                  comptype="Image"
                  alt="Chicken"
                />
                <Text
                  className="columnchicken"
                  compid="2:187"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Chicken
                </Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] items-center lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[85px]"
                compid="2:188"
                comptype="Column"
              >
                <Img
                  src="images/img_dashboard_55X54.svg"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] w-[54%]"
                  compid="2:189"
                  comptype="Image"
                  alt="dashboard Two"
                />
                <Text
                  className="columndashboard"
                  compid="2:220"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Pizza
                </Text>
              </Column>
              <Column
                className="bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] items-center lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] rounded-radius16 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[85px]"
                compid="2:221"
                comptype="Column"
              >
                <Img
                  src="images/img_cut_55X55.svg"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:w-[29px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                  compid="2:222"
                  comptype="Image"
                  alt="cut One"
                />
                <Text
                  className="columndashboard"
                  compid="2:235"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Seafood
                </Text>
              </Column>
            </Row>
            <Row
              className="items-start ml-[1px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[95%]"
              compid="2:242"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:243"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Popular Dishes
              </Text>
              <Text
                className="font-normal lg:ml-[403px] xl:ml-[503px] 2xl:ml-[566px] 3xl:ml-[679px] mt-[1px] not-italic text-amber_600 w-[auto]"
                compid="2:244"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                View all
              </Text>
              <Img
                src="images/img_arrowright_amber_600.svg"
                className="lg:h-[5px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[1%]"
                compid="2:246"
                comptype="Image"
                alt="arrowright One"
              />
            </Row>
            <List
              className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] lg:gap-[8px] grid grid-cols-3 min-h-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[96%]"
              compid="2:247"
              comptype="List"
              orientation="horizontal"
            >
              <Stack
                className="lg:h-[194px] xl:h-[243px] 2xl:h-[273px] 3xl:h-[327px] w-[100%]"
                compid="2:248"
                comptype="Stack"
              >
                <Column
                  className="absolute bg-white_A700 items-end justify-start left-[0] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                  compid="1126"
                  comptype="Column"
                >
                  <Row
                    className="items-start justify-end ml-[auto] w-[83%]"
                    compid="1548"
                    comptype="Row"
                  >
                    <div
                      className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                      compid="2:252"
                      comptype="View"
                    ></div>
                    <Img
                      src="images/img_favorite.svg"
                      className="favorite3"
                      compid="2:266"
                      comptype="Image"
                      alt="favorite"
                    />
                  </Row>
                  <Column
                    className="justify-start lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"
                    compid="1575"
                    comptype="Column"
                  >
                    <RatingBar
                      className=""
                      compid="1579"
                      comptype="RatingBar"
                      value={5}
                      starCount={5}
                      activeColor="var(--amber_600)"
                      size={((window.innerWidth - 15) * 24) / 1920}
                    ></RatingBar>
                    <Row
                      className="items-center justify-evenly 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
                      compid="1549"
                      comptype="Row"
                    >
                      <Column
                        className="w-[82%]"
                        compid="2:253"
                        comptype="Column"
                      >
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          compid="2:254"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Fish Burger
                        </Text>
                        <Text
                          className="FiveHundredFiftyNine1"
                          compid="2:255"
                          as="h4"
                          variant="h4"
                          comptype="Text"
                        >
                          <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                            $
                          </span>
                          <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                            5.59
                          </span>
                        </Text>
                      </Column>
                      <Button
                        className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        compid="2:262"
                        comptype="IconButton"
                        shape="icbRoundedBorder8"
                        size="xlIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_plus.svg"
                          className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                          alt="plus"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Column>
                <Button
                  className="absolute font-normal left-[0] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center top-[8%] w-[28%]"
                  compid="2:267"
                  comptype="Button"
                  shape="CustomBorderLR8"
                  size="sm"
                  variant="FillRed400"
                >
                  15% Off
                </Button>
              </Stack>
              <Column
                className="bg-white_A700 items-end justify-start lg:pr-[14px] xl:pr-[18px] 2xl:pr-[21px] 3xl:pr-[25px] lg:py-[14px] xl:py-[18px] 2xl:py-[21px] 3xl:py-[25px] rounded-radius16 w-[100%]"
                compid="2:270"
                comptype="Column"
              >
                <Row
                  className="items-start mr-[4px] w-[98%]"
                  compid="1551"
                  comptype="Row"
                >
                  <Stack
                    className="xl:h-[123px] 2xl:h-[139px] 3xl:h-[166px] lg:h-[99px] w-[85%]"
                    compid="1546"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] inset-y-[0] my-[auto] right-[0] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                      compid="2:274"
                      comptype="View"
                    ></div>
                    <Button
                      className="absolute font-normal left-[0] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center top-[0] w-[37%]"
                      compid="2:289"
                      comptype="Button"
                      shape="CustomBorderLR8"
                      size="sm"
                      variant="FillRed400"
                    >
                      15% Off
                    </Button>
                  </Stack>
                  <Img
                    src="images/img_favorite_19X23.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[8%]"
                    compid="2:288"
                    comptype="Image"
                    alt="favorite One"
                  />
                </Row>
                <Column
                  className="justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[88%]"
                  compid="1576"
                  comptype="Column"
                >
                  <RatingBar
                    className=""
                    compid="1580"
                    comptype="RatingBar"
                    value={5}
                    starCount={5}
                    activeColor="var(--amber_600)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                  <Row
                    className="items-center justify-evenly 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
                    compid="1552"
                    comptype="Row"
                  >
                    <Column
                      className="w-[82%]"
                      compid="2:275"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:276"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Beef Burger
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine1"
                        compid="2:277"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          5.59
                        </span>
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      compid="2:284"
                      comptype="IconButton"
                      shape="icbRoundedBorder8"
                      size="xlIcn"
                      variant="icbFillAmber600"
                    >
                      <Img
                        src="images/img_plus.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="plus One"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-end justify-start lg:pr-[14px] xl:pr-[18px] 2xl:pr-[21px] 3xl:pr-[25px] lg:py-[14px] xl:py-[18px] 2xl:py-[21px] 3xl:py-[25px] rounded-radius16 w-[100%]"
                compid="2:292"
                comptype="Column"
              >
                <Row
                  className="items-start mr-[4px] w-[98%]"
                  compid="1554"
                  comptype="Row"
                >
                  <Stack
                    className="xl:h-[123px] 2xl:h-[139px] 3xl:h-[166px] lg:h-[99px] w-[85%]"
                    compid="1547"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] inset-y-[0] my-[auto] right-[0] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                      compid="2:296"
                      comptype="View"
                    ></div>
                    <Button
                      className="absolute font-normal left-[0] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center top-[0] w-[37%]"
                      compid="2:311"
                      comptype="Button"
                      shape="CustomBorderLR8"
                      size="sm"
                      variant="FillRed400"
                    >
                      15% Off
                    </Button>
                  </Stack>
                  <Img
                    src="images/img_favorite_19X23.svg"
                    className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[8%]"
                    compid="2:310"
                    comptype="Image"
                    alt="favorite Two"
                  />
                </Row>
                <Column
                  className="justify-start lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[88%]"
                  compid="1577"
                  comptype="Column"
                >
                  <RatingBar
                    className=""
                    compid="1581"
                    comptype="RatingBar"
                    value={5}
                    starCount={5}
                    activeColor="var(--amber_600)"
                    size={((window.innerWidth - 15) * 24) / 1920}
                  ></RatingBar>
                  <Row
                    className="items-center justify-evenly 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]"
                    compid="1555"
                    comptype="Row"
                  >
                    <Column
                      className="w-[82%]"
                      compid="2:297"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:298"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Cheese Burger
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine1"
                        compid="2:299"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          5.59
                        </span>
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      compid="2:306"
                      comptype="IconButton"
                      shape="icbRoundedBorder8"
                      size="xlIcn"
                      variant="icbFillAmber600"
                    >
                      <Img
                        src="images/img_plus.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="plus Two"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
            </List>
            <Row
              className="items-start ml-[1px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] w-[95%]"
              compid="2:315"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:316"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Recent Order
              </Text>
              <Text
                className="font-normal lg:ml-[414px] xl:ml-[518px] 2xl:ml-[583px] 3xl:ml-[699px] mt-[3px] not-italic text-amber_600 w-[auto]"
                compid="2:317"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                View all
              </Text>
              <Img
                src="images/img_arrowright_amber_600.svg"
                className="lg:h-[5px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[1%]"
                compid="2:319"
                comptype="Image"
                alt="arrowright Two"
              />
            </Row>
            <List
              className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] lg:gap-[8px] grid grid-cols-3 min-h-[auto] ml-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[96%]"
              compid="2:320"
              comptype="List"
              orientation="horizontal"
            >
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:321"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[83%]"
                  compid="1557"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:325"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite_19X23.svg"
                    className="favorite3"
                    compid="2:330"
                    comptype="Image"
                    alt="favorite Three"
                  />
                </Row>
                <Text
                  className="PepperoniPizza"
                  compid="2:327"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Fish Burger
                </Text>
                <Text
                  className="FiveHundredFiftyNine_Four"
                  compid="2:328"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    $
                  </span>
                  <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    5.59
                  </span>
                </Text>
                <Row
                  className="items-center justify-center mb-[4px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[54%]"
                  compid="2:331"
                  comptype="Row"
                >
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:332"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    4.97 km
                  </Text>
                  <div
                    className="bg-gray_400 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] rounded-radius50 lg:w-[3px] 2xl:w-[4px] xl:w-[4px] 3xl:w-[5px]"
                    compid="2:333"
                    comptype="View"
                  ></div>
                  <Text
                    className="test_21min"
                    compid="2:334"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    21 min
                  </Text>
                </Row>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:335"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[83%]"
                  compid="1558"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:339"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite_19X23.svg"
                    className="favorite3"
                    compid="2:344"
                    comptype="Image"
                    alt="favorite Four"
                  />
                </Row>
                <Text
                  className="font-medium lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] text-bluegray_900 w-[auto]"
                  compid="2:341"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Japan Ramen
                </Text>
                <Text
                  className="FiveHundredFiftyNine_Four"
                  compid="2:342"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    $
                  </span>
                  <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    5.59
                  </span>
                </Text>
                <Row
                  className="items-center justify-center mb-[4px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[54%]"
                  compid="2:345"
                  comptype="Row"
                >
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:346"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    4.97 km
                  </Text>
                  <div
                    className="bg-gray_400 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] rounded-radius50 lg:w-[3px] 2xl:w-[4px] xl:w-[4px] 3xl:w-[5px]"
                    compid="2:347"
                    comptype="View"
                  ></div>
                  <Text
                    className="test_21min"
                    compid="2:348"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    21 min
                  </Text>
                </Row>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:349"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[83%]"
                  compid="1559"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:353"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite_19X23.svg"
                    className="favorite3"
                    compid="2:358"
                    comptype="Image"
                    alt="favorite Five"
                  />
                </Row>
                <Text
                  className="font-medium lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-bluegray_900 w-[auto]"
                  compid="2:355"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Fried Rice
                </Text>
                <Text
                  className="font-bold xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-red_400 w-[auto]"
                  compid="2:356"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    $
                  </span>
                  <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                    5.59
                  </span>
                </Text>
                <Row
                  className="items-center justify-center mb-[4px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[54%]"
                  compid="2:359"
                  comptype="Row"
                >
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:360"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    4.97 km
                  </Text>
                  <div
                    className="bg-gray_400 lg:h-[4px] 2xl:h-[5px] xl:h-[5px] 3xl:h-[6px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] rounded-radius50 lg:w-[3px] 2xl:w-[4px] xl:w-[4px] 3xl:w-[5px]"
                    compid="2:361"
                    comptype="View"
                  ></div>
                  <Text
                    className="test_21min"
                    compid="2:362"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    21 min
                  </Text>
                </Row>
              </Column>
            </List>
          </Column>
          <Column
            className="bg-white_A700 lg:p-[21px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[24%]"
            compid="2:373"
            comptype="Column"
          >
            <Img
              src="images/img_menu_white_A700.svg"
              className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
              compid="2:375"
              comptype="Image"
              alt="menu"
            />
            <Text
              className="OrderTracker"
              compid="2:415"
              as="h4"
              variant="h4"
              comptype="Text"
            >
              Your Balance
            </Text>
            <Row
              className="bg-cover bg-repeat items-center justify-end lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] w-[100%]"
              compid="1563"
              style={{ backgroundImage: "url('images/img_group1563.svg')" }}
              comptype="Row"
            >
              <Column
                className="bg-white_A700 my-[1px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius16 w-[51%]"
                compid="2:412"
                comptype="Column"
              >
                <Text
                  className="mt-[2px] pagination"
                  compid="2:413"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Balance
                </Text>
                <Text
                  className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                  compid="2:414"
                  as="h3"
                  variant="h3"
                  comptype="Text"
                >
                  $12.000
                </Text>
              </Column>
              <Column
                className="items-center lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[41%]"
                compid="1562"
                comptype="Column"
              >
                <Row
                  className="items-center justify-between w-[99%]"
                  compid="1560"
                  comptype="Row"
                >
                  <Button
                    className="flex lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                    compid="2:400"
                    comptype="IconButton"
                    shape="icbRoundedBorder16"
                    size="xlIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_clock_56X56.svg"
                      className="flex items-center justify-center"
                      alt="clock"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                    compid="2:405"
                    comptype="IconButton"
                    shape="icbRoundedBorder16"
                    size="xlIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_volume_56X56.svg"
                      className="flex items-center justify-center"
                      alt="volume One"
                    />
                  </Button>
                </Row>
                <Row
                  className="items-start justify-between xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[97%]"
                  compid="1561"
                  comptype="Row"
                >
                  <Text
                    className="mt-[2px] July"
                    compid="2:410"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Top Up
                  </Text>
                  <Text
                    className="July"
                    compid="2:411"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Transfer
                  </Text>
                </Row>
              </Column>
            </Row>
            <Text
              className="YourAddress"
              compid="2:461"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              Your Address
            </Text>
            <Row
              className="items-start ml-[3px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[99%]"
              compid="2:462"
              comptype="Row"
            >
              <Img
                src="images/img_location.svg"
                className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[5%]"
                compid="2:465"
                comptype="Image"
                alt="location"
              />
              <Text
                className="font-bold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                compid="2:463"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Elm Street, 23
              </Text>
              <Button
                className="font-normal 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[26%]"
                compid="2:466"
                comptype="Button"
                shape="RoundedBorder8"
                size="sm"
                variant="OutlineAmber6001_2"
              >
                Change
              </Button>
            </Row>
            <Text
              className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] not-italic text-gray_500 w-[95%]"
              compid="2:475"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.{" "}
            </Text>
            <Row
              className="items-center lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[63%]"
              compid="1564"
              comptype="Row"
            >
              <Button
                className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[51%]"
                compid="2:469"
                comptype="Button"
                shape="RoundedBorder8"
                size="md"
                variant="OutlineGray5001_2"
              >
                Add Details
              </Button>
              <Button
                className="font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                compid="2:472"
                comptype="Button"
                shape="RoundedBorder8"
                size="md"
                variant="OutlineGray5001_2"
              >
                Add Note
              </Button>
            </Row>
            <Text
              className="OrderTracker"
              compid="2:426"
              as="h4"
              variant="h4"
              comptype="Text"
            >
              Order Menu
            </Text>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]"
              compid="1578"
              comptype="List"
              orientation="vertical"
            >
              <Row className="food_order1" compid="2:427" comptype="Row">
                <div
                  className="bg-gray_400 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius16 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  compid="2:430"
                  comptype="View"
                ></div>
                <Column className="w-[53%]" compid="2:431" comptype="Column">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="2:432"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Pepperoni Pizza
                  </Text>
                  <Text
                    className="x1"
                    compid="2:433"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    x1
                  </Text>
                </Column>
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  compid="2:434"
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
                compid="2:459"
                comptype="Line"
              />
              <Row className="food_order1" compid="2:435" comptype="Row">
                <div
                  className="bg-gray_400 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius16 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  compid="2:438"
                  comptype="View"
                ></div>
                <Column className="w-[53%]" compid="2:439" comptype="Column">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="2:440"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Cheese Burger
                  </Text>
                  <Text
                    className="x1"
                    compid="2:441"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    x1
                  </Text>
                </Column>
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  compid="2:442"
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
                compid="2:459"
                comptype="Line"
              />
              <Row className="food_order1" compid="2:443" comptype="Row">
                <div
                  className="bg-gray_400 lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] rounded-radius16 lg:w-[42px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  compid="2:446"
                  comptype="View"
                ></div>
                <Column className="w-[53%]" compid="2:447" comptype="Column">
                  <Text
                    className="font-semibold text-bluegray_900 w-[auto]"
                    compid="2:448"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Vegan Pizza
                  </Text>
                  <Text
                    className="x1"
                    compid="2:449"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    x1
                  </Text>
                </Column>
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  compid="2:450"
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
              className="items-start justify-between 3xl:mt-[111px] lg:mt-[66px] xl:mt-[82px] 2xl:mt-[93px] w-[100%]"
              compid="2:456"
              comptype="Row"
            >
              <Text
                className="font-medium mt-[1px] text-gray_500 w-[auto]"
                compid="2:457"
                as="h6"
                variant="h6"
                comptype="Text"
              >
                Service
              </Text>
              <Text
                className="font-medium text-bluegray_900 w-[auto]"
                compid="2:458"
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
                  1.00
                </span>
              </Text>
            </Row>
            <Row
              className="items-start justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
              compid="2:453"
              comptype="Row"
            >
              <Text
                className="Total_Six"
                compid="2:454"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                Total
              </Text>
              <Text
                className="font-medium text-red_400 w-[auto]"
                compid="2:455"
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
            <Row
              className="bg-gray_100 border border-amber_600 border-solid items-center justify-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius16 w-[100%]"
              compid="2:417"
              comptype="Row"
            >
              <Stack
                className="bg-amber_600 lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius12 lg:w-[21px] xl:w-[26px] 2xl:w-[30px] 3xl:w-[36px]"
                compid="2:418"
                comptype="Stack"
              >
                <Img
                  src="images/img_settings_48X48.svg"
                  className="absolute lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] inset-[0] justify-center m-[auto] w-[55%]"
                  compid="2:421"
                  comptype="Image"
                  alt="settings One"
                />
              </Stack>
              <Text
                className="rowplaceholder"
                compid="2:422"
                as="h6"
                variant="h6"
                comptype="Text"
              >
                Have a coupon code?
              </Text>
              <Img
                src="images/img_arrowright_bluegray_900.svg"
                className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mr-[26px] xl:mr-[33px] 2xl:mr-[37px] 3xl:mr-[45px] w-[2%]"
                compid="2:424"
                comptype="Image"
                alt="arrowright Three"
              />
            </Row>
            <Button
              className="font-medium lg:mb-[138px] xl:mb-[173px] 2xl:mb-[195px] 3xl:mb-[234px] ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[99%]"
              compid="2:451"
              comptype="Button"
              shape="RoundedBorder16"
              size="2xl"
              variant="FillAmber600"
            >
              Checkout
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardCustomerPage;

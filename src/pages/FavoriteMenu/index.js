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
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const FavoriteMenuPage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate6() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate42() {
    navigate("/settingscustomer");
  }
  function handleNavigate43() {
    navigate("/bills");
  }
  function handleNavigate44() {
    navigate("/orderhistory");
  }
  function handleNavigate45() {
    navigate("/chat");
  }
  function handleNavigate46() {
    navigate("/foodorder");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-end mx-[auto] lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] w-[100%]"
        compid="2:876"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[100%]"
          compid="1310"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1141" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:890"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:934"
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
                  className="justify-start xl:mb-[108px] 2xl:mb-[122px] 3xl:mb-[146px] lg:mb-[87px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  compid="1311"
                  comptype="Column"
                >
                  <Row
                    className="common-pointer items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:903"
                    comptype="Row"
                    onClick={handleNavigate2}
                  >
                    <Img
                      src="images/img_trash_48X48.svg"
                      className="Vector"
                      compid="2:905"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="dashboard"
                      compid="2:906"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius1204 w-[63%]"
                    compid="2:907"
                    comptype="Row"
                    onClick={handleNavigate46}
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:909"
                      comptype="Image"
                      alt="Vector One"
                    />
                    <Text
                      className="foodorder"
                      compid="2:910"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="bg-amber_600 items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]"
                    compid="2:911"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_volume_24X28.svg"
                      className="OrderDiscussio"
                      compid="2:913"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="foodorder1"
                      compid="2:914"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Favorite
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[58%]"
                    compid="2:915"
                    comptype="Row"
                    onClick={handleNavigate45}
                  >
                    <Img
                      src="images/img_orderdiscussio_24X28.svg"
                      className="OrderDiscussio1"
                      compid="2:916"
                      comptype="Image"
                      alt="OrderDiscussio"
                    />
                    <Text
                      className="message1"
                      compid="2:919"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Message
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[73%]"
                    compid="2:920"
                    comptype="Row"
                    onClick={handleNavigate44}
                  >
                    <Img
                      src="images/img_music.svg"
                      className="music"
                      compid="2:921"
                      comptype="Image"
                      alt="music"
                    />
                    <Text
                      className="orderhistory"
                      compid="2:925"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Order History
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius1416 w-[37%]"
                    compid="2:926"
                    comptype="Row"
                    onClick={handleNavigate43}
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:928"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="bills"
                      compid="2:929"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Bills
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:930"
                    comptype="Row"
                    onClick={handleNavigate42}
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:932"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:933"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]"
                    compid="2:892"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:893"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1106"
                      comptype="Stack"
                    >
                      <div
                        className="absolute bg-gradient3  bottom-[0] 3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] right-[0] rounded-radius5573 w-[40%]"
                        compid="2:897"
                        comptype="View"
                      ></div>
                      <Button
                        className="common-pointer absolute bottom-[16%] font-semibold left-[4%] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                        compid="2:898"
                        comptype="Button"
                        onClick={handleNavigate6}
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Upgrade
                      </Button>
                      <Img
                        src="images/img_grid.svg"
                        className="test_grid"
                        compid="2:900"
                        comptype="Image"
                        alt="grid"
                      />
                      <Text
                        className="UpgradeyourAc"
                        compid="2:901"
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
            className="items-center w-[80%]"
            compid="1309"
            comptype="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compid="1305"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:889"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Favorite Menu
              </Text>
              <Img
                src="images/img_menu.svg"
                className="menu"
                compid="2:935"
                comptype="Image"
                alt="menu"
              />
            </Row>
            <Row
              className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="1306"
              comptype="Row"
            >
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="flex w-[49%]"
                compid="2:953"
                comptype="SearchView"
                name="SearchBar"
                placeholder="What do you want eat today..."
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:mx-[6px] xl:w-[16px] xl:h-[17px] xl:mx-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mx-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mx-[10px] my-[auto]"
                    compid="2:955"
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
              <Img
                src="images/img_button.svg"
                className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius16 w-[10%]"
                compid="2:877"
                comptype="Image"
                alt="button"
              />
            </Row>
            <Grid
              className="xl:gap-[12px] 2xl:gap-[13px] 3xl:gap-[16px] lg:gap-[9px] grid grid-cols-4 lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="1320"
              comptype="Grid"
            >
              <Column
                className="bg-white_A700 items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:974"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[80%]"
                  compid="1266"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:979"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite.svg"
                    className="favorite2"
                    compid="2:988"
                    comptype="Image"
                    alt="favorite"
                  />
                </Row>
                <Column
                  className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  compid="1312"
                  comptype="Column"
                >
                  <Text
                    className="columnfastfoodresto"
                    compid="2:998"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start ml-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[73%]"
                    compid="2:989"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_5.svg"
                      className="StarOne"
                      compid="2:991"
                      comptype="Image"
                      alt="StarOne"
                    />
                    <Text
                      className="rate"
                      compid="2:992"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:993"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:995"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:996"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:997"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.97km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:976"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] w-[100%]"
                    compid="2:980"
                    comptype="Row"
                  >
                    <Column
                      className="mb-[1px] w-[84%]"
                      compid="2:981"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:982"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Fish Burger
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine1"
                        compid="2:983"
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
                      compid="2:984"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
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
              <Column
                className="bg-white_A700 items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:999"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[80%]"
                  compid="1270"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:1004"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite.svg"
                    className="favorite2"
                    compid="2:1013"
                    comptype="Image"
                    alt="favorite One"
                  />
                </Row>
                <Column
                  className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  compid="1313"
                  comptype="Column"
                >
                  <Text
                    className="columnfastfoodresto"
                    compid="2:1023"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start ml-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[73%]"
                    compid="2:1014"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_6.svg"
                      className="StarOne"
                      compid="2:1016"
                      comptype="Image"
                      alt="StarOne One"
                    />
                    <Text
                      className="rate"
                      compid="2:1017"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1018"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1020"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1021"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1022"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.97km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:1001"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] w-[100%]"
                    compid="2:1005"
                    comptype="Row"
                  >
                    <Column
                      className="mb-[1px] w-[84%]"
                      compid="2:1006"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:1007"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Beef Burger
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine1"
                        compid="2:1008"
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
                      compid="2:1009"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
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
                className="bg-white_A700 items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:1024"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[80%]"
                  compid="1274"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:1029"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite.svg"
                    className="favorite2"
                    compid="2:1038"
                    comptype="Image"
                    alt="favorite Two"
                  />
                </Row>
                <Column
                  className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  compid="1314"
                  comptype="Column"
                >
                  <Text
                    className="columnfastfoodresto"
                    compid="2:1048"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start ml-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[73%]"
                    compid="2:1039"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_7.svg"
                      className="StarOne"
                      compid="2:1041"
                      comptype="Image"
                      alt="StarOne Two"
                    />
                    <Text
                      className="rate"
                      compid="2:1042"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1043"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1045"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1046"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1047"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.97km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:1026"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] w-[100%]"
                    compid="2:1030"
                    comptype="Row"
                  >
                    <Column
                      className="mt-[1px] w-[84%]"
                      compid="2:1031"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:1032"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Cheese Burger
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine1"
                        compid="2:1033"
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
                      compid="2:1034"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
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
              <Column
                className="bg-white_A700 items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:1049"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[80%]"
                  compid="1278"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:1054"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite.svg"
                    className="favorite2"
                    compid="2:1063"
                    comptype="Image"
                    alt="favorite Three"
                  />
                </Row>
                <Column
                  className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  compid="1315"
                  comptype="Column"
                >
                  <Text
                    className="columnfastfoodresto"
                    compid="2:1073"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start ml-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[73%]"
                    compid="2:1064"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_8.svg"
                      className="StarOne"
                      compid="2:1066"
                      comptype="Image"
                      alt="StarOne Three"
                    />
                    <Text
                      className="rate"
                      compid="2:1067"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1068"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1070"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1071"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1072"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.97km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:1051"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] w-[100%]"
                    compid="2:1055"
                    comptype="Row"
                  >
                    <Column
                      className="mt-[1px] w-[84%]"
                      compid="2:1056"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:1057"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Double Burger
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine1"
                        compid="2:1058"
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
                      compid="2:1059"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
                      size="xlIcn"
                      variant="icbFillAmber600"
                    >
                      <Img
                        src="images/img_plus.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="plus Three"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:1074"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[80%]"
                  compid="1282"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:1079"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite.svg"
                    className="favorite2"
                    compid="2:1088"
                    comptype="Image"
                    alt="favorite Four"
                  />
                </Row>
                <Column
                  className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  compid="1316"
                  comptype="Column"
                >
                  <Text
                    className="columnfastfoodresto"
                    compid="2:1098"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start ml-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[73%]"
                    compid="2:1089"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_9.svg"
                      className="StarOne"
                      compid="2:1091"
                      comptype="Image"
                      alt="StarOne Four"
                    />
                    <Text
                      className="rate"
                      compid="2:1092"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1093"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1095"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1096"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1097"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.97km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:1076"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] w-[100%]"
                    compid="2:1080"
                    comptype="Row"
                  >
                    <Column
                      className="mb-[1px] w-[84%]"
                      compid="2:1081"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:1082"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Pepperoni Pizza
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine1"
                        compid="2:1083"
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
                      compid="2:1084"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
                      size="xlIcn"
                      variant="icbFillAmber600"
                    >
                      <Img
                        src="images/img_plus.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="plus Four"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:1099"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[80%]"
                  compid="1286"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:1104"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite.svg"
                    className="favorite2"
                    compid="2:1113"
                    comptype="Image"
                    alt="favorite Five"
                  />
                </Row>
                <Column
                  className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  compid="1317"
                  comptype="Column"
                >
                  <Text
                    className="columnfastfoodresto"
                    compid="2:1123"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start ml-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[73%]"
                    compid="2:1114"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_10.svg"
                      className="StarOne"
                      compid="2:1116"
                      comptype="Image"
                      alt="StarOne Five"
                    />
                    <Text
                      className="rate"
                      compid="2:1117"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1118"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1120"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1121"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1122"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.97km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:1101"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] w-[100%]"
                    compid="2:1105"
                    comptype="Row"
                  >
                    <Column
                      className="mt-[1px] w-[84%]"
                      compid="2:1106"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:1107"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Japanese Ramen
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine1"
                        compid="2:1108"
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
                      compid="2:1109"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
                      size="xlIcn"
                      variant="icbFillAmber600"
                    >
                      <Img
                        src="images/img_plus.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="plus Five"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:1124"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[80%]"
                  compid="1290"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:1129"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite.svg"
                    className="favorite2"
                    compid="2:1138"
                    comptype="Image"
                    alt="favorite Six"
                  />
                </Row>
                <Column
                  className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  compid="1318"
                  comptype="Column"
                >
                  <Text
                    className="columnfastfoodresto"
                    compid="2:1148"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start ml-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[73%]"
                    compid="2:1139"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_11.svg"
                      className="StarOne"
                      compid="2:1141"
                      comptype="Image"
                      alt="StarOne Six"
                    />
                    <Text
                      className="rate"
                      compid="2:1142"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1143"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1145"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1146"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1147"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.97km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:1126"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] py-[4px] w-[100%]"
                    compid="2:1130"
                    comptype="Row"
                  >
                    <Column
                      className="mb-[2px] w-[84%]"
                      compid="2:1131"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:1132"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Fried Rice
                      </Text>
                      <Text
                        className="font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] text-red_400 w-[auto]"
                        compid="2:1133"
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
                      compid="2:1134"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
                      size="xlIcn"
                      variant="icbFillAmber600"
                    >
                      <Img
                        src="images/img_plus.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="plus Six"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-end justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
                compid="2:1149"
                comptype="Column"
              >
                <Row
                  className="items-start justify-end ml-[auto] w-[80%]"
                  compid="1294"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                    compid="2:1154"
                    comptype="View"
                  ></div>
                  <Img
                    src="images/img_favorite.svg"
                    className="favorite2"
                    compid="2:1163"
                    comptype="Image"
                    alt="favorite Seven"
                  />
                </Row>
                <Column
                  className="justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  compid="1319"
                  comptype="Column"
                >
                  <Text
                    className="columnfastfoodresto"
                    compid="2:1173"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Fast Food Resto
                  </Text>
                  <Row
                    className="items-start ml-[3px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[73%]"
                    compid="2:1164"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_star1_12.svg"
                      className="StarOne"
                      compid="2:1166"
                      comptype="Image"
                      alt="StarOne Seven"
                    />
                    <Text
                      className="rate"
                      compid="2:1167"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      5.0
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1168"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1170"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      1k+ Reviews
                    </Text>
                    <div
                      className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                      compid="2:1171"
                      comptype="View"
                    ></div>
                    <Text
                      className="rate"
                      compid="2:1172"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      2.97km
                    </Text>
                  </Row>
                  <Line
                    className="bg-gray_300 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    compid="2:1151"
                    comptype="Line"
                  />
                  <Row
                    className="items-center justify-evenly xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:py-[3px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] w-[100%]"
                    compid="2:1155"
                    comptype="Row"
                  >
                    <Column
                      className="mb-[1px] w-[84%]"
                      compid="2:1156"
                      comptype="Column"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:1157"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Vegan Pizza
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine1"
                        compid="2:1158"
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
                      compid="2:1159"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
                      size="xlIcn"
                      variant="icbFillAmber600"
                    >
                      <Img
                        src="images/img_plus.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="plus Seven"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Grid>
            <footer
              className="lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[99%]"
              compid="2:957"
              comptype="Footer"
            >
              <Row
                className="items-center 3xl:mr-[10px] lg:mr-[6px] xl:mr-[8px] 2xl:mr-[9px] w-[99%]"
                compid="1171"
                comptype="Row"
              >
                <Text
                  className="pagination"
                  compid="2:958"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                    Showing{" "}
                  </span>
                  <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                    1-5
                  </span>
                  <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                    {" "}
                  </span>
                  <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                    from
                  </span>
                  <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                    {" "}
                  </span>
                  <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                    100
                  </span>
                  <span className="text-bluegray_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                    {" "}
                  </span>
                  <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                    data
                  </span>
                </Text>
                <Img
                  src="images/img_arrowleft.svg"
                  className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] lg:ml-[550px] xl:ml-[688px] 2xl:ml-[774px] 3xl:ml-[929px] w-[1%]"
                  compid="2:961"
                  comptype="Image"
                  alt="arrowleft"
                />
                <Button
                  className="font-normal lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                  compid="2:962"
                  comptype="Button"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillAmber60063"
                >
                  1
                </Button>
                <Button
                  className="font-normal lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
                  compid="2:965"
                  comptype="Button"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillAmber600"
                >
                  2
                </Button>
                <Button
                  className="font-normal lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
                  compid="2:968"
                  comptype="Button"
                  shape="RoundedBorder16"
                  size="lg"
                  variant="FillAmber60063"
                >
                  3
                </Button>
                <Img
                  src="images/img_arrowright.svg"
                  className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] w-[1%]"
                  compid="2:972"
                  comptype="Image"
                  alt="arrowright"
                />
              </Row>
            </footer>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default FavoriteMenuPage;

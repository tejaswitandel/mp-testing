import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Stack,
  Button,
  List,
  Grid,
  Input,
  TextArea,
} from "components";
import { useNavigate } from "react-router-dom";

const SettingsCustomerPage = () => {
  const navigate = useNavigate();

  function handleNavigate15() {
    navigate("/chat");
  }
  function handleNavigate16() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate19() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate54() {
    navigate("/bills");
  }
  function handleNavigate55() {
    navigate("/orderhistory");
  }
  function handleNavigate56() {
    navigate("/favoritemenu");
  }
  function handleNavigate57() {
    navigate("/foodorder");
  }

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:1986"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[98%]"
          compid="1332"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1143" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-end lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:2005"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:2049"
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
                  compid="1334"
                  comptype="Column"
                >
                  <Row
                    className="common-pointer items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:2018"
                    comptype="Row"
                    onClick={handleNavigate16}
                  >
                    <Img
                      src="images/img_trash_48X48.svg"
                      className="Vector"
                      compid="2:2020"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="dashboard"
                      compid="2:2021"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius1204 w-[63%]"
                    compid="2:2022"
                    comptype="Row"
                    onClick={handleNavigate57}
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:2024"
                      comptype="Image"
                      alt="Vector One"
                    />
                    <Text
                      className="foodorder"
                      compid="2:2025"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius1232 w-[52%]"
                    compid="2:2026"
                    comptype="Row"
                    onClick={handleNavigate56}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume"
                      compid="2:2028"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:2029"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Favorite
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer bg-amber_600 items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]"
                    compid="2:2030"
                    comptype="Row"
                    onClick={handleNavigate15}
                  >
                    <Img
                      src="images/img_orderdiscussio.svg"
                      className="OrderDiscussio"
                      compid="2:2031"
                      comptype="Image"
                      alt="OrderDiscussio"
                    />
                    <Text
                      className="message"
                      compid="2:2034"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Message
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[73%]"
                    compid="2:2035"
                    comptype="Row"
                    onClick={handleNavigate55}
                  >
                    <Img
                      src="images/img_music.svg"
                      className="music"
                      compid="2:2036"
                      comptype="Image"
                      alt="music"
                    />
                    <Text
                      className="orderhistory"
                      compid="2:2040"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Order History
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius1416 w-[37%]"
                    compid="2:2041"
                    comptype="Row"
                    onClick={handleNavigate54}
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:2043"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="bills"
                      compid="2:2044"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Bills
                    </Text>
                  </Row>
                  <Row
                    className="items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:2045"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:2047"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:2048"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]"
                    compid="2:2007"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:2008"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1107"
                      comptype="Stack"
                    >
                      <div
                        className="absolute bg-gradient3  bottom-[0] 3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] right-[0] rounded-radius5573 w-[40%]"
                        compid="2:2012"
                        comptype="View"
                      ></div>
                      <Button
                        className="common-pointer absolute bottom-[16%] font-semibold left-[4%] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                        compid="2:2013"
                        comptype="Button"
                        onClick={handleNavigate19}
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Upgrade
                      </Button>
                      <Img
                        src="images/img_grid.svg"
                        className="test_grid"
                        compid="2:2015"
                        comptype="Image"
                        alt="grid"
                      />
                      <Text
                        className="UpgradeyourAc"
                        compid="2:2016"
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
            compid="1331"
            comptype="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compid="1330"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:1987"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Settings
              </Text>
              <Img
                src="images/img_menu.svg"
                className="menu"
                compid="2:1988"
                comptype="Image"
                alt="menu"
              />
            </Row>
            <Row
              className="bg-cover bg-repeat items-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]"
              compid="1109"
              style={{ backgroundImage: "url('images/img_group1109.svg')" }}
              comptype="Row"
            >
              <Stack
                className="lg:h-[331px] xl:h-[414px] 2xl:h-[466px] 3xl:h-[559px] w-[26%]"
                compid="1333"
                comptype="Stack"
              >
                <div
                  className="absolute bg-gray_100_a2 lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[96px] rounded-radius16 top-[0] w-[100%]"
                  compid="2:2054"
                  comptype="View"
                ></div>
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] w-[92%]"
                  compid="2:2055"
                  comptype="Column"
                >
                  <Row
                    className="items-start justify-between pr-[3px] py-[3px] w-[98%]"
                    compid="2:2056"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_lightbulb.svg"
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] w-[3%]"
                      compid="2:2062"
                      comptype="Image"
                      alt="lightbulb"
                    />
                    <Column
                      className="justify-start mb-[1px] xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] w-[84%]"
                      compid="2:2057"
                      comptype="Column"
                    >
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        compid="2:2059"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Account
                      </Text>
                      <Text
                        className="Loremipsumdol6"
                        compid="2:2058"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </Text>
                    </Column>
                  </Row>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pt-[56px] xl:pt-[70px] 2xl:pt-[79px] 3xl:pt-[95px] w-[100%]"
                    compid="1336"
                    comptype="List"
                    orientation="vertical"
                  >
                    <Row
                      className="listcontrast"
                      compid="2:2074"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_contrast.svg"
                        className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] w-[6%]"
                        compid="2:2080"
                        comptype="Image"
                        alt="contrast"
                      />
                      <Column
                        className="justify-start xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] mt-[1px] w-[83%]"
                        compid="2:2075"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:2077"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Security
                        </Text>
                        <Text
                          className="Loremipsumdol_One1"
                          compid="2:2076"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </Text>
                      </Column>
                    </Row>
                    <Row
                      className="items-start justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] pr-[2px] py-[2px] w-[100%]"
                      compid="2:2065"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_laptop.svg"
                        className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] mt-[4px] w-[6%]"
                        compid="2:2071"
                        comptype="Image"
                        alt="laptop"
                      />
                      <Column
                        className="justify-start mb-[1px] xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] lg:mr-[8px] w-[83%]"
                        compid="2:2066"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:2068"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Notification
                        </Text>
                        <Text
                          className="Loremipsumdol6"
                          compid="2:2067"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </Text>
                      </Column>
                    </Row>
                    <Row
                      className="listcontrast"
                      compid="2:2083"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="trash_One"
                        compid="2:2089"
                        comptype="Image"
                        alt="trash One"
                      />
                      <Column
                        className="justify-start xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] mt-[1px] w-[83%]"
                        compid="2:2084"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:2086"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Payment
                        </Text>
                        <Text
                          className="Loremipsumdol_One1"
                          compid="2:2085"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </Text>
                      </Column>
                    </Row>
                    <Row
                      className="listcontrast"
                      compid="2:2092"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="trash_One"
                        compid="2:2098"
                        comptype="Image"
                        alt="settings Two"
                      />
                      <Column
                        className="justify-start xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] mt-[1px] w-[83%]"
                        compid="2:2093"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:2095"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Help
                        </Text>
                        <Text
                          className="Loremipsumdol_One1"
                          compid="2:2094"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </Text>
                      </Column>
                    </Row>
                    <Row
                      className="listcontrast"
                      compid="2:2105"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_share.svg"
                        className="share"
                        compid="2:2111"
                        comptype="Image"
                        alt="share"
                      />
                      <Column
                        className="justify-start xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] mt-[1px] w-[83%]"
                        compid="2:2106"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:2108"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Privacy Policy
                        </Text>
                        <Text
                          className="Loremipsumdol_One1"
                          compid="2:2107"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor.
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
              </Stack>
              <Column
                className="justify-start lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[63%]"
                compid="2:2117"
                comptype="Column"
              >
                <Text
                  className="font-bold font-inter text-bluegray_900 w-[auto]"
                  compid="2:2120"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  Account
                </Text>
                <Text
                  className="lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] password"
                  compid="2:2122"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Photo Profile
                </Text>
                <Row
                  className="font-poppins items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[45%]"
                  compid="1321"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] rounded-radius16 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"
                    compid="2:2123"
                    comptype="View"
                  ></div>
                  <Button
                    className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[39%]"
                    compid="2:2124"
                    comptype="Button"
                    shape="RoundedBorder8"
                    size="lg"
                    variant="OutlineGray500"
                  >
                    Change photo
                  </Button>
                  <Text
                    className="rowplaceholder"
                    compid="2:2127"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Remove
                  </Text>
                </Row>
                <Grid
                  className="font-poppins lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]"
                  compid="1335"
                  comptype="Grid"
                >
                  <Column
                    className="justify-start w-[100%]"
                    compid="2:2154"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2155"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Username
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 form"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      compid="2:2156"
                      comptype="EditText"
                      name="form"
                      placeholder="Jordan Nico"
                    ></Input>
                  </Column>
                  <Column
                    className="justify-start w-[100%]"
                    compid="2:2159"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2160"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Phone
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 form"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      compid="2:2161"
                      comptype="EditText"
                      name="form One"
                      placeholder="+123456789"
                    ></Input>
                  </Column>
                  <Column
                    className="justify-start w-[100%]"
                    compid="2:2128"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2129"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Email
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 form"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      compid="2:2130"
                      comptype="EditText"
                      name="form Two"
                      placeholder="ordanico@mail.com"
                    ></Input>
                  </Column>
                  <Column
                    className="justify-start w-[100%]"
                    compid="2:2133"
                    comptype="Column"
                  >
                    <Text
                      className="password"
                      compid="2:2134"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Password
                    </Text>
                    <Input
                      className="font-bold font-inter p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      compid="2:2135"
                      type="password"
                      comptype="EditText"
                      name="form Three"
                      placeholder="••••••••"
                      size="sm"
                    ></Input>
                  </Column>
                </Grid>
                <Row
                  className="font-poppins items-center justify-evenly lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pt-[4px] w-[100%]"
                  compid="2:2138"
                  comptype="Row"
                >
                  <Column className="w-[52%]" compid="2:2139" comptype="Column">
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2140"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Your Locatiom
                    </Text>
                    <Row
                      className="bg-gray_400 items-start justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[92%]"
                      compid="1108"
                      comptype="Row"
                    >
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:2145"
                        comptype="IconButton"
                        size="mdIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_location_32X32.svg"
                          className="flex items-center justify-center"
                          alt="location"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:2164"
                        comptype="IconButton"
                        shape="icbRoundedBorder8"
                        size="mdIcn"
                        variant="icbOutlineBlack90026"
                      >
                        <Img
                          src="images/img_location_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="location One"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="w-[48%]" compid="2:2149" comptype="Column">
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2150"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Address Details
                    </Text>
                    <TextArea
                      className="font-medium leading-[normal] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                      compid="2:2151"
                      comptype="TextArea"
                      name="form Four"
                      placeholder={`Franklin Avenue Street 
New York, ABC 5562
United State`}
                    ></TextArea>
                  </Column>
                </Row>
                <Button
                  className="font-medium font-poppins lg:ml-[377px] xl:ml-[471px] 2xl:ml-[530px] 3xl:ml-[636px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                  compid="2:2118"
                  comptype="Button"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillAmber600"
                >
                  Save Setting
                </Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SettingsCustomerPage;

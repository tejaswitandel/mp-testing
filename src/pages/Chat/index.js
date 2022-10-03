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
  Line,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate5() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate70() {
    navigate("/bills");
  }
  function handleNavigate73() {
    navigate("/foodorder");
  }
  function handleNavigate79() {
    navigate("/favoritemenu");
  }
  function handleNavigate80() {
    navigate("/settingscustomer");
  }
  function handleNavigate81() {
    navigate("/orderhistory");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:1174"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[98%]"
          compid="1619"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1169" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-end lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:1322"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:1366"
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
                  compid="1620"
                  comptype="Column"
                >
                  <Row
                    className="common-pointer items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:1335"
                    comptype="Row"
                    onClick={handleNavigate5}
                  >
                    <Img
                      src="images/img_trash_48X48.svg"
                      className="Vector"
                      compid="2:1337"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="dashboard"
                      compid="2:1338"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius1204 w-[63%]"
                    compid="2:1339"
                    comptype="Row"
                    onClick={handleNavigate73}
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:1341"
                      comptype="Image"
                      alt="Vector One"
                    />
                    <Text
                      className="foodorder"
                      compid="2:1342"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius1232 w-[52%]"
                    compid="2:1343"
                    comptype="Row"
                    onClick={handleNavigate79}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume"
                      compid="2:1345"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:1346"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Favorite
                    </Text>
                  </Row>
                  <Row
                    className="bg-amber_600 items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]"
                    compid="2:1347"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_orderdiscussio.svg"
                      className="OrderDiscussio"
                      compid="2:1348"
                      comptype="Image"
                      alt="OrderDiscussio"
                    />
                    <Text
                      className="message"
                      compid="2:1351"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Message
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[73%]"
                    compid="2:1352"
                    comptype="Row"
                    onClick={handleNavigate81}
                  >
                    <Img
                      src="images/img_music.svg"
                      className="music"
                      compid="2:1353"
                      comptype="Image"
                      alt="music"
                    />
                    <Text
                      className="orderhistory"
                      compid="2:1357"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Order History
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius1416 w-[37%]"
                    compid="2:1358"
                    comptype="Row"
                    onClick={handleNavigate70}
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:1360"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="bills"
                      compid="2:1361"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Bills
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:1362"
                    comptype="Row"
                    onClick={handleNavigate80}
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:1364"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:1365"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]"
                    compid="2:1324"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:1325"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1129"
                      comptype="Stack"
                    >
                      <div
                        className="absolute bg-gradient3  bottom-[0] 3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] right-[0] rounded-radius5573 w-[40%]"
                        compid="2:1329"
                        comptype="View"
                      ></div>
                      <Button
                        className="common-pointer absolute bottom-[16%] font-semibold left-[4%] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                        compid="2:1330"
                        comptype="Button"
                        onClick={handleNavigate4}
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Upgrade
                      </Button>
                      <Img
                        src="images/img_grid.svg"
                        className="test_grid"
                        compid="2:1332"
                        comptype="Image"
                        alt="grid"
                      />
                      <Text
                        className="UpgradeyourAc"
                        compid="2:1333"
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
            compid="1618"
            comptype="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compid="1616"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:1303"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Message
              </Text>
              <Img
                src="images/img_menu.svg"
                className="menu"
                compid="2:1304"
                comptype="Image"
                alt="menu"
              />
            </Row>
            <Row
              className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[99%]"
              compid="1617"
              comptype="Row"
            >
              <Column
                className="bg-white_A700 items-center lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius16 w-[34%]"
                compid="2:1175"
                comptype="Column"
              >
                <Column
                  className="justify-start w-[87%]"
                  compid="1621"
                  comptype="Column"
                >
                  <Row
                    className="items-center justify-between w-[100%]"
                    compid="1604"
                    comptype="Row"
                  >
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                      wrapClassName="flex w-[81%]"
                      compid="2:1245"
                      comptype="SearchView"
                      name="SearchBar"
                      placeholder="Search here..."
                      prefix={
                        <Img
                          src="images/img_search.svg"
                          className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[8px] lg:mr-[18px] xl:w-[16px] xl:h-[17px] xl:ml-[10px] xl:mr-[23px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[11px] 2xl:mr-[26px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[13px] 3xl:mr-[31px] rounded-radius50 my-[auto]"
                          compid="2:1248"
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
                      variant="srcFillGray100"
                    ></Input>
                    <Button
                      className="flex lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      compid="2:1177"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
                      size="2xlIcn"
                      variant="icbFillAmber600"
                    >
                      <Img
                        src="images/img_plus.svg"
                        className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                        alt="plus"
                      />
                    </Button>
                  </Row>
                  <Text
                    className="font-semibold lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-gray_500 w-[auto]"
                    compid="2:1244"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Your Chat
                  </Text>
                </Column>
                <Stack
                  className="lg:h-[306px] xl:h-[382px] 2xl:h-[430px] 3xl:h-[516px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]"
                  compid="1582"
                  comptype="Stack"
                >
                  <div
                    className="absolute bg-gray_300_71 lg:h-[53px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[89px] top-[14%] w-[100%]"
                    compid="2:1183"
                    comptype="View"
                  ></div>
                  <Column
                    className="absolute items-center justify-start lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] lg:px-[11px] xl:px-[14px] 2xl:px-[16px] 3xl:px-[19px] w-[100%]"
                    compid="2:1184"
                    comptype="Column"
                  >
                    <Row
                      className="items-start w-[96%]"
                      compid="1587"
                      comptype="Row"
                    >
                      <div
                        className="bg-gray_400 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius16 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                        compid="2:1193"
                        comptype="View"
                      ></div>
                      <Stack
                        className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[4px] w-[83%]"
                        compid="1583"
                        comptype="Stack"
                      >
                        <Column
                          className="absolute justify-start top-[2%] w-[100%]"
                          compid="2:1187"
                          comptype="Column"
                        >
                          <Text
                            className="font-semibold text-bluegray_900 w-[auto]"
                            compid="2:1188"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Driver #1
                          </Text>
                          <Row
                            className="items-end justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[99%]"
                            compid="1585"
                            comptype="Row"
                          >
                            <Text
                              className="rowloremipsumdol"
                              compid="2:1189"
                              as="h6"
                              variant="h6"
                              comptype="Text"
                            >
                              Lorem ipsum dolor sit amet...
                            </Text>
                            <Img
                              src="images/img_checkmark_19X19.svg"
                              className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] mb-[2px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                              compid="2:1190"
                              comptype="Image"
                              alt="checkmark"
                            />
                          </Row>
                        </Column>
                        <Text
                          className="absolute right-[0] top-[0] MondayJuneThirtyOne_One"
                          compid="2:1194"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          12:45 PM
                        </Text>
                      </Stack>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:pt-[52px] xl:pt-[65px] 2xl:pt-[73px] 3xl:pt-[88px] w-[96%]"
                      compid="1624"
                      comptype="List"
                      orientation="vertical"
                    >
                      <Row
                        className="items-start justify-between lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] w-[100%]"
                        compid="1594"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius16 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                          compid="2:1213"
                          comptype="View"
                        ></div>
                        <Stack
                          className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] mt-[4px] w-[83%]"
                          compid="1584"
                          comptype="Stack"
                        >
                          <Column
                            className="absolute justify-start top-[2%] w-[100%]"
                            compid="2:1207"
                            comptype="Column"
                          >
                            <Text
                              className="font-semibold text-bluegray_900 w-[auto]"
                              compid="2:1208"
                              as="h5"
                              variant="h5"
                              comptype="Text"
                            >
                              Driver #3
                            </Text>
                            <Row
                              className="items-end justify-between 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[99%]"
                              compid="1592"
                              comptype="Row"
                            >
                              <Text
                                className="rowloremipsumdol"
                                compid="2:1209"
                                as="h6"
                                variant="h6"
                                comptype="Text"
                              >
                                Lorem ipsum dolor sit amet...
                              </Text>
                              <Img
                                src="images/img_checkmark_19X19.svg"
                                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] mb-[2px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[17px]"
                                compid="2:1210"
                                comptype="Image"
                                alt="checkmark One"
                              />
                            </Row>
                          </Column>
                          <Text
                            className="absolute right-[0] top-[0] MondayJuneThirtyOne_One"
                            compid="2:1214"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            12:45 PM
                          </Text>
                        </Stack>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-gray_100_3f"
                        compid="2:1237"
                        comptype="Line"
                      />
                      <Row
                        className="items-start justify-between lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] w-[100%]"
                        compid="1589"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius16 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                          compid="2:1200"
                          comptype="View"
                        ></div>
                        <Column
                          className="justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[66%]"
                          compid="2:1197"
                          comptype="Column"
                        >
                          <Text
                            className="font-semibold text-bluegray_900 w-[auto]"
                            compid="2:1198"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Driver #2
                          </Text>
                          <Text
                            className="June120200_One1"
                            compid="2:1199"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            Lorem ipsum dolor sit amet...
                          </Text>
                        </Column>
                        <Column
                          className="items-end justify-start mt-[4px] w-[13%]"
                          compid="1590"
                          comptype="Column"
                        >
                          <Text
                            className="MondayJuneThirtyOne_One"
                            compid="2:1201"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            12:45 PM
                          </Text>
                          <Button
                            className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                            compid="2:1202"
                            comptype="IconButton"
                            shape="icbRoundedBorder4"
                            size="mdIcn"
                            variant="icbFillAmber600"
                          >
                            <Img
                              src="images/img_2.svg"
                              className="flex items-center justify-center"
                              alt="Two"
                            />
                          </Button>
                        </Column>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-gray_100_3f"
                        compid="2:1237"
                        comptype="Line"
                      />
                      <Row
                        className="items-start justify-between lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] w-[100%]"
                        compid="1596"
                        comptype="Row"
                      >
                        <Column
                          className="bg-gray_400 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-end justify-end lg:pl-[23px] xl:pl-[29px] 2xl:pl-[33px] 3xl:pl-[39px] rounded-radius16 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                          compid="1127"
                          comptype="Column"
                        >
                          <div
                            className="bg-light_green_500 border-2 border-solid border-white_A700 rounded-radius4 StarOne"
                            compid="2:1221"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[66%]"
                          compid="2:1217"
                          comptype="Column"
                        >
                          <Text
                            className="font-semibold text-bluegray_900 w-[auto]"
                            compid="2:1218"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Driver #4
                          </Text>
                          <Text
                            className="June120200_One1"
                            compid="2:1219"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            Lorem ipsum dolor sit amet...
                          </Text>
                        </Column>
                        <Column
                          className="items-end justify-start mt-[4px] w-[13%]"
                          compid="1597"
                          comptype="Column"
                        >
                          <Text
                            className="MondayJuneThirtyOne_One"
                            compid="2:1222"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            12:45 PM
                          </Text>
                          <Button
                            className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                            compid="2:1223"
                            comptype="IconButton"
                            shape="icbRoundedBorder4"
                            size="mdIcn"
                            variant="icbFillAmber600"
                          >
                            <Img
                              src="images/img_2.svg"
                              className="flex items-center justify-center"
                              alt="Two One"
                            />
                          </Button>
                        </Column>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-gray_100_3f"
                        compid="2:1237"
                        comptype="Line"
                      />
                      <Row
                        className="items-start justify-between lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] w-[100%]"
                        compid="1599"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius16 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                          compid="2:1231"
                          comptype="View"
                        ></div>
                        <Column
                          className="justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[66%]"
                          compid="2:1228"
                          comptype="Column"
                        >
                          <Text
                            className="font-semibold text-bluegray_900 w-[auto]"
                            compid="2:1229"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Driver #5
                          </Text>
                          <Text
                            className="June120200_One1"
                            compid="2:1230"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            Lorem ipsum dolor sit amet...
                          </Text>
                        </Column>
                        <Column
                          className="items-end justify-start mt-[4px] w-[13%]"
                          compid="1600"
                          comptype="Column"
                        >
                          <Text
                            className="MondayJuneThirtyOne_One"
                            compid="2:1232"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            12:45 PM
                          </Text>
                          <Button
                            className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                            compid="2:1233"
                            comptype="IconButton"
                            shape="icbRoundedBorder4"
                            size="mdIcn"
                            variant="icbFillAmber600"
                          >
                            <Img
                              src="images/img_2.svg"
                              className="flex items-center justify-center"
                              alt="Two Two"
                            />
                          </Button>
                        </Column>
                      </Row>
                      <Line
                        className="self-center w-[100%] h-[1px] bg-gray_100_3f"
                        compid="2:1237"
                        comptype="Line"
                      />
                      <Row
                        className="items-start justify-between lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[17px] w-[100%]"
                        compid="1602"
                        comptype="Row"
                      >
                        <Column
                          className="bg-gray_400 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-end justify-end lg:pl-[23px] xl:pl-[29px] 2xl:pl-[33px] 3xl:pl-[39px] rounded-radius16 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                          compid="1128"
                          comptype="Column"
                        >
                          <div
                            className="bg-light_green_500 border-2 border-solid border-white_A700 rounded-radius4 StarOne"
                            compid="2:1242"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="justify-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[66%]"
                          compid="2:1238"
                          comptype="Column"
                        >
                          <Text
                            className="font-semibold text-bluegray_900 w-[auto]"
                            compid="2:1239"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Driver #6
                          </Text>
                          <Text
                            className="June120200_One1"
                            compid="2:1240"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            Lorem ipsum dolor sit amet...
                          </Text>
                        </Column>
                        <Text
                          className="mt-[4px] MondayJuneThirtyOne_One"
                          compid="2:1243"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          12:45 PM
                        </Text>
                      </Row>
                    </List>
                  </Column>
                </Stack>
                <Button
                  className="font-semibold mb-[4px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[87%]"
                  compid="2:1180"
                  comptype="Button"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="OutlineAmber6001_2"
                >
                  View More
                </Button>
              </Column>
              <Column
                className="bg-white_A700 items-center lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius16 w-[63%]"
                compid="2:1250"
                comptype="Column"
              >
                <Row
                  className="items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[92%]"
                  compid="2:1283"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius16 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                    compid="2:1284"
                    comptype="View"
                  ></div>
                  <Column
                    className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[77%]"
                    compid="2:1285"
                    comptype="Column"
                  >
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      compid="2:1286"
                      as="h4"
                      variant="h4"
                      comptype="Text"
                    >
                      Driver #2
                    </Text>
                    <Row
                      className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[12%]"
                      compid="1612"
                      comptype="Row"
                    >
                      <div
                        className="bg-light_green_500 mt-[2px] rounded-radius4 StarOne"
                        compid="2:1288"
                        comptype="View"
                      ></div>
                      <Text
                        className="test_21min"
                        compid="2:1287"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Online
                      </Text>
                    </Row>
                  </Column>
                  <Img
                    src="images/img_videocamera.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[3%]"
                    compid="2:1255"
                    comptype="Image"
                    alt="videocamera"
                  />
                  <Img
                    src="images/img_vector_gray_500.svg"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] w-[3%]"
                    compid="2:1253"
                    comptype="Image"
                    alt="Vector Two"
                  />
                </Row>
                <Column
                  className="justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]"
                  compid="1623"
                  comptype="Column"
                >
                  <Line
                    className="bg-gray_300_87 h-[1px] w-[100%]"
                    compid="2:1256"
                    comptype="Line"
                  />
                  <Text
                    className="font-semibold 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] text-bluegray_900 w-[auto]"
                    compid="2:1258"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Driver
                  </Text>
                  <Button
                    className="font-normal 3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[11%]"
                    compid="2:1262"
                    comptype="Button"
                    shape="CustomBorderBL12"
                    size="xl"
                    variant="FillAmber60071"
                  >
                    Hello !
                  </Button>
                  <Row
                    className="items-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[53%]"
                    compid="1608"
                    comptype="Row"
                  >
                    <Column
                      className="bg-gray_400 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-end justify-end lg:pl-[23px] xl:pl-[29px] 2xl:pl-[33px] 3xl:pl-[39px] rounded-radius16 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      compid="2:1259"
                      comptype="Column"
                    >
                      <div
                        className="bg-light_green_500 border border-solid border-white_A700 rounded-radius4 StarOne"
                        compid="2:1261"
                        comptype="View"
                      ></div>
                    </Column>
                    <Column
                      className="justify-start lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[82%]"
                      compid="2:1265"
                      comptype="Column"
                    >
                      <Button
                        className="font-normal font-poppins not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                        compid="2:1266"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="xl"
                        variant="FillAmber60071"
                      >
                        Your order according to application yes?
                      </Button>
                      <Text
                        className="Chat"
                        compid="2:1269"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        12:45 PM
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="font-semibold lg:ml-[417px] xl:ml-[521px] 2xl:ml-[586px] 3xl:ml-[704px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] text-bluegray_900 w-[auto]"
                    compid="2:1271"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    You
                  </Text>
                  <Row
                    className="items-start justify-end ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[40%]"
                    compid="1610"
                    comptype="Row"
                  >
                    <Column
                      className="items-end justify-start w-[84%]"
                      compid="2:1275"
                      comptype="Column"
                    >
                      <Button
                        className="font-normal font-poppins not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[27%]"
                        compid="2:1276"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="xl"
                        variant="FillAmber600"
                      >
                        Hello{" "}
                      </Button>
                      <Column
                        className="bg-amber_600 font-poppins items-center justify-end xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius16 w-[91%]"
                        compid="2:1279"
                        comptype="Column"
                      >
                        <Text
                          className="font-normal leading-[normal] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-white_A700 w-[93%]"
                          compid="2:1281"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Yes, my order according to <br />
                          application. Thank you
                        </Text>
                      </Column>
                      <Text
                        className="Chat"
                        compid="2:1282"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        12:45 PM
                      </Text>
                    </Column>
                    <Column
                      className="bg-gray_400 lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-end justify-end lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] lg:pl-[23px] xl:pl-[29px] 2xl:pl-[33px] 3xl:pl-[39px] rounded-radius16 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      compid="2:1272"
                      comptype="Column"
                    >
                      <div
                        className="bg-light_green_500 border border-solid border-white_A700 rounded-radius4 StarOne"
                        compid="2:1274"
                        comptype="View"
                      ></div>
                    </Column>
                  </Row>
                  <Line
                    className="bg-gray_100 h-[1px] lg:mt-[46px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] w-[100%]"
                    compid="2:1302"
                    comptype="Line"
                  />
                  <Row
                    className="bg-gray_100 border-2 border-gray_100 border-solid items-center justify-end lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] rounded-radius16 w-[93%]"
                    compid="2:1290"
                    comptype="Row"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:1292"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Write your message...
                    </Text>
                    <Img
                      src="images/img_trash_27X23.svg"
                      className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[212px] xl:ml-[265px] 2xl:ml-[298px] 3xl:ml-[358px] rounded-radius1192 w-[3%]"
                      compid="2:1300"
                      comptype="Image"
                      alt="trash One"
                    />
                    <Img
                      src="images/img_vector_gray_500.svg"
                      className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[17px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] w-[3%]"
                      compid="2:1299"
                      comptype="Image"
                      alt="Vector Three"
                    />
                    <Button
                      className="font-semibold lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[15%]"
                      compid="2:1294"
                      comptype="Button"
                      shape="RoundedBorder16"
                      size="xl"
                      variant="FillAmber600"
                    >
                      Send
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ChatPage;

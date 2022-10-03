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
  SelectBox,
  Radio,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom";

const DashboardRestaurantPage = () => {
  const navigate = useNavigate();

  function handleNavigate18() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate71() {
    navigate("/ordersrestaurant");
  }
  function handleNavigate75() {
    navigate("/menu");
  }
  function handleNavigate77() {
    navigate("/settingsrestaurant");
  }
  function handleNavigate78() {
    navigate("/customerreviews");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:2170"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[98%]"
          compid="1533"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1162" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:2250"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:2283"
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
                  className="justify-start lg:mb-[310px] xl:mb-[387px] 2xl:mb-[436px] 3xl:mb-[523px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  compid="1543"
                  comptype="Column"
                >
                  <Row
                    className="bg-amber_600 items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:2263"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_cut.svg"
                      className="Vector"
                      compid="2:2265"
                      comptype="Image"
                      alt="cut"
                    />
                    <Text
                      className="dashboard1"
                      compid="2:2266"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] rounded-radius1416 w-[43%]"
                    compid="2:2267"
                    comptype="Row"
                    onClick={handleNavigate75}
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:2269"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="foodorder"
                      compid="2:2270"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Menu
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] rounded-radius1204 w-[63%]"
                    compid="2:2271"
                    comptype="Row"
                    onClick={handleNavigate71}
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:2273"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="foodorder"
                      compid="2:2274"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius1232 w-[52%]"
                    compid="2:2275"
                    comptype="Row"
                    onClick={handleNavigate78}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume1"
                      compid="2:2277"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:2278"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Reviews
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:2279"
                    comptype="Row"
                    onClick={handleNavigate77}
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:2281"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:2282"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[134px] xl:mt-[168px] 2xl:mt-[189px] 3xl:mt-[226px] w-[100%]"
                    compid="2:2252"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:2253"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1123"
                      comptype="Stack"
                    >
                      <Column
                        className="absolute bottom-[0] justify-start right-[0] w-[87%]"
                        compid="1506"
                        comptype="Column"
                      >
                        <Img
                          src="images/img_grid.svg"
                          className="test_grid1"
                          compid="2:2260"
                          comptype="Image"
                          alt="grid"
                        />
                        <Row
                          className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]"
                          compid="1516"
                          comptype="Row"
                        >
                          <Button
                            className="common-pointer font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[49%]"
                            compid="2:2258"
                            comptype="Button"
                            onClick={handleNavigate18}
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillWhiteA700"
                          >
                            Upgrade
                          </Button>
                          <div
                            className="bg-gradient3  3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] rounded-radius5573 w-[46%]"
                            compid="2:2257"
                            comptype="View"
                          ></div>
                        </Row>
                      </Column>
                      <Text
                        className="UpgradeyourAc1"
                        compid="2:2261"
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
            compid="1532"
            comptype="Column"
          >
            <Row className="items-center w-[100%]" compid="1525" comptype="Row">
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:2171"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Dashboard
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="2xl:ml-[335px] 3xl:ml-[402px] flex lg:ml-[238px] w-[34%] xl:ml-[298px]"
                compid="2:2284"
                comptype="SearchView"
                name="SearchBar"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[4px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:ml-[5px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[6px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[7px] 3xl:mr-[10px] my-[auto]"
                    compid="2:2286"
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
              <Img
                src="images/img_menu.svg"
                className="lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] menu"
                compid="2:2288"
                comptype="Image"
                alt="menu"
              />
            </Row>
            <Row
              className="items-center justify-evenly lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="1530"
              comptype="Row"
            >
              <Column
                className="items-center w-[71%]"
                compid="1528"
                comptype="Column"
              >
                <Row
                  className="bg-white_A700 items-center justify-end lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius16 w-[97%]"
                  compid="2:2305"
                  comptype="Row"
                >
                  <Column className="w-[39%]" compid="2:2311" comptype="Column">
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2312"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Total Income
                    </Text>
                    <Text
                      className="font-bold lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-bluegray_900 w-[auto]"
                      compid="2:2313"
                      as="h2"
                      variant="h2"
                      comptype="Text"
                    >
                      $12,890,00
                    </Text>
                  </Column>
                  <List
                    className="lg:gap-[20px] xl:gap-[25px] 2xl:gap-[28px] 3xl:gap-[33px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] mb-[2px] min-h-[auto] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[31%]"
                    compid="1544"
                    comptype="List"
                    orientation="horizontal"
                  >
                    <Column
                      className="justify-start pb-[1px] w-[100%]"
                      compid="2:2315"
                      comptype="Column"
                    >
                      <Text
                        className="password"
                        compid="2:2316"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Income
                      </Text>
                      <Text
                        className="font-bold font-inter lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                        compid="2:2317"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        $4345,00
                      </Text>
                      <Row
                        className="font-cairo items-center ml-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[53%]"
                        compid="2:2318"
                        comptype="Row"
                      >
                        <Img
                          src="images/img_arrowup.svg"
                          className="arrowup_One"
                          compid="2:2320"
                          comptype="Image"
                          alt="arrowup"
                        />
                        <Text
                          className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-light_green_500 w-[auto]"
                          compid="2:2321"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          +15%
                        </Text>
                      </Row>
                    </Column>
                    <Line
                      className="self-center w-[1px] bg-gray_300 lg:h-[51px] xl:h-[64px] 2xl:h-[72px] 3xl:h-[86px]"
                      compid="2:2314"
                      comptype="Line"
                    />
                    <Column
                      className="justify-start mt-[2px] pb-[1px] w-[100%]"
                      compid="2:2322"
                      comptype="Column"
                    >
                      <Text
                        className="password"
                        compid="2:2323"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Expense
                      </Text>
                      <Text
                        className="font-bold font-inter lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 w-[auto]"
                        compid="2:2324"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        $2890,00
                      </Text>
                      <Row
                        className="font-cairo items-center ml-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[52%]"
                        compid="2:2325"
                        comptype="Row"
                      >
                        <Img
                          src="images/img_arrowdown.svg"
                          className="arrowup_One"
                          compid="2:2327"
                          comptype="Image"
                          alt="arrowdown"
                        />
                        <Text
                          className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-red_400 w-[auto]"
                          compid="2:2328"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          -10%
                        </Text>
                      </Row>
                    </Column>
                  </List>
                  <Button
                    className="font-medium lg:ml-[26px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[44px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[25%]"
                    compid="2:2307"
                    comptype="Button"
                    shape="CustomBorderTL16"
                    size="3xl"
                    variant="FillAmber600"
                  >
                    Withdraw{" "}
                  </Button>
                </Row>
                <Row
                  className="font-inter items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[97%]"
                  compid="1526"
                  comptype="Row"
                >
                  <Column
                    className="bg-white_A700 items-center lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] rounded-radius16 w-[53%]"
                    compid="2:2368"
                    comptype="Column"
                  >
                    <Img
                      src="images/img_chart.svg"
                      className="lg:h-[57px] xl:h-[71px] 2xl:h-[79px] 3xl:h-[95px] mt-[1px] w-[84%]"
                      compid="2:2369"
                      comptype="Image"
                      alt="chart"
                    />
                    <Row
                      className="items-center justify-between lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[84%]"
                      compid="2:2387"
                      comptype="Row"
                    >
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:2388"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        00:00
                      </Text>
                      <Text
                        className="Distance"
                        compid="2:2389"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        23:59
                      </Text>
                    </Row>
                  </Column>
                  <Column
                    className="bg-white_A700 font-poppins lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius16 w-[44%]"
                    compid="2:2413"
                    comptype="Column"
                  >
                    <Text
                      className="OrderOne"
                      compid="2:2416"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Performance
                    </Text>
                    <Row
                      className="items-start mb-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[99%]"
                      compid="1521"
                      comptype="Row"
                    >
                      <Stack
                        className="3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] w-[60%]"
                        compid="2:2417"
                        comptype="Stack"
                      >
                        <Row
                          className="absolute bottom-[12%] inset-x-[0] items-center justify-center mx-[auto] w-[51%]"
                          compid="2:2418"
                          comptype="Row"
                        >
                          <Img
                            src="images/img_arrowup_22X22.svg"
                            className="arrowup_One"
                            compid="2:2420"
                            comptype="Image"
                            alt="arrowup One"
                          />
                          <Text
                            className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-bluegray_900 w-[auto]"
                            compid="2:2421"
                            as="h2"
                            variant="h2"
                            comptype="Text"
                          >
                            +15%
                          </Text>
                        </Row>
                        <Stack
                          className="absolute bg-cover bg-repeat 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] lg:pr-[46px] xl:pr-[58px] 2xl:pr-[66px] 3xl:pr-[79px] w-[100%]"
                          compid="1124"
                          style={{
                            backgroundImage: "url('images/img_group1124.svg')",
                          }}
                          comptype="Stack"
                        >
                          <Img
                            src="images/img_ellipse36.svg"
                            className="absolute 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] left-[0] w-[63%]"
                            compid="2:2423"
                            comptype="Image"
                            alt="EllipseThirtySix"
                          />
                        </Stack>
                      </Stack>
                      <Text
                        className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic text-gray_500 w-[35%]"
                        compid="2:2415"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, adipiscing elit, sed do
                        eiusmod tempor
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Stack
                className="lg:h-[222px] xl:h-[277px] 2xl:h-[312px] 3xl:h-[374px] w-[29%]"
                compid="2:2329"
                comptype="Stack"
              >
                <Stack
                  className="absolute lg:h-[168px] xl:h-[209px] 2xl:h-[235px] 3xl:h-[282px] top-[0] w-[100%]"
                  compid="1507"
                  comptype="Stack"
                >
                  <Stack
                    className="absolute lg:h-[113px] xl:h-[141px] 2xl:h-[159px] 3xl:h-[191px] top-[0] w-[100%]"
                    compid="1508"
                    comptype="Stack"
                  >
                    <Row
                      className="absolute bg-white_A700 items-center lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] top-[0] w-[100%]"
                      compid="2:2330"
                      comptype="Row"
                    >
                      <Button
                        className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center ml-[3px] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        compid="2:2331"
                        comptype="IconButton"
                        shape="icbRoundedBorder16"
                        size="xlIcn"
                        variant="icbOutlineGray300"
                      >
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex items-center justify-center lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px]"
                          alt="checkmark"
                        />
                      </Button>
                      <Column
                        className="mb-[2px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[40%]"
                        compid="2:2336"
                        comptype="Column"
                      >
                        <Text
                          className="MondayJuneThirtyOne_One"
                          compid="2:2337"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Total Order Complete
                        </Text>
                        <Text
                          className="font-bold lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] text-bluegray_900 w-[auto]"
                          compid="2:2338"
                          as="h4"
                          variant="h4"
                          comptype="Text"
                        >
                          2.678
                        </Text>
                      </Column>
                    </Row>
                    <Row
                      className="absolute bg-white_A700 bottom-[0] items-center lg:p-[13px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] w-[100%]"
                      compid="2:2339"
                      comptype="Row"
                    >
                      <Column
                        className="border-2 border-gray_300 border-solid lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] rounded-radius16 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        compid="2:2340"
                        comptype="Column"
                      >
                        <Button
                          className="flex lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] items-center justify-center xl:w-[12px] 2xl:w-[13px] 3xl:w-[16px] lg:w-[9px]"
                          compid="2:2343"
                          comptype="IconButton"
                          shape="icbRoundedBorder8"
                          size="mdIcn"
                          variant="icbFillAmber600"
                        >
                          <Img
                            src="images/img_vector_amber_600.svg"
                            className="flex items-center justify-center"
                            alt="Vector One"
                          />
                        </Button>
                      </Column>
                      <Column
                        className="mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[38%]"
                        compid="2:2346"
                        comptype="Column"
                      >
                        <Text
                          className="MondayJuneThirtyOne_One"
                          compid="2:2347"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Total Order Delivered
                        </Text>
                        <Text
                          className="font-bold 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-bluegray_900 w-[auto]"
                          compid="2:2348"
                          as="h4"
                          variant="h4"
                          comptype="Text"
                        >
                          1.234
                        </Text>
                      </Column>
                    </Row>
                  </Stack>
                  <Row
                    className="absolute bg-white_A700 bottom-[0] items-center lg:p-[13px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] w-[100%]"
                    compid="2:2349"
                    comptype="Row"
                  >
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      compid="2:2350"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
                      size="xlIcn"
                      variant="icbOutlineGray300"
                    >
                      <Img
                        src="images/img_warning.svg"
                        className="flex items-center justify-center lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px]"
                        alt="warning"
                      />
                    </Button>
                    <Column
                      className="mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[39%]"
                      compid="2:2356"
                      comptype="Column"
                    >
                      <Text
                        className="MondayJuneThirtyOne_One"
                        compid="2:2357"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Total Order Canceled
                      </Text>
                      <Text
                        className="font-bold 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] text-bluegray_900 w-[auto]"
                        compid="2:2358"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        123
                      </Text>
                    </Column>
                  </Row>
                </Stack>
                <Row
                  className="absolute bg-white_A700 bottom-[0] items-center lg:p-[14px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-bl-[16px] rounded-br-[16px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                  compid="2:2359"
                  comptype="Row"
                >
                  <Button
                    className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center ml-[3px] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    compid="2:2360"
                    comptype="IconButton"
                    shape="icbRoundedBorder16"
                    size="xlIcn"
                    variant="icbOutlineGray300"
                  >
                    <Img
                      src="images/img_clock.svg"
                      className="flex items-center justify-center lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px]"
                      alt="clock"
                    />
                  </Button>
                  <Column
                    className="mb-[2px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[26%]"
                    compid="2:2365"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2366"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Order Pending
                    </Text>
                    <Text
                      className="font-bold lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] text-bluegray_900 w-[auto]"
                      compid="2:2367"
                      as="h4"
                      variant="h4"
                      comptype="Text"
                    >
                      432
                    </Text>
                  </Column>
                </Row>
              </Stack>
            </Row>
            <Row
              className="items-center justify-between lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[100%]"
              compid="1527"
              comptype="Row"
            >
              <Column
                className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius20 w-[69%]"
                compid="2:2172"
                comptype="Column"
              >
                <Row
                  className="items-start justify-between w-[100%]"
                  compid="1514"
                  comptype="Row"
                >
                  <Text
                    className="OrderOne"
                    compid="2:2174"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Order Rate
                  </Text>
                  <SelectBox
                    className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_900 w-[11%]"
                    compid="2:2246"
                    comptype="Dropdown"
                    placeholderClassName="text-bluegray_900"
                    name="sortby"
                    placeholder="Month"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_500.svg"
                        className="lg:w-[4px] lg:h-[4px] lg:mr-[12px] xl:w-[6px] xl:h-[5px] xl:mr-[15px] 2xl:w-[6px] 2xl:h-[5px] 2xl:mr-[17px] 3xl:w-[8px] 3xl:h-[6px] 3xl:mr-[20px]"
                        compid="2:2249"
                        comptype="Image"
                        alt="arrow_down"
                      />
                    }
                    variant="OutlineGray500"
                  ></SelectBox>
                </Row>
                <Row
                  className="items-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] pb-[4px] pl-[4px] w-[100%]"
                  compid="2:2223"
                  comptype="Row"
                >
                  <Img
                    src="images/img_user.svg"
                    className="lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[2%]"
                    compid="2:2239"
                    comptype="Image"
                    alt="user"
                  />
                  <Column
                    className="justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius5 w-[8%]"
                    compid="2:2235"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2236"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Order Total
                    </Text>
                    <Text
                      className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-bluegray_900 w-[auto]"
                      compid="2:2237"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      25.307
                    </Text>
                  </Column>
                  <Column
                    className="justify-start lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[55%]"
                    compid="2:2240"
                    comptype="Column"
                  >
                    <Row
                      className="items-center w-[24%]"
                      compid="1512"
                      comptype="Row"
                    >
                      <Text
                        className="MondayJuneThirtyOne_One"
                        compid="2:2244"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Target
                      </Text>
                      <Text
                        className="font-bold lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] text-bluegray_900 w-[auto]"
                        compid="2:2245"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        3.982{" "}
                      </Text>
                    </Row>
                    <div
                      className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] overflow-hidden relative w-[24%]"
                      compid="2:2241"
                      comptype="ProgressBar"
                      name="progressbar"
                    >
                      <div className="w-full h-full absolute bg-gray_500_71"></div>
                      <div
                        className="h-full absolute bg-amber_600"
                        style={{ width: "69%" }}
                      ></div>
                    </div>
                  </Column>
                  <List
                    className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] lg:gap-[8px] grid grid-cols-2 mb-[1px] min-h-[auto] lg:ml-[18px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[25%]"
                    compid="1545"
                    comptype="List"
                    orientation="horizontal"
                  >
                    <Column
                      className="justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]"
                      compid="2:2224"
                      comptype="Column"
                    >
                      <Radio
                        value="ThisMonth"
                        className="font-normal mx-[auto] not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_500"
                        inputClassName="h-[12px] mr-[5px] w-[12px]"
                        compid="2:2225"
                        comptype="Radio"
                        checked={false}
                        name="ThisMonth"
                        label="This Month"
                        variant="OutlineAmber600"
                      ></Radio>
                      <Text
                        className="thismonth"
                        compid="2:2228"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        1324
                      </Text>
                    </Column>
                    <Column
                      className="justify-end lg:pt-[3px] 2xl:pt-[4px] xl:pt-[4px] 3xl:pt-[5px] lg:px-[3px] 2xl:px-[4px] xl:px-[4px] 3xl:px-[5px] w-[100%]"
                      compid="2:2229"
                      comptype="Column"
                    >
                      <Radio
                        value="LastMonth"
                        className="font-normal mx-[auto] not-italic lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_500"
                        inputClassName="h-[12px] mr-[5px] w-[12px]"
                        compid="2:2230"
                        comptype="Radio"
                        checked={false}
                        name="LastMonth"
                        label="Last Month"
                        variant="OutlineRed400"
                      ></Radio>
                      <Text
                        className="thismonth"
                        compid="2:2233"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        1324
                      </Text>
                    </Column>
                  </List>
                </Row>
                <Row
                  className="items-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[99%]"
                  compid="1510"
                  comptype="Row"
                >
                  <Column
                    className="justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[6%]"
                    compid="2:2217"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2218"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      100
                    </Text>
                    <Text
                      className="lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] MondayJuneThirtyOne_One"
                      compid="2:2219"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      75
                    </Text>
                    <Text
                      className="lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] MondayJuneThirtyOne_One"
                      compid="2:2220"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      50
                    </Text>
                    <Text
                      className="lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] MondayJuneThirtyOne_One"
                      compid="2:2221"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      25
                    </Text>
                    <Text
                      className="lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] MondayJuneThirtyOne_One"
                      compid="2:2222"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      0
                    </Text>
                  </Column>
                  <Stack
                    className="lg:h-[157px] xl:h-[196px] 2xl:h-[220px] 3xl:h-[264px] w-[94%]"
                    compid="1504"
                    comptype="Stack"
                  >
                    <Img
                      src="images/img_chart_282X896.svg"
                      className="absolute lg:h-[151px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[254px] top-[4%] w-[100%]"
                      compid="2:2189"
                      comptype="Image"
                      alt="Chart One"
                    />
                    <Column
                      className="absolute bg-cover bg-repeat items-center justify-start 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] right-[40%] top-[0] w-[10%]"
                      compid="2:2211"
                      style={{
                        backgroundImage: "url('images/img_details.svg')",
                      }}
                      comptype="Column"
                    >
                      <Text
                        className="July"
                        compid="2:2215"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        July
                      </Text>
                      <Text
                        className="font-semibold 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] text-white_A700 w-[auto]"
                        compid="2:2216"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        1.702
                      </Text>
                    </Column>
                  </Stack>
                </Row>
                <Row
                  className="items-start justify-between lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[9px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]"
                  compid="2:2176"
                  comptype="Row"
                >
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:2177"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Jan
                  </Text>
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:2178"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Feb
                  </Text>
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:2179"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Mar
                  </Text>
                  <Text
                    className="Apr"
                    compid="2:2180"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Apr
                  </Text>
                  <Text
                    className="Apr"
                    compid="2:2181"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    May
                  </Text>
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:2182"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Jun
                  </Text>
                  <Text
                    className="pagination"
                    compid="2:2183"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Jul
                  </Text>
                  <Text
                    className="Apr"
                    compid="2:2184"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Aug
                  </Text>
                  <Text
                    className="test_1x"
                    compid="2:2185"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Sep
                  </Text>
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:2186"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Oct
                  </Text>
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:2187"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Nov
                  </Text>
                  <Text
                    className="MondayJuneThirtyOne"
                    compid="2:2188"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Dec
                  </Text>
                </Row>
              </Column>
              <Column
                className="bg-white_A700 lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[29%]"
                compid="2:2390"
                comptype="Column"
              >
                <Row
                  className="items-start justify-between ml-[2px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[98%]"
                  compid="1518"
                  comptype="Row"
                >
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    compid="2:2406"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Popular Food
                  </Text>
                  <Img
                    src="images/img_vector_gray_500.svg"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] mt-[2px] w-[6%]"
                    compid="2:2412"
                    comptype="Image"
                    alt="Vector Two"
                  />
                </Row>
                <Stack
                  className="lg:h-[129px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:w-[128px] xl:w-[160px] 2xl:w-[180px] 3xl:w-[216px]"
                  compid="2:2407"
                  comptype="Stack"
                >
                  <CircularProgressbar
                    className="absolute lg:h-[129px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] overflow-visible w-[100%]"
                    compid="1164"
                    comptype="CircleProgressBar"
                    value="20"
                    counterClockwise
                    name="Group1164"
                    strokeWidth={20}
                    styles={{
                      trail: { strokeWidth: 20, stroke: "#eb5757" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        "transform-origin": "center",
                        transform: "rotate(192deg)",
                        stroke: "#a6c44a",
                      },
                    }}
                  ></CircularProgressbar>
                  <CircularProgressbar
                    className="absolute lg:h-[129px] xl:h-[161px] 2xl:h-[181px] 3xl:h-[217px] overflow-visible w-[100%]"
                    compid="1165"
                    comptype="CircleProgressBar"
                    value="20"
                    counterClockwise
                    name="Group1165"
                    strokeWidth={20}
                    styles={{
                      trail: { strokeWidth: 20, stroke: "#f8b602" },
                      path: {
                        strokeLinecap: "square",
                        height: "100%",
                        "transform-origin": "center",
                        transform: "rotate(192deg)",
                        stroke: "#a6c44a",
                      },
                    }}
                  ></CircularProgressbar>
                </Stack>
                <Text
                  className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] MondayJuneThirtyOne_One"
                  compid="2:2393"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Legend
                </Text>
                <Row
                  className="items-start lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]"
                  compid="2:2394"
                  comptype="Row"
                >
                  <div
                    className="bg-amber_600 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] rounded-radius4 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                    compid="2:2397"
                    comptype="View"
                  ></div>
                  <Text
                    className="AsianFoodTwentySeven"
                    compid="2:2395"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Asian Food (27%)
                  </Text>
                  <Text
                    className="font-semibold xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] mt-[1px] text-bluegray_900 w-[auto]"
                    compid="2:2396"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    763
                  </Text>
                </Row>
                <Row
                  className="items-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[99%]"
                  compid="2:2398"
                  comptype="Row"
                >
                  <div
                    className="bg-red_400 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] rounded-radius4 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                    compid="2:2401"
                    comptype="View"
                  ></div>
                  <Text
                    className="AsianFoodTwentySeven"
                    compid="2:2399"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Fast Food (50%)
                  </Text>
                  <Text
                    className="font-semibold lg:ml-[103px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[173px] mt-[1px] text-bluegray_900 w-[auto]"
                    compid="2:2400"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    321
                  </Text>
                </Row>
                <Row
                  className="items-start lg:mb-[10px] xl:mb-[12px] 2xl:mb-[14px] 3xl:mb-[17px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[99%]"
                  compid="2:2402"
                  comptype="Row"
                >
                  <div
                    className="bg-light_green_500 lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] rounded-radius4 lg:w-[10px] xl:w-[13px] 2xl:w-[15px] 3xl:w-[18px]"
                    compid="2:2405"
                    comptype="View"
                  ></div>
                  <Text
                    className="AsianFoodTwentySeven"
                    compid="2:2403"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Western Food (23%)
                  </Text>
                  <Text
                    className="font-semibold xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[153px] lg:ml-[90px] mt-[1px] text-bluegray_900 w-[auto]"
                    compid="2:2404"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    69
                  </Text>
                </Row>
              </Column>
            </Row>
            <footer
              className="bg-white_A700 lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius16 w-[100%]"
              compid="2:2424"
              comptype="Footer"
            >
              <Column
                className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mr-[21px] xl:mr-[26px] 2xl:mr-[30px] 3xl:mr-[36px] lg:my-[20px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[34px] w-[95%]"
                compid="1172"
                comptype="Column"
              >
                <Text
                  className="font-bold text-bluegray_900 w-[auto]"
                  compid="2:2426"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Activity
                </Text>
                <Row
                  className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"
                  compid="1523"
                  comptype="Row"
                >
                  <Row
                    className="items-start justify-evenly pt-[4px] w-[73%]"
                    compid="1542"
                    comptype="Row"
                  >
                    <Column
                      className="justify-start w-[5%]"
                      compid="2:2448"
                      comptype="Column"
                    >
                      <Text
                        className="MondayJuneThirtyOne_One"
                        compid="2:2449"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        100
                      </Text>
                      <Text
                        className="Eighty"
                        compid="2:2450"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        80
                      </Text>
                      <Text
                        className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] MondayJuneThirtyOne_One"
                        compid="2:2451"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        60
                      </Text>
                      <Text
                        className="Eighty"
                        compid="2:2452"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        40
                      </Text>
                      <Text
                        className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] MondayJuneThirtyOne_One"
                        compid="2:2453"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        20
                      </Text>
                      <Text
                        className="Eighty"
                        compid="2:2454"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        0
                      </Text>
                    </Column>
                    <Column
                      className="font-cairo items-center justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[95%]"
                      compid="1541"
                      comptype="Column"
                    >
                      <div
                        className="bg-gray_300 h-[1px] w-[100%]"
                        compid="2:2447"
                        comptype="View"
                      ></div>
                      <Stack
                        className="lg:h-[123px] xl:h-[153px] 2xl:h-[172px] 3xl:h-[207px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[100%]"
                        compid="1505"
                        comptype="Stack"
                      >
                        <Column
                          className="absolute items-center justify-start top-[11%] w-[100%]"
                          compid="1509"
                          comptype="Column"
                        >
                          <div
                            className="bg-gray_300 h-[1px] w-[100%]"
                            compid="2:2446"
                            comptype="View"
                          ></div>
                          <div
                            className="bg-gray_300 h-[1px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[100%]"
                            compid="2:2445"
                            comptype="View"
                          ></div>
                          <div
                            className="bg-gray_300 h-[1px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[100%]"
                            compid="2:2444"
                            comptype="View"
                          ></div>
                          <div
                            className="bg-gray_300 h-[1px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[100%]"
                            compid="2:2443"
                            comptype="View"
                          ></div>
                        </Column>
                        <Column
                          className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[45%] w-[3%]"
                          compid="1538"
                          comptype="Column"
                        >
                          <Text
                            className="font-bold text-white_A700 w-[auto]"
                            compid="2:2455"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            58
                          </Text>
                          <Text
                            className="lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] July"
                            compid="2:2456"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            Task
                          </Text>
                        </Column>
                        <Img
                          src="images/img_chart_229X928.svg"
                          className="absolute lg:h-[123px] xl:h-[153px] 2xl:h-[172px] 3xl:h-[207px] inset-x-[2%] w-[95%]"
                          compid="2:2466"
                          comptype="Image"
                          alt="chart Two"
                        />
                      </Stack>
                      <div
                        className="bg-gray_300 h-[1px] w-[100%]"
                        compid="2:2442"
                        comptype="View"
                      ></div>
                      <Row
                        className="font-poppins items-start justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[94%]"
                        compid="2:2428"
                        comptype="Row"
                      >
                        <Text
                          className="MondayJuneThirtyOne"
                          compid="2:2429"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Jan
                        </Text>
                        <Text
                          className="MondayJuneThirtyOne"
                          compid="2:2430"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Feb
                        </Text>
                        <Text
                          className="MondayJuneThirtyOne"
                          compid="2:2431"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Mar
                        </Text>
                        <Text
                          className="Apr"
                          compid="2:2432"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Apr
                        </Text>
                        <Text
                          className="Apr"
                          compid="2:2433"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          May
                        </Text>
                        <Text
                          className="MondayJuneThirtyOne"
                          compid="2:2434"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Jun
                        </Text>
                        <Text
                          className="MondayJuneThirtyOne_One"
                          compid="2:2435"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Jul
                        </Text>
                        <Text
                          className="Apr"
                          compid="2:2436"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Aug
                        </Text>
                        <Text
                          className="test_1x"
                          compid="2:2437"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Sep
                        </Text>
                        <Text
                          className="MondayJuneThirtyOne"
                          compid="2:2438"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Oct
                        </Text>
                        <Text
                          className="MondayJuneThirtyOne"
                          compid="2:2439"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Nov
                        </Text>
                        <Text
                          className="MondayJuneThirtyOne"
                          compid="2:2440"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Dec
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Column
                    className="pt-[4px] w-[22%]"
                    compid="2:2457"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2459"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Completed Order
                    </Text>
                    <Text
                      className="font-bold lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] text-bluegray_900 w-[auto]"
                      compid="2:2460"
                      as="h4"
                      variant="h4"
                      comptype="Text"
                    >
                      932 Task
                    </Text>
                    <Img
                      src="images/img_vector_amber_600_64X319.svg"
                      className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                      compid="2:2461"
                      comptype="Image"
                      alt="Vector Three"
                    />
                    <Text
                      className="lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] MondayJuneThirtyOne_One"
                      compid="2:2464"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Order Delivered
                    </Text>
                    <Text
                      className="font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] text-bluegray_900 w-[auto]"
                      compid="2:2463"
                      as="h4"
                      variant="h4"
                      comptype="Text"
                    >
                      932
                    </Text>
                    <Img
                      src="images/img_vector_red_400.svg"
                      className="lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]"
                      compid="2:2465"
                      comptype="Image"
                      alt="Vector Four"
                    />
                  </Column>
                </Row>
              </Column>
            </footer>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardRestaurantPage;

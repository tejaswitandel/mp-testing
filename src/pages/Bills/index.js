import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Stack,
  Button,
  Input,
  SelectBox,
  CheckBox,
  List,
  Line,
  Slider,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const BillsPage = () => {
  const navigate = useNavigate();

  function handleNavigate13() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate14() {
    navigate("/chat");
  }
  function handleNavigate17() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate50() {
    navigate("/foodorder");
  }
  function handleNavigate58() {
    navigate("/settingscustomer");
  }
  function handleNavigate59() {
    navigate("/orderhistory");
  }
  function handleNavigate60() {
    navigate("/favoritemenu");
  }

  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:1765"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[98%]"
          compid="1406"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1147" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:1785"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:1829"
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
                  className="justify-start lg:mb-[35px] xl:mb-[44px] 2xl:mb-[50px] 3xl:mb-[60px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  compid="1408"
                  comptype="Column"
                >
                  <Row
                    className="common-pointer items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:1798"
                    comptype="Row"
                    onClick={handleNavigate13}
                  >
                    <Img
                      src="images/img_trash_48X48.svg"
                      className="Vector"
                      compid="2:1800"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="dashboard"
                      compid="2:1801"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius1204 w-[63%]"
                    compid="2:1802"
                    comptype="Row"
                    onClick={handleNavigate50}
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:1804"
                      comptype="Image"
                      alt="Vector One"
                    />
                    <Text
                      className="foodorder"
                      compid="2:1805"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius1232 w-[52%]"
                    compid="2:1806"
                    comptype="Row"
                    onClick={handleNavigate60}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume"
                      compid="2:1808"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:1809"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Favorite
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer bg-amber_600 items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]"
                    compid="2:1810"
                    comptype="Row"
                    onClick={handleNavigate14}
                  >
                    <Img
                      src="images/img_orderdiscussio.svg"
                      className="OrderDiscussio"
                      compid="2:1811"
                      comptype="Image"
                      alt="OrderDiscussio"
                    />
                    <Text
                      className="message"
                      compid="2:1814"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Message
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[73%]"
                    compid="2:1815"
                    comptype="Row"
                    onClick={handleNavigate59}
                  >
                    <Img
                      src="images/img_music.svg"
                      className="music"
                      compid="2:1816"
                      comptype="Image"
                      alt="music"
                    />
                    <Text
                      className="orderhistory"
                      compid="2:1820"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Order History
                    </Text>
                  </Row>
                  <Row
                    className="items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius1416 w-[37%]"
                    compid="2:1821"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:1823"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="bills"
                      compid="2:1824"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Bills
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:1825"
                    comptype="Row"
                    onClick={handleNavigate58}
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:1827"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:1828"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]"
                    compid="2:1787"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:1788"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1117"
                      comptype="Stack"
                    >
                      <div
                        className="absolute bg-gradient3  bottom-[0] 3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] right-[0] rounded-radius5573 w-[40%]"
                        compid="2:1792"
                        comptype="View"
                      ></div>
                      <Button
                        className="common-pointer absolute bottom-[16%] font-semibold left-[4%] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                        compid="2:1793"
                        comptype="Button"
                        onClick={handleNavigate17}
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Upgrade
                      </Button>
                      <Img
                        src="images/img_grid.svg"
                        className="test_grid"
                        compid="2:1795"
                        comptype="Image"
                        alt="grid"
                      />
                      <Text
                        className="UpgradeyourAc"
                        compid="2:1796"
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
            compid="1405"
            comptype="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compid="1402"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:1766"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Bills
              </Text>
              <Img
                src="images/img_menu.svg"
                className="menu"
                compid="2:1767"
                comptype="Image"
                alt="menu"
              />
            </Row>
            <Row
              className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
              compid="1403"
              comptype="Row"
            >
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="flex w-[49%]"
                compid="2:1978"
                comptype="SearchView"
                name="SearchBar"
                placeholder="Search Bills"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[4px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:ml-[5px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[6px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[7px] 3xl:mr-[10px] my-[auto]"
                    compid="2:1980"
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
              <SelectBox
                className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900 w-[11%]"
                compid="2:1982"
                comptype="Dropdown"
                placeholderClassName="text-bluegray_900"
                name="sortby"
                placeholder="Recently"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_gray_500.svg"
                    className="lg:w-[4px] lg:h-[4px] lg:mr-[17px] xl:w-[6px] xl:h-[5px] xl:mr-[21px] 2xl:w-[6px] 2xl:h-[5px] 2xl:mr-[24px] 3xl:w-[8px] 3xl:h-[6px] 3xl:mr-[28px]"
                    compid="2:1985"
                    comptype="Image"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder16"
                size="lg"
                variant="FillWhiteA700"
              ></SelectBox>
            </Row>
            <Column
              className="bg-white_A700 items-end justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] rounded-radius16 w-[100%]"
              compid="2:1830"
              comptype="Column"
            >
              <Column
                className="items-center justify-start w-[100%]"
                compid="1409"
                comptype="Column"
              >
                <Row
                  className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                  compid="1118"
                  comptype="Row"
                >
                  <CheckBox
                    className="font-semibold lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900"
                    inputClassName="h-[24px] mr-[5px] w-[24px]"
                    compid="1153"
                    comptype="CheckBox"
                    name="Menu One"
                    label="Menu"
                    shape="RoundedBorder4"
                    size="md"
                    variant="OutlineGray300"
                  ></CheckBox>
                  <Text
                    className="font-semibold 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] text-bluegray_900 w-[auto]"
                    compid="2:1977"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Status
                  </Text>
                  <Text
                    className="font-semibold xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] text-bluegray_900 w-[auto]"
                    compid="2:1973"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Date
                  </Text>
                  <Text
                    className="font-semibold xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[149px] lg:ml-[88px] text-bluegray_900 w-[auto]"
                    compid="2:1974"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-semibold lg:ml-[144px] xl:ml-[180px] 2xl:ml-[202px] 3xl:ml-[243px] text-bluegray_900 w-[auto]"
                    compid="2:1975"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Total
                  </Text>
                  <Text
                    className="font-semibold lg:ml-[47px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] text-bluegray_900 w-[auto]"
                    compid="2:1976"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Payment Method
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] mt-[2px] w-[100%]"
                  compid="1410"
                  comptype="List"
                  orientation="vertical"
                >
                  <Row
                    className="bg-white_A700 items-center my-[0] lg:p-[13px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius1 w-[100%]"
                    compid="2:1848"
                    comptype="Row"
                  >
                    <CheckBox
                      className="font-medium lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900"
                      inputClassName="h-[24px] mr-[5px] w-[24px]"
                      compid="1149"
                      comptype="CheckBox"
                      name="INV0001234"
                      label="Order #1"
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineGray3001_2"
                    ></CheckBox>
                    <Button
                      className="font-semibold lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                      compid="2:1855"
                      comptype="Button"
                      shape="RoundedBorder16"
                      size="lg"
                      variant="OutlineLightgreen5001_2"
                    >
                      Completed
                    </Button>
                    <Text
                      className="June1202002"
                      compid="2:1857"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      June 1, 2020, 08:22 AM
                    </Text>
                    <Img
                      src="images/img_location.svg"
                      className="location2"
                      compid="2:1861"
                      comptype="Image"
                      alt="location"
                    />
                    <Text
                      className="ElmStreetTwentyThree"
                      compid="2:1859"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Elm Street, 23 Yogyakarta
                    </Text>
                    <Text
                      className="FiveHundredFiftyNine6"
                      compid="2:1862"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        $
                      </span>
                      <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        {" "}
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        5.59
                      </span>
                    </Text>
                    <Text
                      className="Cash"
                      compid="2:1863"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Cash
                    </Text>
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[160px] lg:ml-[95px] my-[3px] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      compid="2:1851"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
                      size="xlIcn"
                      variant="icbFillGray100"
                    >
                      <Img
                        src="images/img_arrowdown_gray_500.svg"
                        className="flex items-center justify-center"
                        alt="arrowdown"
                      />
                    </Button>
                  </Row>
                  <Line
                    className="self-center w-[99%] h-[2px] bg-gray_100 rounded-radius1"
                    compid="2:1971"
                    comptype="Line"
                  />
                  <Row
                    className="bg-amber_600 items-center my-[0] lg:p-[15px] xl:p-[19px] 2xl:p-[21px] 3xl:p-[26px] w-[100%]"
                    compid="2:1951"
                    comptype="Row"
                  >
                    <CheckBox
                      className="font-medium ml-[3px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-white_A700"
                      inputClassName="h-[24px] mr-[5px] w-[24px]"
                      compid="1152"
                      comptype="CheckBox"
                      name="INV0001234 One"
                      label="Order #1"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="OutlineWhiteA700"
                    ></CheckBox>
                    <Button
                      className="font-semibold lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                      compid="2:1958"
                      comptype="Button"
                      shape="RoundedBorder16"
                      size="lg"
                      variant="OutlineWhiteA700"
                    >
                      Completed
                    </Button>
                    <Text
                      className="font-normal leading-[normal] lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] not-italic text-white_A700 w-[8%]"
                      compid="2:1960"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      June 1, 2020, 08:22 AM
                    </Text>
                    <Img
                      src="images/img_location_32X32.svg"
                      className="location2"
                      compid="2:1964"
                      comptype="Image"
                      alt="location One"
                    />
                    <Text
                      className="font-semibold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-white_A700 w-[auto]"
                      compid="2:1962"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Elm Street, 23 Yogyakarta
                    </Text>
                    <Text
                      className="font-semibold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] text-white_A700 w-[auto]"
                      compid="2:1965"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      <span className="text-white_A700 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        $
                      </span>
                      <span className="text-white_A700 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        {" "}
                      </span>
                      <span className="text-white_A700 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        5.59
                      </span>
                    </Text>
                    <Text
                      className="font-medium lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] text-white_A700 w-[auto]"
                      compid="2:1966"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Cash
                    </Text>
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[160px] lg:ml-[95px] rotate-[180deg] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      compid="2:1954"
                      comptype="IconButton"
                      shape="icbRoundedBorder16"
                      size="xlIcn"
                      variant="icbFillWhiteA7007f"
                    >
                      <Img
                        src="images/img_arrowdown_white_A700.svg"
                        className="flex items-center justify-center"
                        alt="arrowdown One"
                      />
                    </Button>
                  </Row>
                </List>
                <Row
                  className="bg-white_A700 items-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] shadow-bs4 w-[100%]"
                  compid="2:1897"
                  comptype="Row"
                >
                  <Column
                    className="justify-start lg:ml-[33px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] mt-[4px] w-[21%]"
                    compid="2:1917"
                    comptype="Column"
                  >
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:1918"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Order Menu
                    </Text>
                    <List
                      className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[89%]"
                      compid="1411"
                      comptype="List"
                      orientation="vertical"
                    >
                      <Row className="menu5" compid="2:1919" comptype="Row">
                        <div
                          className="bg-gray_400 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius16 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          compid="2:1922"
                          comptype="View"
                        ></div>
                        <Column
                          className="w-[46%]"
                          compid="2:1923"
                          comptype="Column"
                        >
                          <Text
                            className="font-semibold text-bluegray_900 w-[auto]"
                            compid="2:1924"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            Pepperoni Pizza
                          </Text>
                          <Text
                            className="x1"
                            compid="2:1925"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            x1
                          </Text>
                        </Column>
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          compid="2:1926"
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
                      <Row className="menu5" compid="2:1927" comptype="Row">
                        <div
                          className="bg-gray_400 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius16 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          compid="2:1930"
                          comptype="View"
                        ></div>
                        <Column
                          className="w-[46%]"
                          compid="2:1931"
                          comptype="Column"
                        >
                          <Text
                            className="font-semibold text-bluegray_900 w-[auto]"
                            compid="2:1932"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            Cheese Burger
                          </Text>
                          <Text
                            className="x1"
                            compid="2:1933"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            x1
                          </Text>
                        </Column>
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          compid="2:1934"
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
                    </List>
                  </Column>
                  <Line
                    className="bg-gray_300 xl:h-[104px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[83px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] w-[1px]"
                    compid="2:1916"
                    comptype="Line"
                  />
                  <Column
                    className="justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] mt-[4px] pb-[1px] pr-[1px] w-[19%]"
                    compid="2:1899"
                    comptype="Column"
                  >
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:1907"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Fast Food Resto
                    </Text>
                    <Row
                      className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[54%]"
                      compid="2:1900"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star1_21.svg"
                        className="StarOne"
                        compid="2:1902"
                        comptype="Image"
                        alt="StarOne"
                      />
                      <Text
                        className="rate"
                        compid="2:1903"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        5.0
                      </Text>
                      <div
                        className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                        compid="2:1904"
                        comptype="View"
                      ></div>
                      <Text
                        className="rate"
                        compid="2:1906"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1k+ Reviews
                      </Text>
                    </Row>
                    <Row
                      className="items-start justify-between lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]"
                      compid="2:1908"
                      comptype="Row"
                    >
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:1909"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Delivery Time{" "}
                      </Text>
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:1910"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        10 Min
                      </Text>
                    </Row>
                    <Row
                      className="items-center justify-between mb-[3px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]"
                      compid="2:1911"
                      comptype="Row"
                    >
                      <Text
                        className="Distance"
                        compid="2:1912"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Distance
                      </Text>
                      <Text
                        className="test_25Km"
                        compid="2:1913"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        2.5 Km
                      </Text>
                    </Row>
                  </Column>
                  <Line
                    className="bg-gray_300 xl:h-[104px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[83px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] w-[1px]"
                    compid="2:1914"
                    comptype="Line"
                  />
                  <Column
                    className="items-center justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] pr-[1px] py-[1px] w-[18%]"
                    compid="2:1938"
                    comptype="Column"
                  >
                    <Row
                      className="items-start justify-evenly mt-[2px] w-[100%]"
                      compid="1399"
                      comptype="Row"
                    >
                      <Column
                        className="justify-start w-[58%]"
                        compid="2:1939"
                        comptype="Column"
                      >
                        <Text
                          className="MondayJuneThirtyOne_One"
                          compid="2:1940"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Status
                        </Text>
                        <Text
                          className="font-medium xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                          compid="2:1941"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Completed
                        </Text>
                      </Column>
                      <Column
                        className="justify-start mt-[1px] w-[42%]"
                        compid="2:1948"
                        comptype="Column"
                      >
                        <Text
                          className="MondayJuneThirtyOne_One"
                          compid="2:1949"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Date
                        </Text>
                        <Text
                          className="font-medium xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                          compid="2:1950"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          June 1, 2020
                        </Text>
                      </Column>
                    </Row>
                    <Row
                      className="items-center justify-evenly mb-[2px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]"
                      compid="1400"
                      comptype="Row"
                    >
                      <Column
                        className="w-[58%]"
                        compid="2:1942"
                        comptype="Column"
                      >
                        <Text
                          className="MondayJuneThirtyOne_One"
                          compid="2:1943"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Bills
                        </Text>
                        <Text
                          className="font-medium xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-bluegray_900 w-[auto]"
                          compid="2:1944"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Order #1
                        </Text>
                      </Column>
                      <Column
                        className="w-[42%]"
                        compid="2:1945"
                        comptype="Column"
                      >
                        <Text
                          className="MondayJuneThirtyOne_One"
                          compid="2:1946"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Date Paid
                        </Text>
                        <Text
                          className="font-medium xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] text-bluegray_900 w-[auto]"
                          compid="2:1947"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          June 1, 2020
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line
                    className="bg-gray_300 xl:h-[104px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[83px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] w-[1px]"
                    compid="2:1915"
                    comptype="Line"
                  />
                  <Column
                    className="justify-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] mt-[4px] w-[7%]"
                    compid="2:1935"
                    comptype="Column"
                  >
                    <Text
                      className="font-medium text-gray_500 w-[auto]"
                      compid="2:1936"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Total
                    </Text>
                    <Text
                      className="font-bold lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] text-red_400 w-[auto]"
                      compid="2:1937"
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
                  </Column>
                </Row>
              </Column>
              <div
                className="overflow-x-auto w-[100%]"
                compid="1412"
                comptype="HorizontalScroll"
              >
                <Stack
                  className="lg:h-[162px] xl:h-[203px] 2xl:h-[228px] 3xl:h-[273px] w-[100%]"
                  compid="1395"
                  comptype="Stack"
                >
                  <Column
                    className="absolute items-center justify-start right-[0] w-[82%]"
                    compid="1396"
                    comptype="Column"
                  >
                    <Row
                      className="bg-white_A700 items-center lg:p-[13px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius1 w-[100%]"
                      compid="2:1864"
                      comptype="Row"
                    >
                      <CheckBox
                        className="font-medium lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900"
                        inputClassName="h-[24px] mr-[5px] w-[24px]"
                        compid="1150"
                        comptype="CheckBox"
                        name="INV0001234 Two"
                        label="Order #1"
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineGray3001_2"
                      ></CheckBox>
                      <Button
                        className="font-semibold lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                        compid="2:1871"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineLightgreen5001_2"
                      >
                        Completed
                      </Button>
                      <Text
                        className="June1202002"
                        compid="2:1873"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        June 1, 2020, 08:22 AM
                      </Text>
                      <Img
                        src="images/img_location.svg"
                        className="location2"
                        compid="2:1877"
                        comptype="Image"
                        alt="location Two"
                      />
                      <Text
                        className="ElmStreetTwentyThree"
                        compid="2:1875"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Elm Street, 23 Yogyakarta
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine6"
                        compid="2:1878"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          $
                        </span>
                        <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          {" "}
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          5.59
                        </span>
                      </Text>
                      <Text
                        className="Cash"
                        compid="2:1879"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Cash
                      </Text>
                      <Button
                        className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[160px] lg:ml-[95px] my-[3px] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        compid="2:1867"
                        comptype="IconButton"
                        shape="icbRoundedBorder16"
                        size="xlIcn"
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
                      className="items-center 2xl:mt-[109px] 3xl:mt-[131px] lg:mt-[77px] xl:mt-[97px] lg:pr-[25px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] w-[95%]"
                      compid="2:1832"
                      comptype="Row"
                    >
                      <Text
                        className="pagination"
                        compid="2:1833"
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
                          100{" "}
                        </span>
                        <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                          data
                        </span>
                      </Text>
                      <Button
                        className="font-normal lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:ml-[534px] xl:ml-[667px] 2xl:ml-[751px] 3xl:ml-[901px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
                        compid="2:1837"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="FillAmber60063"
                      >
                        1
                      </Button>
                      <Button
                        className="font-normal lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
                        compid="2:1840"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="FillAmber600"
                      >
                        2
                      </Button>
                      <Button
                        className="font-normal lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
                        compid="2:1843"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="FillDeeporange40019"
                      >
                        3
                      </Button>
                    </Row>
                  </Column>
                  <Column
                    className="absolute bottom-[6%] justify-start w-[100%]"
                    compid="1155"
                    comptype="Column"
                  >
                    <Slider
                      slidesToShow={2}
                      activeIndex={sliderState}
                      onSlideChanged={(e) => {
                        setsliderState(e?.item);
                      }}
                      activeSlideCSS="scale-[1.00]"
                      ref={sliderRef}
                      className="w-[100%]"
                      items={[...Array(6)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <Row
                            className="bg-white_A700 items-center lg:p-[13px] xl:p-[17px] 2xl:p-[19px] 3xl:p-[23px] rounded-radius1 w-[100%]"
                            compid="2:1880"
                            comptype="Row"
                          >
                            <CheckBox
                              className="font-medium lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900"
                              inputClassName="mr-[5px] w-[undefinedpx]"
                              compid="1151"
                              comptype="CheckBox"
                              name="INV0001234 Three"
                              label="Order #1"
                              shape="RoundedBorder4"
                              size="md"
                              variant="OutlineGray3001_2"
                            ></CheckBox>
                            <Button
                              className="font-semibold lg:ml-[52px] xl:ml-[66px] 2xl:ml-[74px] 3xl:ml-[89px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                              compid="2:1887"
                              comptype="Button"
                              shape="RoundedBorder16"
                              size="lg"
                              variant="OutlineLightgreen5001_2"
                            >
                              Completed
                            </Button>
                            <Text
                              className="June1202002"
                              compid="2:1889"
                              as="h5"
                              variant="h5"
                              comptype="Text"
                            >
                              June 1, 2020, 08:22 AM
                            </Text>
                            <Img
                              src="images/img_location.svg"
                              className="location2"
                              compid="2:1893"
                              comptype="Image"
                              alt="location Three"
                            />
                            <Text
                              className="ElmStreetTwentyThree"
                              compid="2:1891"
                              as="h5"
                              variant="h5"
                              comptype="Text"
                            >
                              Elm Street, 23 Yogyakarta
                            </Text>
                            <Text
                              className="FiveHundredFiftyNine6"
                              compid="2:1894"
                              as="h5"
                              variant="h5"
                              comptype="Text"
                            >
                              <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                $
                              </span>
                              <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                {" "}
                              </span>
                              <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                5.59
                              </span>
                            </Text>
                            <Text
                              className="Cash"
                              compid="2:1895"
                              as="h5"
                              variant="h5"
                              comptype="Text"
                            >
                              Cash
                            </Text>
                            <Button
                              className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[160px] lg:ml-[95px] my-[3px] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                              compid="2:1883"
                              comptype="IconButton"
                              shape="icbRoundedBorder16"
                              size="xlIcn"
                              variant="icbFillGray100"
                            >
                              <Img
                                src="images/img_arrowdown_gray_500.svg"
                                className="flex items-center justify-center"
                                alt="arrowdown Three"
                              />
                            </Button>
                          </Row>
                        </React.Fragment>
                      ))}
                      Indicator={({ isActive }) => {
                        if (isActive) {
                          return <div className="" />;
                        }
                        return <div className="" role="button" tabIndex={0} />;
                      }}
                    />
                    <Row
                      className="items-center justify-end ml-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[14%]"
                      compid="1397"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_arrowleft.svg"
                        className="arrowleft"
                        compid="2:1836"
                        comptype="Image"
                        onClick={() => sliderRef.current?.slidePrev()}
                        alt="arrowleft"
                      />
                      <Img
                        src="images/img_arrowright.svg"
                        className="cursor-pointer 2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] lg:ml-[127px] xl:ml-[159px] 2xl:ml-[179px] 3xl:ml-[215px] mt-[1px] w-[3%]"
                        compid="2:1847"
                        comptype="Image"
                        onClick={() => sliderRef.current?.slideNext()}
                        alt="arrowright"
                      />
                    </Row>
                  </Column>
                </Stack>
              </div>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default BillsPage;

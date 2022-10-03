import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Stack,
  Button,
  SelectBox,
  List,
  Line,
} from "components";
import { useNavigate } from "react-router-dom";

const NotificationPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate11() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate12() {
    navigate("/chat");
  }
  function handleNavigate29() {
    navigate("/settingscustomer");
  }
  function handleNavigate30() {
    navigate("/bills");
  }
  function handleNavigate31() {
    navigate("/orderhistory");
  }
  function handleNavigate32() {
    navigate("/favoritemenu");
  }
  function handleNavigate33() {
    navigate("/foodorder");
  }

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:1625"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[98%]"
          compid="1194"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1130" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:1720"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:1764"
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
                  className="justify-start lg:mb-[24px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  compid="1196"
                  comptype="Column"
                >
                  <Row
                    className="common-pointer items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:1733"
                    comptype="Row"
                    onClick={handleNavigate7}
                  >
                    <Img
                      src="images/img_trash_48X48.svg"
                      className="Vector"
                      compid="2:1735"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="dashboard"
                      compid="2:1736"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-radius1204 w-[63%]"
                    compid="2:1737"
                    comptype="Row"
                    onClick={handleNavigate33}
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:1739"
                      comptype="Image"
                      alt="Vector One"
                    />
                    <Text
                      className="foodorder"
                      compid="2:1740"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius1232 w-[52%]"
                    compid="2:1741"
                    comptype="Row"
                    onClick={handleNavigate32}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume"
                      compid="2:1743"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:1744"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Favorite
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer bg-amber_600 items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] lg:p-[11px] xl:p-[14px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius20 w-[100%]"
                    compid="2:1745"
                    comptype="Row"
                    onClick={handleNavigate12}
                  >
                    <Img
                      src="images/img_orderdiscussio.svg"
                      className="OrderDiscussio"
                      compid="2:1746"
                      comptype="Image"
                      alt="OrderDiscussio"
                    />
                    <Text
                      className="message"
                      compid="2:1749"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Message
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] lg:py-[2px] 2xl:py-[3px] xl:py-[3px] 3xl:py-[4px] rounded-radius20 w-[73%]"
                    compid="2:1750"
                    comptype="Row"
                    onClick={handleNavigate31}
                  >
                    <Img
                      src="images/img_music.svg"
                      className="music"
                      compid="2:1751"
                      comptype="Image"
                      alt="music"
                    />
                    <Text
                      className="orderhistory"
                      compid="2:1755"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Order History
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius1416 w-[37%]"
                    compid="2:1756"
                    comptype="Row"
                    onClick={handleNavigate30}
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:1758"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="bills"
                      compid="2:1759"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Bills
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:1760"
                    comptype="Row"
                    onClick={handleNavigate29}
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:1762"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:1763"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]"
                    compid="2:1722"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:1723"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1099"
                      comptype="Stack"
                    >
                      <div
                        className="absolute bg-gradient3  bottom-[0] 3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] right-[0] rounded-radius5573 w-[40%]"
                        compid="2:1727"
                        comptype="View"
                      ></div>
                      <Button
                        className="common-pointer absolute bottom-[16%] font-semibold left-[4%] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[42%]"
                        compid="2:1728"
                        comptype="Button"
                        onClick={handleNavigate11}
                        shape="RoundedBorder8"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Upgrade
                      </Button>
                      <Img
                        src="images/img_grid.svg"
                        className="test_grid"
                        compid="2:1730"
                        comptype="Image"
                        alt="grid"
                      />
                      <Text
                        className="UpgradeyourAc"
                        compid="2:1731"
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
            compid="1193"
            comptype="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compid="1192"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:1702"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Notification
              </Text>
              <Img
                src="images/img_menu.svg"
                className="menu"
                compid="2:1703"
                comptype="Image"
                alt="menu"
              />
            </Row>
            <Column
              className="bg-white_A700 justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 w-[100%]"
              compid="2:1626"
              comptype="Column"
            >
              <Row
                className="items-center w-[99%]"
                compid="2:1628"
                comptype="Row"
              >
                <Button
                  className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[8%]"
                  compid="2:1632"
                  comptype="Button"
                  shape="CustomBorderTL8"
                  size="md"
                  variant="FillAmber600"
                >
                  Activity
                </Button>
                <Button
                  className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[8%]"
                  compid="2:1630"
                  comptype="Button"
                  shape="CustomBorderLR8"
                  size="md"
                  variant="FillGray100"
                >
                  Notifications
                </Button>
                <SelectBox
                  className="font-normal lg:ml-[530px] xl:ml-[662px] 2xl:ml-[745px] 3xl:ml-[894px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_900 w-[10%]"
                  compid="2:1636"
                  comptype="Dropdown"
                  placeholderClassName="text-bluegray_900"
                  name="sortby"
                  placeholder="Recently"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_500.svg"
                      className="lg:w-[4px] lg:h-[4px] lg:mr-[16px] xl:w-[6px] xl:h-[5px] xl:mr-[20px] 2xl:w-[6px] 2xl:h-[5px] 2xl:mr-[23px] 3xl:w-[8px] 3xl:h-[6px] 3xl:mr-[27px]"
                      compid="2:1639"
                      comptype="Image"
                      alt="arrow_down"
                    />
                  }
                  size="md"
                ></SelectBox>
                <Img
                  src="images/img_vector_gray_500.svg"
                  className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[2%]"
                  compid="2:1635"
                  comptype="Image"
                  alt="Vector Two"
                />
              </Row>
              <Text
                className="font-bold lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-bluegray_900 w-[auto]"
                compid="2:1679"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Today
              </Text>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]"
                compid="1195"
                comptype="List"
                orientation="vertical"
              >
                <Row
                  className="items-start justify-between xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:my-[9px] w-[100%]"
                  compid="1176"
                  comptype="Row"
                >
                  <Button
                    className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    compid="2:1648"
                    comptype="IconButton"
                    shape="icbRoundedBorder16"
                    size="lgIcn"
                    variant="icbFillAmber600"
                  >
                    <Img
                      src="images/img_trash_48X48.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                      alt="trash One"
                    />
                  </Button>
                  <Column
                    className="justify-start mt-[4px] w-[94%]"
                    compid="1175"
                    comptype="Column"
                  >
                    <Row
                      className="font-poppins items-start justify-between w-[100%]"
                      compid="1174"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        compid="2:1647"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Order #1
                      </Text>
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:1645"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Monday, June 31 2020
                      </Text>
                    </Row>
                    <Text
                      className="OrderAccepted"
                      compid="2:1646"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        Order Accepted
                      </span>
                      <span className="text-bluegray_900 font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        {" "}
                      </span>
                      <span className="text-bluegray_900 font-poppins font-normal not-italic lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        by restaurant.
                      </span>
                    </Text>
                    <Text
                      className="Loremipsumdol2"
                      compid="2:1644"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.{" "}
                    </Text>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:my-[9px] w-[100%]"
                  compid="1182"
                  comptype="Row"
                >
                  <Button
                    className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    compid="2:1666"
                    comptype="IconButton"
                    shape="icbRoundedBorder16"
                    size="lgIcn"
                    variant="icbFillLightgreen500"
                  >
                    <Img
                      src="images/img_settings_48X48.svg"
                      className="flex items-center justify-center"
                      alt="settings One"
                    />
                  </Button>
                  <Column
                    className="justify-start mt-[4px] w-[94%]"
                    compid="1181"
                    comptype="Column"
                  >
                    <Row
                      className="font-poppins items-center justify-between w-[100%]"
                      compid="1180"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        compid="2:1665"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Offer
                      </Text>
                      <Text
                        className="MondayJuneThirtyOne_One"
                        compid="2:1663"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Monday, June 31 2020
                      </Text>
                    </Row>
                    <Text
                      className="OrderAccepted"
                      compid="2:1664"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        Get voucher up to 20%
                      </span>
                      <span className="text-bluegray_900 font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        {" "}
                      </span>
                      <span className="text-bluegray_900 font-poppins font-normal not-italic lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        by restaurant. Get Now!
                      </span>
                    </Text>
                    <Text
                      className="Loremipsumdol2"
                      compid="2:1662"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.{" "}
                    </Text>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:my-[9px] w-[100%]"
                  compid="1185"
                  comptype="Row"
                >
                  <Button
                    className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    compid="2:1675"
                    comptype="IconButton"
                    shape="icbRoundedBorder16"
                    size="lgIcn"
                    variant="icbFillBlue600"
                  >
                    <Img
                      src="images/img_notification.svg"
                      className="flex items-center justify-center"
                      alt="notification One"
                    />
                  </Button>
                  <Column
                    className="justify-start mt-[4px] w-[94%]"
                    compid="1184"
                    comptype="Column"
                  >
                    <Row
                      className="items-start justify-between w-[100%]"
                      compid="1183"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold mt-[2px] text-bluegray_900 w-[auto]"
                        compid="2:1674"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Update
                      </Text>
                      <Text
                        className="MondayJuneThirtyOne_One"
                        compid="2:1672"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Monday, June 31 2020
                      </Text>
                    </Row>
                    <Text
                      className="font-bold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-bluegray_900 w-[auto]"
                      compid="2:1673"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Weekly maintenance schedule
                    </Text>
                    <Text
                      className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] MondayJuneThirtyOne_One"
                      compid="2:1671"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.{" "}
                    </Text>
                  </Column>
                </Row>
                <Row
                  className="items-start justify-between xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:my-[9px] w-[100%]"
                  compid="1179"
                  comptype="Row"
                >
                  <Button
                    className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    compid="2:1657"
                    comptype="IconButton"
                    shape="icbRoundedBorder16"
                    size="lgIcn"
                    variant="icbFillAmber600"
                  >
                    <Img
                      src="images/img_trash_48X48.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                      alt="trash Two"
                    />
                  </Button>
                  <Column
                    className="justify-start mt-[4px] w-[94%]"
                    compid="1178"
                    comptype="Column"
                  >
                    <Row
                      className="font-poppins items-start justify-between w-[100%]"
                      compid="1177"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        compid="2:1656"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Order #1
                      </Text>
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:1654"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Monday, June 31 2020
                      </Text>
                    </Row>
                    <Text
                      className="OrderAccepted"
                      compid="2:1655"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        Order Accepted
                      </span>
                      <span className="text-bluegray_900 font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        {" "}
                      </span>
                      <span className="text-bluegray_900 font-poppins font-normal not-italic lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        by restaurant.
                      </span>
                    </Text>
                    <Text
                      className="Loremipsumdol2"
                      compid="2:1653"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.{" "}
                    </Text>
                  </Column>
                </Row>
              </List>
              <Text
                className="font-bold lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-bluegray_900 w-[auto]"
                compid="2:1701"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Yesterday
              </Text>
              <Stack
                className="lg:h-[104px] xl:h-[130px] 2xl:h-[146px] 3xl:h-[175px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[22px] 3xl:mb-[27px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]"
                compid="2:1681"
                comptype="Stack"
              >
                <Line
                  className="absolute bg-gray_500 xl:h-[104px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[83px] left-[2%] top-[3%] w-[1px]"
                  compid="2:1682"
                  comptype="Line"
                />
                <Row
                  className="absolute items-start justify-between top-[0] w-[100%]"
                  compid="1188"
                  comptype="Row"
                >
                  <Button
                    className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    compid="2:1688"
                    comptype="IconButton"
                    shape="icbRoundedBorder16"
                    size="lgIcn"
                    variant="icbFillAmber600"
                  >
                    <Img
                      src="images/img_trash_48X48.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                      alt="trash Three"
                    />
                  </Button>
                  <Column
                    className="justify-start mt-[4px] w-[94%]"
                    compid="1187"
                    comptype="Column"
                  >
                    <Row
                      className="font-poppins items-start justify-between w-[100%]"
                      compid="1186"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        compid="2:1687"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Order #1
                      </Text>
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:1685"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Monday, June 31 2020
                      </Text>
                    </Row>
                    <Text
                      className="OrderAccepted"
                      compid="2:1686"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        Order Accepted
                      </span>
                      <span className="text-bluegray_900 font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        {" "}
                      </span>
                      <span className="text-bluegray_900 font-poppins font-normal not-italic lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        by restaurant.
                      </span>
                    </Text>
                    <Text
                      className="Loremipsumdol2"
                      compid="2:1684"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.{" "}
                    </Text>
                  </Column>
                </Row>
                <Row
                  className="absolute bottom-[0] items-start justify-between w-[100%]"
                  compid="1191"
                  comptype="Row"
                >
                  <Button
                    className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    compid="2:1697"
                    comptype="IconButton"
                    shape="icbRoundedBorder16"
                    size="lgIcn"
                    variant="icbFillLightgreen500"
                  >
                    <Img
                      src="images/img_settings_48X48.svg"
                      className="flex items-center justify-center"
                      alt="settings Two"
                    />
                  </Button>
                  <Column
                    className="justify-start mt-[4px] w-[94%]"
                    compid="1190"
                    comptype="Column"
                  >
                    <Row
                      className="font-poppins items-center justify-between w-[100%]"
                      compid="1189"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        compid="2:1696"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Offer
                      </Text>
                      <Text
                        className="MondayJuneThirtyOne_One"
                        compid="2:1694"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Monday, June 31 2020
                      </Text>
                    </Row>
                    <Text
                      className="OrderAccepted"
                      compid="2:1695"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      <span className="text-bluegray_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        Get voucher up to 20%
                      </span>
                      <span className="text-bluegray_900 font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        {" "}
                      </span>
                      <span className="text-bluegray_900 font-poppins font-normal not-italic lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        by restaurant. Get Now!
                      </span>
                    </Text>
                    <Text
                      className="Loremipsumdol2"
                      compid="2:1693"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.{" "}
                    </Text>
                  </Column>
                </Row>
              </Stack>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default NotificationPage;

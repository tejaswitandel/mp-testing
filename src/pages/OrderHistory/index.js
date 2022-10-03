import React from "react";

import {
  Stack,
  Column,
  Text,
  Input,
  Img,
  Slider,
  List,
  Row,
  Button,
  CheckBox,
  Line,
  SelectBox,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const OrderHistoryPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Stack
        className="bg-gray_100 font-poppins 3xl:h-[1045px] lg:h-[620px] xl:h-[774px] 2xl:h-[871px] mx-[auto] lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] w-[100%]"
        compid="2:1367"
        comptype="Stack"
      >
        <Column
          className="absolute justify-start left-[20%] top-[6%] w-[38%]"
          compid="1243"
          comptype="Column"
        >
          <Text
            className="font-bold text-bluegray_900 w-[auto]"
            compid="2:1368"
            as="h2"
            variant="h2"
            comptype="Text"
          >
            Order History
          </Text>
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
            wrapClassName="2xl:mt-[31px] 3xl:mt-[37px] flex lg:mt-[22px] w-[100%] xl:mt-[28px]"
            compid="2:1617"
            comptype="SearchView"
            name="SearchBar"
            placeholder="Search"
            prefix={
              <Img
                src="images/img_search.svg"
                className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[4px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:ml-[5px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[6px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[7px] 3xl:mr-[10px] my-[auto]"
                compid="2:1619"
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
        </Column>
        <Img
          src="images/img_menu.svg"
          className="absolute lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] right-[0] top-[5%] w-[15%]"
          compid="2:1369"
          comptype="Image"
          alt="menu"
        />
        <Stack
          className="absolute 3xl:h-[1045px] lg:h-[620px] xl:h-[774px] 2xl:h-[871px] w-[98%]"
          compid="1138"
          comptype="Stack"
        >
          <Slider
            slidesToShow={2}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00] absolute"
            ref={sliderRef}
            className="absolute w-[100%]"
            items={[...Array(6)].map(() => (
              <React.Fragment key={Math.random()}>
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  compid="1245"
                  comptype="List"
                  orientation="vertical"
                >
                  <Row className="order_history" compid="2:1452" comptype="Row">
                    <div
                      className="border-bw3 border-gray_300 border-solid lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] rounded-radius4 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                      compid="2:1460"
                      comptype="View"
                    ></div>
                    <div
                      className="bg-gray_400 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                      compid="2:1459"
                      comptype="View"
                    ></div>
                    <Column
                      className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[13%]"
                      compid="2:1469"
                      comptype="Column"
                    >
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        compid="2:1471"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Fish Burger
                      </Text>
                      <Text
                        className="test_1x"
                        compid="2:1470"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1x{" "}
                      </Text>
                    </Column>
                    <Text
                      className="June120200"
                      compid="2:1468"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      June 1, 2020, 08:22 AM
                    </Text>
                    <Column
                      className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] pr-[2px] pt-[2px] w-[20%]"
                      compid="2:1461"
                      comptype="Column"
                    >
                      <Row
                        className="items-start ml-[3px] w-[89%]"
                        compid="2:1462"
                        comptype="Row"
                      >
                        <Img
                          src="images/img_location.svg"
                          className="location1"
                          compid="2:1465"
                          comptype="Image"
                          alt="location"
                        />
                        <Text
                          className="content1"
                          compid="2:1463"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Elm Street, 23 Yogyakarta
                        </Text>
                      </Row>
                      <Text
                        className="address"
                        compid="2:1466"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        2,97 Km
                      </Text>
                    </Column>
                    <Text
                      className="FiveHundredFiftyNine"
                      compid="2:1467"
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
                    <Button
                      className="font-semibold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                      compid="2:1474"
                      comptype="Button"
                      shape="RoundedBorder16"
                      size="lg"
                      variant="OutlineLightgreen5001_2"
                    >
                      Completed
                    </Button>
                    <Button
                      className="font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[8%]"
                      compid="2:1454"
                      comptype="Button"
                      shape="RoundedBorder16"
                      size="lg"
                      variant="OutlineAmber6001_2"
                    >
                      Order Again
                    </Button>
                    <Img
                      src="images/img_vector_gray_500.svg"
                      className="Vector4"
                      compid="2:1473"
                      comptype="Image"
                      alt="Vector"
                    />
                  </Row>
                  <Column
                    className="bg-white_A700 items-center justify-start my-[0] 3xl:pb-[11px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] rounded-radius1 w-[100%]"
                    compid="2:1476"
                    comptype="Column"
                  >
                    <div
                      className="bg-gray_100 h-[2px] rounded-radius1 w-[100%]"
                      compid="2:1601"
                      comptype="View"
                    ></div>
                    <Row
                      className="items-center mb-[4px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[96%]"
                      compid="1216"
                      comptype="Row"
                    >
                      <div
                        className="border-bw3 border-gray_300 border-solid lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius4 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                        compid="2:1484"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-gray_400 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                        compid="2:1483"
                        comptype="View"
                      ></div>
                      <Column
                        className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[13%]"
                        compid="2:1493"
                        comptype="Column"
                      >
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          compid="2:1495"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Pepperoni Pizza
                        </Text>
                        <Text
                          className="test_1x"
                          compid="2:1494"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          1x{" "}
                        </Text>
                      </Column>
                      <Text
                        className="June120200"
                        compid="2:1492"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        June 1, 2020, 08:22 AM
                      </Text>
                      <Column
                        className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] pr-[2px] pt-[2px] w-[21%]"
                        compid="2:1485"
                        comptype="Column"
                      >
                        <Row
                          className="items-start ml-[3px] w-[89%]"
                          compid="2:1486"
                          comptype="Row"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="location1"
                            compid="2:1489"
                            comptype="Image"
                            alt="location One"
                          />
                          <Text
                            className="content1"
                            compid="2:1487"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Elm Street, 23 Yogyakarta
                          </Text>
                        </Row>
                        <Text
                          className="address"
                          compid="2:1490"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          2,97 Km
                        </Text>
                      </Column>
                      <Text
                        className="FiveHundredFiftyNine"
                        compid="2:1491"
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
                      <Button
                        className="font-semibold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                        compid="2:1498"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineAmber600"
                      >
                        Delivering
                      </Button>
                      <Button
                        className="font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[8%]"
                        compid="2:1478"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineAmber6001_2"
                      >
                        Order Again
                      </Button>
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="Vector4"
                        compid="2:1497"
                        comptype="Image"
                        alt="Vector One"
                      />
                    </Row>
                  </Column>
                  <Column
                    className="bg-white_A700 items-center justify-end my-[0] 3xl:pr-[11px] lg:pr-[6px] xl:pr-[8px] 2xl:pr-[9px] 3xl:pt-[11px] lg:pt-[6px] xl:pt-[8px] 2xl:pt-[9px] rounded-radius1 w-[100%]"
                    compid="2:1500"
                    comptype="Column"
                  >
                    <Row
                      className="items-center mt-[4px] w-[96%]"
                      compid="1222"
                      comptype="Row"
                    >
                      <Button
                        className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                        compid="2:1508"
                        comptype="IconButton"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_vector8.svg"
                          className="flex items-center justify-center"
                          alt="VectorEight"
                        />
                      </Button>
                      <div
                        className="bg-gray_400 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                        compid="2:1507"
                        comptype="View"
                      ></div>
                      <Column
                        className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[13%]"
                        compid="2:1519"
                        comptype="Column"
                      >
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          compid="2:1521"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Double Burger
                        </Text>
                        <Text
                          className="test_1x"
                          compid="2:1520"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          1x{" "}
                        </Text>
                      </Column>
                      <Text
                        className="June120200"
                        compid="2:1518"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        June 1, 2020, 08:22 AM
                      </Text>
                      <Column
                        className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] pr-[2px] pt-[2px] w-[21%]"
                        compid="2:1511"
                        comptype="Column"
                      >
                        <Row
                          className="items-start ml-[3px] w-[89%]"
                          compid="2:1512"
                          comptype="Row"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="location1"
                            compid="2:1515"
                            comptype="Image"
                            alt="location Two"
                          />
                          <Text
                            className="content1"
                            compid="2:1513"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Elm Street, 23 Yogyakarta
                          </Text>
                        </Row>
                        <Text
                          className="address"
                          compid="2:1516"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          2,97 Km
                        </Text>
                      </Column>
                      <Text
                        className="FiveHundredFiftyNine"
                        compid="2:1517"
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
                      <Button
                        className="font-semibold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                        compid="2:1524"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineLightgreen5001_2"
                      >
                        Completed
                      </Button>
                      <Button
                        className="font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[8%]"
                        compid="2:1502"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineAmber6001_2"
                      >
                        Order Again
                      </Button>
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="Vector4"
                        compid="2:1523"
                        comptype="Image"
                        alt="Vector Two"
                      />
                    </Row>
                    <div
                      className="bg-gray_100 h-[2px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] rounded-radius1 w-[100%]"
                      compid="2:1603"
                      comptype="View"
                    ></div>
                  </Column>
                  <Column
                    className="bg-white_A700 items-center justify-end my-[0] pr-[1px] py-[1px] rounded-radius1 w-[100%]"
                    compid="2:1526"
                    comptype="Column"
                  >
                    <Row
                      className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[95%]"
                      compid="1228"
                      comptype="Row"
                    >
                      <div
                        className="border-bw3 border-gray_300 border-solid lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius4 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                        compid="2:1534"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-gray_400 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                        compid="2:1533"
                        comptype="View"
                      ></div>
                      <Column
                        className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[13%]"
                        compid="2:1543"
                        comptype="Column"
                      >
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          compid="2:1545"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Beef Burger
                        </Text>
                        <Text
                          className="test_1x"
                          compid="2:1544"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          1x{" "}
                        </Text>
                      </Column>
                      <Text
                        className="June120200"
                        compid="2:1542"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        June 1, 2020, 08:22 AM
                      </Text>
                      <Column
                        className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] pr-[2px] pt-[2px] w-[21%]"
                        compid="2:1535"
                        comptype="Column"
                      >
                        <Row
                          className="items-start ml-[3px] w-[89%]"
                          compid="2:1536"
                          comptype="Row"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="location1"
                            compid="2:1539"
                            comptype="Image"
                            alt="location Three"
                          />
                          <Text
                            className="content1"
                            compid="2:1537"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Elm Street, 23 Yogyakarta
                          </Text>
                        </Row>
                        <Text
                          className="address"
                          compid="2:1540"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          2,97 Km
                        </Text>
                      </Column>
                      <Text
                        className="FiveHundredFiftyNine"
                        compid="2:1541"
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
                      <Button
                        className="font-semibold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                        compid="2:1548"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineLightgreen5001_2"
                      >
                        Completed
                      </Button>
                      <Button
                        className="font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[8%]"
                        compid="2:1528"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineAmber6001_2"
                      >
                        Order Again
                      </Button>
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="Vector4"
                        compid="2:1547"
                        comptype="Image"
                        alt="Vector Three"
                      />
                    </Row>
                    <div
                      className="bg-gray_100 h-[2px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] rounded-radius1 w-[99%]"
                      compid="2:1604"
                      comptype="View"
                    ></div>
                  </Column>
                  <Column
                    className="bg-white_A700 items-center justify-end my-[0] pr-[2px] py-[2px] rounded-radius1 w-[100%]"
                    compid="2:1550"
                    comptype="Column"
                  >
                    <Row
                      className="items-center xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] w-[95%]"
                      compid="1234"
                      comptype="Row"
                    >
                      <Button
                        className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                        compid="2:1558"
                        comptype="IconButton"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_vector8.svg"
                          className="flex items-center justify-center"
                          alt="VectorEight One"
                        />
                      </Button>
                      <div
                        className="bg-gray_400 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                        compid="2:1557"
                        comptype="View"
                      ></div>
                      <Column
                        className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[13%]"
                        compid="2:1569"
                        comptype="Column"
                      >
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          compid="2:1571"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Japanese Ramen
                        </Text>
                        <Text
                          className="test_1x"
                          compid="2:1570"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          1x{" "}
                        </Text>
                      </Column>
                      <Text
                        className="June120200"
                        compid="2:1568"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        June 1, 2020, 08:22 AM
                      </Text>
                      <Column
                        className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] pr-[2px] pt-[2px] w-[21%]"
                        compid="2:1561"
                        comptype="Column"
                      >
                        <Row
                          className="items-start ml-[3px] w-[89%]"
                          compid="2:1562"
                          comptype="Row"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="location1"
                            compid="2:1565"
                            comptype="Image"
                            alt="location Four"
                          />
                          <Text
                            className="content1"
                            compid="2:1563"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Elm Street, 23 Yogyakarta
                          </Text>
                        </Row>
                        <Text
                          className="address"
                          compid="2:1566"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          2,97 Km
                        </Text>
                      </Column>
                      <Text
                        className="FiveHundredFiftyNine"
                        compid="2:1567"
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
                      <Button
                        className="font-semibold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                        compid="2:1574"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineAmber600"
                      >
                        Delivering
                      </Button>
                      <Button
                        className="font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[8%]"
                        compid="2:1552"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineAmber6001_2"
                      >
                        Order Again
                      </Button>
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="Vector4"
                        compid="2:1573"
                        comptype="Image"
                        alt="Vector Four"
                      />
                    </Row>
                    <div
                      className="bg-gray_100 h-[2px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius1 w-[99%]"
                      compid="2:1605"
                      comptype="View"
                    ></div>
                  </Column>
                  <Column
                    className="bg-white_A700 items-center justify-end my-[0] pr-[3px] py-[3px] rounded-radius1 w-[100%]"
                    compid="2:1576"
                    comptype="Column"
                  >
                    <Row
                      className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[95%]"
                      compid="1240"
                      comptype="Row"
                    >
                      <div
                        className="border-bw3 border-gray_300 border-solid lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius4 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                        compid="2:1584"
                        comptype="View"
                      ></div>
                      <div
                        className="bg-gray_400 lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius16 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                        compid="2:1583"
                        comptype="View"
                      ></div>
                      <Column
                        className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[13%]"
                        compid="2:1593"
                        comptype="Column"
                      >
                        <Text
                          className="font-semibold text-bluegray_900 w-[auto]"
                          compid="2:1595"
                          as="h5"
                          variant="h5"
                          comptype="Text"
                        >
                          Vegan Pizza
                        </Text>
                        <Text
                          className="test_1x"
                          compid="2:1594"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          1x{" "}
                        </Text>
                      </Column>
                      <Text
                        className="June120200"
                        compid="2:1592"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        June 1, 2020, 08:22 AM
                      </Text>
                      <Column
                        className="lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] pr-[2px] pt-[2px] w-[21%]"
                        compid="2:1585"
                        comptype="Column"
                      >
                        <Row
                          className="items-start ml-[3px] w-[89%]"
                          compid="2:1586"
                          comptype="Row"
                        >
                          <Img
                            src="images/img_location.svg"
                            className="location1"
                            compid="2:1589"
                            comptype="Image"
                            alt="location Five"
                          />
                          <Text
                            className="content1"
                            compid="2:1587"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Elm Street, 23 Yogyakarta
                          </Text>
                        </Row>
                        <Text
                          className="address"
                          compid="2:1590"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          2,97 Km
                        </Text>
                      </Column>
                      <Text
                        className="FiveHundredFiftyNine"
                        compid="2:1591"
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
                      <Button
                        className="font-semibold lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[11%]"
                        compid="2:1598"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="xl"
                        variant="OutlineRed400"
                      >
                        Canceled
                      </Button>
                      <Button
                        className="font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[8%]"
                        compid="2:1578"
                        comptype="Button"
                        shape="RoundedBorder16"
                        size="lg"
                        variant="OutlineAmber6001_2"
                      >
                        Order Again
                      </Button>
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="Vector4"
                        compid="2:1597"
                        comptype="Image"
                        alt="Vector Five"
                      />
                    </Row>
                    <div
                      className="bg-gray_100 h-[2px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius1 w-[99%]"
                      compid="2:1606"
                      comptype="View"
                    ></div>
                  </Column>
                </List>
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
            className="absolute bottom-[10%] items-center justify-between right-[3%] w-[14%]"
            compid="1242"
            comptype="Row"
          >
            <Img
              src="images/img_arrowleft.svg"
              className="arrowleft"
              compid="2:1439"
              comptype="Image"
              onClick={() => sliderRef.current?.slidePrev()}
              alt="arrowleft"
            />
            <Img
              src="images/img_arrowright.svg"
              className="cursor-pointer 2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] mt-[1px] w-[3%]"
              compid="2:1450"
              comptype="Image"
              onClick={() => sliderRef.current?.slideNext()}
              alt="arrowright"
            />
          </Row>
        </Stack>
        <Column
          className="absolute bg-white_A700 bottom-[3%] items-center justify-start lg:pb-[28px] xl:pb-[35px] 2xl:pb-[39px] 3xl:pb-[47px] right-[0] w-[78%]"
          compid="2:1432"
          comptype="Column"
        >
          <Row
            className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
            compid="1103"
            comptype="Row"
          >
            <CheckBox
              className="font-semibold lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900"
              inputClassName="h-[24px] mr-[5px] w-[24px]"
              compid="1136"
              comptype="CheckBox"
              name="Menu One"
              label="Menu"
              shape="RoundedBorder4"
              size="sm"
              variant="OutlineGray300"
            ></CheckBox>
            <Text
              className="font-semibold lg:ml-[125px] xl:ml-[157px] 2xl:ml-[177px] 3xl:ml-[212px] text-bluegray_900 w-[auto]"
              compid="2:1613"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              Date
            </Text>
            <Text
              className="font-semibold xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[83px] text-bluegray_900 w-[auto]"
              compid="2:1614"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              Address
            </Text>
            <Text
              className="font-semibold lg:ml-[144px] xl:ml-[180px] 2xl:ml-[202px] 3xl:ml-[243px] text-bluegray_900 w-[auto]"
              compid="2:1615"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              Total
            </Text>
            <Text
              className="font-semibold lg:ml-[47px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] text-bluegray_900 w-[auto]"
              compid="2:1616"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              Status
            </Text>
          </Row>
          <Line
            className="bg-gray_100 h-[2px] rounded-radius1 w-[99%]"
            compid="2:1611"
            comptype="Line"
          />
          <Row
            className="items-center lg:mt-[359px] xl:mt-[449px] 2xl:mt-[505px] 3xl:mt-[606px] lg:pr-[25px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] w-[95%]"
            compid="2:1435"
            comptype="Row"
          >
            <Text
              className="pagination"
              compid="2:1436"
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
              compid="2:1440"
              comptype="Button"
              shape="RoundedBorder16"
              size="lg"
              variant="FillAmber60063"
            >
              1
            </Button>
            <Button
              className="font-normal lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
              compid="2:1443"
              comptype="Button"
              shape="RoundedBorder16"
              size="lg"
              variant="FillAmber600"
            >
              2
            </Button>
            <Button
              className="font-normal lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
              compid="2:1446"
              comptype="Button"
              shape="RoundedBorder16"
              size="lg"
              variant="FillDeeporange40019"
            >
              3
            </Button>
          </Row>
        </Column>
        <SelectBox
          className="absolute font-normal not-italic right-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900 top-[13%] w-[8%]"
          compid="2:1621"
          comptype="Dropdown"
          placeholderClassName="text-bluegray_900"
          name="sortby"
          placeholder="Recently"
          isSearchable={false}
          isMulti={false}
          indicator={
            <Img
              src="images/img_arrowdown_gray_500.svg"
              className="right-[2%] absolute lg:w-[4px] lg:h-[4px] lg:mr-[17px] xl:w-[6px] xl:h-[5px] xl:mr-[21px] 2xl:w-[6px] 2xl:h-[5px] 2xl:mr-[24px] 3xl:w-[8px] 3xl:h-[6px] 3xl:mr-[28px]"
              compid="2:1624"
              comptype="Image"
              alt="arrow_down"
            />
          }
          shape="RoundedBorder16"
          size="lg"
          variant="FillWhiteA700"
        ></SelectBox>
      </Stack>
    </>
  );
};

export default OrderHistoryPage;

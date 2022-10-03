import React from "react";

import {
  Stack,
  Text,
  Slider,
  Grid,
  Column,
  Row,
  Line,
  RatingBar,
  Img,
  Input,
  Button,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const CustomerReviewsPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Stack
        className="bg-gray_100 font-poppins 2xl:h-[1075px] 3xl:h-[1290px] lg:h-[765px] xl:h-[956px] mx-[auto] lg:pr-[20px] xl:pr-[26px] 2xl:pr-[29px] 3xl:pr-[35px] w-[100%]"
        compid="2:3173"
        comptype="Stack"
      >
        <Stack
          className="absolute 2xl:h-[1075px] 3xl:h-[1290px] lg:h-[765px] xl:h-[956px] right-[0] w-[98%]"
          compid="1413"
          comptype="Stack"
        >
          <Text
            className="absolute font-bold left-[20%] text-bluegray_900 top-[4%] w-[auto]"
            compid="2:3174"
            as="h2"
            variant="h2"
            comptype="Text"
          >
            Customer Reviews
          </Text>
          <Stack
            className="absolute 2xl:h-[1075px] 3xl:h-[1290px] lg:h-[765px] xl:h-[956px] w-[100%]"
            compid="1159"
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
                  <Grid
                    className="xl:gap-[12px] 2xl:gap-[13px] 3xl:gap-[16px] lg:gap-[9px] grid grid-cols-4 w-[100%]"
                    compid="1468"
                    comptype="Grid"
                  >
                    <Column
                      className="gridplaceholder"
                      compid="2:3260"
                      comptype="Column"
                    >
                      <Row
                        className="items-center ml-[2px] mt-[2px] w-[60%]"
                        compid="1452"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3278"
                          comptype="View"
                        ></div>
                        <Column
                          className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[60%]"
                          compid="1451"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3279"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Ruby Roben
                          </Text>
                          <Text
                            className="Usersince2020"
                            compid="2:3280"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            User since 2020
                          </Text>
                        </Column>
                      </Row>
                      <Line
                        className="bg-gray_300 h-[1px] ml-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]"
                        compid="2:3264"
                        comptype="Line"
                      />
                      <Row
                        className="items-end ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[61%]"
                        compid="2:3265"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3268"
                          comptype="View"
                        ></div>
                        <Column
                          className="justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[61%]"
                          compid="2:3269"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3270"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Fish Burger
                          </Text>
                          <RatingBar
                            className="mt-[4px]"
                            compid="1469"
                            comptype="RatingBar"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text
                        className="Loremipsumdol8"
                        compid="2:3263"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </Text>
                      <Text
                        className="OrderedJuneTwentyOne"
                        compid="2:3262"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Ordered June 21, 2020
                      </Text>
                    </Column>
                    <Column
                      className="gridplaceholder"
                      compid="2:3281"
                      comptype="Column"
                    >
                      <Row
                        className="items-center ml-[2px] mt-[2px] w-[65%]"
                        compid="1454"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3299"
                          comptype="View"
                        ></div>
                        <Column
                          className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[63%]"
                          compid="1453"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3300"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Samantha W.
                          </Text>
                          <Text
                            className="Usersince2020_One"
                            compid="2:3301"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            User since 2020
                          </Text>
                        </Column>
                      </Row>
                      <Line
                        className="bg-gray_300 h-[1px] ml-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]"
                        compid="2:3285"
                        comptype="Line"
                      />
                      <Row
                        className="items-end ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[61%]"
                        compid="2:3286"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3289"
                          comptype="View"
                        ></div>
                        <Column
                          className="justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[61%]"
                          compid="2:3290"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3291"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Beef Burger
                          </Text>
                          <RatingBar
                            className="mt-[4px]"
                            compid="1470"
                            comptype="RatingBar"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text
                        className="Loremipsumdol8"
                        compid="2:3284"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </Text>
                      <Text
                        className="OrderedJuneTwentyOne"
                        compid="2:3283"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Ordered June 21, 2020
                      </Text>
                    </Column>
                    <Column
                      className="gridplaceholder"
                      compid="2:3302"
                      comptype="Column"
                    >
                      <Row
                        className="items-center ml-[2px] mt-[2px] w-[60%]"
                        compid="1456"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3320"
                          comptype="View"
                        ></div>
                        <Column
                          className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[60%]"
                          compid="1455"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3321"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Jack Jock
                          </Text>
                          <Text
                            className="Usersince2020_One"
                            compid="2:3322"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            User since 2020
                          </Text>
                        </Column>
                      </Row>
                      <Line
                        className="bg-gray_300 h-[1px] ml-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]"
                        compid="2:3306"
                        comptype="Line"
                      />
                      <Row
                        className="items-end ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[69%]"
                        compid="2:3307"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3310"
                          comptype="View"
                        ></div>
                        <Column
                          className="justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[65%]"
                          compid="2:3311"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3312"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Cheese Burger
                          </Text>
                          <RatingBar
                            className="mt-[4px]"
                            compid="1471"
                            comptype="RatingBar"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text
                        className="Loremipsumdol8"
                        compid="2:3305"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </Text>
                      <Text
                        className="OrderedJuneTwentyOne"
                        compid="2:3304"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Ordered June 21, 2020
                      </Text>
                    </Column>
                    <Column
                      className="gridplaceholder"
                      compid="2:3323"
                      comptype="Column"
                    >
                      <Row
                        className="items-center ml-[2px] mt-[2px] w-[74%]"
                        compid="1458"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3341"
                          comptype="View"
                        ></div>
                        <Column
                          className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[67%]"
                          compid="1457"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3342"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            David Bengkong
                          </Text>
                          <Text
                            className="Usersince2020"
                            compid="2:3343"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            User since 2020
                          </Text>
                        </Column>
                      </Row>
                      <Line
                        className="bg-gray_300 h-[1px] ml-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]"
                        compid="2:3327"
                        comptype="Line"
                      />
                      <Row
                        className="items-end ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[67%]"
                        compid="2:3328"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3331"
                          comptype="View"
                        ></div>
                        <Column
                          className="justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[64%]"
                          compid="2:3332"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3333"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Double Burger
                          </Text>
                          <RatingBar
                            className="mt-[4px]"
                            compid="1472"
                            comptype="RatingBar"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text
                        className="Loremipsumdol8"
                        compid="2:3326"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </Text>
                      <Text
                        className="OrderedJuneTwentyOne"
                        compid="2:3325"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Ordered June 21, 2020
                      </Text>
                    </Column>
                    <Column
                      className="gridplaceholder"
                      compid="2:3344"
                      comptype="Column"
                    >
                      <Row
                        className="items-center ml-[2px] mt-[2px] w-[65%]"
                        compid="1460"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3362"
                          comptype="View"
                        ></div>
                        <Column
                          className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[63%]"
                          compid="1459"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3363"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Cynthia Hope
                          </Text>
                          <Text
                            className="Usersince2020"
                            compid="2:3364"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            User since 2020
                          </Text>
                        </Column>
                      </Row>
                      <Line
                        className="bg-gray_300 h-[1px] ml-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]"
                        compid="2:3348"
                        comptype="Line"
                      />
                      <Row
                        className="items-end ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[71%]"
                        compid="2:3349"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3352"
                          comptype="View"
                        ></div>
                        <Column
                          className="justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[66%]"
                          compid="2:3353"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3354"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Pepperoni Pizza
                          </Text>
                          <RatingBar
                            className="mt-[4px]"
                            compid="1473"
                            comptype="RatingBar"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text
                        className="Loremipsumdol8"
                        compid="2:3347"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </Text>
                      <Text
                        className="OrderedJuneTwentyOne"
                        compid="2:3346"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Ordered June 21, 2020
                      </Text>
                    </Column>
                    <Column
                      className="gridplaceholder"
                      compid="2:3365"
                      comptype="Column"
                    >
                      <Row
                        className="items-center ml-[2px] mt-[2px] w-[62%]"
                        compid="1462"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3383"
                          comptype="View"
                        ></div>
                        <Column
                          className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[61%]"
                          compid="1461"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3384"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Dani Ahmad
                          </Text>
                          <Text
                            className="Usersince2020_One"
                            compid="2:3385"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            User since 2020
                          </Text>
                        </Column>
                      </Row>
                      <Line
                        className="bg-gray_300 h-[1px] ml-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]"
                        compid="2:3369"
                        comptype="Line"
                      />
                      <Row
                        className="items-end ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[61%]"
                        compid="2:3370"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3373"
                          comptype="View"
                        ></div>
                        <Column
                          className="items-center justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[61%]"
                          compid="2:3374"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3375"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Vegan Pizza
                          </Text>
                          <RatingBar
                            className="mt-[4px]"
                            compid="1474"
                            comptype="RatingBar"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text
                        className="Loremipsumdol8"
                        compid="2:3368"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </Text>
                      <Text
                        className="OrderedJuneTwentyOne"
                        compid="2:3367"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Ordered June 21, 2020
                      </Text>
                    </Column>
                    <Column
                      className="gridplaceholder"
                      compid="2:3386"
                      comptype="Column"
                    >
                      <Row
                        className="items-center ml-[2px] mt-[2px] w-[61%]"
                        compid="1464"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3404"
                          comptype="View"
                        ></div>
                        <Column
                          className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[60%]"
                          compid="1463"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3405"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Jordan Nico
                          </Text>
                          <Text
                            className="Usersince2020_One"
                            compid="2:3406"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            User since 2020
                          </Text>
                        </Column>
                      </Row>
                      <Line
                        className="bg-gray_300 h-[1px] ml-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]"
                        compid="2:3390"
                        comptype="Line"
                      />
                      <Row
                        className="items-end ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[61%]"
                        compid="2:3391"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3394"
                          comptype="View"
                        ></div>
                        <Column
                          className="justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[61%]"
                          compid="2:3395"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3396"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Fried Rice
                          </Text>
                          <RatingBar
                            className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px]"
                            compid="1475"
                            comptype="RatingBar"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text
                        className="Loremipsumdol8"
                        compid="2:3389"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </Text>
                      <Text
                        className="OrderedJuneTwentyOne"
                        compid="2:3388"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Ordered June 21, 2020
                      </Text>
                    </Column>
                    <Column
                      className="gridplaceholder"
                      compid="2:3407"
                      comptype="Column"
                    >
                      <Row
                        className="items-center ml-[2px] mt-[2px] w-[72%]"
                        compid="1466"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3425"
                          comptype="View"
                        ></div>
                        <Column
                          className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[67%]"
                          compid="1465"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3426"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Salsabile Tango
                          </Text>
                          <Text
                            className="Usersince2020"
                            compid="2:3427"
                            as="h6"
                            variant="h6"
                            comptype="Text"
                          >
                            User since 2020
                          </Text>
                        </Column>
                      </Row>
                      <Line
                        className="bg-gray_300 h-[1px] ml-[2px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]"
                        compid="2:3411"
                        comptype="Line"
                      />
                      <Row
                        className="items-end ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[78%]"
                        compid="2:3412"
                        comptype="Row"
                      >
                        <div
                          className="bg-gray_400 lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] rounded-radius16 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          compid="2:3415"
                          comptype="View"
                        ></div>
                        <Column
                          className="justify-start lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[69%]"
                          compid="2:3416"
                          comptype="Column"
                        >
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            compid="2:3417"
                            as="h5"
                            variant="h5"
                            comptype="Text"
                          >
                            Japanese Ramen
                          </Text>
                          <RatingBar
                            className="mt-[4px]"
                            compid="1476"
                            comptype="RatingBar"
                            value={5}
                            starCount={5}
                            activeColor="var(--amber_600)"
                            size={((window.innerWidth - 15) * 16) / 1920}
                          ></RatingBar>
                        </Column>
                      </Row>
                      <Text
                        className="Loremipsumdol8"
                        compid="2:3410"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </Text>
                      <Text
                        className="OrderedJuneTwentyOne"
                        compid="2:3409"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Ordered June 21, 2020
                      </Text>
                    </Column>
                  </Grid>
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
              className="absolute bottom-[4%] items-center justify-between right-[1%] w-[14%]"
              compid="1424"
              comptype="Row"
            >
              <Img
                src="images/img_arrowleft.svg"
                className="arrowleft"
                compid="2:3247"
                comptype="Image"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowleft"
              />
              <Img
                src="images/img_arrowright.svg"
                className="cursor-pointer 2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] mt-[1px] w-[3%]"
                compid="2:3258"
                comptype="Image"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright"
              />
            </Row>
          </Stack>
        </Stack>
        <Img
          src="images/img_menu.svg"
          className="absolute lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] right-[0] top-[4%] w-[15%]"
          compid="2:3209"
          comptype="Image"
          alt="menu"
        />
        <Column
          className="absolute bottom-[3%] justify-start right-[0] w-[78%]"
          compid="2:3226"
          comptype="Column"
        >
          <Text
            className="font-bold text-bluegray_900 w-[auto]"
            compid="2:3428"
            as="h4"
            variant="h4"
            comptype="Text"
          >
            Recent Reviews
          </Text>
          <Row
            className="items-center justify-between lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]"
            compid="1425"
            comptype="Row"
          >
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
              wrapClassName="flex w-[49%]"
              compid="2:3239"
              comptype="SearchView"
              name="SearchBar"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[4px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:ml-[5px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[6px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[7px] 3xl:mr-[10px] my-[auto]"
                  compid="2:3241"
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
              src="images/img_button.svg"
              className="lg:h-[33px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius16 w-[10%]"
              compid="2:3227"
              comptype="Image"
              alt="button"
            />
          </Row>
          <Row
            className="items-center lg:mt-[393px] xl:mt-[492px] 2xl:mt-[553px] 3xl:mt-[664px] lg:pr-[25px] xl:pr-[32px] 2xl:pr-[36px] 3xl:pr-[43px] w-[99%]"
            compid="2:3243"
            comptype="Row"
          >
            <Text
              className="pagination"
              compid="2:3244"
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
            <Button
              className="font-normal lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] lg:ml-[570px] xl:ml-[712px] 2xl:ml-[801px] 3xl:ml-[961px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
              compid="2:3248"
              comptype="Button"
              shape="RoundedBorder16"
              size="lg"
              variant="FillAmber60063"
            >
              1
            </Button>
            <Button
              className="font-normal lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
              compid="2:3251"
              comptype="Button"
              shape="RoundedBorder16"
              size="lg"
              variant="FillAmber600"
            >
              2
            </Button>
            <Button
              className="font-normal lg:h-[28px] xl:h-[35px] 2xl:h-[39px] 3xl:h-[46px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
              compid="2:3254"
              comptype="Button"
              shape="RoundedBorder16"
              size="lg"
              variant="FillAmber60063"
            >
              3
            </Button>
          </Row>
        </Column>
        <Column
          className="absolute bg-white_A700 items-center justify-start left-[20%] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 top-[10%] w-[38%]"
          compid="2:3429"
          comptype="Column"
        >
          <Row className="items-start w-[100%]" compid="1437" comptype="Row">
            <Column
              className="justify-start mt-[4px] w-[35%]"
              compid="1436"
              comptype="Column"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:3432"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Positive Review
              </Text>
              <Text
                className="lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] MondayJuneThirtyOne_One"
                compid="2:3431"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                June 1, 2020, 08:22 AM
              </Text>
              <Text
                className="lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] pagination"
                compid="2:3433"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                This Month
              </Text>
              <Row
                className="items-end 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[69%]"
                compid="1430"
                comptype="Row"
              >
                <Text
                  className="font-bold text-bluegray_900 w-[auto]"
                  compid="2:3434"
                  as="h2"
                  variant="h2"
                  comptype="Text"
                >
                  3.678
                </Text>
                <Text
                  className="mb-[3px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] MondayJuneThirtyOne_One"
                  compid="2:3438"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Reviews
                </Text>
              </Row>
            </Column>
            <div
              className="bg-red_400 lg:h-[100px] xl:h-[125px] 2xl:h-[140px] 3xl:h-[168px] rounded-radius8 w-[6%]"
              compid="2:3453"
              comptype="View"
            ></div>
            <div
              className="bg-amber_600 lg:h-[45px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] rounded-radius8 w-[6%]"
              compid="2:3454"
              comptype="View"
            ></div>
            <Column
              className="items-center justify-start lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[25%]"
              compid="1434"
              comptype="Column"
            >
              <Stack
                className="lg:h-[37px] xl:h-[47px] 2xl:h-[52px] 3xl:h-[63px] w-[56%]"
                compid="2:3439"
                comptype="Stack"
              >
                <Column
                  className="absolute bg-bluegray_900 items-center justify-end lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius8 top-[0] w-[100%]"
                  compid="2:3440"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold mt-[1px] text-gray_100 w-[auto]"
                    compid="2:3441"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    487
                  </Text>
                  <Text
                    className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] July"
                    compid="2:3442"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Reviews
                  </Text>
                </Column>
                <Img
                  src="images/img_polygon3.svg"
                  className="absolute bottom-[0] inset-x-[0] mx-[auto] rounded-radius2 StarOne"
                  compid="2:3443"
                  comptype="Image"
                  alt="PolygonThree"
                />
              </Stack>
              <Row
                className="items-end justify-between mt-[2px] w-[100%]"
                compid="1429"
                comptype="Row"
              >
                <div
                  className="bg-red_400 lg:h-[38px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius8 w-[23%]"
                  compid="2:3455"
                  comptype="View"
                ></div>
                <div
                  className="bg-amber_600 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] rounded-radius8 w-[23%]"
                  compid="2:3456"
                  comptype="View"
                ></div>
                <div
                  className="bg-red_400 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] rounded-radius8 w-[23%]"
                  compid="2:3457"
                  comptype="View"
                ></div>
              </Row>
            </Column>
            <div
              className="bg-amber_600 3xl:h-[114px] lg:h-[68px] xl:h-[85px] 2xl:h-[95px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] rounded-radius8 w-[6%]"
              compid="2:3458"
              comptype="View"
            ></div>
            <div
              className="bg-red_400 2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] rounded-radius8 w-[6%]"
              compid="2:3459"
              comptype="View"
            ></div>
          </Row>
          <Row
            className="items-end mb-[3px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[99%]"
            compid="1432"
            comptype="Row"
          >
            <Img
              src="images/img_arrowup.svg"
              className="arrowup_One"
              compid="2:3436"
              comptype="Image"
              alt="arrowup"
            />
            <Text
              className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[2px] text-light_green_500 w-[auto]"
              compid="2:3437"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              + 15%
            </Text>
            <Text
              className="font-semibold mb-[1px] xl:ml-[105px] 2xl:ml-[118px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3445"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Mon
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3446"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Tue
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3447"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Wed
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3448"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Thu
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-gray_500 w-[auto]"
              compid="2:3449"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Fri
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3450"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Sat
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3451"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Sun
            </Text>
          </Row>
        </Column>
        <Column
          className="absolute bg-white_A700 items-center justify-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] right-[0] rounded-radius16 top-[10%] w-[38%]"
          compid="2:3460"
          comptype="Column"
        >
          <Row
            className="items-start lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[100%]"
            compid="1449"
            comptype="Row"
          >
            <Column
              className="justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] w-[35%]"
              compid="1448"
              comptype="Column"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:3463"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Negative Review
              </Text>
              <Text
                className="June120200_One1"
                compid="2:3462"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                June 1, 2020, 08:22 AM
              </Text>
              <Text
                className="lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] pagination"
                compid="2:3464"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                This Month
              </Text>
              <Row
                className="items-end 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[69%]"
                compid="1442"
                comptype="Row"
              >
                <Text
                  className="font-bold text-bluegray_900 w-[auto]"
                  compid="2:3465"
                  as="h2"
                  variant="h2"
                  comptype="Text"
                >
                  1.678
                </Text>
                <Text
                  className="mb-[3px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] June120200"
                  compid="2:3469"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Reviews
                </Text>
              </Row>
            </Column>
            <div
              className="bg-amber_600 2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] rounded-radius8 w-[6%]"
              compid="2:3490"
              comptype="View"
            ></div>
            <div
              className="bg-red_400 3xl:h-[114px] lg:h-[68px] xl:h-[85px] 2xl:h-[95px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] rounded-radius8 w-[6%]"
              compid="2:3489"
              comptype="View"
            ></div>
            <div
              className="bg-amber_600 lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] 3xl:mt-[109px] lg:mt-[65px] xl:mt-[81px] 2xl:mt-[91px] rounded-radius8 w-[6%]"
              compid="2:3488"
              comptype="View"
            ></div>
            <Column
              className="justify-start ml-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[24%]"
              compid="1446"
              comptype="Column"
            >
              <Stack
                className="lg:h-[37px] xl:h-[47px] 2xl:h-[52px] 3xl:h-[63px] w-[61%]"
                compid="2:3470"
                comptype="Stack"
              >
                <Column
                  className="absolute bg-bluegray_900 items-center justify-end lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] rounded-radius8 top-[0] w-[100%]"
                  compid="2:3471"
                  comptype="Column"
                >
                  <Text
                    className="font-semibold mt-[1px] text-gray_100 w-[auto]"
                    compid="2:3472"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    186
                  </Text>
                  <Text
                    className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] July"
                    compid="2:3473"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Reviews
                  </Text>
                </Column>
                <Img
                  src="images/img_polygon3.svg"
                  className="absolute bottom-[0] inset-x-[0] mx-[auto] rounded-radius2 StarOne"
                  compid="2:3474"
                  comptype="Image"
                  alt="PolygonThree One"
                />
              </Stack>
              <Row
                className="items-end justify-between lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] mt-[2px] w-[67%]"
                compid="1441"
                comptype="Row"
              >
                <div
                  className="bg-red_400 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] rounded-radius8 w-[37%]"
                  compid="2:3487"
                  comptype="View"
                ></div>
                <div
                  className="bg-amber_600 lg:h-[38px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius8 w-[37%]"
                  compid="2:3486"
                  comptype="View"
                ></div>
              </Row>
            </Column>
            <div
              className="bg-red_400 lg:h-[45px] xl:h-[57px] 2xl:h-[64px] 3xl:h-[76px] ml-[1px] lg:mt-[50px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] rounded-radius8 w-[6%]"
              compid="2:3485"
              comptype="View"
            ></div>
            <div
              className="bg-amber_600 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] rounded-radius8 w-[6%]"
              compid="2:3484"
              comptype="View"
            ></div>
          </Row>
          <Row
            className="items-end mb-[3px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[99%]"
            compid="1444"
            comptype="Row"
          >
            <Img
              src="images/img_arrowdown.svg"
              className="arrowup_One"
              compid="2:3467"
              comptype="Image"
              alt="arrowdown"
            />
            <Text
              className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[2px] text-red_400 w-[auto]"
              compid="2:3468"
              as="h5"
              variant="h5"
              comptype="Text"
            >
              + 15%
            </Text>
            <Text
              className="font-semibold mb-[1px] xl:ml-[105px] 2xl:ml-[118px] 3xl:ml-[142px] lg:ml-[84px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3476"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Mon
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[33px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3477"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Tue
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3478"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Wed
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3479"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Thu
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-gray_500 w-[auto]"
              compid="2:3480"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Fri
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3481"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Sat
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
              compid="2:3482"
              as="h6"
              variant="h6"
              comptype="Text"
            >
              Sun
            </Text>
          </Row>
        </Column>
      </Stack>
    </>
  );
};

export default CustomerReviewsPage;

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

const MenuPage = () => {
  const navigate = useNavigate();

  function handleNavigate20() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate24() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate51() {
    navigate("/settingsrestaurant");
  }
  function handleNavigate52() {
    navigate("/customerreviews");
  }
  function handleNavigate53() {
    navigate("/ordersrestaurant");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:2503"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[98%]"
          compid="1384"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1145" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:2505"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:2538"
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
                  className="justify-start lg:mb-[246px] xl:mb-[308px] 2xl:mb-[346px] 3xl:mb-[416px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  compid="1389"
                  comptype="Column"
                >
                  <Row
                    className="common-pointer bg-amber_600 items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:2518"
                    comptype="Row"
                    onClick={handleNavigate20}
                  >
                    <Img
                      src="images/img_cut.svg"
                      className="Vector"
                      compid="2:2520"
                      comptype="Image"
                      alt="cut"
                    />
                    <Text
                      className="dashboard1"
                      compid="2:2521"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] rounded-radius1416 w-[43%]"
                    compid="2:2522"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:2524"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="foodorder"
                      compid="2:2525"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Menu
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] rounded-radius1204 w-[63%]"
                    compid="2:2526"
                    comptype="Row"
                    onClick={handleNavigate53}
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:2528"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="foodorder"
                      compid="2:2529"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius1232 w-[52%]"
                    compid="2:2530"
                    comptype="Row"
                    onClick={handleNavigate52}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume1"
                      compid="2:2532"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:2533"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Reviews
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:2534"
                    comptype="Row"
                    onClick={handleNavigate51}
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:2536"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:2537"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[134px] xl:mt-[168px] 2xl:mt-[189px] 3xl:mt-[226px] w-[100%]"
                    compid="2:2507"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:2508"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1110"
                      comptype="Stack"
                    >
                      <Column
                        className="absolute bottom-[0] justify-start right-[0] w-[87%]"
                        compid="1337"
                        comptype="Column"
                      >
                        <Img
                          src="images/img_grid.svg"
                          className="test_grid1"
                          compid="2:2515"
                          comptype="Image"
                          alt="grid"
                        />
                        <Row
                          className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]"
                          compid="1338"
                          comptype="Row"
                        >
                          <Button
                            className="common-pointer font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[49%]"
                            compid="2:2513"
                            comptype="Button"
                            onClick={handleNavigate24}
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillWhiteA700"
                          >
                            Upgrade
                          </Button>
                          <div
                            className="bg-gradient3  3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] rounded-radius5573 w-[46%]"
                            compid="2:2512"
                            comptype="View"
                          ></div>
                        </Row>
                      </Column>
                      <Text
                        className="UpgradeyourAc1"
                        compid="2:2516"
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
            compid="1383"
            comptype="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compid="1378"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:2504"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Menu
              </Text>
              <Img
                src="images/img_menu.svg"
                className="menu"
                compid="2:2543"
                comptype="Image"
                alt="menu One"
              />
            </Row>
            <Row
              className="items-center justify-between lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[100%]"
              compid="1379"
              comptype="Row"
            >
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="flex w-[49%]"
                compid="2:2539"
                comptype="SearchView"
                name="SearchBar"
                placeholder="Search"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[4px] lg:mr-[6px] xl:w-[16px] xl:h-[17px] xl:ml-[5px] xl:mr-[8px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[6px] 2xl:mr-[9px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[7px] 3xl:mr-[10px] my-[auto]"
                    compid="2:2541"
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
              <Button
                className="font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[14%]"
                compid="2:2728"
                comptype="Button"
                shape="RoundedBorder16"
                size="xl"
                variant="FillAmber600"
              >
                Add New Menu
              </Button>
            </Row>
            <Row
              className="items-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[99%]"
              compid="2:2723"
              comptype="Row"
            >
              <Text
                className="font-bold mt-[1px] text-bluegray_900 w-[auto]"
                compid="2:2724"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Category
              </Text>
              <Text
                className="font-normal 3xl:ml-[1149px] lg:ml-[681px] xl:ml-[851px] 2xl:ml-[958px] not-italic text-amber_600 w-[auto]"
                compid="2:2725"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                View all
              </Text>
              <Img
                src="images/img_arrowright_amber_600.svg"
                className="lg:h-[5px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] mt-[4px] w-[6px]"
                compid="2:2727"
                comptype="Image"
                alt="arrowright"
              />
            </Row>
            <Row
              className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
              compid="2:2561"
              comptype="Row"
            >
              <Column
                className="bg-white_A700 items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[12%]"
                compid="2:2562"
                comptype="Column"
              >
                <Img
                  src="images/img_trash_55X55.svg"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] mt-[1px] lg:w-[29px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                  compid="2:2563"
                  comptype="Image"
                  alt="trash One"
                />
                <Text
                  className="columntrash_one"
                  compid="2:2580"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Bakery
                </Text>
              </Column>
              <Column
                className="bg-white_A700 items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[12%]"
                compid="2:2581"
                comptype="Column"
              >
                <Img
                  src="images/img_car.svg"
                  className="lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] mt-[1px] w-[49%]"
                  compid="2:2582"
                  comptype="Image"
                  alt="car"
                />
                <Text
                  className="columncar"
                  compid="2:2606"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Burger
                </Text>
              </Column>
              <Column
                className="bg-white_A700 items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[12%]"
                compid="2:2607"
                comptype="Column"
              >
                <Img
                  src="images/img_car_55X48.svg"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] mt-[1px] w-[42%]"
                  compid="2:2608"
                  comptype="Image"
                  alt="car One"
                />
                <Text
                  className="columntrash_one"
                  compid="2:2624"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Beverage
                </Text>
              </Column>
              <Column
                className="bg-white_A700 items-center lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius16 w-[12%]"
                compid="2:2625"
                comptype="Column"
              >
                <Img
                  src="images/img_chicken.svg"
                  className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] w-[50%]"
                  compid="2:2626"
                  comptype="Image"
                  alt="Chicken"
                />
                <Text
                  className="columnchicken"
                  compid="2:2641"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Chicken
                </Text>
              </Column>
              <Column
                className="bg-white_A700 items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[12%]"
                compid="2:2642"
                comptype="Column"
              >
                <Img
                  src="images/img_dashboard.svg"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] w-[48%]"
                  compid="2:2643"
                  comptype="Image"
                  alt="dashboard"
                />
                <Text
                  className="columndashboard"
                  compid="2:2674"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Pizza
                </Text>
              </Column>
              <Column
                className="bg-white_A700 items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[12%]"
                compid="2:2675"
                comptype="Column"
              >
                <Img
                  src="images/img_cut_55X55.svg"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] lg:w-[29px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                  compid="2:2676"
                  comptype="Image"
                  alt="cut One"
                />
                <Text
                  className="columndashboard"
                  compid="2:2689"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Seafood
                </Text>
              </Column>
              <Column
                className="bg-white_A700 items-center lg:p-[16px] xl:p-[20px] 2xl:p-[22px] 3xl:p-[27px] rounded-radius16 w-[12%]"
                compid="2:2690"
                comptype="Column"
              >
                <Img
                  src="images/img_trash_55X41.svg"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] w-[36%]"
                  compid="2:2691"
                  comptype="Image"
                  alt="trash Two"
                />
                <Text
                  className="columnchicken"
                  compid="2:2701"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Dessert
                </Text>
              </Column>
              <Column
                className="bg-white_A700 items-center lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius16 w-[12%]"
                compid="2:2702"
                comptype="Column"
              >
                <Img
                  src="images/img_lock.svg"
                  className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] w-[50%]"
                  compid="2:2703"
                  comptype="Image"
                  alt="lock"
                />
                <Text
                  className="mb-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] MondayJuneThirtyOne_One"
                  compid="2:2722"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Noodle
                </Text>
              </Column>
            </Row>
            <Row
              className="items-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[99%]"
              compid="2:2731"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:2732"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Popular This Week
              </Text>
              <Text
                className="font-normal 3xl:ml-[1050px] lg:ml-[622px] xl:ml-[777px] 2xl:ml-[875px] mt-[1px] not-italic text-amber_600 w-[auto]"
                compid="2:2733"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                View all
              </Text>
              <Img
                src="images/img_arrowright_amber_600.svg"
                className="lg:h-[5px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] w-[6px]"
                compid="2:2735"
                comptype="Image"
                alt="arrowright One"
              />
            </Row>
            <List
              className="xl:gap-[11px] 2xl:gap-[12px] 3xl:gap-[15px] lg:gap-[9px] grid grid-cols-4 min-h-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
              compid="1358"
              comptype="List"
              orientation="horizontal"
            >
              <Column
                className="bg-white_A700 justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius16 w-[100%]"
                compid="2:2736"
                comptype="Column"
              >
                <Row
                  className="items-center mt-[2px] w-[99%]"
                  compid="1342"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius16 lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                    compid="2:2740"
                    comptype="View"
                  ></div>
                  <Column
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[64%]"
                    compid="1341"
                    comptype="Column"
                  >
                    <Row
                      className="items-start justify-between w-[100%]"
                      compid="1340"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:2742"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Fish Burger
                      </Text>
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] mt-[3px] w-[11%]"
                        compid="2:2752"
                        comptype="Image"
                        alt="Vector One"
                      />
                    </Row>
                    <Text
                      className="columnfishburger"
                      compid="2:2743"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        5.59
                      </span>
                    </Text>
                    <Row
                      className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[90%]"
                      compid="2:2744"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star1_13.svg"
                        className="StarOne"
                        compid="2:2746"
                        comptype="Image"
                        alt="StarOne"
                      />
                      <Text
                        className="rate"
                        compid="2:2747"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        5.0
                      </Text>
                      <div
                        className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                        compid="2:2748"
                        comptype="View"
                      ></div>
                      <Text
                        className="rate"
                        compid="2:2750"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1k+ User Reviews
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="columnplaceholder"
                  compid="2:2741"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...{" "}
                </Text>
              </Column>
              <Column
                className="bg-white_A700 border border-amber_600 border-solid justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius16 w-[100%]"
                compid="2:2753"
                comptype="Column"
              >
                <Row
                  className="items-center mt-[2px] w-[99%]"
                  compid="1346"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius16 lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                    compid="2:2757"
                    comptype="View"
                  ></div>
                  <Column
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[64%]"
                    compid="1345"
                    comptype="Column"
                  >
                    <Row
                      className="items-start justify-between w-[100%]"
                      compid="1344"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:2759"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Double Burger
                      </Text>
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] mt-[2px] w-[11%]"
                        compid="2:2769"
                        comptype="Image"
                        alt="Vector Two"
                      />
                    </Row>
                    <Text
                      className="columnfishburger"
                      compid="2:2760"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        5.59
                      </span>
                    </Text>
                    <Row
                      className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[90%]"
                      compid="2:2761"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star1_14.svg"
                        className="StarOne"
                        compid="2:2763"
                        comptype="Image"
                        alt="StarOne One"
                      />
                      <Text
                        className="rate"
                        compid="2:2764"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        5.0
                      </Text>
                      <div
                        className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                        compid="2:2765"
                        comptype="View"
                      ></div>
                      <Text
                        className="rate"
                        compid="2:2767"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1k+ User Reviews
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="columnplaceholder"
                  compid="2:2758"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...{" "}
                </Text>
              </Column>
              <Column
                className="bg-white_A700 justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius16 w-[100%]"
                compid="2:2770"
                comptype="Column"
              >
                <Row
                  className="items-center mt-[2px] w-[99%]"
                  compid="1350"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius16 lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                    compid="2:2774"
                    comptype="View"
                  ></div>
                  <Column
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[64%]"
                    compid="1349"
                    comptype="Column"
                  >
                    <Row
                      className="items-start justify-between w-[100%]"
                      compid="1348"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:2776"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Beef Burger
                      </Text>
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] mt-[3px] w-[11%]"
                        compid="2:2786"
                        comptype="Image"
                        alt="Vector Three"
                      />
                    </Row>
                    <Text
                      className="columnfishburger"
                      compid="2:2777"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        5.59
                      </span>
                    </Text>
                    <Row
                      className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[90%]"
                      compid="2:2778"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star1_15.svg"
                        className="StarOne"
                        compid="2:2780"
                        comptype="Image"
                        alt="StarOne Two"
                      />
                      <Text
                        className="rate"
                        compid="2:2781"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        5.0
                      </Text>
                      <div
                        className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                        compid="2:2782"
                        comptype="View"
                      ></div>
                      <Text
                        className="rate"
                        compid="2:2784"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1k+ User Reviews
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="columnplaceholder"
                  compid="2:2775"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...{" "}
                </Text>
              </Column>
              <Column
                className="bg-white_A700 justify-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius16 w-[100%]"
                compid="2:2787"
                comptype="Column"
              >
                <Row
                  className="items-center mt-[2px] w-[99%]"
                  compid="1354"
                  comptype="Row"
                >
                  <div
                    className="bg-gray_400 lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] rounded-radius16 lg:w-[51px] xl:w-[64px] 2xl:w-[72px] 3xl:w-[86px]"
                    compid="2:2791"
                    comptype="View"
                  ></div>
                  <Column
                    className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[64%]"
                    compid="1353"
                    comptype="Column"
                  >
                    <Row
                      className="items-start justify-between w-[100%]"
                      compid="1352"
                      comptype="Row"
                    >
                      <Text
                        className="font-medium text-bluegray_900 w-[auto]"
                        compid="2:2793"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Cheese Burger
                      </Text>
                      <Img
                        src="images/img_vector_gray_500.svg"
                        className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] mt-[2px] w-[11%]"
                        compid="2:2803"
                        comptype="Image"
                        alt="Vector Four"
                      />
                    </Row>
                    <Text
                      className="columnfishburger"
                      compid="2:2794"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      <span className="text-amber_600 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        $
                      </span>
                      <span className="text-bluegray_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        5.59
                      </span>
                    </Text>
                    <Row
                      className="items-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] py-[2px] w-[90%]"
                      compid="2:2795"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star1_16.svg"
                        className="StarOne"
                        compid="2:2797"
                        comptype="Image"
                        alt="StarOne Three"
                      />
                      <Text
                        className="rate"
                        compid="2:2798"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        5.0
                      </Text>
                      <div
                        className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                        compid="2:2799"
                        comptype="View"
                      ></div>
                      <Text
                        className="rate"
                        compid="2:2801"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1k+ User Reviews
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="columnplaceholder"
                  compid="2:2792"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor...{" "}
                </Text>
              </Column>
            </List>
            <Row
              className="items-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[99%]"
              compid="2:2805"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:2806"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Best Seller
              </Text>
              <Text
                className="font-normal 3xl:ml-[1140px] lg:ml-[675px] xl:ml-[844px] 2xl:ml-[950px] mt-[3px] not-italic text-amber_600 w-[auto]"
                compid="2:2807"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                View all
              </Text>
              <Img
                src="images/img_arrowright_amber_600.svg"
                className="lg:h-[5px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[6px]"
                compid="2:2809"
                comptype="Image"
                alt="arrowright Two"
              />
            </Row>
            <List
              className="lg:gap-[12px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] grid grid-cols-6 min-h-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[99%]"
              compid="1364"
              comptype="List"
              orientation="horizontal"
            >
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius16 w-[100%]"
                compid="2:2810"
                comptype="Column"
              >
                <Stack
                  className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] px-[1px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                  compid="1111"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_vector_gray_500.svg"
                    className="Vector_Five"
                    compid="2:2816"
                    comptype="Image"
                    alt="Vector Five"
                  />
                </Stack>
                <Text
                  className="PepperoniPizza"
                  compid="2:2818"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Pepperoni Pizza
                </Text>
                <Text
                  className="FiveHundredFiftyNine_Four"
                  compid="2:2819"
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
                  className="items-center justify-center lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[87%]"
                  compid="2:2820"
                  comptype="Row"
                >
                  <Text
                    className="MondayJuneThirtyOne_One"
                    compid="2:2821"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Sold 1k
                  </Text>
                  <Line
                    className="bg-gray_300 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[1px]"
                    compid="2:2822"
                    comptype="Line"
                  />
                  <Text
                    className="Fifteen"
                    compid="2:2823"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    + 15%
                  </Text>
                  <Img
                    src="images/img_arrowup.svg"
                    className="arrowup"
                    compid="2:2825"
                    comptype="Image"
                    alt="arrowup"
                  />
                </Row>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius16 w-[100%]"
                compid="2:2826"
                comptype="Column"
              >
                <Stack
                  className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] px-[1px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                  compid="1112"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_vector_gray_500.svg"
                    className="Vector_Five"
                    compid="2:2832"
                    comptype="Image"
                    alt="Vector Six"
                  />
                </Stack>
                <Column
                  className="items-center justify-start lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[89%]"
                  compid="1390"
                  comptype="Column"
                >
                  <Text
                    className="font-medium text-bluegray_900 w-[auto]"
                    compid="2:2834"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Japanese Ramen
                  </Text>
                  <Text
                    className="FiveHundredFiftyNine_Four"
                    compid="2:2835"
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
                    className="items-center justify-between lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[97%]"
                    compid="2:2836"
                    comptype="Row"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:2837"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Sold 1k
                    </Text>
                    <Line
                      className="bg-gray_300 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[1px]"
                      compid="2:2838"
                      comptype="Line"
                    />
                    <Text
                      className="font-semibold text-light_green_500 w-[auto]"
                      compid="2:2839"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      + 15%
                    </Text>
                    <Img
                      src="images/img_arrowup.svg"
                      className="arrowup_One"
                      compid="2:2841"
                      comptype="Image"
                      alt="arrowup One"
                    />
                  </Row>
                </Column>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius16 w-[100%]"
                compid="2:2842"
                comptype="Column"
              >
                <Stack
                  className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] px-[1px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                  compid="1113"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_vector_gray_500.svg"
                    className="Vector_Five"
                    compid="2:2848"
                    comptype="Image"
                    alt="Vector Seven"
                  />
                </Stack>
                <Text
                  className="font-medium lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-bluegray_900 w-[auto]"
                  compid="2:2850"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Fried Rice
                </Text>
                <Text
                  className="font-bold xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] text-red_400 w-[auto]"
                  compid="2:2851"
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
                  className="items-center justify-center lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[87%]"
                  compid="2:2852"
                  comptype="Row"
                >
                  <Text
                    className="MondayJuneThirtyOne_One"
                    compid="2:2853"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Sold 1k
                  </Text>
                  <Line
                    className="bg-gray_300 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[1px]"
                    compid="2:2854"
                    comptype="Line"
                  />
                  <Text
                    className="Fifteen"
                    compid="2:2855"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    + 15%
                  </Text>
                  <Img
                    src="images/img_arrowup.svg"
                    className="arrowup"
                    compid="2:2857"
                    comptype="Image"
                    alt="arrowup Two"
                  />
                </Row>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius16 w-[100%]"
                compid="2:2858"
                comptype="Column"
              >
                <Stack
                  className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] px-[1px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                  compid="1114"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_vector_gray_500.svg"
                    className="Vector_Five"
                    compid="2:2864"
                    comptype="Image"
                    alt="Vector Eight"
                  />
                </Stack>
                <Text
                  className="PepperoniPizza"
                  compid="2:2866"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Vegan Pizza
                </Text>
                <Text
                  className="FiveHundredFiftyNine_Four"
                  compid="2:2867"
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
                  className="items-center justify-center lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[87%]"
                  compid="2:2868"
                  comptype="Row"
                >
                  <Text
                    className="MondayJuneThirtyOne_One"
                    compid="2:2869"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Sold 1k
                  </Text>
                  <Line
                    className="bg-gray_300 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[1px]"
                    compid="2:2870"
                    comptype="Line"
                  />
                  <Text
                    className="Fifteen"
                    compid="2:2871"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    + 15%
                  </Text>
                  <Img
                    src="images/img_arrowup.svg"
                    className="arrowup"
                    compid="2:2873"
                    comptype="Image"
                    alt="arrowup Three"
                  />
                </Row>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius16 w-[100%]"
                compid="2:2874"
                comptype="Column"
              >
                <Stack
                  className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] px-[1px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                  compid="1115"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_vector_gray_500.svg"
                    className="Vector_Five"
                    compid="2:2880"
                    comptype="Image"
                    alt="Vector Nine"
                  />
                </Stack>
                <Text
                  className="PepperoniPizza"
                  compid="2:2882"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Beef Burger
                </Text>
                <Text
                  className="FiveHundredFiftyNine_Four"
                  compid="2:2883"
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
                  className="items-center justify-center lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[87%]"
                  compid="2:2884"
                  comptype="Row"
                >
                  <Text
                    className="MondayJuneThirtyOne_One"
                    compid="2:2885"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Sold 1k
                  </Text>
                  <Line
                    className="bg-gray_300 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[1px]"
                    compid="2:2886"
                    comptype="Line"
                  />
                  <Text
                    className="Fifteen"
                    compid="2:2887"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    + 15%
                  </Text>
                  <Img
                    src="images/img_arrowup.svg"
                    className="arrowup"
                    compid="2:2889"
                    comptype="Image"
                    alt="arrowup Four"
                  />
                </Row>
              </Column>
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius16 w-[100%]"
                compid="2:2890"
                comptype="Column"
              >
                <Stack
                  className="bg-gray_400 xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[97px] px-[1px] rounded-radius16 xl:w-[120px] 2xl:w-[135px] 3xl:w-[162px] lg:w-[96px]"
                  compid="1116"
                  comptype="Stack"
                >
                  <Img
                    src="images/img_vector_gray_500.svg"
                    className="Vector_Five"
                    compid="2:2896"
                    comptype="Image"
                    alt="Vector Ten"
                  />
                </Stack>
                <Text
                  className="PepperoniPizza"
                  compid="2:2898"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Fish Burger
                </Text>
                <Text
                  className="FiveHundredFiftyNine_Four"
                  compid="2:2899"
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
                  className="items-center justify-center lg:mb-[4px] 2xl:mb-[6px] xl:mb-[6px] 3xl:mb-[8px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[87%]"
                  compid="2:2900"
                  comptype="Row"
                >
                  <Text
                    className="MondayJuneThirtyOne_One"
                    compid="2:2901"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Sold 1k
                  </Text>
                  <Line
                    className="bg-gray_300 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[1px]"
                    compid="2:2902"
                    comptype="Line"
                  />
                  <Text
                    className="Fifteen"
                    compid="2:2903"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    + 15%
                  </Text>
                  <Img
                    src="images/img_arrowup.svg"
                    className="arrowup"
                    compid="2:2905"
                    comptype="Image"
                    alt="arrowup Five"
                  />
                </Row>
              </Column>
            </List>
            <Row
              className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] w-[99%]"
              compid="2:2907"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:2908"
                as="h4"
                variant="h4"
                comptype="Text"
              >
                Promo
              </Text>
              <Text
                className="font-normal 3xl:ml-[1181px] lg:ml-[700px] xl:ml-[875px] 2xl:ml-[984px] not-italic text-amber_600 w-[auto]"
                compid="2:2909"
                as="h5"
                variant="h5"
                comptype="Text"
              >
                View all
              </Text>
              <Img
                src="images/img_arrowright_amber_600.svg"
                className="lg:h-[5px] 2xl:h-[7px] xl:h-[7px] 3xl:h-[9px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] w-[6px]"
                compid="2:2911"
                comptype="Image"
                alt="arrowright Three"
              />
            </Row>
            <List
              className="xl:gap-[10px] 2xl:gap-[11px] 3xl:gap-[13px] lg:gap-[8px] grid grid-cols-4 min-h-[auto] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]"
              compid="1376"
              comptype="List"
              orientation="horizontal"
            >
              <Row
                className="bg-white_A700 items-center lg:pr-[12px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] lg:py-[12px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] rounded-radius16 w-[100%]"
                compid="1385"
                comptype="Row"
              >
                <Column className="w-[57%]" compid="2:2917" comptype="Column">
                  <Button
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[50%]"
                    compid="2:2929"
                    comptype="Button"
                    shape="CustomBorderLR8"
                    size="sm"
                    variant="FillRed400"
                  >
                    15% Off
                  </Button>
                  <Column
                    className="justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[76%]"
                    compid="1391"
                    comptype="Column"
                  >
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:2919"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Fish Burger
                    </Text>
                    <Row
                      className="items-center lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[87%]"
                      compid="1366"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold text-red_400 w-[auto]"
                        compid="2:2921"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          3.59
                        </span>
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine_Ten"
                        compid="2:2920"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        $5.59
                      </Text>
                    </Row>
                    <Row
                      className="items-start justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] py-[2px] w-[100%]"
                      compid="2:2922"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star1_17.svg"
                        className="StarOne"
                        compid="2:2924"
                        comptype="Image"
                        alt="StarOne Four"
                      />
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:2925"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        5.0
                      </Text>
                      <div
                        className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                        compid="2:2926"
                        comptype="View"
                      ></div>
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:2928"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1k+ Reviews
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <div
                  className="bg-gray_400 2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] rounded-radius16 2xl:w-[108px] 3xl:w-[129px] lg:w-[76px] xl:w-[96px]"
                  compid="2:2916"
                  comptype="View"
                ></div>
              </Row>
              <Row
                className="bg-white_A700 items-center justify-center lg:pr-[12px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] lg:py-[12px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] rounded-radius16 w-[100%]"
                compid="1386"
                comptype="Row"
              >
                <Column className="w-[57%]" compid="2:2937" comptype="Column">
                  <Button
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[50%]"
                    compid="2:2949"
                    comptype="Button"
                    shape="CustomBorderLR8"
                    size="sm"
                    variant="FillRed400"
                  >
                    15% Off
                  </Button>
                  <Column
                    className="justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[76%]"
                    compid="1392"
                    comptype="Column"
                  >
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:2939"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Double Burger
                    </Text>
                    <Row
                      className="items-center lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[87%]"
                      compid="1368"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold text-red_400 w-[auto]"
                        compid="2:2941"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          3.59
                        </span>
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine_Ten"
                        compid="2:2940"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        $5.59
                      </Text>
                    </Row>
                    <Row
                      className="items-start justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] py-[2px] w-[100%]"
                      compid="2:2942"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star1_18.svg"
                        className="StarOne"
                        compid="2:2944"
                        comptype="Image"
                        alt="StarOne Five"
                      />
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:2945"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        5.0
                      </Text>
                      <div
                        className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                        compid="2:2946"
                        comptype="View"
                      ></div>
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:2948"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1k+ Reviews
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <div
                  className="bg-gray_400 2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] rounded-radius16 2xl:w-[108px] 3xl:w-[129px] lg:w-[76px] xl:w-[96px]"
                  compid="2:2936"
                  comptype="View"
                ></div>
              </Row>
              <Row
                className="bg-white_A700 items-center justify-center lg:pr-[12px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] lg:py-[12px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] rounded-radius16 w-[100%]"
                compid="1387"
                comptype="Row"
              >
                <Column className="w-[57%]" compid="2:2957" comptype="Column">
                  <Button
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[50%]"
                    compid="2:2969"
                    comptype="Button"
                    shape="CustomBorderLR8"
                    size="sm"
                    variant="FillRed400"
                  >
                    15% Off
                  </Button>
                  <Column
                    className="justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[76%]"
                    compid="1393"
                    comptype="Column"
                  >
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:2959"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Beef Burger
                    </Text>
                    <Row
                      className="items-center lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[87%]"
                      compid="1370"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold text-red_400 w-[auto]"
                        compid="2:2961"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          3.59
                        </span>
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine_Ten"
                        compid="2:2960"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        $5.59
                      </Text>
                    </Row>
                    <Row
                      className="items-start justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] py-[2px] w-[100%]"
                      compid="2:2962"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star1_19.svg"
                        className="StarOne"
                        compid="2:2964"
                        comptype="Image"
                        alt="StarOne Six"
                      />
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:2965"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        5.0
                      </Text>
                      <div
                        className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                        compid="2:2966"
                        comptype="View"
                      ></div>
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:2968"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1k+ Reviews
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <div
                  className="bg-gray_400 2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] rounded-radius16 2xl:w-[108px] 3xl:w-[129px] lg:w-[76px] xl:w-[96px]"
                  compid="2:2956"
                  comptype="View"
                ></div>
              </Row>
              <Row
                className="bg-white_A700 items-center justify-center lg:pr-[12px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] lg:py-[12px] xl:py-[16px] 2xl:py-[18px] 3xl:py-[21px] rounded-radius16 w-[100%]"
                compid="1388"
                comptype="Row"
              >
                <Column className="w-[57%]" compid="2:2977" comptype="Column">
                  <Button
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[50%]"
                    compid="2:2989"
                    comptype="Button"
                    shape="CustomBorderLR8"
                    size="sm"
                    variant="FillRed400"
                  >
                    15% Off
                  </Button>
                  <Column
                    className="justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[76%]"
                    compid="1394"
                    comptype="Column"
                  >
                    <Text
                      className="font-medium text-bluegray_900 w-[auto]"
                      compid="2:2979"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Cheese Burger
                    </Text>
                    <Row
                      className="items-center lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[87%]"
                      compid="1372"
                      comptype="Row"
                    >
                      <Text
                        className="font-bold text-red_400 w-[auto]"
                        compid="2:2981"
                        as="h4"
                        variant="h4"
                        comptype="Text"
                      >
                        <span className="text-amber_600 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          $
                        </span>
                        <span className="text-bluegray_900 font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                          3.59
                        </span>
                      </Text>
                      <Text
                        className="FiveHundredFiftyNine_Ten"
                        compid="2:2980"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        $5.59
                      </Text>
                    </Row>
                    <Row
                      className="items-start justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] py-[2px] w-[100%]"
                      compid="2:2982"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_star1_20.svg"
                        className="StarOne"
                        compid="2:2984"
                        comptype="Image"
                        alt="StarOne Seven"
                      />
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:2985"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        5.0
                      </Text>
                      <div
                        className="bg-gray_400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 xl:w-[2px] lg:w-[2px] 3xl:w-[3px] 2xl:w-[3px]"
                        compid="2:2986"
                        comptype="View"
                      ></div>
                      <Text
                        className="MondayJuneThirtyOne"
                        compid="2:2988"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        1k+ Reviews
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <div
                  className="bg-gray_400 2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] rounded-radius16 2xl:w-[108px] 3xl:w-[129px] lg:w-[76px] xl:w-[96px]"
                  compid="2:2976"
                  comptype="View"
                ></div>
              </Row>
            </List>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default MenuPage;

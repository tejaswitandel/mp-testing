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
  SelectBox,
  Switch,
  Radio,
} from "components";
import { useNavigate } from "react-router-dom";

const SettingsRestaurantPage = () => {
  const navigate = useNavigate();

  function handleNavigate26() {
    navigate("/dashboardcustomer");
  }
  function handleNavigate27() {
    navigate("/dashboardrestaurant");
  }
  function handleNavigate61() {
    navigate("/customerreviews");
  }
  function handleNavigate62() {
    navigate("/ordersrestaurant");
  }
  function handleNavigate63() {
    navigate("/menu");
  }

  return (
    <>
      <Column
        className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]"
        compid="2:3491"
        comptype="Column"
      >
        <Row
          className="items-center justify-evenly w-[98%]"
          compid="1499"
          comptype="Row"
        >
          <aside className="w-[20%]">
            <Column className="" compid="1160" comptype="Column">
              <Column
                className="bg-white_A700 items-center justify-start lg:p-[24px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] w-[90%]"
                compid="2:3510"
                comptype="Column"
              >
                <Text
                  className="sidemenu"
                  compid="2:3543"
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
                  className="justify-start lg:mb-[108px] xl:mb-[135px] 2xl:mb-[152px] 3xl:mb-[182px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[100%]"
                  compid="1501"
                  comptype="Column"
                >
                  <Row
                    className="common-pointer bg-amber_600 items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius16 shadow-bs2 w-[100%]"
                    compid="2:3523"
                    comptype="Row"
                    onClick={handleNavigate27}
                  >
                    <Img
                      src="images/img_cut.svg"
                      className="Vector"
                      compid="2:3525"
                      comptype="Image"
                      alt="cut"
                    />
                    <Text
                      className="dashboard1"
                      compid="2:3526"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] rounded-radius1416 w-[43%]"
                    compid="2:3527"
                    comptype="Row"
                    onClick={handleNavigate63}
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="trash1"
                      compid="2:3529"
                      comptype="Image"
                      alt="trash"
                    />
                    <Text
                      className="foodorder"
                      compid="2:3530"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Menu
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[56px] rounded-radius1204 w-[63%]"
                    compid="2:3531"
                    comptype="Row"
                    onClick={handleNavigate62}
                  >
                    <Img
                      src="images/img_vector_23X28.svg"
                      className="Vector_One"
                      compid="2:3533"
                      comptype="Image"
                      alt="Vector"
                    />
                    <Text
                      className="foodorder"
                      compid="2:3534"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Food Order
                    </Text>
                  </Row>
                  <Row
                    className="common-pointer items-start lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[33px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] rounded-radius1232 w-[52%]"
                    compid="2:3535"
                    comptype="Row"
                    onClick={handleNavigate61}
                  >
                    <Img
                      src="images/img_volume.svg"
                      className="volume1"
                      compid="2:3537"
                      comptype="Image"
                      alt="volume"
                    />
                    <Text
                      className="favorite"
                      compid="2:3538"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Reviews
                    </Text>
                  </Row>
                  <Row
                    className="items-end lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] rounded-radius1565 w-[49%]"
                    compid="2:3539"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_settings_31X28.svg"
                      className="settings"
                      compid="2:3541"
                      comptype="Image"
                      alt="settings"
                    />
                    <Text
                      className="setting"
                      compid="2:3542"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Setting
                    </Text>
                  </Row>
                  <Stack
                    className="lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:mt-[134px] xl:mt-[168px] 2xl:mt-[189px] 3xl:mt-[226px] w-[100%]"
                    compid="2:3512"
                    comptype="Stack"
                  >
                    <div
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] inset-x-[19%] rounded-radius32 shadow-bs3 w-[61%]"
                      compid="2:3513"
                      comptype="View"
                    ></div>
                    <Stack
                      className="absolute bg-gradient2  lg:h-[108px] xl:h-[135px] 2xl:h-[152px] 3xl:h-[182px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] rounded-radius16 w-[100%]"
                      compid="1120"
                      comptype="Stack"
                    >
                      <Column
                        className="absolute bottom-[0] justify-start right-[0] w-[87%]"
                        compid="1477"
                        comptype="Column"
                      >
                        <Img
                          src="images/img_grid.svg"
                          className="test_grid1"
                          compid="2:3520"
                          comptype="Image"
                          alt="grid"
                        />
                        <Row
                          className="items-center justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]"
                          compid="1478"
                          comptype="Row"
                        >
                          <Button
                            className="common-pointer font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[49%]"
                            compid="2:3518"
                            comptype="Button"
                            onClick={handleNavigate26}
                            shape="RoundedBorder8"
                            size="md"
                            variant="FillWhiteA700"
                          >
                            Upgrade
                          </Button>
                          <div
                            className="bg-gradient3  3xl:h-[100px] lg:h-[60px] xl:h-[75px] 2xl:h-[84px] rounded-radius5573 w-[46%]"
                            compid="2:3517"
                            comptype="View"
                          ></div>
                        </Row>
                      </Column>
                      <Text
                        className="UpgradeyourAc1"
                        compid="2:3521"
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
            compid="1498"
            comptype="Column"
          >
            <Row
              className="items-center justify-between w-[100%]"
              compid="1497"
              comptype="Row"
            >
              <Text
                className="font-bold text-bluegray_900 w-[auto]"
                compid="2:3492"
                as="h2"
                variant="h2"
                comptype="Text"
              >
                Settings
              </Text>
              <Img
                src="images/img_menu.svg"
                className="menu"
                compid="2:3493"
                comptype="Image"
                alt="menu"
              />
            </Row>
            <Stack
              className="bg-cover bg-repeat lg:h-[582px] xl:h-[727px] 2xl:h-[818px] 3xl:h-[981px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]"
              compid="2:3544"
              style={{ backgroundImage: "url('images/img_group1109.svg')" }}
              comptype="Stack"
            >
              <Stack
                className="absolute lg:h-[331px] xl:h-[414px] 2xl:h-[466px] 3xl:h-[559px] left-[0] top-[0] w-[25%]"
                compid="1500"
                comptype="Stack"
              >
                <div
                  className="absolute bg-gray_100_a2 lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[96px] rounded-radius16 top-[0] w-[100%]"
                  compid="2:3549"
                  comptype="View"
                ></div>
                <Column
                  className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] w-[92%]"
                  compid="2:3550"
                  comptype="Column"
                >
                  <Row
                    className="items-start justify-between pr-[2px] py-[2px] w-[98%]"
                    compid="2:3551"
                    comptype="Row"
                  >
                    <Img
                      src="images/img_lightbulb.svg"
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] mt-[3px] w-[3%]"
                      compid="2:3557"
                      comptype="Image"
                      alt="lightbulb"
                    />
                    <Column
                      className="justify-start mb-[1px] xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] lg:mr-[8px] w-[84%]"
                      compid="2:3552"
                      comptype="Column"
                    >
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        compid="2:3554"
                        as="h6"
                        variant="h6"
                        comptype="Text"
                      >
                        Retaurant Profile
                      </Text>
                      <Text
                        className="Loremipsumdol6"
                        compid="2:3553"
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
                    compid="1503"
                    comptype="List"
                    orientation="vertical"
                  >
                    <Row
                      className="listcontrast"
                      compid="2:3569"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_contrast.svg"
                        className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] w-[6%]"
                        compid="2:3575"
                        comptype="Image"
                        alt="contrast"
                      />
                      <Column
                        className="justify-start xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] mt-[1px] w-[83%]"
                        compid="2:3570"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:3572"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Security
                        </Text>
                        <Text
                          className="Loremipsumdol_One1"
                          compid="2:3571"
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
                      compid="2:3560"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_laptop.svg"
                        className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] mt-[4px] w-[6%]"
                        compid="2:3566"
                        comptype="Image"
                        alt="laptop"
                      />
                      <Column
                        className="justify-start mb-[1px] xl:mr-[10px] 2xl:mr-[12px] 3xl:mr-[14px] lg:mr-[8px] w-[83%]"
                        compid="2:3561"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:3563"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Notification
                        </Text>
                        <Text
                          className="Loremipsumdol6"
                          compid="2:3562"
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
                      compid="2:3578"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_trash.svg"
                        className="trash_One"
                        compid="2:3584"
                        comptype="Image"
                        alt="trash One"
                      />
                      <Column
                        className="justify-start xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] mt-[1px] w-[83%]"
                        compid="2:3579"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:3581"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Payment
                        </Text>
                        <Text
                          className="Loremipsumdol_One1"
                          compid="2:3580"
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
                      compid="2:3587"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="trash_One"
                        compid="2:3593"
                        comptype="Image"
                        alt="settings Two"
                      />
                      <Column
                        className="justify-start xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] mt-[1px] w-[83%]"
                        compid="2:3588"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:3590"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Help
                        </Text>
                        <Text
                          className="Loremipsumdol_One1"
                          compid="2:3589"
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
                      compid="2:3600"
                      comptype="Row"
                    >
                      <Img
                        src="images/img_share.svg"
                        className="share"
                        compid="2:3606"
                        comptype="Image"
                        alt="share"
                      />
                      <Column
                        className="justify-start xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] mt-[1px] w-[83%]"
                        compid="2:3601"
                        comptype="Column"
                      >
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          compid="2:3603"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Privacy Policy
                        </Text>
                        <Text
                          className="Loremipsumdol_One1"
                          compid="2:3602"
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
                className="absolute h-[max-content] inset-y-[0] justify-start my-[auto] right-[6%] w-[61%]"
                compid="2:3612"
                comptype="Column"
              >
                <Text
                  className="font-bold font-inter text-bluegray_900 w-[auto]"
                  compid="2:3615"
                  as="h4"
                  variant="h4"
                  comptype="Text"
                >
                  Restaurant Profile
                </Text>
                <Text
                  className="font-poppins June120200_One1"
                  compid="2:3616"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </Text>
                <Grid
                  className="font-poppins lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]"
                  compid="1502"
                  comptype="Grid"
                >
                  <Column
                    className="justify-start w-[100%]"
                    compid="2:3671"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3672"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Restaurant Name
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 form"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      compid="2:3673"
                      comptype="EditText"
                      name="form"
                      placeholder="Fast Food Restaurant"
                    ></Input>
                  </Column>
                  <Column
                    className="justify-start w-[100%]"
                    compid="2:3676"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3677"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Phone
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 form"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      compid="2:3678"
                      comptype="EditText"
                      name="form One"
                      placeholder="+123456789"
                    ></Input>
                  </Column>
                  <Column
                    className="justify-start w-[100%]"
                    compid="2:3641"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3642"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Owner
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 form"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      compid="2:3643"
                      comptype="EditText"
                      name="form Two"
                      placeholder="Jordan Nico"
                    ></Input>
                  </Column>
                  <Column
                    className="justify-start w-[100%]"
                    compid="2:3646"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3647"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Restaurant Permit ID
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 form"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      compid="2:3648"
                      comptype="EditText"
                      name="form Three"
                      placeholder="321457"
                    ></Input>
                  </Column>
                </Grid>
                <Row
                  className="font-poppins items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] w-[86%]"
                  compid="1486"
                  comptype="Row"
                >
                  <Column className="w-[61%]" compid="2:3617" comptype="Column">
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3618"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Restaurant Logo
                    </Text>
                    <Row
                      className="items-center xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[85%]"
                      compid="1480"
                      comptype="Row"
                    >
                      <div
                        className="bg-gray_400 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] rounded-radius16 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"
                        compid="2:3619"
                        comptype="View"
                      ></div>
                      <Button
                        className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[39%]"
                        compid="2:3620"
                        comptype="Button"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="OutlineGray500"
                      >
                        Change photo
                      </Button>
                      <Text
                        className="rowplaceholder"
                        compid="2:3623"
                        as="h5"
                        variant="h5"
                        comptype="Text"
                      >
                        Remove
                      </Text>
                    </Row>
                  </Column>
                  <Column className="w-[39%]" compid="2:3624" comptype="Column">
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3625"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Company Permit Document
                    </Text>
                    <Row
                      className="items-center justify-between xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]"
                      compid="1482"
                      comptype="Row"
                    >
                      <Column
                        className="bg-gray_100 border border-dashed border-gray_500 3xl:h-[109px] lg:h-[65px] xl:h-[81px] 2xl:h-[91px] items-center lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] rounded-radius16 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"
                        compid="1121"
                        comptype="Column"
                      >
                        <Text
                          className="font-normal leading-[normal] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic text-bluegray_900 text-center w-[100%]"
                          compid="2:3630"
                          as="h6"
                          variant="h6"
                          comptype="Text"
                        >
                          Drop File
                          <br />
                          Here
                        </Text>
                      </Column>
                      <Button
                        className="font-medium xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[52%]"
                        compid="2:3627"
                        comptype="Button"
                        shape="RoundedBorder8"
                        size="lg"
                        variant="OutlineGray500"
                      >
                        Upload
                      </Button>
                    </Row>
                  </Column>
                </Row>
                <Row
                  className="font-poppins items-center justify-evenly lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pt-[4px] w-[100%]"
                  compid="2:3651"
                  comptype="Row"
                >
                  <Column className="w-[52%]" compid="2:3652" comptype="Column">
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3653"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Location
                    </Text>
                    <Row
                      className="bg-gray_400 items-start justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius8 w-[92%]"
                      compid="1122"
                      comptype="Row"
                    >
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center lg:mb-[14px] xl:mb-[18px] 2xl:mb-[21px] 3xl:mb-[25px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[33px] 3xl:mt-[40px] rounded-radius50 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:3658"
                        comptype="IconButton"
                        size="mdIcn"
                        variant="icbFillAmber600"
                      >
                        <Img
                          src="images/img_location_32X32.svg"
                          className="flex items-center justify-center"
                          alt="location One"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] items-center justify-center xl:ml-[120px] 2xl:ml-[135px] 3xl:ml-[162px] lg:ml-[96px] lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                        compid="2:3662"
                        comptype="IconButton"
                        shape="icbRoundedBorder8"
                        size="mdIcn"
                        variant="icbOutlineBlack90026"
                      >
                        <Img
                          src="images/img_location_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="location Two"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="w-[48%]" compid="2:3666" comptype="Column">
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3667"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Address Details
                    </Text>
                    <TextArea
                      className="font-medium leading-[normal] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                      compid="2:3668"
                      comptype="TextArea"
                      name="form Four"
                      placeholder={`Franklin Avenue Street 
New York, ABC 5562
United State`}
                    ></TextArea>
                  </Column>
                </Row>
                <Row
                  className="font-poppins items-center justify-evenly lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]"
                  compid="1487"
                  comptype="Row"
                >
                  <Column className="w-[52%]" compid="2:3631" comptype="Column">
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3632"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Email
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_900 form"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[92%] xl:mt-[13px]"
                      compid="2:3633"
                      comptype="EditText"
                      name="form Five"
                      placeholder="ordanico@mail.com"
                    ></Input>
                  </Column>
                  <Column
                    className="mt-[1px] w-[48%]"
                    compid="2:3636"
                    comptype="Column"
                  >
                    <Text
                      className="password"
                      compid="2:3637"
                      as="h5"
                      variant="h5"
                      comptype="Text"
                    >
                      Password
                    </Text>
                    <Input
                      className="font-bold font-inter p-[0] lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                      wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                      compid="2:3638"
                      type="password"
                      comptype="EditText"
                      name="form Six"
                      placeholder="••••••••"
                      size="sm"
                    ></Input>
                  </Column>
                </Row>
                <Button
                  className="font-medium font-poppins lg:ml-[377px] xl:ml-[471px] 2xl:ml-[530px] 3xl:ml-[636px] 3xl:mt-[101px] lg:mt-[60px] xl:mt-[75px] 2xl:mt-[84px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                  compid="2:3613"
                  comptype="Button"
                  shape="RoundedBorder16"
                  size="xl"
                  variant="FillAmber600"
                >
                  Save Setting
                </Button>
              </Column>
              <Column
                className="absolute bottom-[1%] justify-start left-[1%] w-[19%]"
                compid="2:3681"
                comptype="Column"
              >
                <Text
                  className="font-semibold text-bluegray_900 w-[auto]"
                  compid="2:3682"
                  as="h5"
                  variant="h5"
                  comptype="Text"
                >
                  Preference
                </Text>
                <Text
                  className="font-normal lg:leading-[12px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic text-gray_500 w-[100%]"
                  compid="2:3733"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </Text>
                <Text
                  className="ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] MondayJuneThirtyOne_One"
                  compid="2:3709"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Languange
                </Text>
                <SelectBox
                  className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_900 w-[69%]"
                  compid="2:3710"
                  comptype="Dropdown"
                  placeholderClassName="text-bluegray_900"
                  name="Group435"
                  placeholder="English (US)"
                  isSearchable={false}
                  isMulti={false}
                  getOptionLabel={(e) => (
                    <div className="flex items-center">
                      <Img
                        src="images/img_computer.svg"
                        className="lg:w-[11px] lg:h-[12px] lg:mr-[7px] xl:w-[14px] xl:h-[15px] xl:mr-[9px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[10px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[12px]"
                        compid="2:3713"
                        comptype="Image"
                        alt="computer"
                      />
                      <span>{e.label}</span>
                    </div>
                  )}
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_500_6X9.svg"
                      className="lg:w-[4px] lg:h-[4px] lg:mr-[12px] xl:w-[6px] xl:h-[5px] xl:mr-[15px] 2xl:w-[6px] 2xl:h-[5px] 2xl:mr-[17px] 3xl:w-[8px] 3xl:h-[6px] 3xl:mr-[20px]"
                      compid="2:3731"
                      comptype="Image"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <Row
                  className="items-center lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[67%]"
                  compid="1495"
                  comptype="Row"
                >
                  <Column
                    className="mt-[1px] w-[57%]"
                    compid="2:3685"
                    comptype="Column"
                  >
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3686"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Dark Mode
                    </Text>
                    <Switch
                      compid="2:3687"
                      comptype="Switch"
                      value={false}
                      className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[60%]"
                    />
                  </Column>
                  <Column className="w-[43%]" compid="2:3691" comptype="Column">
                    <Text
                      className="MondayJuneThirtyOne_One"
                      compid="2:3692"
                      as="h6"
                      variant="h6"
                      comptype="Text"
                    >
                      Notification
                    </Text>
                    <Switch
                      compid="2:3693"
                      comptype="Switch"
                      value={true}
                      className="lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[80%]"
                    />
                  </Column>
                </Row>
                <Text
                  className="YourAddress"
                  compid="2:3697"
                  as="h6"
                  variant="h6"
                  comptype="Text"
                >
                  Face ID Login
                </Text>
                <Row
                  className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] py-[1px] w-[47%]"
                  compid="2:3698"
                  comptype="Row"
                >
                  <Radio
                    value="On"
                    className="font-normal mb-[1px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-gray_500"
                    inputClassName="h-[14px] mr-[5px] w-[14px]"
                    compid="2:3699"
                    comptype="Radio"
                    checked={true}
                    name="On"
                    label="On"
                    shape="RoundedBorder7"
                    size="sm"
                  ></Radio>
                  <Img
                    src="images/img_contrast_14X14.svg"
                    className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                    compid="2:3706"
                    comptype="Image"
                    alt="contrast One"
                  />
                  <Text
                    className="lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] MondayJuneThirtyOne_One"
                    compid="2:3707"
                    as="h5"
                    variant="h5"
                    comptype="Text"
                  >
                    Off
                  </Text>
                </Row>
              </Column>
            </Stack>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SettingsRestaurantPage;

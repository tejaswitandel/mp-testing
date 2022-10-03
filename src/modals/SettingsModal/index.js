import React from "react";
import ModalProvider from "react-modal";

import { Column, List, Row, Img, Text } from "components";

const SettingsModalModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[47%]"
        overlayClassName="bg-bluegray_100 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column
            className="bg-white_A700 items-center justify-start lg:pl-[16px] xl:pl-[20px] 2xl:pl-[23px] 3xl:pl-[27px] w-[100%]"
            compid="33:66"
            comptype="Column"
          >
            <List
              className="gap-[0] min-h-[auto] lg:pt-[117px] xl:pt-[146px] 2xl:pt-[165px] 3xl:pt-[198px] w-[100%]"
              compid="1173"
              comptype="List"
              orientation="vertical"
            >
              <Row
                className="items-start lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] pr-[3px] py-[3px] w-[100%]"
                compid="32:23"
                comptype="Row"
              >
                <Img
                  src="images/img_contrast.svg"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] w-[2%]"
                  compid="32:29"
                  comptype="Image"
                  alt="contrast"
                />
                <Column
                  className="justify-start mb-[1px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] w-[64%]"
                  compid="32:24"
                  comptype="Column"
                >
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    compid="32:26"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Security
                  </Text>
                  <Text
                    className="Loremipsumdol"
                    compid="32:25"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-start lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] pr-[2px] py-[2px] w-[100%]"
                compid="32:14"
                comptype="Row"
              >
                <Img
                  src="images/img_laptop.svg"
                  className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[2%]"
                  compid="32:20"
                  comptype="Image"
                  alt="laptop"
                />
                <Column
                  className="justify-start mb-[1px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] w-[64%]"
                  compid="32:15"
                  comptype="Column"
                >
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    compid="32:17"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Notification
                  </Text>
                  <Text
                    className="Loremipsumdol_One"
                    compid="32:16"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] pr-[3px] py-[3px] w-[99%]"
                compid="32:5"
                comptype="Row"
              >
                <Img
                  src="images/img_lightbulb.svg"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[16px] 3xl:h-[19px] mt-[3px] w-[1%]"
                  compid="32:11"
                  comptype="Image"
                  alt="lightbulb"
                />
                <Column
                  className="justify-start mb-[1px] lg:ml-[41px] xl:ml-[52px] 2xl:ml-[58px] 3xl:ml-[70px] w-[64%]"
                  compid="32:6"
                  comptype="Column"
                >
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    compid="32:8"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Account
                  </Text>
                  <Text
                    className="Loremipsumdol_One"
                    compid="32:7"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-start lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] pr-[4px] py-[4px] w-[100%]"
                compid="32:32"
                comptype="Row"
              >
                <Img
                  src="images/img_trash.svg"
                  className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[4px] w-[2%]"
                  compid="32:38"
                  comptype="Image"
                  alt="trash"
                />
                <Column
                  className="justify-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] mt-[1px] w-[64%]"
                  compid="32:33"
                  comptype="Column"
                >
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    compid="32:35"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Payment
                  </Text>
                  <Text
                    className="Loremipsumdol"
                    compid="32:34"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-start lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] pr-[4px] py-[4px] w-[100%]"
                compid="32:41"
                comptype="Row"
              >
                <Img
                  src="images/img_settings.svg"
                  className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] mt-[4px] w-[2%]"
                  compid="32:47"
                  comptype="Image"
                  alt="settings"
                />
                <Column
                  className="justify-start lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] mt-[1px] w-[64%]"
                  compid="32:42"
                  comptype="Column"
                >
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    compid="32:44"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Help
                  </Text>
                  <Text
                    className="Loremipsumdol"
                    compid="32:43"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Text>
                </Column>
              </Row>
              <Row
                className="items-start lg:my-[15px] xl:my-[19px] 2xl:my-[21px] 3xl:my-[26px] pr-[3px] py-[3px] w-[100%]"
                compid="32:54"
                comptype="Row"
              >
                <Img
                  src="images/img_share.svg"
                  className="share"
                  compid="32:60"
                  comptype="Image"
                  alt="share"
                />
                <Column
                  className="justify-start mb-[1px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[65px] w-[64%]"
                  compid="32:55"
                  comptype="Column"
                >
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    compid="32:57"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Privacy Policy
                  </Text>
                  <Text
                    className="Loremipsumdol"
                    compid="32:56"
                    as="h6"
                    variant="h6"
                    comptype="Text"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Text>
                </Column>
              </Row>
            </List>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { SettingsModalModal };

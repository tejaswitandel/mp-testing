import React from "react";

import { Row, Column, Text, Img } from "components";

const OrderHistory0 = (props) => {
  return (
    <>
      <Row className={props.className} compid="672" comptype="Row">
        <Column className="my-[3px] w-[24%]" compid="2:1519" comptype="Column">
          <Text
            className="font-poppins font-semibold xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors2 w-[auto]"
            compid="2:1521"
            comptype="Text"
          >
            Double Burger
          </Text>
          <Text className="test_1x1" compid="2:1520" comptype="Text">
            1x{" "}
          </Text>
        </Column>
        <Text className="Group671" compid="2:1518" comptype="Text">
          June 1, 2020, 08:22 AM
        </Text>
        <Column
          className="lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[40%]"
          compid="2:1511"
          comptype="Column"
        >
          <Column
            className="items-center w-[100%]"
            compid="679"
            comptype="Column"
          >
            <Row
              className="items-center w-[100%]"
              compid="2:1512"
              comptype="Row"
            >
              <Img
                src="defaultNoData.png"
                className="Location"
                compid="2:1514"
                comptype="Image"
                alt="Location"
              />
              <Text className="content4" compid="2:1513" comptype="Text">
                Elm Street, 23 Yogyakarta
              </Text>
            </Row>
          </Column>
          <Text className="address2" compid="2:1516" comptype="Text">
            2,97 Km
          </Text>
        </Column>
      </Row>
    </>
  );
};

export default OrderHistory0;

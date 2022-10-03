import React from "react";

import { Column, Row, Img, Text } from "components";

const OrderHistoryaddress = (props) => {
  return (
    <>
      <Column className={props.className} compid="2:1561" comptype="Column">
        <Column
          className="items-center w-[100%]"
          compid="681"
          comptype="Column"
        >
          <Row className="items-center w-[100%]" compid="2:1562" comptype="Row">
            <Img
              src="defaultNoData.png"
              className="Location"
              compid="2:1564"
              comptype="Image"
              alt="Location"
            />
            <Text className="content4" compid="2:1563" comptype="Text">
              Elm Street, 23 Yogyakarta
            </Text>
          </Row>
        </Column>
        <Text className="address2" compid="2:1566" comptype="Text">
          2,97 Km
        </Text>
      </Column>
    </>
  );
};

export default OrderHistoryaddress;

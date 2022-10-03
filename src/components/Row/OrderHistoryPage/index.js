import React from "react";

import { Row, Img, Text } from "components";

const OrderHistoryPage = (props) => {
  return (
    <>
      <Row className={props.className} compid="2:1437" comptype="Row">
        <Img
          src="defaultNoData.png"
          className="chevrondown1"
          compid="2:1438"
          comptype="Image"
          alt="chevrondown"
        />
        <Text className="test_01" compid="2:1440" comptype="Text">
          1
        </Text>
        <Text className="test_02" compid="2:1443" comptype="Text">
          2
        </Text>
        <Text
          className="bg-deep_orange_400_19 flex font-normal font-poppins items-center leading-[normal] not-italic lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius16 xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
          compid="2:1446"
          comptype="Text"
        >
          3
        </Text>
        <Img
          src="defaultNoData.png"
          className="chevrondown1"
          compid="2:1449"
          comptype="Image"
          alt="chevrondown"
        />
      </Row>
    </>
  );
};

export default OrderHistoryPage;

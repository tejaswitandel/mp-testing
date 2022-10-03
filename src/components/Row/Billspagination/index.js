import React from "react";

import { Row, Text, Img } from "components";

const Billspagination = (props) => {
  return (
    <>
      <Row className={props.className} compid="2:1832" comptype="Row">
        <Text
          className="font-normal font-poppins xl:my-[10px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-colors2 w-[auto]"
          compid="2:1833"
          comptype="Text"
        >
          <span className="text-colors3 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
            Showing{" "}
          </span>
          <span className="text-colors2 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
            1-5
          </span>
          <span className="text-colors2 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
            {" "}
          </span>
          <span className="text-colors3 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
            from
          </span>
          <span className="text-colors2 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
            {" "}
            100{" "}
          </span>
          <span className="text-colors3 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
            data
          </span>
        </Text>
        <Row
          className="items-center justify-between w-[20%]"
          compid="2:1834"
          comptype="Row"
        >
          <Img
            src="defaultNoData.png"
            className="chevrondown1"
            compid="2:1835"
            comptype="Image"
            alt="chevrondown"
          />
          <Text className="test_01" compid="2:1837" comptype="Text">
            1
          </Text>
          <Text className="test_02" compid="2:1840" comptype="Text">
            2
          </Text>
          <Text
            className="bg-deep_orange_400_19 flex font-normal font-poppins items-center leading-[normal] not-italic lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] rounded-radius16 xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
            compid="2:1843"
            comptype="Text"
          >
            3
          </Text>
          <Img
            src="defaultNoData.png"
            className="chevrondown1"
            compid="2:1846"
            comptype="Image"
            alt="chevrondown"
          />
        </Row>
      </Row>
    </>
  );
};

export default Billspagination;

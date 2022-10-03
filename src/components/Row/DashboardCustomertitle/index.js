import React from "react";

import { Row, Text, Img } from "components";

const DashboardCustomertitle = (props) => {
  return (
    <>
      <Row className={props.className} compid="2:242" comptype="Row">
        <Text
          className="font-bold font-poppins lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-colors2 w-[auto]"
          compid="2:243"
          comptype="Text"
        >
          Popular Dishes
        </Text>
        <Text
          className="font-normal font-poppins lg:mb-[2px] 2xl:mb-[3px] xl:mb-[3px] 3xl:mb-[4px] lg:ml-[403px] xl:ml-[503px] 2xl:ml-[566px] 3xl:ml-[679px] mt-[4px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors w-[auto]"
          compid="2:244"
          comptype="Text"
        >
          View all
        </Text>
        <Img
          src="defaultNoData.png"
          className="lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
          compid="2:245"
          comptype="Image"
          alt="chevrondown"
        />
      </Row>
    </>
  );
};

export default DashboardCustomertitle;

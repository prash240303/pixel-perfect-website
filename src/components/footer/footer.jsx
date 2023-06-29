// eslint-disable-next-line no-unused-vars
import React from "react";
import Frame from "../Frame";
import styled from "styled-components";
import { InterMediumWhite18px, InterNormalWhite18px, InterNormalWhite137px } from "../../styledMixins";
import "./Footer.css";

function footer(props) {
  const {
    image1,
    drBRAmbedkarNati1,
    image17,
    navigate,
    place,
    committee,
    awards,
    registrations,
    contactUs1,
    contactUs2,
    drBRAmbedkarNati2,
    telephone919888604632,
    emailWrecNitjAcIn,
    copyright,
    allRightsReserved,
    frame1Props,
    frame2Props,
  } = props;

  return (
    <div className="footer screen">
      <Frame24>
        <Frame1>
          <FlexRow>
            <Image1 src={image1} alt="image 1" />
            <DRBRAMBEDKARNATI>{drBRAmbedkarNati1}</DRBRAMBEDKARNATI>
          </FlexRow>
          <Image17 src={image17} alt="image 17" />
        </Frame1>
        <Line14
          src="https://anima-uploads.s3.amazonaws.com/projects/6493d341b62dc1e09bdc3a80/releases/649d0d15fefcf687c34e49a6/img/line-14.svg"
          alt="Line 14"
        />
        <Frame42>
          <Frame2>
            <Navigate>{navigate}</Navigate>
            <Frame3>
              <Frame4>
                <Place>{place}</Place>
              </Frame4>
              <Frame>{frame1Props.children}</Frame>
              <Frame4>
                <Place>{committee}</Place>
              </Frame4>
              <Frame4>
                <Place>{awards}</Place>
              </Frame4>
              <Frame>{frame2Props.children}</Frame>
              <Frame4>
                <Place>{registrations}</Place>
              </Frame4>
              <Frame4>
                <Place>{contactUs1}</Place>
              </Frame4>
            </Frame3>
          </Frame2>
          <Frame5>
            <ContactUs>{contactUs2}</ContactUs>
            <DrBRAmbedkarNati>{drBRAmbedkarNati2}</DrBRAmbedkarNati>
            <Telephone919888604632>{telephone919888604632}</Telephone919888604632>
            <Telephone919888604632>{emailWrecNitjAcIn}</Telephone919888604632>
          </Frame5>
        </Frame42>
      </Frame24>
      <Line8
        src="https://anima-uploads.s3.amazonaws.com/projects/6493d341b62dc1e09bdc3a80/releases/649d0d15fefcf687c34e49a6/img/line-8.svg"
        alt="Line 8"
      />
      <Frame6>
        <Frame41>
          <Rectangle></Rectangle>
          <Frame40>
            <Copyright>{copyright}</Copyright>
            <AllRightsReserved>{allRightsReserved}</AllRightsReserved>
          </Frame40>
        </Frame41>
        <Rectangle></Rectangle>
      </Frame6>
    </div>
  );
}

const Frame24 = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  padding: 24px;
  position: relative;
  align-self: stretch;
  border-right-width: 1px;
  border-right-style: solid;
  border-left-width: 1px;
  border-left-style: solid;
  border-color: var(--white);
`;

const Frame1 = styled.div`
  position: relative;
  min-width: 637px;
  height: 348px;
`;

const FlexRow = styled.div`
  position: absolute;
  height: 83px;
  top: 250px;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 650px;
  gap: 28px;
`;

const Image1 = styled.img`
  width: 77px;
  height: 83px;
  object-fit: cover;
`;

const DRBRAMBEDKARNATI = styled.h1`
  width: 545px;
  min-height: 55px;
  margin-bottom: 1.52px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-l);
  letter-spacing: 0;
  line-height: normal;
`;

const Image17 = styled.img`
  position: absolute;
  width: 310px;
  height: 216px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1.0000152587890625px;
  height: 348px;
  object-fit: cover;
`;

const Frame42 = styled.div`
  display: flex;
  width: 490px;
  height: 348px;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
`;

const Frame2 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 33px;
  position: relative;
`;

const Navigate = styled.div`
  ${InterMediumWhite18px}
  position: relative;
  width: 105px;
  margin-top: -1.27px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame3 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const Frame4 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  position: relative;
`;

const Place = styled.div`
  ${InterNormalWhite18px}
  position: relative;
  width: fit-content;
  margin-top: -1.27px;
  letter-spacing: 0;
  line-height: 27px;
  white-space: nowrap;
`;

const Frame5 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 24px;
  position: relative;
`;

const ContactUs = styled.div`
  ${InterMediumWhite18px}
  position: relative;
  width: 136px;
  margin-top: -1.27px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const DrBRAmbedkarNati = styled.p`
  ${InterNormalWhite18px}
  position: relative;
  width: 306px;
  letter-spacing: 0;
  line-height: 27px;
`;

const Telephone919888604632 = styled.div`
  ${InterNormalWhite18px}
  position: relative;
  width: 306px;
  letter-spacing: 0;
  line-height: 27px;
  white-space: nowrap;
`;

const Line8 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1232px;
  height: 1px;
  object-fit: cover;
`;

const Frame6 = styled.div`
  display: flex;
  width: 1232px;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
`;

const Frame41 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 46px;
  position: relative;
`;

const Frame40 = styled.div`
  ${InterNormalWhite137px}
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 46px;
  position: relative;
`;

const Rectangle = styled.div`
  position: relative;
  min-width: 1.0675909519195557px;
  height: 19.21663475036621px;
  background-color: var(--white);
`;

const Copyright = styled.div`
  position: relative;
  width: 84.3396987915039px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 19.9px;
  white-space: nowrap;
`;

const AllRightsReserved = styled.div`
  position: relative;
  width: 137.71926879882812px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 19.9px;
  white-space: nowrap;
`;

export default footer;

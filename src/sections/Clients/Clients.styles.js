import styled from "styled-components";
import { devices, breakpoints } from "styles/styles";
import { motion } from "framer-motion";
import {
  SharedContainer,
  SharedTitle,
} from "sections/Identity/Identity.styles";
import Slider from "react-slick";
import { Button } from "components/atoms";

export const ClientBox = styled(SharedContainer)``;
export const ClientTitle = styled(SharedTitle)``;

export const ClientContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  padding-top: 20px;
  margin: 20px auto 0;
  @media ${devices.lg} {
    margin: 40px auto 0;
  }
  @media ${devices.xl} {
    margin: 60px auto 0;
  }
  @media ${devices.xxl} {
    margin: 80px auto 0;
  }
  @media ${devices.xxxl} {
    margin: 100px auto 0;
  }
`;

export const BoxSlider = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  position: relative;
  height: 110px;
  margin-top: 20px;
  & .box {
    display: flex;
    width: 400%;
    position: absolute;
    left: 0;
  }
  & .box-icon {
    width: 150px;
    height: 100px;
    background: #ddd;
    margin: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
  & .box-clone-list {
    display: flex;
    width: 50%;
    justify-content: space-evenly;
  }
  @media ${devices.md} {
    & .box {
      width: 300%;
    }
  }
  @media ${devices.lg} {
    & .box {
      width: 200%;
    }
  }
  @media ${devices.xxl} {
    width: 90%;
    margin: 20px auto;
  }
`;

import styled from "styled-components";
import { devices } from "styles/styles";
import {
  SharedContainer,
  SharedTitle,
} from "sections/Identity/Identity.styles";
// import Image from 'next/image';

export const AboutBox = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.linear};
`;
export const AboutTitle = styled(SharedTitle)`
  text-align: center;
  padding-bottom: 24px;
  width: 80%;
  margin: 40px auto 0;
`;

export const AboutContainer = styled(SharedContainer)`
  width: 100%;
  padding-bottom: 50px;
  padding-top: 20px;

  @media ${devices.lg} {
    margin: 20px auto 0;
  }
  @media ${devices.xl} {
    margin: 20px auto 0;
  }
  @media ${devices.xxl} {
    margin: 30px auto 0;
  }
  @media ${devices.xxxl} {
    margin: 40px auto 0;
  }
`;

export const BoxSlider = styled.div`
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

export const ListItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & .item {
    width: 100%;
    background: ${({ theme }) => theme.colors.bg_100};
    border-radius: 12px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.08);
    padding: 30px 24px;
    /* temp */
    margin: 20px 0;
    & .img {
      display: block;
      width: 80px;
      height: 80px;
      margin: auto;
      position: relative;
    }
    & .text {
      display: block;
      margin-top: 40px;
      line-height: 24px;
      font-size: 15px;
      opacity: 20;
      opacity: 0.4;
      text-align: justify;
      color: ${({ theme }) => theme.colors.text_100};
    }
    & .user-box {
      display: flex;
      align-items: center;
      margin-top: 50px;
      & .user-image {
        border-radius: 50%;
      }
      & .user-info {
        margin-inline-start: 10px;
        & h3 {
          font-size: 17px;
          margin: 0 auto 3px;
        }
        & p {
          margin: 0;
          font-size: 13px;
          text-align: justify;
        }
      }
    }
  }
  @media ${devices.lg} {
    margin: 20px auto 0;
    & .item {
      margin: 0;
      max-width: 300px;
      margin-inline-end: 20px;
      margin-top: 10px;
    }
  }
  @media ${devices.xl} {
    margin: 30px auto 0;
    & .item {
      max-width: 300px;
    }
  }
  @media ${devices.xxl} {
    margin: 40px 0 0;
    & .item {
      max-width: 370px;
      position: relative;
      margin-inline-end: 50px;
      &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        background: url("/assets/between.svg");
        top: calc(50% - 50px);
        left: auto;
        background-size: contain;
        right: ${({ theme }) => (theme.isRtl ? "auto" : "-76px")};
        left: ${({ theme }) => (theme.isRtl ? "-76px" : "auto")};
        background-repeat: no-repeat;
        background-position: center;
        z-index: 1;
      }
      &:nth-child(3n + 3) {
        margin: 10 0 0;
        &::before {
          display: none;
        }
      }
    }
  }
  @media ${devices.xxxl} {
    margin: 60px auto 0;
    & .item {
      max-width: 470px;
    }
  }
`;

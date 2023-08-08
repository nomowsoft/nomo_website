import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import {
  IdentityContainer,
  IdentityTitle,
  Description,
  InfoSection,
  IdentityIconBox,
} from "./Identity.styles";

const Identity = ({ about_us }) => {
  const t = useTranslation();

  return (
    <IdentityContainer id="who_we_are">
      <IdentityIconBox>
        <div style={{ position: "relative", width: "80%", height: "80%" }}>
          <Image src="/assets/logo.svg" layout="fill" alt="" />
        </div>
      </IdentityIconBox>
      <InfoSection>
        <IdentityTitle>
          <span style={{ color: "#217371" }}>
            {t.t("common:nomow")}{" "}
            <span style={{ color: "#e66b27" }}>{t.t("common:soft")}</span>
          </span>
        </IdentityTitle>
        <Description>
          {about_us?.map((about) => (
            <div key={about.id}>{about.content}</div>
          ))}
        </Description>
      </InfoSection>
    </IdentityContainer>
  );
};

export default Identity;

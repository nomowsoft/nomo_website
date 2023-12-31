import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";
import { ThemeContext } from "styled-components";
import {
  ServicesContainer,
  ServicesBox,
  ServicesTitle,
  ListBox,
  sliderSettings,
  CardBtn,
} from "./Services.styles";

const Services = ({ services }) => {
  const theme = React.useContext(ThemeContext);
  const t = useTranslation();
  const { push } = useRouter();

  return (
    <ServicesContainer>
      <ServicesBox>
        <ServicesTitle>{t.t("common:services")}</ServicesTitle>
        {/* List */}
        <ListBox {...sliderSettings} rtl={theme.isRtl}>
          {services?.map((service, i) => (
            <div className="list-item" key={i}>
              <div dir={theme.isRtl ? "rtl" : "ltr"}>
                <span className="dot" />
                <h6 className="item-title">{service.title}</h6>
                <p className="item-text" title={service.description}>
                  {service.description}
                </p>
              </div>
              <CardBtn
                title={t.t("common:request_service")}
                btnStyle="success"
                onClick={() => push("/start_demo")}
              />
            </div>
          ))}
        </ListBox>
      </ServicesBox>
    </ServicesContainer>
  );
};

export default Services;

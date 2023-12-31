import React from "react";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import {
  ClientContainer,
  ClientBox,
  ClientTitle,
  BoxSlider,
} from "./Clients.styles";
import Image from "next/image";

const Clients = ({ clients }) => {
  const t = useTranslation();
  return (
    <ClientBox id="clients">
      <ClientContainer>
        <ClientTitle>{t.t("common:clients")}</ClientTitle>
        <BoxSlider>
          <motion.div
            className="box"
            animate={{ x: "-50%" }}
            transition={{ duration: 20, ease: "linear", repeat: 200 }}
          >
            <div className="box-clone-list">
              {clients?.map((item, i) => (
                <div key={i} className="box-icon">
                  <Image
                    src={item.icon}
                    // width="100px"
                    // height="100px"
                    alt=""
                    layout="fill"
                  />
                  <h1>{item.name}</h1>
                </div>
              ))}
            </div>
          </motion.div>
        </BoxSlider>
      </ClientContainer>
    </ClientBox>
  );
};

export default Clients;

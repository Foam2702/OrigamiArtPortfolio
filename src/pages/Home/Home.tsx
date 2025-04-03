import React from "react";
import MarqueeBox from "../../components/MaqueeBox/MaqueeBox";
import styles from "./Home.module.css";
import { Box } from "@mui/material";
import { ContentItem } from "../../components/MaqueeBox/MaqueeBox";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import OurProject from "../../components/OurProject/OurProject";
import Blog from "../../components/Blog/Blog";
import ContactForm from "../../components/ContactForm/ContactForm";
import FAQ from "../../components/FAQ/FAQ";

const marqueeContent: ContentItem[] = [
  { type: "text", content: "Web Design - Mini App" },
  { type: "image", src: "/src/assets/welcome_seed.svg", alt: "welcome_Seed" },
  { type: "text", content: "Origami Studio" },
  { type: "image", src: "/src/assets/welcome_seed.svg", alt: "welcome_Seed" },
  { type: "text", content: "Branding Design" },
  { type: "image", src: "/src/assets/welcome_seed.svg", alt: "welcome_Seed" },
];

const Home = () => {
  return (
    <div>
      <Box className={styles.maqueeContainer}>
        <Box className={styles.redStrip}>
          <MarqueeBox
            contentList={marqueeContent}
            bgColor="#CA3227"
            direction="ltr"
            rotate={-7}
          />
        </Box>

        <Box className={styles.blackStrip}>
          <MarqueeBox
            contentList={marqueeContent}
            bgColor="#1F2227"
            direction="rtl"
            rotate={7}
          />
        </Box>
      </Box>
      <WhatWeDo />
      <OurProject />
      <Blog />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default Home;

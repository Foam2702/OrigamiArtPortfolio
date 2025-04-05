import { Typography } from "@mui/material";
import styles from "./WhatWeDo.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  imagePosition?: "left" | "right";
  isDark?: boolean;
  imageWidth?: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  imagePosition = "left",
  isDark = false,
  imageWidth,
}: ServiceCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      {image && (
        <img
          src={image}
          alt={title}
          className={`${styles.cardImage} ${styles[imagePosition]}`}
          style={{ width: imageWidth || "100%" }} // mặc định full nếu không truyền
        />
      )}
      <div
        className={`${styles.cardContent} ${styles[imagePosition]} ${
          isDark ? styles.dark : ""
        }`}
      >
        <Typography
          variant="h4"
          className={`${styles.cardTitle} ${
            isDark ? styles.dark : styles.light
          }`}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          className={`${styles.cardDescription} ${
            isDark ? styles.dark : styles.light
          }`}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        What we do?
      </Typography>

      <div className={styles.cardsContainer}>
        <ServiceCard
          title="Web Design & Development"
          description="We craft user-friendly, visually stunning websites that captivate audiences and drive engagement. Our designs are tailored to reflect your brand's identity and goals while ensuring seamless functionality across all devices."
          image="/src/assets/do_laptop.svg"
          imageWidth="40%"
        />

        <ServiceCard
          title="Mini-App Development (Zalo)"
          description="We create Zalo-integrated mini-apps that help businesses connect with customers effortlessly. From booking tools to loyalty programs and interactive experiences, our apps enhance brand visibility and customer engagement"
          image="/src/assets/do_phone.svg"
          imagePosition="right"
          isDark
          imageWidth="30%"
        />

        <ServiceCard
          title="Branding Design"
          description="A strong brand starts with a cohesive visual identity. We design logos, color palettes, and brand guidelines that showcase your business's essence, ensuring consistency across every touchpoint to leave a lasting impression"
          image="/src/assets/do_ipad.svg"
          imageWidth="55%"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;

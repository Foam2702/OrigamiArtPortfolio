import React from "react";
import styles from "./Service.module.css";
import WebDesign from "../../components/WebDesign/WebDesign";
import ZetaMiniApp from "../../components/ZetaMiniApp/ZetaMiniApp";
import BrandingDesign from "../../components/BrandingDesign/BrandingDesign";
import FromIdea from "../../components/FromIdea/FromIdea";

const Service = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        CURIOUS ABOUT
        <br />
        OUR SERVICE?
      </h1>

      <div className={styles.headerSection}>
        {/* Left Side */}
        <div className={styles.leftSide}>
          <div className={styles.leftContent}>
            <h2 className={styles.subtitle}>
              TRANSFORM YOUR
              <br />
              ONLINE PRESENCE
            </h2>
            <p className={styles.description}>
              Whether your current site is underwhelming - or you don't even
              have a website yet - we'll build an immersive digital experience
              that truly makes your brand shine.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className={styles.middleSection}>
          <div className={styles.imageContainer}>
            <img src="/src/assets/service_1.svg" alt="Developer working" />
          </div>
          <div className={styles.imageContainer}>
            <img src="/src/assets/service_2.svg" alt="UI/UX Design process" />
          </div>
          <div className={styles.imageContainer}>
            <img
              src="/src/assets/service_3.svg"
              alt="Development environment"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.rightSide}>
          <div className={styles.brandingContent}>
            <h2 className={styles.brandingTitle}>BRANDING BRILLIANCE</h2>
            <p className={styles.brandingDescription}>
              We create bold, authentic brand identities that capture your
              unique story and leave a lasting impression, turning every
              touchpoint into a conversation starter
            </p>
          </div>
        </div>
      </div>

      <WebDesign />
      <ZetaMiniApp />
      <BrandingDesign />
      <FromIdea />
    </div>
  );
};

export default Service;

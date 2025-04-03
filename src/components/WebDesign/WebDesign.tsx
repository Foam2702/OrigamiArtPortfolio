import React from "react";
import styles from "./WebDesign.module.css";

const WebDesign = () => {
  return (
    <div className={styles.webDesignSection}>
      <div className={styles.webDesignLeft}>
        <img
          src="/src/assets/service_4.svg"
          alt="Laptop showcase"
          className={styles.laptopImage}
        />
      </div>

      <div className={styles.webDesignRight}>
        <h2 className={styles.webDesignTitle}>Web Design</h2>
        <p className={styles.webDesignDescription}>
          We craft user-friendly, visually stunning websites that captivate
          audiences and drive engagement. Our designs are tailored to reflect
          your brand's identity and goals while ensuring seamless functionality
          across all devices.
        </p>

        <h3 className={styles.servicesTitle}>What we offer:</h3>
        <ul className={styles.servicesList}>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>Business Websites</span>
            <span className={styles.serviceItemDescription}>
              Build credibility and showcase your brand with a professional
              online presence.
            </span>
          </li>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>E-Commerce Website</span>
            <span className={styles.serviceItemDescription}>
              Sell products with a smooth, high-converting online store.
            </span>
          </li>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>
              Booking & Appointment Websites
            </span>
            <span className={styles.serviceItemDescription}>
              From concerts, events and hotels to health checks and restaurant
              reservations, we make booking a breeze.
            </span>
          </li>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>Portfolio Websites</span>
            <span className={styles.serviceItemDescription}>
              Display your work in a sleek, eye-catching way.
            </span>
          </li>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>Landing Pages</span>
            <span className={styles.serviceItemDescription}>
              Perfect for marketing campaigns and lead generation.
            </span>
          </li>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>
              Custom Web Solutions
            </span>
            <span className={styles.serviceItemDescription}>
              Have something unique in mind? Let's make it happen!
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WebDesign;

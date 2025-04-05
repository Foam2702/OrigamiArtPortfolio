import React from "react";
import styles from "./ZetaMiniApp.module.css";

const ZetaMiniApp = () => {
  return (
    <div className={styles.zetaSection}>
      <div className={styles.zetaLeft}>
        <h2 className={styles.zetaTitle}>Zeta Mini App</h2>
        <p className={styles.zetaDescription}>
          We create mini-apps that pack a punch! Our solutions are designed to
          be lightweight yet powerful, offering seamless functionality in a
          compact package.
        </p>

        <h3 className={styles.servicesTitle}>What we offer:</h3>
        <ul className={styles.servicesList}>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>Custom Mini Apps</span>
            <span className={styles.serviceItemDescription}>
              Tailored solutions that fit your specific needs and goals.
            </span>
          </li>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>User Engagement</span>
            <span className={styles.serviceItemDescription}>
              Interactive features that keep your users coming back for more.
            </span>
          </li>
        </ul>
      </div>

      <div className={styles.zetaRight}>
        <img
          src="/src/assets/service_5.svg"
          alt="Zeta Mini App showcase"
          className={styles.zetaImage}
        />
      </div>
    </div>
  );
};

export default ZetaMiniApp;

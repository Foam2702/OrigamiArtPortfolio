import styles from "./BrandingDesign.module.css";

const BrandingDesign = () => {
  return (
    <div className={styles.brandingSection}>
      <div className={styles.brandingLeft}>
        <img
          src="/src/assets/service_6.svg"
          alt="Branding Design showcase"
          className={styles.brandingImage}
        />
      </div>

      <div className={styles.brandingRight}>
        <h2 className={styles.brandingTitle}>Branding Design</h2>
        <p className={styles.brandingDescription}>
          A strong brand identity is essential in today's digital landscape. We
          help you stand out with designs that capture attention and leave
          lasting impressions.
        </p>

        <h3 className={styles.servicesTitle}>What we offer:</h3>
        <ul className={styles.servicesList}>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>Logo Design</span>
            <span className={styles.serviceItemDescription}>
              Create a memorable visual identity for your brand.
            </span>
          </li>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>Brand Guide</span>
            <span className={styles.serviceItemDescription}>
              Comprehensive guidelines for consistent brand presentation.
            </span>
          </li>
          <li className={styles.serviceItem}>
            <span className={styles.serviceItemTitle}>Marketing Materials</span>
            <span className={styles.serviceItemDescription}>
              Eye-catching designs that promote your brand effectively.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrandingDesign;

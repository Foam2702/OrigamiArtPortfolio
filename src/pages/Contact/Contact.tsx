import React from "react";
import styles from "./Contact.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const interests = [
    "Web Development",
    "Branding Design",
    "UI UX Design",
    "Mini-App",
    "Others",
  ];
  const budgets = [
    "< 10.000.000",
    "10.000.000 - 15.000.000",
    "15.000.000 - 20.000.000",
    "20.000.000 - 25.000.000",
    "25.000.000 - 30.000.000",
    "> 30.000.000",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h2 className={styles.contactTitle}>CONTACT US!!</h2>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <LocationOnIcon className={styles.icon} />
            <div>
              <h3>Address</h3>
              <p>Phòng 3.04, Lầu 3, Tòa nhà Moritz, số 1014 Phạm Văn Đồng,</p>
              <p>
                Phường Hiệp Bình Chánh, Thành phố Thủ Đức, Thành phố Hồ Chí Minh
              </p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <PhoneIcon className={styles.icon} />
            <div>
              <h3>Phone</h3>
              <p>0876235564</p>
            </div>
          </div>
          <div className={styles.infoItem}>
            <EmailIcon className={styles.icon} />
            <div>
              <h3>Email</h3>
              <p>moonlightpixieteam@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.formTitle}>LET'S WORK TOGETHER</h2>
        <form className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Your name"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="abc@yourmail.com"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.interestSection}>
            <h3>I'm interested in...</h3>
            <div className={styles.interestTags}>
              {interests.map((interest) => (
                <label key={interest} className={styles.tag}>
                  <input type="checkbox" name="interests" value={interest} />
                  <span>{interest}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.budgetSection}>
            <h3>Project budget</h3>
            <div className={styles.budgetTags}>
              {budgets.map((budget) => (
                <label key={budget} className={styles.tag}>
                  <input type="radio" name="budget" value={budget} />
                  <span>{budget}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <textarea
              placeholder="We're always here to support"
              className={styles.textarea}
              rows={4}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

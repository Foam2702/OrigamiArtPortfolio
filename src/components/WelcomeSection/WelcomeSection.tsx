import { Box, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Box className={styles.container}>
      <Box
        component="img"
        src="/src/assets/welcome_background.svg"
        className={styles.backgroundImage}
      />

      <Box
        className={styles.smallCircle}
        sx={(theme) => ({
          backgroundColor: theme.palette.secondary.main,
        })}
      />

      <Box
        className={styles.largeCircle}
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
        })}
      />

      <Box
        component="img"
        src="/src/assets/welcome_laptop.png"
        alt="Laptop"
        className={styles.laptop}
      />

      <Box
        component="img"
        src="/src/assets/welcome_seed.svg"
        alt="Seed"
        className={styles.seed}
      />

      <Box
        className={styles.popupTrigger}
        sx={(theme) => ({
          backgroundColor: theme.palette.background.paper,
        })}
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >
        {showPopup && (
          <Box className={styles.popupContainer}>
            <Box
              component="img"
              src="/src/assets/welcome_popup.svg"
              alt="Popup Welcome"
              className={styles.popupImage}
            />
            <Typography variant="subtitle1" className={styles.popupText}>
              At The Origami Art, we don't just build websites or mini-apps.We
              create digital solutions with an artistic touch, empowering
              businesses to grow sustainably
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default WelcomeSection;

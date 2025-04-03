import * as React from "react";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const pages = [
  { label: "Home", path: "/" },
  { label: "Service", path: "/service" },
  { label: "Project", path: "/project" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();
  const showWelcome = location.pathname === "/";

  return (
    <Box
      className={styles.container}
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.main,
      })}
    >
      <AppBar
        position="static"
        className={styles.appBar}
        sx={(theme) => ({
          backgroundColor: theme.palette.background.paper,
        })}
      >
        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
          }}
        >
          <Toolbar className={styles.toolbar}>
            <IconButton sx={{ p: 0, ml: { xs: 2, md: 15 } }}>
              <Link to="/">
                <Box
                  component="img"
                  src="/src/assets/logo.svg"
                  alt="Brand Logo"
                  className={styles.logo}
                />
              </Link>
            </IconButton>

            <Box className={styles.menuContainer}>
              {pages.map((page) => (
                <Button
                  key={page.label}
                  component={Link}
                  to={page.path}
                  className={styles.menuButton}
                  sx={(theme) => ({
                    color: theme.palette.text.primary,
                  })}
                >
                  <Typography variant="h4" className={styles.menuText}>
                    {page.label}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Button variant="contained" className={styles.getStartedButton}>
              <Typography variant="h5" className={styles.getStartedText}>
                Get started
              </Typography>
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      {showWelcome && <WelcomeSection />}

      {showWelcome && (
        <>
          <Typography variant="h4" className={styles.welcomeText}>
            We design and develop stunning digital experiences tailored to your
            needs
          </Typography>

          <Typography variant="h1" className={styles.welcomeTitle}>
            Welcome to
          </Typography>

          <Typography variant="h1" className={styles.studioTitle}>
            ORIGAMI STUDIO
          </Typography>
        </>
      )}
    </Box>
  );
}

export default Navbar;

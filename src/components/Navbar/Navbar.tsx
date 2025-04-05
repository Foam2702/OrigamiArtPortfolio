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
import { useNavigate, useLocation } from "react-router-dom";

const pages = ["Home", "Service", "Project", "Blog", "Contact"] as const;

type Page = (typeof pages)[number];

const pageRoutes: Record<Page, string> = {
  Home: "/",
  Service: "/service",
  Project: "/project",
  Blog: "/blog",
  Contact: "/contact",
};

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  return (
    <>
      <Box
        className={styles.container}
        sx={(theme) => ({
          backgroundColor:
            location.pathname === "/"
              ? theme.palette.primary.main
              : theme.palette.background.paper, // Change background color based on path
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
            disableGutters
            sx={{
              paddingLeft: "0 !important",
              paddingRight: "0 !important",
            }}
          >
            <Toolbar className={styles.toolbar}>
              <IconButton sx={{ p: 0, ml: { xs: 2, md: 15 } }}>
                <Box
                  component="img"
                  src="/src/assets/logo.svg"
                  alt="Brand Logo"
                  className={styles.logo}
                />
              </IconButton>

              <Box className={styles.menuContainer}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    className={styles.menuButton}
                    onClick={() => navigate(pageRoutes[page])}
                    sx={(theme) => ({
                      color: theme.palette.text.primary,
                      marginX: 10,
                      "&:hover": {
                        color: theme.palette.primary.main,
                        backgroundColor: "transparent",
                      },
                    })}
                  >
                    <Typography variant="h4" className={styles.menuText}>
                      {page}
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
      </Box>
      {location.pathname === "/" && ( // Conditionally render based on the current path
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.primary.main,
          })}
        >
          <WelcomeSection />

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
        </Box>
      )}
    </>
  );
}

export default Navbar;

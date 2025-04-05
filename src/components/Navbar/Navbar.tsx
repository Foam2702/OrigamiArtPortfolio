// import * as React from "react";
// import WelcomeSection from "../WelcomeSection/WelcomeSection";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import { Typography } from "@mui/material";

// const pages = ["Home", "Service", "Project", "Blog", "Contact"];

// function Navbar() {
//   return (
//     <Box
//       sx={{
//         bgcolor: "primary.main",
//         position: "relative",
//       }}
//     >
//       <AppBar
//         position="static"
//         sx={(theme) => ({
//           backgroundColor: theme.palette.background.paper,
//           borderRadius: "2rem",
//           width: "83%",
//           margin: "auto",
//         })}
//       >
//         <Container
//           maxWidth="xl"
//           disableGutters
//           sx={{
//             paddingLeft: "0 !important",
//             paddingRight: "0 !important",
//           }}
//         >
//           <Toolbar disableGutters={true} sx={{ p: 0, m: 0, width: "100%" }}>
//             <IconButton sx={{ p: 0, ml: { xs: 2, md: 15 } }}>
//               <Box
//                 component="img"
//                 src="/src/assets/logo.svg"
//                 alt="Brand Logo"
//                 sx={{ width: 150, height: "auto", display: "block" }}
//               />
//             </IconButton>

//             <Box
//               sx={(theme) => ({
//                 flexGrow: 1,
//                 display: { xs: "none", md: "flex" },
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: theme.shape.borderRadius,
//               })}
//             >
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   sx={(theme) => ({
//                     mx: 10,
//                     color: theme.palette.text.primary,
//                   })}
//                 >
//                   <Typography variant="h4" sx={{ textTransform: "none" }}>
//                     {page}
//                   </Typography>
//                 </Button>
//               ))}
//             </Box>
//             <Button variant="contained" sx={{ borderRadius: "2rem", mr: 2 }}>
//               <Typography variant="h5" sx={{ textTransform: "none" }}>
//                 Get started
//               </Typography>
//             </Button>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <WelcomeSection />

//       <Box
//         sx={{
//           zIndex: 1,
//           position: "absolute",
//           top: "60%",
//           left: "15%",
//         }}
//       >
//         <Typography
//           variant="h4"
//           sx={{
//             color: "white",
//             maxWidth: "20vw",
//             textAlign: "right",
//           }}
//         >
//           We design and develop stunning digital experiences tailored to your
//           needs
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           zIndex: 1,
//           position: "absolute",
//           top: "77%",
//           left: "25%",
//         }}
//       >
//         <Typography
//           variant="h1"
//           sx={{
//             color: "#1F2227",
//             fontSize: "64px",
//           }}
//         >
//           Welcome to
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           zIndex: 1,
//           position: "absolute",
//           top: "86%",
//           right: "52%",
//         }}
//       >
//         <Typography
//           variant="h1"
//           sx={{
//             color: "white",
//             fontSize: "72px",
//           }}
//         >
//           ORIGAMI STUDIO
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default Navbar;
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

const pages = ["Home", "Service", "Project", "Blog", "Contact"];

function Navbar() {
  return (
    <>
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
                    sx={(theme) => ({
                      color: theme.palette.text.primary,
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
    </>
  );
}

export default Navbar;

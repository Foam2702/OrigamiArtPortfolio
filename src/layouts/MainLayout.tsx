import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
type MainLayoutProps = { children: React.ReactNode };

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100vw", // Limit container width

        // backgroundColor: theme.palette.background.default, // Full viewport height
      }}
    >
      {/* ✅ Top Navbar */}
      <Navbar />

      {/* ✅ Main Content Area */}
      <Container
        component="main"
        maxWidth={false}
        sx={{
          flexGrow: 1,
          padding: 0,
          width: "100%",
          paddingLeft: "0 !important",
          paddingRight: "0 !important", // Đảm bảo full width
        }}
      >
        {children}
      </Container>

      {/* ✅ Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;

import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
        sx={{
          flexGrow: 1, // Pushes footer to bottom
          mt: 4,
          mb: 4,
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

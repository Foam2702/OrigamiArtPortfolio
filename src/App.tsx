import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import Blog from "./pages/Blog/Blog";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./styles/theme.tsx";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/service"
            element={
              <MainLayout>
                <Service />
              </MainLayout>
            }
          />
          <Route
            path="/contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
          <Route
            path="/project"
            element={
              <MainLayout>
                <Project />
              </MainLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <MainLayout>
                <Blog />
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

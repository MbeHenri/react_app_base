import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./providers/Auth";
import ServiceProvider from "./providers/Service";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import Page404 from "./pages/404";
export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <ServiceProvider>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </ServiceProvider>
      </AuthProvider>
    </ChakraProvider>
  </Router>
);

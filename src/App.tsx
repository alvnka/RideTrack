import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";

import { lightTheme } from "@/themes/lightTheme";
import { darkTheme } from "@/themes/darkTheme";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const [mode, setMode] = useState<"dark" | "light">("dark");

  const isDark = mode === "dark";
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700&display=swap');
      `}</style>

      {/* Router lives inside theme */}
      <BrowserRouter>
        <AppRoutes setMode={setMode} isDark={isDark} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

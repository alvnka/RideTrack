import { createTheme, alpha } from "@mui/material/styles";
import { darkTheme } from "./darkTheme";

const AMBER: Record<number, string> = {
  50: "#FFF8E8", 100: "#FDEDC4", 200: "#957d44", 300: "#F5C249",
  400: "#F0A800", 500: "#E8A020", 600: "#C47F00", 700: "#9A6000",
  800: "#704400", 900: "#3D2500",
};

export const lightTheme = createTheme({
  palette: {
	mode: "light",
	primary: { main: AMBER[700], light: AMBER[500], dark: AMBER[800], contrastText: "#FFF8E8" },
	background: { default: "#FAFAF7", paper: "#FFFFFF" },
	success: { main: "#388E3C" },
	divider: "rgba(156,96,0,0.12)",
  },
  typography: darkTheme.typography,
  shape: darkTheme.shape,
  components: {
	MuiButton: {
	  styleOverrides: {
		root: ({ ownerState }) => ({
		  borderRadius: 8,
		  textTransform: "uppercase" as const,
		  padding: "10px 24px",
		  transition: "all 0.2s ease",
		  ...(ownerState.variant === "contained" && ownerState.color === "primary" && {
			background: `linear-gradient(135deg, ${AMBER[700]} 0%, ${AMBER[800]} 100%)`,
			color: "#FAEEDA",
			boxShadow: `0 4px 20px ${alpha(AMBER[700], 0.3)}`,
			"&:hover": {
			  background: `linear-gradient(135deg, ${AMBER[600]} 0%, ${AMBER[700]} 100%)`,
			  boxShadow: `0 6px 28px ${alpha(AMBER[700], 0.4)}`,
			},
		  }),
		  ...(ownerState.variant === "outlined" && ownerState.color === "primary" && {
			borderColor: alpha(AMBER[700], 0.5),
			color: AMBER[700],
			"&:hover": { borderColor: AMBER[700], background: alpha(AMBER[700], 0.05) },
		  }),
		}),
	  },
	},
	MuiCard: {
	  styleOverrides: {
		root: {
		  background: "#FFFFFF",
		  border: `1px solid rgba(156,96,0,0.1)`,
		  borderRadius: 16,
		  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
		  transition: "all 0.3s ease",
		  "&:hover": {
			border: `1px solid rgba(156,96,0,0.25)`,
			transform: "translateY(-2px)",
			boxShadow: "0 12px 40px rgba(156,96,0,0.12)",
		  },
		},
	  },
	},
	MuiPaper: {
	  styleOverrides: {
		root: { background: "#FFFFFF", borderRadius: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: `1px solid rgba(156,96,0,0.08)` },
	  },
	},
	MuiChip: {
	  styleOverrides: {
		root: { borderRadius: 6, fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 600, letterSpacing: "0.08em", fontSize: "0.75rem" },
	  },
	},
	MuiAppBar: {
	  styleOverrides: {
		root: { background: "rgba(250,250,247,0.95)", backdropFilter: "blur(20px)", boxShadow: "0 1px 0 rgba(156,96,0,0.1)", color: "#1A1208" },
	  },
	},
	MuiDivider: { styleOverrides: { root: { borderColor: "rgba(156,96,0,0.1)" } } },
	MuiLinearProgress: {
	  styleOverrides: { root: { borderRadius: 4, background: "rgba(156,96,0,0.1)", height: 6 } },
	},
  },
});
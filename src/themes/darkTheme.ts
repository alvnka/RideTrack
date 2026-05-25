import { createTheme, alpha } from "@mui/material/styles";

export const AMBER: Record<number, string> = {
    50: "#FFF8E8",
    100: "#FDEDC4",
    200: "#957d44",
    300: "#F5C249",
    400: "#F0A800",
    500: "#E8A020",
    600: "#C47F00",
    700: "#9A6000",
    800: "#704400",
    900: "#3D2500",
};

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: AMBER[400],
            light: AMBER[300],
            dark: AMBER[600],
            contrastText: "#0A0A0A",
        },
        background: { default: "#080808", paper: "#111111" },
        success: { main: "#4CAF50" },
        divider: "rgba(240,168,0,0.12)",
    },
    typography: {
        fontFamily: '"Barlow", "Segoe UI", sans-serif',
        h1: {
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 700,
            letterSpacing: "-0.02em",
        },
        h2: {
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 700,
            letterSpacing: "-0.02em",
        },
        h3: {
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 600,
            letterSpacing: "-0.01em",
        },
        h4: { fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 600 },
        h5: { fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 600 },
        h6: { fontFamily: '"Barlow", sans-serif', fontWeight: 600 },
        body1: { fontFamily: '"Barlow", sans-serif', fontWeight: 400 },
        body2: { fontFamily: '"Barlow", sans-serif', fontWeight: 400 },
        button: {
            fontFamily: '"Barlow", sans-serif',
            fontWeight: 600,
            letterSpacing: "0.06em",
        },
        overline: {
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 600,
            letterSpacing: "0.15em",
        },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    borderRadius: 8,
                    textTransform: "uppercase" as const,
                    padding: "10px 24px",
                    transition: "all 0.2s ease",
                    ...(ownerState.variant === "contained" &&
                        ownerState.color === "primary" && {
                            background: `linear-gradient(135deg, ${AMBER[400]} 0%, ${AMBER[500]} 100%)`,
                            color: "#080808",
                            boxShadow: `0 4px 20px ${alpha(AMBER[400], 0.35)}`,
                            "&:hover": {
                                background: `linear-gradient(135deg, ${AMBER[300]} 0%, ${AMBER[400]} 100%)`,
                                boxShadow: `0 6px 28px ${alpha(AMBER[400], 0.5)}`,
                            },
                        }),
                    ...(ownerState.variant === "outlined" &&
                        ownerState.color === "primary" && {
                            borderColor: alpha(AMBER[400], 0.5),
                            color: AMBER[400],
                            "&:hover": {
                                borderColor: AMBER[400],
                                background: alpha(AMBER[400], 0.06),
                            },
                        }),
                }),
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: "#111111",
                    border: `1px solid rgba(240,168,0,0.1)`,
                    borderRadius: 16,
                    transition: "all 0.3s ease",
                    "&:hover": {
                        border: `1px solid rgba(240,168,0,0.3)`,
                        transform: "translateY(-2px)",
                        boxShadow: `0 12px 40px ${alpha(AMBER[400], 0.12)}`,
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: "#111111",
                    border: `1px solid rgba(240,168,0,0.08)`,
                    borderRadius: 16,
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    fontSize: "0.75rem",
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    background: "rgba(8,8,8,0.92)",
                    backdropFilter: "blur(20px)",
                    border: "none",
                    borderBottom: "1px solid rgba(240,168,0,0.08)",
                },
            },
        },
        MuiDivider: {
            styleOverrides: { root: { borderColor: "rgba(240,168,0,0.1)" } },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    background: "rgba(240,168,0,0.1)",
                    height: 6,
                },
            },
        },
    },
});

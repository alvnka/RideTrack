import { useState } from "react";
import {
  Box, Container, Typography, Button, Grid, Card, CardContent,
  Chip, Stack, AppBar, Toolbar, Paper, Divider, LinearProgress,
} from "@mui/material";
import { ThemeProvider, alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";;
import { lightTheme } from "@/themes/lightTheme";
import { AMBER, darkTheme } from "@/themes/darkTheme";
import { WaitlistDialog } from "./components/WaitlistDialog";


// ─── Data ────────────────────────────────────────────────────────────────────
const features = [
  { icon: "🚗", title: "Multi-Car Garage", desc: "Manage all your vehicles in one place with complete maintenance history and health tracking." },
  { icon: "🛠️", title: "Smart Maintenance", desc: "Track oil changes, brake pads, tires, batteries, filters, and every important component." },
  { icon: "🤖", title: "AI Assistant", desc: "Describe an issue and get AI-powered suggestions, recommendations, and repair insights." },
  { icon: "💰", title: "Budget & Expenses", desc: "Track fuel, repairs, insurance, servicing, and total ownership costs over time." },
  { icon: "📋", title: "Garage Prep", desc: "Keep issue notes, symptoms, and maintenance logs ready before visiting a mechanic." },
  { icon: "📈", title: "Predictive Insights", desc: "Recommendations based on your vehicle model, mileage, and driving patterns." },
];

const steps = [
  { n: "01", title: "Add Your Vehicle", desc: "Register your car with mileage, model, VIN, and service information." },
  { n: "02", title: "Track Maintenance", desc: "Log services, parts, repairs, budgets, and issues over time." },
  { n: "03", title: "AI Recommendations", desc: "Receive smart maintenance suggestions and possible issue diagnosis." },
];

const healthItems = [
  { label: "Engine Health", value: 88, color: "#4CAF50" },
  { label: "Brake Pads", value: 62, color: "#F0A800" },
  { label: "Tyre Wear", value: 41, color: "#F44336" },
  { label: "Battery", value: 95, color: "#4CAF50" },
];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function GarageMateAI() {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  const isDark = mode === "dark";
  const theme = isDark ? darkTheme : lightTheme;

  const amberMain = isDark ? AMBER[400] : AMBER[700];
  const amberMid = isDark ? AMBER[300] : AMBER[600];
  const bgPaper = isDark ? "#111111" : "#FFFFFF";
  const bgSurface = isDark ? "#0E0E0E" : "#F5F0E8";
  const textPrimary = isDark ? AMBER[300] : "#1A1208";
  const textSec = isDark ? "#8A7A5A" : "#6B5B3E";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700&display=swap');`}</style>
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>

        {/* ── NAVBAR ─────────────────────────────────────────────────────── */}
        <AppBar position="sticky" elevation={0}>
          <Container maxWidth="lg" disableGutters>
            <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 0.5 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexGrow: 1 }}>
                <Box sx={{ fontSize: 26 }}>🚘</Box>
                <Box>
                  <Typography variant="h6" sx={{ color: amberMain, lineHeight: 1.1, fontSize: "1.05rem" }}>
                    GarageMate AI
                  </Typography>
                  <Typography variant="caption" sx={{ color: textSec, fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", display: { xs: "none", sm: "block" } }}>
                    Smart Vehicle Assistant
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button size="small" sx={{ color: textSec, "&:hover": { color: amberMain }, display: { xs: "none", md: "inline-flex" } }}>Features</Button>
                <Button size="small" sx={{ color: textSec, "&:hover": { color: amberMain }, display: { xs: "none", md: "inline-flex" } }}>Pricing</Button>
                <Button size="small" variant="outlined" color="primary" onClick={() => setMode(m => m === "dark" ? "light" : "dark")} sx={{ minWidth: 38, px: 1, fontSize: "0.75rem" }}>
                  {isDark ? "☀" : "●"}
                </Button>
                <Button variant="contained" color="primary" size="small" onClick={() => setWaitlistOpen(true)}>
                  Join Waitlist
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <Box sx={{
          position: "relative", overflow: "hidden",
          pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 14 },
          background: isDark
            ? `radial-gradient(ellipse 80% 60% at 50% -20%, rgba(240,168,0,0.08) 0%, transparent 70%), #080808`
            : `radial-gradient(ellipse 80% 60% at 50% -20%, rgba(156,96,0,0.07) 0%, transparent 70%), #FAFAF7`,
        }}>
          {/* decorative rings */}
          <Box sx={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", border: `1px solid ${alpha(amberMain, 0.07)}`, pointerEvents: "none" }} />
          <Box sx={{ position: "absolute", top: -60, right: -60, width: 380, height: 380, borderRadius: "50%", border: `1px solid ${alpha(amberMain, 0.1)}`, pointerEvents: "none" }} />

          <Container maxWidth="lg">
            <Grid container spacing={6} sx={{ alignItems: "center" }}>

              {/* Left col */}
              <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
                <Chip
                  label="AI-POWERED VEHICLE ASSISTANT"
                  size="small"
                  sx={{ mb: 3, bgcolor: alpha(amberMain, isDark ? 0.12 : 0.1), color: amberMain, border: `1px solid ${alpha(amberMain, 0.25)}`, fontWeight: 700 }}
                />

                <Typography variant="h2" sx={{ fontSize: { xs: "2.8rem", md: "4rem" }, color: textPrimary, lineHeight: 1.05, mb: 0.5 }}>
                  Simplify
                </Typography>
                <Typography variant="h2" sx={{
                  fontSize: { xs: "2.8rem", md: "4rem" }, lineHeight: 1.05, mb: 3,
                  background: `linear-gradient(135deg, ${amberMain} 0%, ${amberMid} 100%)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  Car Ownership.
                </Typography>

                <Typography variant="body1" sx={{ color: textSec, mb: 5, maxWidth: { xs: "100%", md: 480 }, mx: { xs: "auto", md: 0 }, lineHeight: 1.7, fontSize: "1.05rem" }}>
                  Track maintenance, mileage, expenses, repairs, and vehicle health across multiple cars — powered by AI insights that keep you one step ahead.
                </Typography>

                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, mb: 6, justifyContent: { xs: "center", md: "flex-start" } }}>
                  <Button variant="contained" color="primary" size="large" sx={{ px: 4 }} onClick={() => setWaitlistOpen(true)}>
                    Get Early Access
                  </Button>
                  <Button variant="outlined" color="primary" size="large" sx={{ px: 4 }}>
                    View Demo
                  </Button>
                </Box>

                {/* Stats */}
                <Grid container spacing={2}>
                  {[{ val: "∞", label: "Vehicles" }, { val: "AI", label: "Insights" }, { val: "Smart", label: "Reminders" }, { val: "24/7", label: "Access" }].map((s) => (
                    <Grid key={s.label} size={{ xs: 6, sm: 3 }}>
                      <Box sx={{ p: 2, borderRadius: 3, bgcolor: isDark ? "rgba(240,168,0,0.05)" : "rgba(156,96,0,0.05)", border: `1px solid ${alpha(amberMain, 0.12)}`, textAlign: "center" }}>
                        <Typography sx={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.4rem", color: amberMain, lineHeight: 1 }}>{s.val}</Typography>
                        <Typography variant="caption" sx={{ color: textSec, letterSpacing: "0.06em", textTransform: "uppercase", fontSize: "0.65rem" }}>{s.label}</Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Right col — Vehicle Card */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper elevation={0} sx={{ p: 3.5, border: `1px solid ${alpha(amberMain, 0.18)}`, boxShadow: isDark ? `0 0 60px ${alpha(amberMain, 0.07)}, 0 24px 60px rgba(0,0,0,0.4)` : "0 24px 60px rgba(0,0,0,0.1)" }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                    <Box>
                      <Typography sx={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.35rem", color: textPrimary }}>BMW E46 330i</Typography>
                      <Typography variant="body2" sx={{ color: textSec }}>2003 · 145,800 km · 3.0L Inline-6</Typography>
                    </Box>
                    <Chip label="GOOD" size="small" sx={{ bgcolor: "rgba(76,175,80,0.12)", color: "#4CAF50", fontWeight: 700, border: "1px solid rgba(76,175,80,0.25)", letterSpacing: "0.12em" }} />
                  </Box>

                  <Divider sx={{ mb: 3 }} />

                  <Typography variant="overline" sx={{ color: textSec, fontSize: "0.68rem", mb: 2, display: "block" }}>Component Health</Typography>
                  <Stack spacing={2} sx={{ mb: 3 }}>
                    {healthItems.map((item) => (
                      <Box key={item.label}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
                          <Typography variant="body2" sx={{ color: textSec, fontSize: "0.82rem" }}>{item.label}</Typography>
                          <Typography variant="body2" sx={{ color: item.color, fontWeight: 600, fontSize: "0.82rem" }}>{item.value}%</Typography>
                        </Box>
                        <LinearProgress variant="determinate" value={item.value} sx={{ "& .MuiLinearProgress-bar": { background: `linear-gradient(90deg, ${alpha(item.color, 0.7)}, ${item.color})` } }} />
                      </Box>
                    ))}
                  </Stack>

                  <Divider sx={{ mb: 3 }} />

                  <Box sx={{ p: 2, borderRadius: 2, bgcolor: isDark ? "rgba(240,168,0,0.06)" : "rgba(156,96,0,0.05)", border: `1px solid ${alpha(amberMain, 0.2)}` }}>
                    <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                      <Box sx={{ fontSize: 18, mt: 0.2 }}>🤖</Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: amberMain, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.68rem" }}>AI Insight</Typography>
                        <Typography variant="body2" sx={{ color: textSec, mt: 0.5, lineHeight: 1.5 }}>
                          Brake pads estimated to need replacement in ~8,000 km. Schedule a service soon to avoid rotor wear.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2.5 }}>
                    <Typography variant="body2" sx={{ color: textSec, fontSize: "0.82rem" }}>Next oil change in</Typography>
                    <Typography sx={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: amberMain, fontSize: "1rem" }}>3,200 km</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* ── FEATURES ───────────────────────────────────────────────────── */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: bgSurface }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography variant="overline" sx={{ color: amberMid, letterSpacing: "0.18em", mb: 1, display: "block", fontSize: "0.75rem" }}>What We Offer</Typography>
              <Typography variant="h3" sx={{ color: textPrimary, fontSize: { xs: "2rem", md: "2.8rem" } }}>Everything Your Garage Needs</Typography>
            </Box>
            <Grid container spacing={3}>
              {features.map((f) => (
                <Grid key={f.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Card elevation={0} sx={{ height: "100%" }}>
                    <CardContent sx={{ p: 3.5 }}>
                      <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: 3, bgcolor: isDark ? "rgba(240,168,0,0.08)" : "rgba(156,96,0,0.07)", border: `1px solid ${alpha(amberMain, 0.18)}`, fontSize: 24, mb: 2 }}>{f.icon}</Box>
                      <Typography variant="h6" sx={{ color: textPrimary, mb: 1.5, fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.15rem" }}>{f.title}</Typography>
                      <Typography variant="body2" sx={{ color: textSec, lineHeight: 1.65 }}>{f.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
        <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? "#080808" : "#FAFAF7" }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 8 }}>
              <Typography variant="overline" sx={{ color: amberMid, letterSpacing: "0.18em", mb: 1, display: "block", fontSize: "0.75rem" }}>Simple Process</Typography>
              <Typography variant="h3" sx={{ color: textPrimary, fontSize: { xs: "2rem", md: "2.8rem" } }}>Up and Running in Minutes</Typography>
            </Box>
            <Grid container spacing={3} sx={{ justifyItems: 'center', alignItems: 'stretch' }}>
              {steps.map((s) => (
                <Grid
                  key={s.n}
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex" }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      flex: 1,
                      height: "100%",
                      p: 4,
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        border: `1px solid ${alpha(amberMain, 0.3)}`,
                        boxShadow: isDark
                          ? `0 8px 40px ${alpha(amberMain, 0.08)}`
                          : "0 8px 40px rgba(156,96,0,0.08)",
                      },
                    }}
                  >
                    <Typography sx={{ position: "absolute", top: -8, right: 16, fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "5rem", color: isDark ? "rgba(240,168,0,0.04)" : "rgba(156,96,0,0.05)", lineHeight: 1, userSelect: "none" }}>{s.n}</Typography>
                    <Box sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 2, bgcolor: isDark ? "rgba(240,168,0,0.12)" : "rgba(156,96,0,0.08)", color: amberMain, fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", mb: 2 }}>{s.n}</Box>
                    <Typography variant="h5" sx={{ color: textPrimary, mb: 1.5, fontSize: "1.2rem" }}>{s.title}</Typography>
                    <Typography variant="body2" sx={{ color: textSec, lineHeight: 1.65 }}>{s.desc}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <Box sx={{ py: { xs: 10, md: 16 }, textAlign: "center", background: isDark ? `radial-gradient(ellipse 70% 80% at 50% 50%, rgba(240,168,0,0.06) 0%, ${bgSurface} 70%)` : `radial-gradient(ellipse 70% 80% at 50% 50%, rgba(156,96,0,0.06) 0%, ${bgSurface} 70%)` }}>
          <Container maxWidth="sm">
            <Box sx={{ fontSize: 48, mb: 2 }}>🚘</Box>
            <Typography variant="h3" sx={{ color: textPrimary, mb: 2, fontSize: { xs: "2rem", md: "2.8rem" } }}>Your Smart Garage Starts Here</Typography>
            <Typography variant="body1" sx={{ color: textSec, mb: 5, lineHeight: 1.7 }}>Stop forgetting maintenance and reduce repair costs with AI insights built for every car owner.</Typography>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
              <Button variant="contained" color="primary" size="large" sx={{ px: 5 }} onClick={() => setWaitlistOpen(true)}>Get Early Access</Button>
              <Button variant="outlined" color="primary" size="large" sx={{ px: 5 }}>Learn More</Button>
            </Box>
          </Container>
        </Box>

        {/* ── FOOTER ─────────────────────────────────────────────────────── */}
        <Box sx={{ py: 4, bgcolor: isDark ? "#050505" : "#F0EAD6" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{ fontSize: 20 }}>🚘</Box>
                <Typography sx={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: amberMain, letterSpacing: "0.05em" }}>GarageMate AI</Typography>
              </Box>
              <Typography variant="body2" sx={{ color: textSec, fontSize: "0.82rem" }}>© 2026 GarageMate AI · All rights reserved</Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                {["Privacy", "Terms", "Contact"].map((l) => (
                  <Typography key={l} variant="body2" sx={{ color: textSec, fontSize: "0.82rem", cursor: "pointer", "&:hover": { color: amberMain } }}>{l}</Typography>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        {/* ── WAITLIST DIALOG ─────────────────────────────────────────────── */}
        <WaitlistDialog
          open={waitlistOpen}
          onClose={() => setWaitlistOpen(false)}
          isDark={isDark}
          amberMain={amberMain}
          textPrimary={textPrimary}
          textSec={textSec}
          bgPaper={bgPaper}
        />

      </Box>
    </ThemeProvider>
  );
}
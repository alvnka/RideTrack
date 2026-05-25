

import { useRef, useState } from "react";
import {
  Box, Container, Typography, Button, Grid, Card, CardContent,
  Chip, Stack, AppBar, Toolbar, Paper, Divider, LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar
} from "@mui/material";
import { alpha } from "@mui/material/styles";
// import { lightTheme } from "@/themes/lightTheme";
import { AMBER } from "@/themes/darkTheme";
// import { AMBER, darkTheme } from "@/themes/darkTheme";
// import { WaitlistDialog } from "./components/WaitlistDialog";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import { WaitlistDialog } from "@/components/WaitlistDialog";


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

const painPoints = [
  {
    title: "Scattered Maintenance Records",
    desc: "Most drivers rely on receipts, memory, or notes apps to track vehicle servicing."
  },
  {
    title: "Unexpected Repair Costs",
    desc: "Small maintenance issues become expensive failures when they go unnoticed."
  },
  {
    title: "No Predictive Insights",
    desc: "Drivers rarely know what needs attention before symptoms appear."
  },
];

const testimonials = [
  {
    name: "James K.",
    role: "BMW Enthusiast",
    quote:
      "GarageMate AI feels like the missing operating system for vehicle ownership."
  },
  {
    name: "Sarah M.",
    role: "Family Vehicle Owner",
    quote:
      "The budgeting and maintenance planning features are exactly what modern drivers need."
  },
  {
    name: "Daniel R.",
    role: "Offroad Community Member",
    quote:
      "Finally a platform focused on proactive ownership instead of reactive repairs."
  },
];

const metrics = [
  { value: "24/7", label: "Vehicle Monitoring Vision" },
  { value: "AI", label: "Maintenance Intelligence" },
  { value: "Multi", label: "Vehicle Support" },
  { value: "Beta", label: "Early Access Program" },
];

const faqs = [
  {
    q: "When will GarageMate AI launch?",
    a: "We are currently in active development and onboarding early access users and partners."
  },
  {
    q: "Will there be mobile apps?",
    a: "Yes. GarageMate AI is being designed as a mobile-first platform with web support."
  },
  {
    q: "Can I manage multiple vehicles?",
    a: "Yes. Multi-vehicle support is a core part of the platform."
  },
  {
    q: "Will AI diagnostics be included?",
    a: "AI-powered maintenance insights and issue recommendations are a major part of our roadmap."
  },
  {
    q: "Is the platform only for enthusiasts?",
    a: "No. GarageMate AI is being built for everyday drivers, enthusiasts, families, and fleets."
  },
];

const supportedBrands = [
  "BMW",
  "Toyota",
  "Subaru",
  "Mercedes-Benz",
  "Land Rover",
  "Ford",
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Maintenance Tracking",
    desc: "Core garage management, reminders, and ownership tracking."
  },
  {
    phase: "Phase 2",
    title: "AI Insights",
    desc: "Predictive maintenance and issue detection powered by AI."
  },
  {
    phase: "Phase 3",
    title: "Smart Integrations",
    desc: "OBD integrations, garages, service providers, and vehicle analytics."
  },
];

type Props = {
	setMode: React.Dispatch<React.SetStateAction<"dark" | "light">>;
	isDark: boolean;
};

export default function Home({ setMode, isDark }: Props) {
	const navigate = useNavigate();
	const [waitlistOpen, setWaitlistOpen] = useState(false);
	// const theme = isDark ? darkTheme : lightTheme;

	const amberMain = isDark ? AMBER[400] : AMBER[700];
	const amberMid = isDark ? AMBER[300] : AMBER[600];
	const bgPaper = isDark ? "#111111" : "#FFFFFF";
	const bgSurface = isDark ? "#0E0E0E" : "#F5F0E8";
	const textPrimary = isDark ? AMBER[300] : "#1A1208";
	const textSec = isDark ? "#8A7A5A" : "#6B5B3E";

	const productRef = useRef<HTMLDivElement>(null);
	const howItWorksRef = useRef<HTMLDivElement>(null);
	const faqRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);

	const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
		ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
	};
	return (
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
							<Button
								size="small"
								sx={{ color: textSec, "&:hover": { color: amberMain }, display: { xs: "none", md: "inline-flex" } }}
								onClick={() => scrollTo(productRef)}
							>
								Product
							</Button>

							<Button
								size="small"
								sx={{ color: textSec, "&:hover": { color: amberMain }, display: { xs: "none", md: "inline-flex" } }}
								onClick={() => scrollTo(howItWorksRef)}
							>
								How It Works
							</Button>

							<Button
								size="small"
								sx={{ color: textSec, "&:hover": { color: amberMain }, display: { xs: "none", md: "inline-flex" } }}
								onClick={() => navigate("/learn")}
							>
								Learn
							</Button>

							<Button
								size="small"
								sx={{ color: textSec, "&:hover": { color: amberMain }, display: { xs: "none", md: "inline-flex" } }}
								onClick={() => scrollTo(faqRef)}
							>
								FAQ
							</Button>

							<Button
								size="small"
								sx={{ color: textSec, "&:hover": { color: amberMain }, display: { xs: "none", md: "inline-flex" } }}
								onClick={() => scrollTo(aboutRef)}
							>
								About
							</Button>
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
								The Intelligent Platform
							</Typography>
							<Typography variant="h2" sx={{
								fontSize: { xs: "2.8rem", md: "4rem" }, lineHeight: 1.05, mb: 3,
								background: `linear-gradient(135deg, ${amberMain} 0%, ${amberMid} 100%)`,
								WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
							}}>
								For Vehicle Ownership.
							</Typography>

							<Typography variant="body1" sx={{ color: textSec, mb: 5, maxWidth: { xs: "100%", md: 480 }, mx: { xs: "auto", md: 0 }, lineHeight: 1.7, fontSize: "1.05rem" }}>
								GarageMate AI helps drivers track maintenance, predict issues, manage ownership costs, and centralize everything about their vehicles in one intelligent platform.
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
								{metrics.map((s) => (
									<Grid key={s.label} size={{ xs: 6, sm: 3 }} sx={{  }}>
										<Box sx={{ p: 2, borderRadius: 3, bgcolor: isDark ? "rgba(240,168,0,0.05)" : "rgba(156,96,0,0.05)", border: `1px solid ${alpha(amberMain, 0.12)}`, textAlign: "center", height: '100%' }}>
											<Typography sx={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.4rem", color: amberMain, lineHeight: 1 }}>{s.value}</Typography>
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
			{/* ── PROBLEM & VISION ───────────────────────────────────── */}
			<Box sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? "#0B0B0B" : "#FFFDF8" }}>
				<Container maxWidth="lg">

					<Box sx={{ textAlign: "center", mb: 8 }}>
						<Typography
							variant="overline"
							sx={{
								color: amberMid,
								letterSpacing: "0.18em",
								mb: 1,
								display: "block",
								fontSize: "0.75rem"
							}}
						>
							Why GarageMate AI
						</Typography>

						<Typography
							variant="h3"
							sx={{
								color: textPrimary,
								fontSize: { xs: "2rem", md: "3rem" },
								mb: 3
							}}
						>
							Car Ownership Is Still Fragmented
						</Typography>

						<Typography
							sx={{
								color: textSec,
								maxWidth: 760,
								mx: "auto",
								lineHeight: 1.8,
								fontSize: "1.05rem"
							}}
						>
							Most drivers manage maintenance using memory, paper receipts,
							spreadsheets, or disconnected apps. GarageMate AI is building a
							centralized intelligent platform for proactive vehicle ownership.
						</Typography>
					</Box>

					<Grid container spacing={3}>
						{painPoints.map((item) => (
							<Grid key={item.title} size={{ xs: 12, md: 4 }}>
								<Paper elevation={0} sx={{ p: 4, height: "100%" }}>
									<Typography
										variant="h6"
										sx={{
											color: textPrimary,
											mb: 2,
											fontWeight: 700
										}}
									>
										{item.title}
									</Typography>

									<Typography sx={{ color: textSec, lineHeight: 1.7 }}>
										{item.desc}
									</Typography>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			{/* ── FEATURES ───────────────────────────────────────────────────── */}
			<Box ref={productRef} sx={{ py: { xs: 8, md: 12 }, bgcolor: bgSurface }}>
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
			{/* ── SUPPORTED BRANDS ───────────────────────────────────── */}
			<Box sx={{ py: 6, bgcolor: bgPaper }}>
				<Container maxWidth="lg">

					<Typography
						align="center"
						sx={{
							color: textSec,
							mb: 4,
							letterSpacing: "0.12em",
							textTransform: "uppercase",
							fontSize: "0.75rem"
						}}
					>
						Designed for modern vehicle owners
					</Typography>

					<Stack
						direction="row"
						spacing={2}
						useFlexGap
						sx={{
							justifyContent: 'center',
							flexWrap: 'wrap',
						}}
					>
						{supportedBrands.map((brand) => (
							<Typography
								key={brand}
								sx={{
									color: alpha(textPrimary, 0.7),
									fontWeight: 700,
									fontSize: "1.1rem"
								}}
							>
								{brand}
							</Typography>
						))}
					</Stack>
				</Container>
			</Box>
			{/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
			<Box ref={howItWorksRef} sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? "#080808" : "#FAFAF7" }}>
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
			{/* ── ROADMAP ───────────────────────────────────────────── */}
			<Box sx={{ py: { xs: 8, md: 12 }, bgcolor: bgSurface }}>
				<Container maxWidth="lg">

					<Box sx={{ textAlign: "center", mb: 8 }}>
						<Typography
							variant="overline"
							sx={{
								color: amberMid,
								letterSpacing: "0.18em",
								mb: 1,
								display: "block"
							}}
						>
							Product Roadmap
						</Typography>

						<Typography
							variant="h3"
							sx={{
								color: textPrimary,
								fontSize: { xs: "2rem", md: "2.8rem" }
							}}
						>
							Building The Future Of Vehicle Ownership
						</Typography>
					</Box>

					<Grid container spacing={3}>
						{roadmap.map((item) => (
							<Grid key={item.phase} size={{ xs: 12, md: 4 }}>
								<Paper elevation={0} sx={{ p: 4, height: "100%" }}>
									<Chip
										label={item.phase}
										size="small"
										sx={{ mb: 2 }}
									/>

									<Typography
										variant="h5"
										sx={{ color: textPrimary, mb: 2 }}
									>
										{item.title}
									</Typography>

									<Typography sx={{ color: textSec, lineHeight: 1.7 }}>
										{item.desc}
									</Typography>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			{/* ── TESTIMONIALS ─────────────────────────────────────── */}
			<Box sx={{ py: { xs: 8, md: 12 } }}>
				<Container maxWidth="lg">

					<Box sx={{ textAlign: "center", mb: 8 }}>
						<Typography
							variant="overline"
							sx={{
								color: amberMid,
								letterSpacing: "0.18em",
								display: "block",
								mb: 1
							}}
						>
							Early Feedback
						</Typography>

						<Typography
							variant="h3"
							sx={{
								color: textPrimary,
								fontSize: { xs: "2rem", md: "2.8rem" }
							}}
						>
							What Early Supporters Are Saying
						</Typography>
					</Box>

					<Grid container spacing={3}>
						{testimonials.map((t) => (
							<Grid key={t.name} size={{ xs: 12, md: 4 }}>
								<Paper elevation={0} sx={{ p: 4, height: "100%", justifyContent: 'center', alignContent: 'center' }}>
									<Stack
										spacing={2}
										sx={{
											alignItems: 'center',
											paddingBottom: 4
										}}
									>
										<Avatar>{t.name[0]}</Avatar>

										<Box>
											<Typography sx={{ color: textPrimary, fontWeight: 700 }}>
												{t.name}
											</Typography>

											<Typography sx={{ color: textSec, fontSize: "0.85rem" }}>
												{t.role}
											</Typography>
										</Box>
									</Stack>
									<Typography
										sx={{
											color: textSec,
											lineHeight: 1.8,
											mb: 3,
											fontStyle: "italic"
										}}
									>
										“{t.quote}”
									</Typography>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			{/* ── FAQ ─────────────────────────────────────────────── */}
			<Box ref={faqRef} sx={{ py: { xs: 8, md: 12 }, bgcolor: bgSurface }}>
				<Container maxWidth="md">

					<Box sx={{ textAlign: "center", mb: 8 }}>
						<Typography
							variant="overline"
							sx={{
								color: amberMid,
								letterSpacing: "0.18em",
								display: "block",
								mb: 1
							}}
						>
							FAQ
						</Typography>

						<Typography
							variant="h3"
							sx={{
								color: textPrimary,
								fontSize: { xs: "2rem", md: "2.8rem" }
							}}
						>
							Frequently Asked Questions
						</Typography>
					</Box>

					{faqs.map((faq) => (
						<Accordion
							key={faq.q}
							sx={{
								mb: 2,
								bgcolor: bgPaper
							}}
						>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<Typography sx={{ fontWeight: 600 }}>
									{faq.q}
								</Typography>
							</AccordionSummary>

							<AccordionDetails>
								<Typography sx={{ color: textSec, lineHeight: 1.7 }}>
									{faq.a}
								</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Container>
			</Box>
			{/* ── CTA ────────────────────────────────────────────────────────── */}
			<Box sx={{ py: { xs: 10, md: 16 }, textAlign: "center", background: isDark ? `radial-gradient(ellipse 70% 80% at 50% 50%, rgba(240,168,0,0.06) 0%, ${bgSurface} 70%)` : `radial-gradient(ellipse 70% 80% at 50% 50%, rgba(156,96,0,0.06) 0%, ${bgSurface} 70%)` }}>
				<Container maxWidth="sm">
					<Box sx={{ fontSize: 48, mb: 2 }}>🚘</Box>
					<Typography variant="h3" sx={{ color: textPrimary, mb: 2, fontSize: { xs: "2rem", md: "2.8rem" } }}>Help Shape The Future Of Vehicle Ownership</Typography>
					<Typography variant="body1" sx={{ color: textSec, mb: 5, lineHeight: 1.7 }}>GarageMate AI is currently in development. Join the early access wait-list to follow progress, access beta releases, and connect with the vision early.</Typography>
					<Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, justifyContent: "center" }}>
						<Button variant="contained" color="primary" size="large" sx={{ px: 5 }} onClick={() => setWaitlistOpen(true)}>Get Early Access</Button>
						<Button variant="outlined" color="primary" size="large" sx={{ px: 5 }} onClick={() => navigate("/learn")}>Learn More</Button>
					</Box>
				</Container>
			</Box>

			{/* ── FOOTER ─────────────────────────────────────────────────────── */}
			<Box ref={aboutRef} sx={{ py: 4, bgcolor: isDark ? "#050505" : "#F0EAD6" }}>
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
	)
}
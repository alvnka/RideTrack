import { Box, Container, Typography, Stack, Paper, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

export default function Learn() {
	const theme = useTheme();
	const navigate = useNavigate();

	const primary = theme.palette.primary.main;
	const textPrimary = theme.palette.primary.main;
	const textSecondary = theme.palette.text.secondary;
	const background = theme.palette.background.default;
	const surface = theme.palette.background.paper;

	return (
		<Box sx={{ minHeight: "100vh", bgcolor: background }}>
			{/* HERO */}
			<Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${theme.palette.divider}` }}>
				<Container maxWidth="md">
					<Typography
						variant="overline"
						sx={{
							color: primary,
							letterSpacing: "0.15em",
							display: "block",
							mb: 2,
						}}
					>
						Learn
					</Typography>

					<Typography
						variant="h3"
						sx={{
							color: textPrimary,
							fontSize: { xs: "2rem", md: "2.8rem" },
							mb: 2,
							fontWeight: 700,
						}}
					>
						Why Vehicle Maintenance Tracking Matters
					</Typography>

					<Typography
						sx={{
							color: textSecondary,
							lineHeight: 1.8,
							fontSize: "1.05rem",
							maxWidth: 720,
						}}
					>
						Most vehicle issues don’t happen suddenly — they build up over time.
						The problem is that most drivers don’t have a simple, consistent way
						to track maintenance or understand what their car needs next.
					</Typography>
				</Container>
			</Box>

			{/* PROBLEM */}
			<Box sx={{ py: { xs: 8, md: 10 } }}>
				<Container maxWidth="md">
					<Typography variant="h5" sx={{ mb: 3, color: textPrimary }}>
						The core problem
					</Typography>

					<Stack spacing={2}>
						{[
							"Maintenance is often remembered, not recorded",
							"Receipts and service history are scattered across different places",
							"Small issues are ignored until they become expensive repairs",
							"Drivers rarely know the next expected maintenance milestone",
						].map((item) => (
							<Paper key={item} sx={{ p: 2, bgcolor: surface }} elevation={0}>
								<Typography sx={{ color: textSecondary }}>{item}</Typography>
							</Paper>
						))}
					</Stack>
				</Container>
			</Box>

			{/* WHAT THIS MVP DOES */}
			<Box sx={{ py: { xs: 8, md: 10 }, bgcolor: surface }}>
				<Container maxWidth="md">
					<Typography variant="h5" sx={{ mb: 3, color: textPrimary }}>
						What GarageMate AI focuses on (MVP)
					</Typography>

					<Typography sx={{ color: textSecondary, lineHeight: 1.8, mb: 4 }}>
						The first version is intentionally simple. It focuses on helping users:
					</Typography>

					<Stack spacing={2}>
						{[
							"Log vehicle maintenance events in one place",
							"Track time and mileage since last service",
							"Receive basic reminders for upcoming maintenance",
							"View simple insights based on usage patterns",
						].map((item) => (
							<Paper key={item} sx={{ p: 2 }} elevation={0}>
								<Typography sx={{ color: textPrimary }}>{item}</Typography>
							</Paper>
						))}
					</Stack>
				</Container>
			</Box>

			{/* INSIGHT LOGIC */}
			<Box sx={{ py: { xs: 8, md: 10 } }}>
				<Container maxWidth="md">
					<Typography variant="h5" sx={{ mb: 3, color: textPrimary }}>
						How insights are generated (simple view)
					</Typography>

					<Typography sx={{ color: textSecondary, lineHeight: 1.8 }}>
						Insights are based on straightforward patterns:
					</Typography>

					<Stack spacing={2} sx={{ mt: 3 }}>
						<Paper sx={{ p: 2 }} elevation={0}>
							<Typography sx={{ color: textPrimary, fontWeight: 600 }}>
								Time-based tracking
							</Typography>
							<Typography sx={{ color: textSecondary }}>
								How long it has been since a part or service was last updated.
							</Typography>
						</Paper>

						<Paper sx={{ p: 2 }} elevation={0}>
							<Typography sx={{ color: textPrimary, fontWeight: 600 }}>
								Mileage-based tracking
							</Typography>
							<Typography sx={{ color: textSecondary }}>
								Estimated usage since last maintenance event.
							</Typography>
						</Paper>

						<Paper sx={{ p: 2 }} elevation={0}>
							<Typography sx={{ color: textPrimary, fontWeight: 600 }}>
								Basic threshold rules
							</Typography>
							<Typography sx={{ color: textSecondary }}>
								Simple service intervals based on common vehicle maintenance schedules.
							</Typography>
						</Paper>
					</Stack>
				</Container>
			</Box>

			{/* CLOSING */}
			<Box sx={{ py: { xs: 10, md: 12 }, borderTop: `1px solid ${theme.palette.divider}` }}>
				<Container maxWidth="sm" sx={{ textAlign: "center" }}>
					<Typography variant="h5" sx={{ mb: 2, color: textPrimary }}>
						The goal is simplicity first
					</Typography>

					<Typography sx={{ color: textSecondary, lineHeight: 1.8, mb: 4 }}>
						This is not about replacing mechanics or predicting complex failures.
						It’s about giving drivers a clear, structured way to understand
						and maintain their vehicles consistently.
					</Typography>

					<Button
						variant="contained"
						onClick={() => navigate("/")}
						sx={{ px: 4 }}
					>
						Back to Home
					</Button>
				</Container>
			</Box>
		</Box>
	);
}
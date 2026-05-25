import { useState } from "react";
import {
  Box, Typography, Button, Stack,
  TextField, Dialog, DialogContent, DialogTitle, IconButton,
  CircularProgress, Snackbar, Alert,
} from "@mui/material";
import type { AlertColor } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/configurations/firebaseConfig";

const textFieldSx = (amberMain: string, isDark: boolean, textSec: string) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    color: isDark ? "#F5C249" : "#1A1208",
    "& fieldset": { borderColor: alpha(amberMain, 0.2) },
    "&:hover fieldset": { borderColor: alpha(amberMain, 0.45) },
    "&.Mui-focused fieldset": { borderColor: amberMain },
  },
  "& .MuiInputLabel-root": { color: textSec, "&.Mui-focused": { color: amberMain } },
});

// ─── Waitlist Dialog ──────────────────────────────────────────────────────────
interface WaitlistDialogProps {
  open: boolean;
  onClose: () => void;
  isDark: boolean;
  amberMain: string;
  textPrimary: string;
  textSec: string;
  bgPaper: string;
}

export function WaitlistDialog({ open, onClose, isDark, amberMain, textPrimary, textSec, bgPaper }: WaitlistDialogProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ open: boolean; severity: AlertColor; msg: string }>({
    open: false, severity: "success", msg: "",
  });

  const handleSubmit = async () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setToast({ open: true, severity: "error", msg: "Please enter a valid email address." });
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, "waitlist"), {
        name: name.trim() || null,
        email: email.trim().toLowerCase(),
        source: "landing_page",
        createdAt: serverTimestamp(),
      });
      setToast({ open: true, severity: "success", msg: "You're on the list! We'll be in touch soon." });
      setEmail("");
      setName("");
      setTimeout(() => onClose(), 1800);
    } catch (err) {
      console.error("Firestore write failed:", err);
      setToast({ open: true, severity: "error", msg: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="xs"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              bgcolor: bgPaper,
              border: `1px solid ${alpha(amberMain, 0.22)}`,
              borderRadius: 4,
              boxShadow: isDark
                ? `0 0 80px ${alpha(amberMain, 0.1)}, 0 32px 80px rgba(0,0,0,0.6)`
                : "0 32px 80px rgba(0,0,0,0.15)",
              p: 1,
            },
          },
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Typography sx={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.4rem", color: textPrimary }}>
                Join the Waitlist
              </Typography>
              <Typography variant="body2" sx={{ color: textSec, mt: 0.5 }}>
                Be first when GarageMate AI launches.
              </Typography>
            </Box>
            <IconButton onClick={onClose} size="small" sx={{ color: textSec }}>✕</IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          <Stack spacing={2.5} sx={{ pt: 1 }}>
            <TextField
              label="Your name (optional)"
              value={name}
              onChange={e => setName(e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
              sx={textFieldSx(amberMain, isDark, textSec)}
            />
            <TextField
              label="Email address *"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSubmit()}
              fullWidth
              variant="outlined"
              size="small"
              type="email"
              sx={textFieldSx(amberMain, isDark, textSec)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handleSubmit}
              disabled={loading}
              sx={{ py: 1.5 }}
            >
              {loading ? <CircularProgress size={22} sx={{ color: "inherit" }} /> : "Reserve My Spot"}
            </Button>
            <Typography variant="caption" sx={{ color: textSec, textAlign: "center", display: "block" }}>
              No spam. Unsubscribe anytime.
            </Typography>
          </Stack>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={() => setToast(t => ({ ...t, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={toast.severity} sx={{ fontFamily: "Barlow, sans-serif", fontWeight: 600 }}>
          {toast.msg}
        </Alert>
      </Snackbar>
    </>
  );
}

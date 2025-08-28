"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function Home() {
  return (
    <Box sx={{ bgcolor: "#f9f9f9", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <img
              src="/social-orange-logo-v1.png"
              alt="Social Orange Logo"
              width={40}
              height={40}
            />
            <Typography variant="h6" fontWeight="bold">
              Social Orange
            </Typography>
          </Stack>
          <Stack direction="row" spacing={3}>
            <Button color="inherit" href="#features">
              Features
            </Button>
            <Button color="inherit" href="#screenshot">
              Screenshot
            </Button>
            <Button color="inherit" href="#contact">
              Contact
            </Button>
            <Button variant="contained" color="primary" href="#install">
              Install App
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* HERO SECTION */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          background: "linear-gradient(135deg, #25D366 0%, #ff6600 100%)",
          color: "white",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to WhatsApp Chat by Social Orange
          </Typography>
          <Typography variant="h6" mb={4}>
            Connect with customers instantly through WhatsApp. Increase sales,
            provide fast support, and build trust.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="secondary"
              startIcon={<ChatIcon />}
              size="large"
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<SupportAgentIcon />}
              size="large"
            >
              Contact Support
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* FEATURES SECTION */}
      <Box id="features" sx={{ py: 8, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={4} mt={2}>
            {[
              { text: "💬 Real-time WhatsApp support" },
              { text: "📈 Boost conversions with instant replies" },
              { text: "⚡ Easy setup in your Shopify store" },
              { text: "🔒 Secure & reliable" },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    height: "100%",
                    borderRadius: "16px",
                    border: "1px solid #eee",
                  }}
                >
                  <Typography variant="body1" fontWeight="medium">
                    {item.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* SCREENSHOT SECTION */}
      <Box
        id="screenshot"
        sx={{
          py: 8,
          bgcolor: "#f4f7fb",
        }}
      >
        <Container maxWidth="md" textAlign="center">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            gutterBottom
          >
            Take a Look
          </Typography>
          <Box textAlign="center" mt={4}>
            <img
              src="/screenshot-1.png"
              alt="App Screenshot"
              style={{
                maxWidth: "100%",
                borderRadius: "16px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                border: "4px solid white",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box
        id="contact"
        sx={{ py: 4, textAlign: "center", bgcolor: "#222", color: "#ccc" }}
      >
        <Typography variant="body2" gutterBottom>
          Powered by{" "}
          <a
            href="https://firstbridgeconsulting.com"
            target="_blank"
            style={{ color: "#ff6600", textDecoration: "none" }}
          >
            First Bridge Consulting
          </a>
        </Typography>
        <Typography variant="body2">
          Contact us: success@firstbridgeconsulting.com
        </Typography>
      </Box>
    </Box>
  );
}

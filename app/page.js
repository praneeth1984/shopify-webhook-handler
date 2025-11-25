"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Chat, TrendingUp, FlashOn, Security } from "@mui/icons-material";

export default function Home() {
  // Handle Shopify OAuth installation
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shop = params.get('shop');
    const hmac = params.get('hmac');
    
    // If this is a Shopify install request, redirect to OAuth
    if (shop && hmac) {
      console.log('[Home] Detected install request, redirecting to /api/auth');
      window.location.href = `/api/auth?${params.toString()}`;
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        scrollBehavior: "smooth",
      }}
    >
      {/* Navigation Bar */}
      <AppBar position="sticky" sx={{ backgroundColor: "#12192c" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/social-orange-logo-v1.png"
              alt="Social Orange Logo"
              width={40}
              height={40}
            />
            <Typography variant="h6" sx={{ ml: 2 }}>
              Social Orange
            </Typography>
          </Box>
          <Box>
            <Button color="inherit" component={Link} href="#home">
              Home
            </Button>
            <Button color="inherit" component={Link} href="#features">
              Features
            </Button>
            <Button color="inherit" component={Link} href="#pricing">
              Pricing
            </Button>
            <Button color="inherit" component={Link} href="#contact">
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container id="home" sx={{ textAlign: "center", py: 8 }}>
        <Image
          src="/social-orange-logo-v1.png"
          alt="WhatsApp Chat Logo"
          width={90}
          height={90}
          style={{ marginBottom: "16px" }}
        />
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to{" "}
          <span style={{ color: "#25D366" }}>WhatsApp Chat</span> by{" "}
          <span style={{ color: "#ff6600" }}>Social Orange</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#ddd", maxWidth: "700px", mx: "auto", mb: 4 }}
        >
          Connect with your customers instantly through WhatsApp. Increase
          sales, provide fast support, and build stronger trust with your
          shoppers.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mr: 2,
            backgroundColor: "#25D366",
            "&:hover": { backgroundColor: "#1da851" },
          }}
        >
          Learn More
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#ff6600",
            borderColor: "#ff6600",
            "&:hover": { borderColor: "#ff8533", color: "#ff8533" },
          }}
          href="mailto:success@firstbridgeconsulting.com"
        >
          Contact Support
        </Button>
      </Container>

      {/* Features Section */}
      <Container id="features" sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 6, fontWeight: "bold" }}
        >
          Why Choose Us?
        </Typography>
        <Grid container spacing={4}>
          {[
            { text: "Real-time WhatsApp Support", icon: <Chat fontSize="large" /> },
            { text: "Boost Conversions Instantly", icon: <TrendingUp fontSize="large" /> },
            { text: "Easy Shopify Setup", icon: <FlashOn fontSize="large" /> },
            { text: "Secure & Reliable", icon: <Security fontSize="large" /> },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "#1e2a38",
                  color: "#fff",
                  border: "1px solid #2c5364",
                  borderRadius: "16px",
                  textAlign: "center",
                  p: 2,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0px 8px 30px rgba(0,0,0,0.4)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2, color: "#25D366" }}>{feature.icon}</Box>
                  <Typography align="center" variant="h6">
                    {feature.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Screenshot Section */}
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Image
          src="/screenshot-1.png"
          alt="App Screenshot"
          width={1000}
          height={600}
          style={{ borderRadius: "12px", border: "2px solid #2c5364" }}
        />
      </Container>

      {/* Footer */}
      <Box
        id="contact"
        sx={{ py: 4, textAlign: "center", backgroundColor: "#12192c" }}
      >
        <Typography variant="body2">
          Powered by{" "}
          <a
            href="https://firstbridgeconsulting.com"
            target="_blank"
            style={{ color: "#ff6600" }}
          >
            First Bridge Consulting
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

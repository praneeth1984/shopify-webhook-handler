"use client";
import Image from "next/image";
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

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
      }}
    >
      {/* Navigation Bar */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #1c1c3c, #2c5364)",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/social-orange-logo-v1.png"
              alt="Social Orange Logo"
              width={40}
              height={40}
            />
            <Typography variant="h6" sx={{ ml: 2, fontWeight: "bold" }}>
              Social Orange
            </Typography>
          </Box>
          <Box>
            {["Home", "Features", "Pricing", "Contact"].map((item, i) => (
              <Button
                key={i}
                sx={{
                  mx: 1,
                  color: "#fff",
                  fontWeight: 500,
                  "&:hover": {
                    color: "#25D366",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container sx={{ textAlign: "center", py: 8 }}>
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
          Connect with your customers instantly through WhatsApp. Increase sales,
          provide fast support, and build stronger trust with your shoppers.
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
      <Container sx={{ py: 8 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 6, fontWeight: "bold" }}
        >
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {[
            { text: "💬 Real-time WhatsApp support" },
            { text: "📈 Boost conversions with instant replies" },
            { text: "⚡ Easy setup in your Shopify store" },
            { text: "🔒 Secure & reliable" },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  background: "linear-gradient(135deg, #1c1c3c, #2c5364)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.1)",
                  "&:hover": {
                    borderColor: "#25D366",
                    transform: "translateY(-4px)",
                    transition: "0.3s",
                  },
                }}
              >
                <CardContent>
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
          style={{
            borderRadius: "12px",
            border: "2px solid rgba(255,255,255,0.2)",
            boxShadow: "0px 6px 20px rgba(0,0,0,0.5)",
          }}
        />
      </Container>

      {/* Footer */}
      <Box
        sx={{
          py: 4,
          textAlign: "center",
          background: "linear-gradient(90deg, #1c1c3c, #2c5364)",
        }}
      >
        <Typography variant="body2">
          Powered by{" "}
          <a
            href="https://firstbridgeconsulting.com"
            target="_blank"
            style={{ color: "#ff6600", fontWeight: "bold" }}
          >
            First Bridge Consulting
          </a>
        </Typography>
      </Box>
    </Box>
  );
}

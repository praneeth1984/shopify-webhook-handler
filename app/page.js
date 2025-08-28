import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/social-orange-logo-v1.png" // replace with your WhatsApp logo
          alt="WhatsApp Chat Logo"
          width={80}
          height={80}
          priority
        />

        <h1 className={styles.title}>
          Welcome to <span style={{ color: "#25D366" }}>WhatsApp Chat</span> by{" "}
          <span style={{ color: "#ff6600" }}>Social Orange</span>
        </h1>

        <p className={styles.description}>
          Connect with your customers instantly through WhatsApp.  
          Increase sales, provide fast support, and build stronger trust with your shoppers.
        </p>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/social-orange-logo-v1.png"
              alt="WhatsApp icon"
              width={20}
              height={20}
            />
            Learn More
          </a>
          <a
            href="mailto:success@firstbridgeconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Contact Support
          </a>
        </div>

        <div className={styles.features}>
          <ul>
            <li>💬 Real-time WhatsApp support</li>
            <li>📈 Boost conversions with instant replies</li>
            <li>⚡ Easy setup in your Shopify store</li>
            <li>🔒 Secure & reliable</li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://firstbridgeconsulting.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by First Bridge Consulting
        </a>
      </footer>
    </div>
  );
}

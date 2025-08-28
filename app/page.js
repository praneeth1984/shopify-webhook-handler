import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <Image
            src="/social-orange-logo-v1.png"
            alt="WhatsApp Chat Logo"
            width={90}
            height={90}
            priority
          />
        </div>

        {/* Title */}
        <h1 className={styles.title}>
          Welcome to <span className={styles.green}>WhatsApp Chat</span> by{" "}
          <span className={styles.orange}>Social Orange</span>
        </h1>

        {/* Description */}
        <p className={styles.description}>
          Engage with your customers instantly on WhatsApp.  
          Provide fast support, boost conversions, and build stronger trust.
        </p>

        {/* Call to Actions */}
        <div className={styles.ctas}>
          <a className={styles.primary} href="#">
            Learn More
          </a>
          <a
            href="mailto:success@firstbridgeconsulting.com"
            className={styles.secondary}
          >
            Contact Support
          </a>
        </div>

        {/* Features */}
        <section className={styles.features}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>💬 Real-time WhatsApp support</li>
            <li>📈 Boost sales with instant replies</li>
            <li>⚡ Easy Shopify store integration</li>
            <li>🔒 Secure & reliable solution</li>
          </ul>
        </section>

        {/* Screenshot */}
        <div className={styles.screenshot}>
          <Image
            src="/screenshot-1.png"
            alt="App Preview"
            width={1000}
            height={600}
            className={styles.imageShadow}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          Powered by{" "}
          <a
            href="https://firstbridgeconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            First Bridge Consulting
          </a>
        </p>
      </footer>
    </div>
  );
}

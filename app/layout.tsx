"use client";

import "./globals.css";
import styles from "./layout.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useWindowSize from "@/hooks/window.hook";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CosmicWavesShaders from "@/components/cosmic-waves/cosmic-waves";
import { spaceGrotesk } from "./font";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const subPageNavItems = [
  { label: "Home", href: "/" },
  { label: "Career", href: "/career" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const routerPathname = usePathname();
  const { windowsWidth } = useWindowSize();
  const isHomePage = routerPathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isHomePage) {
        const sections = navItems.map((item) => item.href.replace("#", ""));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    }
  };

  const currentNavItems = isHomePage ? navItems : subPageNavItems;

  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head />
      <body className={spaceGrotesk.className}>
        <div className={styles.app_background}>
          <CosmicWavesShaders
            speed={0.3}
            amplitude={0.8}
            frequency={1.2}
            starDensity={1.0}
            colorShift={0.5}
          />
        </div>
        <div className={styles.background_overlay} />
        <motion.nav
          className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.navbar_container}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/brand_logo.svg"
                alt="BH Logo"
                width={48}
                height={48}
                priority
              />
            </Link>

            {windowsWidth > 768 ? (
              <div className={styles.nav_links}>
                {currentNavItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`${styles.nav_link} ${
                      isHomePage && activeSection === item.href.replace("#", "")
                        ? styles.active
                        : ""
                    } ${
                      !isHomePage && routerPathname === item.href
                        ? styles.active
                        : ""
                    }`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            ) : (
              <button
                className={styles.menu_toggle}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.span
                  className={styles.menu_line}
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                />
                <motion.span
                  className={styles.menu_line}
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className={styles.menu_line}
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                />
              </button>
            )}
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && windowsWidth <= 768 && (
              <motion.div
                className={styles.mobile_menu}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentNavItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={styles.mobile_link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        <main className={styles.main_content}>
          {children}
        </main>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;

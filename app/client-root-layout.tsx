"use client";

import styles from "./layout.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useWindowSize from "@/hooks/window.hook";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import CosmicWavesShaders from "@/components/cosmic-waves/cosmic-waves";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { getUi } from "@/lib/i18n/ui";

const localeSlideVariants = {
  initial: (dir: number) => ({
    x: dir > 0 ? "32vw" : "-32vw",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "32vw" : "-32vw",
    opacity: 0,
    transition: { duration: 0.34, ease: [0.22, 1, 0.36, 1] },
  }),
};

type ClientRootLayoutProps = {
  children: React.ReactNode;
  locale: Locale;
};

export default function ClientRootLayout({
  children,
  locale,
}: ClientRootLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const routerPathname = usePathname();
  const { windowsWidth } = useWindowSize();
  const ui = getUi(locale);

  const isHomePage = routerPathname === `/${locale}`;

  const homeNavItems = useMemo(
    () => [
      { label: ui.nav.overview, href: "#overview" },
      { label: ui.nav.about, href: "#about" },
      { label: ui.nav.stack, href: "#stack" },
      { label: ui.nav.experience, href: "#experience" },
      { label: ui.nav.projects, href: "#projects" },
      { label: ui.nav.contact, href: "#contact" },
    ],
    [ui.nav]
  );

  const subPageNavItems = useMemo(
    () => [
      { label: ui.nav.home, href: `/${locale}` },
      { label: ui.nav.career, href: `/${locale}/career` },
      { label: ui.nav.skills, href: `/${locale}/skills` },
      { label: ui.nav.contact, href: `/${locale}/contact` },
    ],
    [locale, ui.nav]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (isHomePage) {
        const sections = homeNavItems.map((item) => item.href.replace("#", ""));
        for (const section of [...sections].reverse()) {
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
  }, [isHomePage, homeNavItems]);

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

  const currentNavItems = isHomePage ? homeNavItems : subPageNavItems;

  const pathWithoutLocale =
    routerPathname.replace(/^\/(fr|en)(?=\/|$)/, "") || "/";

  return (
    <>
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
          <Link href={`/${locale}`} className={styles.logo}>
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
              <div
                className={styles.lang_switch}
                role="group"
                aria-label={ui.lang.switch}
              >
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
                    className={`${styles.lang_btn_wrap} ${
                      loc === locale ? styles.lang_btn_wrap_active : ""
                    }`}
                    scroll={false}
                  >
                    {loc === locale && (
                      <motion.div
                        layoutId="localeTogglePillDesktop"
                        className={styles.lang_pill}
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                          mass: 0.85,
                        }}
                      />
                    )}
                    <span className={styles.lang_btn_label}>{ui.lang[loc]}</span>
                  </Link>
                ))}
              </div>
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
              <div className={styles.mobile_lang_row}>
                {locales.map((loc) => (
                  <Link
                    key={loc}
                    href={`/${loc}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
                    className={`${styles.mobile_lang_btn_wrap} ${
                      loc === locale ? styles.mobile_lang_btn_wrap_active : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    scroll={false}
                  >
                    {loc === locale && (
                      <motion.div
                        layoutId="localeTogglePillMobile"
                        className={styles.mobile_lang_pill}
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                          mass: 0.85,
                        }}
                      />
                    )}
                    <span className={styles.lang_btn_label}>{ui.lang[loc]}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={locale}
          className={styles.main_content}
          custom={locale === "en" ? 1 : -1}
          variants={localeSlideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <Footer locale={locale} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

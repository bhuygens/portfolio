import styles from "@/app/contact/page.module.scss";
import ContactItem from "@/app/contact/components/contact-item";
import { Toaster } from "sonner";
import ContactForm from "@/app/contact/components/contact-form/contact-form";
import { Metadata } from "next";
import { getUi } from "@/lib/i18n/ui";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

type PageProps = { params: { locale: string } };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  const t = getUi(locale);
  return {
    title: `Benjamin Huygens — ${t.nav.contact}`,
    description:
      locale === "fr"
        ? "Contactez-moi pour votre projet."
        : "Get in touch with me",
  };
}

export default function ContactPage({ params }: PageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.tag}>
          {locale === "fr" ? "Contact" : "Contact"}
        </span>
        <h1 className={styles.title}>
          {locale === "fr" ? (
            <>
              Restons en <span className={styles.gradient}>contact</span>
            </>
          ) : (
            <>
              Get in <span className={styles.gradient}>Touch</span>
            </>
          )}
        </h1>
        <p className={styles.subtitle}>
          {locale === "fr"
            ? "Un projet en tête ? Écrivez-moi et construisons quelque chose de solide ensemble."
            : "Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing."}
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <ContactForm />

          <div className={styles.content_infos}>
            <ContactItem
              image="address"
              detail="Lille"
              title={locale === "fr" ? "Adresse" : "Address"}
            />
            <ContactItem
              image="phone"
              detail="FR: +33 6 59 58 29 54, CA: +1 (438) 448-1802"
              title={locale === "fr" ? "Téléphone" : "Phone"}
            />
            <ContactItem
              image="mail"
              detail="huygens.benjamin@gmail.com"
              title="Mail"
            />
          </div>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1c1c1f",
            border: "1px solid #27272a",
            color: "#fafafa",
          },
        }}
      />
    </div>
  );
}

import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy – WHYN",
  description:
    "Understand how WHYN uses cookies and similar technologies on whyn.dev, including the types of cookies used and how to manage them.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/legal/cookie-policy` },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="March 12, 2026">
      <section>
        <h2>What Cookies Are</h2>
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They are widely used to make websites function properly,
          improve user experience, and provide information to site operators.
        </p>
        <p>
          This Cookie Policy explains how WHYN (&quot;we,&quot; &quot;us,&quot;
          or &quot;our&quot;) uses cookies and similar technologies on whyn.dev.
        </p>
      </section>

      <section>
        <h2>How We Use Cookies</h2>
        <p>
          We use cookies to understand how visitors interact with our website,
          maintain site functionality, and improve your browsing experience. Some
          cookies are necessary for the website to function, while others help us
          analyze usage patterns.
        </p>
      </section>

      <section>
        <h2>Types of Cookies We Use</h2>

        <h3>Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function correctly. They
          enable basic features such as page navigation and access to secure
          areas. The website cannot function properly without these cookies.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          We may use analytics cookies (such as those provided by Google
          Analytics or Vercel Analytics) to collect anonymous information about
          how visitors use our website. This helps us understand which pages are
          most popular, how visitors navigate the site, and where improvements
          can be made. These cookies do not collect personally identifiable
          information.
        </p>

        <h3>Functional Cookies</h3>
        <p>
          Functional cookies allow the website to remember choices you make (such
          as theme preferences or form data) and provide enhanced, personalized
          features. These cookies may be set by us or by third-party providers
          whose services we use.
        </p>
      </section>

      <section>
        <h2>Third-Party Cookies</h2>
        <p>
          Some cookies may be placed by third-party services that appear on our
          pages. We do not control these cookies and recommend reviewing the
          privacy policies of these third parties for more information. Common
          third-party services that may set cookies include:
        </p>
        <ul>
          <li>Analytics providers (e.g., Google Analytics, Vercel Analytics)</li>
          <li>Embedded content providers</li>
        </ul>
      </section>

      <section>
        <h2>Managing Cookies</h2>
        <p>
          You can control and manage cookies through your browser settings. Most
          browsers allow you to:
        </p>
        <ul>
          <li>View what cookies are stored and delete them individually.</li>
          <li>Block third-party cookies.</li>
          <li>Block cookies from specific sites.</li>
          <li>Block all cookies from being set.</li>
          <li>Delete all cookies when you close your browser.</li>
        </ul>
        <p>
          Please note that blocking or deleting certain cookies may affect the
          functionality of our website and your browsing experience.
        </p>
        <p>
          For more information on how to manage cookies in your browser, visit
          your browser&apos;s help documentation.
        </p>
      </section>

      <section>
        <h2>Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in technology, regulation, or our practices. Updates will be posted on
          this page with an updated &quot;Last updated&quot; date.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          If you have questions about our use of cookies, please contact us:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:hello@whyn.dev">hello@whyn.dev</a>
          </li>
          <li>
            Website:{" "}
            <a href="https://whyn.dev">whyn.dev</a>
          </li>
        </ul>
      </section>
    </LegalLayout>
  );
}

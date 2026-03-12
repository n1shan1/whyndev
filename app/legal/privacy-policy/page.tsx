import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy – WHYN",
  description:
    "Learn how WHYN handles your personal data. This policy outlines what information we collect, how we use it, and your rights regarding your data.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/legal/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 12, 2026">
      <section>
        <h2>Introduction</h2>
        <p>
          This Privacy Policy describes how WHYN (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) collects, uses, and protects
          information when you visit our website at whyn.dev or engage with our
          services. This policy is intended to provide transparency regarding how
          we handle data.
        </p>
        <p>
          By using our website, you acknowledge that you have read and understood
          this Privacy Policy.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Information you provide directly</strong> — such as your
            name, email address, company name, and project details when you
            submit a contact form or inquiry.
          </li>
          <li>
            <strong>Automatically collected information</strong> — such as your
            IP address, browser type, device information, pages visited, and
            referring URLs through analytics tools and server logs.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> — as described in
            our Cookie Policy.
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to inquiries and communicate with you about projects.</li>
          <li>Provide, maintain, and improve our services.</li>
          <li>
            Analyze website usage to understand how visitors interact with our
            site.
          </li>
          <li>Send relevant updates or information you have opted into.</li>
          <li>Protect against misuse and enforce our terms.</li>
        </ul>
      </section>

      <section>
        <h2>Cookies and Tracking Technologies</h2>
        <p>
          We may use cookies, web beacons, and similar tracking technologies to
          collect usage data and improve your experience. For full details,
          please see our{" "}
          <a href="/legal/cookie-policy">Cookie Policy</a>.
        </p>
      </section>

      <section>
        <h2>Third-Party Services</h2>
        <p>
          We may use third-party services that collect, monitor, or analyze data
          on our behalf. These may include:
        </p>
        <ul>
          <li>
            <strong>Analytics providers</strong> (e.g., Google Analytics, Vercel
            Analytics) to understand website traffic and usage.
          </li>
          <li>
            <strong>Hosting providers</strong> (e.g., Vercel) to serve and
            deliver our website.
          </li>
          <li>
            <strong>Email services</strong> (e.g., Resend) to process form
            submissions and send communications.
          </li>
        </ul>
        <p>
          These third parties have their own privacy policies governing how they
          handle data. We encourage you to review their policies.
        </p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect the information we collect from
          unauthorized access, alteration, or destruction. However, no method of
          transmission over the internet or electronic storage is completely
          secure. We cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Data Retention</h2>
        <p>
          We retain personal information only for as long as necessary to fulfill
          the purposes for which it was collected, comply with legal obligations,
          or resolve disputes.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the right to:
        </p>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of your personal information.</li>
          <li>Object to or restrict certain processing of your data.</li>
          <li>Withdraw consent where processing is based on consent.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a href="mailto:hello@whyn.dev">hello@whyn.dev</a>.
        </p>
      </section>

      <section>
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under the age of 16. We
          do not knowingly collect personal information from children. If you
          believe we have inadvertently collected such information, please
          contact us and we will take steps to delete it.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated &quot;Last updated&quot; date. We
          encourage you to review this policy periodically.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          If you have questions about this Privacy Policy, you can reach us at:
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

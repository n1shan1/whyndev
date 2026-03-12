import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Legal / Imprint – WHYN",
  description:
    "Legal information and imprint for WHYN, a developer-led web development studio based in India.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/legal/imprint` },
};

export default function ImprintPage() {
  return (
    <LegalLayout title="Legal / Imprint" lastUpdated="March 12, 2026">
      <section>
        <h2>About This Website</h2>
        <p>
          This website is operated by WHYN, a developer-led web development
          studio. We design and engineer custom websites and software for
          businesses.
        </p>
      </section>

      <section>
        <h2>Business Information</h2>
        <ul>
          <li>
            <strong>Brand Name:</strong> WHYN
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href="https://whyn.dev">whyn.dev</a>
          </li>
          <li>
            <strong>Contact Email:</strong>{" "}
            <a href="mailto:hello@whyn.dev">hello@whyn.dev</a>
          </li>
          <li>
            <strong>Location:</strong> India (remote studio)
          </li>
        </ul>
      </section>

      <section>
        <h2>Disclaimer</h2>
        <p>
          The information provided on this website is for general informational
          purposes only. While we strive to keep the content accurate and
          up-to-date, we make no representations or warranties of any kind,
          express or implied, about the completeness, accuracy, reliability, or
          suitability of the information.
        </p>
        <p>
          Any reliance you place on such information is strictly at your own
          risk. We shall not be liable for any loss or damage arising from the
          use of this website.
        </p>
      </section>

      <section>
        <h2>External Links</h2>
        <p>
          This website may contain links to external websites that are not
          operated by us. We have no control over the content and practices of
          these sites and cannot accept responsibility for their content or
          privacy policies.
        </p>
      </section>

      <section>
        <h2>Copyright</h2>
        <p>
          All content on this website, including text, graphics, logos, and code,
          is the property of WHYN unless otherwise stated. Unauthorized
          reproduction or distribution of this content is prohibited without
          written permission.
        </p>
      </section>

      <section>
        <h2>Legal Policies</h2>
        <p>For more information, please review our other legal documents:</p>
        <ul>
          <li>
            <a href="/legal/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/legal/terms-of-service">Terms of Service</a>
          </li>
          <li>
            <a href="/legal/cookie-policy">Cookie Policy</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For legal inquiries, you can reach us at{" "}
          <a href="mailto:hello@whyn.dev">hello@whyn.dev</a>.
        </p>
      </section>
    </LegalLayout>
  );
}

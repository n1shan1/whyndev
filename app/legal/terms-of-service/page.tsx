import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service – WHYN",
  description:
    "Read the terms and conditions governing the use of WHYN's web development services, including project scope, payments, intellectual property, and liability.",
  alternates: { canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/legal/terms-of-service` },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="March 12, 2026">
      <section>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using our website at whyn.dev, or by engaging WHYN
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for any services,
          you agree to be bound by these Terms of Service. If you do not agree,
          please do not use our website or services.
        </p>
      </section>

      <section>
        <h2>Services Provided</h2>
        <p>
          WHYN is a developer-led web development studio that provides custom
          website design, web application development, e-commerce solutions, SEO
          optimization, and related digital services. The specific scope of work
          for each project is defined in a separate project proposal or
          agreement.
        </p>
      </section>

      <section>
        <h2>Project Scope and Deliverables</h2>
        <p>
          Each project begins with a defined scope of work outlined in a project
          proposal or statement of work. Any work outside the agreed scope may
          require a separate agreement and additional fees.
        </p>
        <p>
          We will make reasonable efforts to deliver the project within the
          estimated timeline. However, timelines are estimates and may be
          adjusted based on project complexity, client responsiveness, and scope
          changes.
        </p>
      </section>

      <section>
        <h2>Client Responsibilities</h2>
        <p>Clients agree to:</p>
        <ul>
          <li>
            Provide all required content, assets, and information in a timely
            manner.
          </li>
          <li>
            Ensure that any content provided (text, images, logos, etc.) does not
            infringe on any third-party intellectual property rights and is
            legally permissible to use.
          </li>
          <li>
            Respond to requests for feedback and approvals within a reasonable
            timeframe to avoid project delays.
          </li>
          <li>
            Provide accurate and complete information relevant to the project.
          </li>
        </ul>
        <p>
          WHYN is not responsible for delays caused by late or incomplete client
          deliverables.
        </p>
      </section>

      <section>
        <h2>Payments and Billing</h2>
        <p>
          Payment terms are outlined in the project proposal. The following
          general terms apply:
        </p>
        <ul>
          <li>
            <strong>Deposit:</strong> A non-refundable deposit is required before
            work begins. The deposit amount will be specified in the project
            proposal (typically 30–50% of the total project cost).
          </li>
          <li>
            <strong>Milestone payments:</strong> For larger projects, payments
            may be structured around milestones defined in the project proposal.
          </li>
          <li>
            <strong>Final payment:</strong> The remaining balance is due upon
            project completion or final delivery, prior to deployment or
            ownership transfer.
          </li>
          <li>
            <strong>Late payments:</strong> Invoices not paid within the agreed
            timeframe may result in work being paused until payment is received.
          </li>
        </ul>
      </section>

      <section>
        <h2>Revisions and Changes</h2>
        <p>
          A defined number of revision rounds is included in each project
          proposal. Revisions refer to minor adjustments within the originally
          agreed scope.
        </p>
        <ul>
          <li>
            Additional revisions beyond the included rounds may be billed at an
            agreed hourly or fixed rate.
          </li>
          <li>
            Requests that significantly alter the project scope, functionality,
            or design direction constitute change requests and require a separate
            agreement and additional fees.
          </li>
        </ul>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          During the project, WHYN retains ownership of all work products,
          designs, code, and deliverables until full payment has been received.
        </p>
        <ul>
          <li>
            Pre-existing tools, frameworks, and libraries used in the project
            remain the property of their respective owners and are subject to
            their licenses.
          </li>
          <li>
            WHYN reserves the right to use general techniques, knowledge, and
            non-confidential elements of the project for portfolio and
            promotional purposes unless otherwise agreed in writing.
          </li>
        </ul>
      </section>

      <section>
        <h2>Ownership Transfer</h2>
        <p>
          Upon receipt of full and final payment, ownership of the custom
          deliverables (as defined in the project proposal) transfers to the
          client. This includes custom code, designs, and assets created
          specifically for the project.
        </p>
        <p>
          Until full payment is received, the client is granted a limited,
          non-exclusive license to view the work in progress but may not deploy,
          distribute, or use the deliverables commercially.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law:
        </p>
        <ul>
          <li>
            WHYN shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from or related to the use
            of our services or deliverables.
          </li>
          <li>
            We are not responsible for losses, downtime, or issues caused by
            third-party services, hosting providers, APIs, or external
            integrations.
          </li>
          <li>
            Our total liability for any claim related to our services shall not
            exceed the total amount paid by the client for the specific project
            in question.
          </li>
          <li>
            We do not guarantee specific business outcomes, search engine
            rankings, or revenue results from the use of our deliverables.
          </li>
        </ul>
      </section>

      <section>
        <h2>Termination</h2>
        <p>
          Either party may terminate a project engagement with written notice.
          In the event of termination:
        </p>
        <ul>
          <li>
            The client is responsible for payment of all work completed up to the
            date of termination.
          </li>
          <li>The deposit is non-refundable.</li>
          <li>
            Any deliverables completed and paid for will be provided to the
            client.
          </li>
          <li>
            Unpaid deliverables remain the property of WHYN until payment is
            received.
          </li>
        </ul>
      </section>

      <section>
        <h2>Confidentiality</h2>
        <p>
          Both parties agree to keep confidential any proprietary or sensitive
          information shared during the course of the project. This obligation
          survives the termination of the engagement.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance
          with the laws of India. Any disputes arising from these terms or our
          services shall be subject to the jurisdiction of the courts in India.
        </p>
      </section>

      <section>
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time.
          Changes will be posted on this page with an updated &quot;Last
          updated&quot; date. Continued use of our website or services after
          changes are posted constitutes acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2>Contact Information</h2>
        <p>
          If you have questions about these Terms of Service, please contact us:
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

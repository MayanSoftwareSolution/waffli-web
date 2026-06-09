import { LegalLayout } from '@/components/legal-layout';

export default function Support() {
    return (
        <LegalLayout
            title="Support"
            lastUpdated="30 April 2026"
            description="Get help with Waffli — contact support, manage your account, subscriptions, and privacy requests."
        >
            <div className="lg-intro">
                <p>
                    Need help with <strong>Waffli</strong>? This page explains how to contact support and where to find
                    important account, privacy, and subscription information. Waffli is currently developed and operated
                    by <strong>Sean Bezuidenhout</strong>, trading as <strong>Waffli</strong>.
                </p>
            </div>

            <div className="notice">
                <p>
                    For support, email us at{' '}
                    <strong><a href="mailto:sinatechnologies@outlook.com">sinatechnologies@outlook.com</a></strong>.
                    Please include the email address linked to your Waffli account if your request relates to your account.
                </p>
            </div>

            <div className="btn-row">
                <a className="btn-pill" href="mailto:sinatechnologies@outlook.com?subject=Waffli%20Support%20Request">
                    Contact Support
                </a>
                <a className="btn-pill" href="/privacy">Privacy Policy</a>
                <a className="btn-pill" href="/terms">Terms of Use</a>
                <a className="btn-pill" href="/account-deletion">Account Deletion</a>
            </div>

            <h2>1. Contact Support</h2>

            <p>
                For general support, account help, privacy questions, or subscription guidance, contact:
            </p>

            <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:sinatechnologies@outlook.com">sinatechnologies@outlook.com</a>
            </p>

            <p>
                We aim to respond to support requests as soon as reasonably possible. Response times may vary depending on
                request volume, complexity, weekends, holidays, and whether we need to verify account ownership.
            </p>

            <h2>2. What to Include in Your Message</h2>

            <p>To help us resolve your request faster, please include:</p>

            <ul>
                <li>The email address associated with your Waffli account</li>
                <li>The device you are using, such as iPhone, iPad, Android phone, or Android tablet</li>
                <li>Your app version, if available</li>
                <li>A short description of the issue</li>
                <li>Screenshots, if they help explain the problem</li>
            </ul>

            <p>
                Please do not send passwords, payment card details, biometric information, or unnecessary sensitive personal
                information.
            </p>

            <h2>3. Common Support Topics</h2>

            <div className="support-grid">
                <section className="support-card">
                    <div className="support-card-icon">🔑</div>
                    <h3>Account Access</h3>
                    <p>
                        Contact us if you cannot sign in, cannot access your account, or believe your account has been
                        accessed without permission.
                    </p>
                </section>

                <section className="support-card">
                    <div className="support-card-icon">🗑</div>
                    <h3>Account Deletion</h3>
                    <p>
                        You can delete your account inside the app from Profile &rarr; Delete Account, or request deletion
                        by email.
                    </p>
                </section>

                <section className="support-card">
                    <div className="support-card-icon">💳</div>
                    <h3>Subscriptions</h3>
                    <p>
                        Subscriptions are managed by Apple or Google. Cancellation and refund requests should be handled
                        through the platform where you subscribed.
                    </p>
                </section>

                <section className="support-card">
                    <div className="support-card-icon">🎙</div>
                    <h3>Brain Dump</h3>
                    <p>
                        Brain Dump uses your microphone only when you choose to record audio for transcription into draft
                        task text.
                    </p>
                </section>
            </div>

            <h2>4. Account Deletion</h2>

            <p>You can delete your Waffli account directly inside the app:</p>

            <ol>
                <li>Open the <strong>Waffli</strong> app.</li>
                <li>Go to <strong>Profile</strong>.</li>
                <li>Select <strong>Delete Account</strong>.</li>
                <li>Confirm the deletion request.</li>
            </ol>

            <p>Account deletion is permanent and cannot be undone once completed.</p>

            <p>
                More information is available here:<br />
                <a href="/account-deletion">View Account Deletion Policy</a>
            </p>

            <h2>5. Subscriptions and Billing</h2>

            <p>
                Waffli subscriptions are processed through the Apple App Store, Google Play, or another authorised platform.
            </p>

            <p>We do not receive or store your full payment card details.</p>

            <p>To cancel a subscription:</p>

            <ul>
                <li><strong>Apple App Store:</strong> Manage your subscription in your Apple ID subscription settings.</li>
                <li><strong>Google Play:</strong> Manage your subscription in your Google Play subscriptions settings.</li>
            </ul>

            <p>
                Deleting the Waffli app or deleting your Waffli account does not automatically cancel a subscription managed
                by Apple or Google.
            </p>

            <p>
                Refunds, billing issues, and subscription cancellations are handled by the platform where the subscription
                was purchased.
            </p>

            <h2>6. Privacy Requests</h2>

            <p>
                For privacy requests, including access, correction, deletion, or data export requests, contact us at:
            </p>

            <p>
                <strong><a href="mailto:sinatechnologies@outlook.com">sinatechnologies@outlook.com</a></strong>
            </p>

            <p>We may need to verify your identity before processing privacy or account-related requests.</p>

            <p>
                You can read more about how Waffli handles personal data in our Privacy Policy:<br />
                <a href="/privacy">View Privacy Policy</a>
            </p>

            <h2>7. Reporting Security Concerns</h2>

            <p>
                If you believe you have found a security issue, vulnerability, unauthorised access issue, or data protection
                concern, please contact us immediately:
            </p>

            <p>
                <strong>
                    <a href="mailto:sinatechnologies@outlook.com?subject=Waffli%20Security%20Concern">
                        sinatechnologies@outlook.com
                    </a>
                </strong>
            </p>

            <p>
                Please include enough detail for us to investigate, but do not publicly disclose the issue or access another
                person's data.
            </p>

            <h2>8. Useful Links</h2>

            <ul>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Use</a></li>
                <li><a href="/account-deletion">Account Deletion Policy</a></li>
            </ul>

            <h2>9. Contact Details</h2>

            <p>
                <strong>Sean Bezuidenhout</strong><br />
                Trading as Waffli<br />
                United Kingdom
            </p>

            <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:sinatechnologies@outlook.com">sinatechnologies@outlook.com</a><br />
                <strong>ICO registration:</strong> CSN0537287
            </p>
        </LegalLayout>
    );
}

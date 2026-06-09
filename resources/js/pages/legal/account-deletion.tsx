import { LegalLayout } from '@/components/legal-layout';

export default function AccountDeletion() {
    return (
        <LegalLayout
            title="Account Deletion"
            lastUpdated="30 April 2026"
            description="How to delete your Waffli account and what happens to your data."
        >
            <div className="lg-intro">
                <p>
                    This page explains how you can delete your <strong>Waffli</strong> account and what happens to your data
                    when you do. Waffli is currently developed and operated by <strong>Sean Bezuidenhout</strong>, trading
                    as <strong>Waffli</strong>.
                </p>
            </div>

            <div className="notice">
                <p>
                    You can delete your account directly inside the Waffli app, or you can contact us by email if you cannot
                    access your account.
                </p>
            </div>

            <h2>1. Delete Your Account in the App</h2>

            <p>To delete your Waffli account from inside the app:</p>

            <ol>
                <li>Open the <strong>Waffli</strong> app.</li>
                <li>Go to <strong>Profile</strong>.</li>
                <li>Select <strong>Delete Account</strong>.</li>
                <li>Read the confirmation message carefully.</li>
                <li>Confirm that you want to permanently delete your account.</li>
            </ol>

            <div className="danger">
                <p>Account deletion is permanent. Once your account is deleted, your deleted data cannot be restored.</p>
            </div>

            <h2>2. Request Account Deletion by Email</h2>

            <p>
                If you cannot access the app or are unable to delete your account from within Waffli, you can request account
                deletion by email.
            </p>

            <p>
                Email us at:<br />
                <strong><a href="mailto:sinatechnologies@outlook.com">sinatechnologies@outlook.com</a></strong>
            </p>

            <p>Please include:</p>

            <ul>
                <li>The email address associated with your Waffli account</li>
                <li>A clear request to delete your Waffli account</li>
            </ul>

            <p>
                We may need to verify your identity before processing your request. This helps protect your account from
                unauthorised deletion requests.
            </p>

            <div className="btn-row">
                <a
                    className="btn-pill danger-pill"
                    href="mailto:sinatechnologies@outlook.com?subject=Waffli%20Account%20Deletion%20Request"
                >
                    Request deletion by email
                </a>
                <a className="btn-pill" href="/privacy">View Privacy Policy</a>
            </div>

            <h2>3. What Data Is Deleted</h2>

            <p>
                When your Waffli account is deleted, we will delete or anonymise personal data associated with your account,
                including:
            </p>

            <ul>
                <li>Account profile data</li>
                <li>Email address and display name</li>
                <li>Tasks</li>
                <li>Task notes</li>
                <li>Scheduled task dates and times</li>
                <li>Recurring task definitions</li>
                <li>Mood entries</li>
                <li>Productivity statistics</li>
                <li>Distraction counts</li>
                <li>App preferences</li>
                <li>Reminder settings</li>
                <li>Subscription entitlement information stored by Waffli</li>
            </ul>

            <h2>4. What May Be Retained Temporarily</h2>

            <p>
                Some limited information may be retained for a short period where necessary for legitimate business, security,
                legal, or operational reasons.
            </p>

            <p>This may include:</p>

            <ul>
                <li>Security logs</li>
                <li>Backup records awaiting normal expiry</li>
                <li>Fraud prevention or abuse prevention records</li>
                <li>Records required for legal, tax, accounting, or dispute resolution purposes</li>
                <li>Payment or subscription records held by Apple, Google, RevenueCat, or other payment-related providers</li>
            </ul>

            <p>We do not keep this information for longer than necessary.</p>

            <h2>5. Subscription Cancellation</h2>

            <p>
                Deleting your Waffli account does not automatically cancel an active subscription managed by Apple or Google.
            </p>

            <p>If you have an active subscription, you should cancel it through the platform where you purchased it:</p>

            <ul>
                <li><strong>Apple App Store:</strong> Manage subscriptions in your Apple ID settings.</li>
                <li><strong>Google Play:</strong> Manage subscriptions in your Google Play account settings.</li>
            </ul>

            <p>
                Refunds, cancellations, and billing changes are handled by Apple, Google, or the relevant app store/payment
                provider according to their own policies.
            </p>

            <h2>6. Deletion Timeframe</h2>

            <p>In-app account deletion is normally processed immediately or shortly after confirmation.</p>

            <p>
                Email deletion requests are normally reviewed and processed within <strong>30 days</strong>, subject to
                identity verification and any legal or security requirements.
            </p>

            <p>
                Backup copies and system logs may take additional time to expire from our systems and from the systems of our
                service providers.
            </p>

            <h2>7. Third-Party Services</h2>

            <p>
                Waffli uses third-party service providers to operate the app, including providers for authentication, database
                hosting, subscriptions, app distribution, and transcription.
            </p>

            <p>
                When your account is deleted, we will delete or anonymise the personal data we control. Some information may
                remain with third-party providers where they act as independent controllers, such as Apple or Google for app
                store purchases, or where retention is required by law or platform policy.
            </p>

            <h2>8. Contact Us</h2>

            <p>For account deletion requests, privacy questions, or data protection requests, contact:</p>

            <p>
                <strong>Sean Bezuidenhout</strong><br />
                Trading as Waffli<br />
                United Kingdom
            </p>

            <p>
                <strong>Email:</strong> <a href="mailto:sinatechnologies@outlook.com">sinatechnologies@outlook.com</a><br />
                <strong>ICO registration:</strong> CSN0537287
            </p>
        </LegalLayout>
    );
}

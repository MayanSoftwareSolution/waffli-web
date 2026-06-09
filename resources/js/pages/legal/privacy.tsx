import { LegalLayout } from '@/components/legal-layout';

export default function Privacy() {
    return (
        <LegalLayout
            title="Privacy Policy"
            lastUpdated="30 April 2026"
            description="Learn how Waffli collects, uses, and protects your personal data."
        >
            <div className="lg-intro">
                <p>
                    This Privacy Policy explains how <strong>Sean Bezuidenhout</strong>, trading as <strong>Waffli</strong>,
                    collects, uses, stores, and protects personal information when you use <strong>Waffli</strong>, our task and
                    productivity app. We do <strong>not</strong> sell your personal data. We do <strong>not</strong> use your
                    personal data for advertising.
                </p>
            </div>

            <h2>1. Who We Are</h2>

            <p>Waffli is currently developed and operated by <strong>Sean Bezuidenhout</strong>, trading as <strong>Waffli</strong>.</p>

            <p>
                <strong>Data Controller:</strong><br />
                Sean Bezuidenhout<br />
                Trading as Waffli<br />
                United Kingdom
            </p>

            <p>
                <strong>Email:</strong> <a href="mailto:sinatechnologies@outlook.com">sinatechnologies@outlook.com</a><br />
                <strong>ICO registration:</strong> CSN0537287
            </p>

            <div className="notice">
                <p>Company details will be updated once company registration is complete.</p>
            </div>

            <p>For the purposes of UK data protection law, <strong>Sean Bezuidenhout</strong> is the data controller for the personal data processed through Waffli.</p>

            <h2>2. Information We Collect</h2>

            <p>We only collect information needed to provide, secure, improve, and support Waffli.</p>

            <h3>2.1 Account Information</h3>

            <p>When you create an account, we collect:</p>

            <ul>
                <li>Email address</li>
                <li>Display name</li>
                <li>Authentication identifiers created by our login provider</li>
            </ul>

            <p>We use this information to create your account, identify you when you sign in, sync your data, provide support, and secure access to your account.</p>

            <h3>2.2 Task and Productivity Data</h3>

            <p>When you use Waffli, you may create or generate productivity-related content, including:</p>

            <ul>
                <li>Task titles</li>
                <li>Task notes</li>
                <li>Scheduled dates and times</li>
                <li>Categories or labels</li>
                <li>Task complexity</li>
                <li>Estimated duration</li>
                <li>Actual completion time</li>
                <li>Distraction counts</li>
                <li>Completion status</li>
                <li>Recurring task schedules</li>
                <li>Productivity statistics, such as streaks, completed task totals, and logged distractions</li>
            </ul>

            <p>We use this information to provide Waffli's core task management and productivity features.</p>

            <h3>2.3 Mood Entries</h3>

            <p>Waffli may allow you to record optional mood entries.</p>

            <p>
                Mood entries are entirely optional. Because mood information may reveal information about your wellbeing,
                we treat this data with extra care. We use mood entries only to display your own history, trends, or
                productivity context inside the app.
            </p>

            <p>
                Waffli is not a medical, therapy, diagnosis, or mental health service. Mood tracking is provided only as a
                personal productivity feature.
            </p>

            <p>You can choose not to use mood tracking.</p>

            <h3>2.4 Voice and Audio: Brain Dump Feature</h3>

            <p>
                When you use the <strong>Brain Dump</strong> feature, your device microphone records an audio clip so that your
                spoken input can be converted into text.
            </p>

            <p>
                The audio clip is transmitted over an encrypted connection to a secure server-side function, which forwards it
                to <strong>Groq</strong> for transcription. The resulting text is returned to Waffli so you can review it
                before any tasks are created.
            </p>

            <p>
                Waffli does <strong>not</strong> permanently store your audio recordings. Audio is used only for transcription
                and is not used by Waffli for advertising.
            </p>

            <p>
                Groq may process the audio and transcription data according to its own privacy, data processing, and retention
                terms. Where available and enabled, we use provider settings designed to reduce or prevent retention of
                transcription data.
            </p>

            <h3>2.5 App Preferences</h3>

            <p>We may store your app preferences so they can sync across devices or reinstalls, including:</p>

            <ul>
                <li>Accent colour</li>
                <li>Haptic feedback preference</li>
                <li>Sound preference</li>
                <li>Morning reminder setting</li>
                <li>Evening reminder setting</li>
                <li>Biometric lock preference</li>
            </ul>

            <h3>2.6 Subscription and Purchase Information</h3>

            <p>Subscription management is handled by <strong>RevenueCat</strong>.</p>

            <p>We may receive:</p>

            <ul>
                <li>Your subscription status, such as Free, Pro, or Unlimited</li>
                <li>An app-specific or anonymised customer identifier</li>
                <li>Purchase entitlement status</li>
                <li>Subscription renewal or expiry information</li>
            </ul>

            <p>
                We do <strong>not</strong> receive or store your full payment card details. Payments are processed by Apple,
                Google, or the relevant app store/payment provider.
            </p>

            <h3>2.7 Local Device Storage</h3>

            <p>Some information may be stored locally on your device, including:</p>

            <ul>
                <li>Monthly Brain Dump usage counters</li>
                <li>Temporary app state</li>
                <li>Local settings required for app functionality</li>
            </ul>

            <p>
                Where local-only information is used, it remains on your device unless the app specifically syncs that
                information to your account.
            </p>

            <h3>2.8 Biometric Authentication</h3>

            <p>
                If you enable biometric lock, such as Face ID, Touch ID, or Android biometric authentication, authentication
                is handled by your device's operating system.
            </p>

            <p>
                Waffli does <strong>not</strong> receive, access, collect, or store your biometric data. We only store whether
                biometric lock is enabled as an app preference.
            </p>

            <h2>3. How We Use Your Information</h2>

            <p>We use your information to:</p>

            <ul>
                <li>Provide the Waffli app and its features</li>
                <li>Create and manage your account</li>
                <li>Sync your tasks, preferences, and subscription status</li>
                <li>Process Brain Dump transcription requests</li>
                <li>Display your productivity statistics</li>
                <li>Provide reminders and app settings</li>
                <li>Prevent misuse and protect the security of the app</li>
                <li>Respond to support requests</li>
                <li>Comply with legal obligations</li>
            </ul>

            <p>We do <strong>not</strong> use your personal data for third-party advertising.</p>

            <h2>4. Lawful Basis for Processing</h2>

            <p>Where UK GDPR or GDPR applies, we rely on the following lawful bases:</p>

            <table>
                <thead>
                    <tr>
                        <th>Purpose</th>
                        <th>Lawful basis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Creating and managing your account</td>
                        <td>Performance of a contract</td>
                    </tr>
                    <tr>
                        <td>Providing task management features</td>
                        <td>Performance of a contract</td>
                    </tr>
                    <tr>
                        <td>Syncing tasks, preferences, and productivity data</td>
                        <td>Performance of a contract</td>
                    </tr>
                    <tr>
                        <td>Processing Brain Dump audio for transcription</td>
                        <td>Performance of a contract and, where required, consent</td>
                    </tr>
                    <tr>
                        <td>Processing optional mood entries</td>
                        <td>Explicit consent, where required</td>
                    </tr>
                    <tr>
                        <td>Managing subscriptions</td>
                        <td>Performance of a contract</td>
                    </tr>
                    <tr>
                        <td>Security, fraud prevention, and service protection</td>
                        <td>Legitimate interests</td>
                    </tr>
                    <tr>
                        <td>Responding to support requests</td>
                        <td>Legitimate interests or performance of a contract</td>
                    </tr>
                    <tr>
                        <td>Legal or regulatory compliance</td>
                        <td>Legal obligation</td>
                    </tr>
                </tbody>
            </table>

            <p>
                You can withdraw consent for optional features by not using those features or by deleting the relevant data
                where the app provides that option.
            </p>

            <p>Withdrawing consent does not affect processing that happened before consent was withdrawn.</p>

            <h2>5. How Your Data Is Shared</h2>

            <p>We do not sell your personal data.</p>

            <p>
                We share personal data only with service providers that help us operate Waffli. These providers process data on
                our behalf or provide services necessary for the app to function.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Provider</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Supabase</td>
                        <td>Authentication, database hosting, server-side functions, and secure data storage</td>
                    </tr>
                    <tr>
                        <td>RevenueCat</td>
                        <td>Subscription and entitlement management</td>
                    </tr>
                    <tr>
                        <td>Groq</td>
                        <td>AI transcription for Brain Dump audio</td>
                    </tr>
                    <tr>
                        <td>Apple</td>
                        <td>App distribution, in-app purchases, payment processing, crash/reporting services where applicable</td>
                    </tr>
                    <tr>
                        <td>Google</td>
                        <td>App distribution, in-app purchases, payment processing, crash/reporting services where applicable</td>
                    </tr>
                </tbody>
            </table>

            <p>These providers may process data according to their own privacy policies and data processing terms.</p>

            <p>
                We may also disclose information if required by law, regulation, court order, or to protect the rights, safety,
                and security of Waffli, our users, or others.
            </p>

            <h2>6. International Transfers</h2>

            <p>
                Waffli is operated from the United Kingdom. Some of our service providers may process personal data outside
                the UK or the European Economic Area.
            </p>

            <p>
                Where personal data is transferred internationally, we rely on appropriate safeguards where required, such as
                adequacy regulations, standard contractual clauses, international data transfer agreements, or equivalent data
                protection mechanisms.
            </p>

            <h2>7. Data Storage and Security</h2>

            <p>Waffli uses technical and organisational measures designed to protect your personal data.</p>

            <p>These include:</p>

            <ul>
                <li>Encrypted transmission using HTTPS/TLS</li>
                <li>Authentication controls</li>
                <li>Database access controls</li>
                <li>Row-level security rules where supported</li>
                <li>Server-side access restrictions</li>
                <li>Limited provider access based on operational need</li>
            </ul>

            <p>
                No method of transmission or storage is completely secure, but we take reasonable steps to protect your
                information from unauthorised access, loss, misuse, alteration, or disclosure.
            </p>

            <h2>8. Data Retention</h2>

            <p>We keep your personal data for as long as your account remains active or as long as needed to provide Waffli.</p>

            <p>
                If you delete your account through <strong>Profile &rarr; Delete Account</strong>, we will delete or anonymise
                personal data associated with your account, including:
            </p>

            <ul>
                <li>Account profile data</li>
                <li>Tasks</li>
                <li>Recurring task definitions</li>
                <li>Mood entries</li>
                <li>Productivity statistics</li>
                <li>App preferences</li>
            </ul>

            <p>
                Some limited information may be retained for a short period where necessary for security, backup recovery,
                legal compliance, payment records, fraud prevention, or dispute resolution.
            </p>

            <p>Backups and logs may take additional time to expire from our systems and service providers' systems.</p>

            <h2>9. Your Rights</h2>

            <p>Depending on where you live, you may have rights over your personal data.</p>

            <p>These may include the right to:</p>

            <ul>
                <li>Access the personal data we hold about you</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Delete your account and associated personal data</li>
                <li>Request a copy of your data</li>
                <li>Object to certain processing</li>
                <li>Restrict certain processing</li>
                <li>Withdraw consent where processing is based on consent</li>
                <li>Complain to a data protection authority</li>
            </ul>

            <p>UK users may contact the <strong>Information Commissioner's Office</strong>, the UK data protection regulator.</p>

            <p>EU users may contact their local supervisory authority.</p>

            <p>To exercise your rights, contact us at:</p>

            <p><strong><a href="mailto:sinatechnologies@outlook.com">sinatechnologies@outlook.com</a></strong></p>

            <p>We may need to verify your identity before responding to certain requests.</p>

            <h2>10. California Privacy Rights</h2>

            <p>
                If you are a California resident, you may have rights under the California Consumer Privacy Act, as amended by
                the California Privacy Rights Act.
            </p>

            <p>These may include the right to:</p>

            <ul>
                <li>Know what personal information we collect</li>
                <li>Know how we use and disclose personal information</li>
                <li>Request deletion of personal information</li>
                <li>Request correction of inaccurate personal information</li>
                <li>Request a copy of personal information</li>
                <li>Opt out of sale or sharing of personal information</li>
                <li>Not be discriminated against for exercising your privacy rights</li>
            </ul>

            <p>Waffli does <strong>not</strong> sell personal information.</p>

            <p>Waffli does <strong>not</strong> share personal information for cross-context behavioural advertising.</p>

            <h2>11. Children's Privacy</h2>

            <p>Waffli is not directed at children.</p>

            <p>
                You must not use Waffli if you are under 13 years old, or under the minimum age required by the laws of your
                country to use online services without parental consent.
            </p>

            <p>We do not knowingly collect personal data from children below the applicable minimum age.</p>

            <p>
                If you believe a child has provided personal data to Waffli, contact us at{' '}
                <strong><a href="mailto:sinatechnologies@outlook.com">sinatechnologies@outlook.com</a></strong> and we will
                take appropriate steps to delete it.
            </p>

            <h2>12. App Store and Platform Providers</h2>

            <p>
                If you download Waffli through the Apple App Store or Google Play, Apple or Google may collect information
                under their own privacy policies.
            </p>

            <p>
                In-app purchases and subscriptions are processed by the relevant app store or payment provider. We do not
                control the personal data collected by Apple or Google through their platforms.
            </p>

            <h2>13. Changes to This Privacy Policy</h2>

            <p>We may update this Privacy Policy from time to time.</p>

            <p>
                If we make material changes, we will notify you in the app, by email, or by another appropriate method before
                the changes take effect where required by law.
            </p>

            <p>The "Last updated" date at the top of this policy shows when it was last revised.</p>

            <h2>14. Contact Us</h2>

            <p>For questions, requests, or complaints about this Privacy Policy or how Waffli handles personal data, contact:</p>

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

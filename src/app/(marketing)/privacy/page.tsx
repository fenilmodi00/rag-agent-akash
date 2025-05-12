import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
import Link from "next/link";
import ParticlesBackground from "@/components/particles-background";

export const metadata: Metadata = {
  title: "AkashChat - Privacy Policy",
};

export default function Page() {
  const privacy = `
# Privacy Policy
**Last updated: January 2024**

## 1. Introduction
This Privacy Policy explains how AkashChat collects, uses, and protects your personal information. We are committed to ensuring your privacy and protecting any information you share with us.

## 2. Information We Collect
We collect the following types of information:

* Technical information such as browser type and device information
* Usage data to improve our service
* Cookies and similar tracking technologies

## 3. How We Use Your Information
We use your information to:

* Provide and maintain our chat service
* Improve and personalize your experience
* Analyze usage patterns and optimize performance
* Ensure the security and reliability of our service

## 4. Data Storage and Security
We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.

## 5. Data Sharing and Disclosure
We do not sell your personal information. We may share your information in the following circumstances:

* When required by law or legal process
* To protect our rights, privacy, safety, or property
* With service providers who assist in operating our service

## 6. Your Rights and Choices
You have the right to:

* Access your personal information
* Request correction of inaccurate data
* Request deletion of your data
* Opt-out of certain data collection practices

## 7. Cookies and Tracking
We use cookies and similar tracking technologies to enhance your experience and collect usage data. You can control cookie settings through your browser preferences.

## 8. Children's Privacy
Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.

## 9. Changes to Privacy Policy
We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page.

## 10. Contact Us
If you have questions about this Privacy Policy, please contact us through the appropriate channels provided on akash.network.
  `;

  return (
    <>
      {/* Particles Background - Using fixed position */}
      <div className="fixed inset-0 z-0">
        <ParticlesBackground 
          title=""
          subtitle=""
          particleCount={1500}
          noiseIntensity={0.004}
          particleSize={{ min: 0.5, max: 2.5 }}
          className="pointer-events-none"
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen overflow-auto py-8">
        <div
          className="prose prose-zinc dark:prose-invert mx-auto p-6 lg:max-w-2xl mt-8 mb-16 bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-lg"
          suppressHydrationWarning
        >
          <div className="mb-6">
            <Link href="/" className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Chat
            </Link>
          </div>
          <Markdown>{privacy}</Markdown>
        </div>
      </div>
    </>
  );
}

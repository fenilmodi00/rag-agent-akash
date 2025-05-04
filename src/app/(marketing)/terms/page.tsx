import Markdown from "markdown-to-jsx";
import { Metadata } from "next";
import ParticlesBackground from "@/components/particles-background";

export const metadata: Metadata = {
  title: "AkashChat - Terms of Use",
};

export default function Page() {
  const termsOfService = `
# Terms of Use
**Last updated: January 2024**

## 1. Our Commitment
At AkashChat, we strive to provide AI tools that can be used safely and responsibly while maximizing your control over how you use them. By using our services, you agree to adhere to our policies and guidelines outlined in these terms.

## 2. Service Evolution
We believe that learning from real-world use is crucial for creating and releasing increasingly safe AI systems. As we cannot predict all beneficial or abusive uses of our technology, we actively monitor for new trends and adapt our policies based on what we learn over time.

## 3. Universal Policies
To maximize innovation while ensuring safety, you should have the flexibility to use AkashChat as you see fit, provided you comply with the law and don't cause harm. The following rules apply:

* Comply with all applicable laws and regulations
* Respect the privacy and rights of others
* Don't use our service to harm yourself or others
* Don't attempt to circumvent our safety measures or content filters

## 4. Additional Policies
Since we provide access to multiple AI models, you must follow the usage policies for each:

* Llama Materials Acceptable Use Policy
* DeepSeek V3 License and Usage Policy

These policies are incorporated by reference into this Agreement and are required to be followed when using our service.

## 5. Prohibited Activities
The following activities are strictly prohibited:

* Generating content to harm, harass, or mislead others
* Creating or distributing malicious code or content
* Engaging in unauthorized surveillance or data collection
* Using the service for illegal activities or promoting harmful behavior

## 6. Content Guidelines
Users are responsible for the content they generate and share using AkashChat. Content must not promote hate speech, discrimination, violence, or illegal activities.

## 7. Safety and Monitoring
We monitor service usage and may take action against users that violate our policies.

## 8. Account Actions
Violations of these terms may result in actions against you, including warnings, temporary restrictions, or permanent suspension. We reserve the right to take appropriate action to maintain the safety and integrity of our service.

## 9. Changes to Terms
We may update these terms as our service evolves and we learn from user interactions. Continued use of AkashChat after changes constitutes acceptance of the updated terms.

## 10. Contact Information
For questions about these Terms of Use or to report violations, please contact us through the appropriate channels provided on akash.network.
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
            <a href="/" className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Chat
            </a>
          </div>
          <Markdown>{termsOfService}</Markdown>
        </div>
      </div>
    </>
  );
}

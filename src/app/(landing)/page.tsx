import { Suspense } from "react";

import { Footer } from "@/components/footer";
import { LandingTextarea } from "@/components/landing-textarea";
import ParticlesBackground from "@/components/particles-background";

export default function Page() {
  return (
    <>
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground 
          title=""
          subtitle=""
          particleCount={1500}
          noiseIntensity={0.004}
          particleSize={{ min: 0.5, max: 2.5 }}
          className="pointer-events-none"
        />
      </div>
      
      <main className="flex-1 size-full overflow-hidden flex flex-col justify-center items-center relative z-10">
        <div className="flex-1 size-full overflow-hidden flex flex-col justify-center items-center gap-8 px-4 md:px-0">
          <h1 className="text-3xl xl:text-4xl font-semibold text-center tracking-tighter text-black dark:text-white">
            Ask anything about Akash.Network
          </h1>
          <div className="max-w-xl mx-auto w-full">
            <Suspense fallback={null}>
              <LandingTextarea />
            </Suspense>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-500 text-center">
           Powered by <a href="https://chatapi.akash.network/documentation" className="text-[#FF414C]">Akash Network's Chat API</a>
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
}

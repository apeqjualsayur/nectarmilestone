import {
  Approach,
  Benefits,
  CtaBand,
  Footer,
  Header,
  Hero,
  Location,
  OurPromise,
  ProgrammesGrid,
  Team,
  TrustStrip,
  WhoWeHelp,
} from "@/components";

// Full section order per _specs/landing-page.md §3.
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Benefits />
        <Approach />
        <ProgrammesGrid />
        <Team />
        <WhoWeHelp />
        <OurPromise />
        <Location />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

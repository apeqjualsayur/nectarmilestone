import type { StaticImageData } from "next/image";
import eipImage from "@/assets/service_eip.png";
import speechImage from "@/assets/service_speech.png";
import occupationalImage from "@/assets/service_occupational.png";
import schoolReadinessImage from "@/assets/service_schoolreadiness.png";
import autismAssessmentImage from "@/assets/service_autismassessment.png";
import fardhuAinImage from "@/assets/service_fardhuain.png";

export type Programme = {
  slug: string;
  name: string;
  /** Draft one-liner — refine in copy pass. See _specs/landing-page.md §3.7. */
  blurb: string;
  image: StaticImageData;
  imageAlt: string;
};

// Six public programme names (physiotherapy dropped — no service image, not
// currently offered). Internal package names (First Bloom, Honeycomb Circle,
// Golden Nectar, First Flight, Hive Family Workshops) must never appear in
// public content — see _specs/landing-page.md §2 guardrails.
export const PROGRAMMES: Programme[] = [
  {
    slug: "eip",
    name: "Early Intervention Programme (EIP)",
    blurb: "Early, structured support for developmental milestones.",
    image: eipImage,
    imageAlt: "A therapist guiding a small group of children through a flashcard and shape-sorting activity",
  },
  {
    slug: "speech-therapy",
    name: "Speech Therapy",
    blurb: "Building communication, language, and confidence.",
    image: speechImage,
    imageAlt: "A speech therapist laughing with a child during a mirror and word-card exercise",
  },
  {
    slug: "occupational-therapy",
    name: "Occupational Therapy",
    blurb: "Everyday skills and independence.",
    image: occupationalImage,
    imageAlt: "A therapist encouraging a child through a sensory play tunnel",
  },
  {
    slug: "school-readiness",
    name: "School Readiness",
    blurb: "Preparing children to thrive in the classroom.",
    image: schoolReadinessImage,
    imageAlt: "A teacher at a whiteboard with young students seated at desks in a classroom",
  },
  {
    slug: "autism-assessment",
    name: "Autism Assessment",
    blurb: "Clear, caring evaluation and next steps.",
    image: autismAssessmentImage,
    imageAlt: "A therapist observing a child during a play-based assessment activity",
  },
  {
    slug: "fardhu-ain",
    name: "Fardhu Ain Sessions",
    blurb: "Faith learning adapted for every child.",
    image: fardhuAinImage,
    imageAlt: "A teacher reading an illustrated storybook together with a young boy",
  },
];

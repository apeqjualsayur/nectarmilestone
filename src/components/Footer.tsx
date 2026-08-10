import Link from "next/link";
import { CONTACT, EMAIL_HREF, MAPS_SEARCH_URL, TEL_HREF } from "@/content/contact";
import { PROGRAMMES } from "@/content/programmes";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

const QUICK_LINKS = [
  { label: "About", href: "#approach" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#location" },
];

const CONTACT_DETAILS = [
  { label: "Address", value: CONTACT.address, href: MAPS_SEARCH_URL },
  { label: "Hours", value: CONTACT.hours, href: null },
  { label: "Phone & WhatsApp", value: CONTACT.phoneDisplay, href: TEL_HREF },
  { label: "Email", value: CONTACT.email, href: EMAIL_HREF },
];

// Plain ink ground (darker than dusty-olive) so the footer contrasts
// clearly against the CTA band's honey-gold card above it — see
// _specs/landing-page.md §3.13.
export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="py-16">
        <Reveal className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label="Nectar Milestone home">
              <Logo variant="white" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs font-body text-sm text-white/75">
              Autism & special-needs early intervention in Setiawangsa —
              empowering parents, caregivers, and therapists, together.
            </p>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Programmes
            </h3>
            <ul className="mt-4 space-y-2">
              {PROGRAMMES.map((programme) => (
                <li key={programme.slug}>
                  <a
                    href={`#programme-${programme.slug}`}
                    className="font-body text-sm text-white/85 transition-colors hover:text-white"
                  >
                    {programme.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Contact
            </h3>
            <dl className="mt-4 space-y-3">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label} className="font-body text-sm">
                  <dt className="text-xs text-white/50">{detail.label}</dt>
                  <dd className="text-white/85">
                    {detail.href ? (
                      <a href={detail.href} className="transition-colors hover:text-white">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body">
            &copy; {new Date().getFullYear()} Nectar Milestone. All rights reserved.
          </p>
          <p className="font-body">Part of Go Health Solutions</p>
        </div>
      </Container>
    </footer>
  );
}

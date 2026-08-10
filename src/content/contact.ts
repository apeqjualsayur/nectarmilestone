// Single source of truth for real contact details — keep in sync with
// _specs/landing-page.md's placeholder register (address/phone/email are now
// confirmed; opening hours remain a placeholder until confirmed).
export const CONTACT = {
  address: "24, Jalan Setiawangsa 17, Taman Setiawangsa, 54200 Kuala Lumpur",
  hours: "Mon – Fri, 9am – 6pm",
  phoneDisplay: "+60 12-891 8595",
  phoneE164: "+60128918595",
  email: "nectarmilestone@gmail.com",
} as const;

export const TEL_HREF = `tel:${CONTACT.phoneE164}`;

export const WHATSAPP_URL = `https://wa.me/${CONTACT.phoneE164.replace("+", "")}?text=${encodeURIComponent(
  "Hi Nectar Milestone, I'd like to book a consultation.",
)}`;

export const EMAIL_HREF = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
  "Enquiry from Nectar Milestone Website",
)}`;

export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CONTACT.address,
)}`;

export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT.address,
)}&output=embed`;

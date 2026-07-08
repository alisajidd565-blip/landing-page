import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import {
  Bath,
  BedDouble,
  Building2,
  CheckCircle2,
  Globe2,
  Home,
  KeyRound,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  Send,
  UserRound,
  X,
} from "lucide-react";

import agentPhoto from "../../Assets to use/professional headshot of agent.png";
import logo from "../../Assets to use/Logo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type PropertyListing = {
  id: string;
  status: "For Sale" | "For Rent";
  name: string;
  kind: string;
  city: string;
  location: string;
  price: string;
  size: string;
  beds: string;
  baths: string;
  image: string;
  short: string;
};

const heroImage = "/imec-hero-header.webp";

const business = {
  name: "IMEC Real Estate",
  tagline: "Constructing Trust.",
  phoneDisplay: "+92 333 5586531",
  phoneRaw: "923335586531",
  email: "info@imecrealestate.com",
  website: "www.imecrealestate.com",
  address: "Plot No 69, E Block, B-17 Islamabad, Pakistan 44000",
  facebook: "https://www.facebook.com/imecrealestate",
  instagram: "https://www.instagram.com/imecrealestate",
  youtube: "https://www.youtube.com/@imecrealestateofficial",
  x: "https://x.com/Imecrealestate",
};

const agent = {
  name: "Zain Mirza",
  title: "Senior Property Consultant",
  phone: "+92 300 8872210",
  email: "zain.mirza@elitehomespk.com",
  experience: "7 years in Pakistani real estate",
  bio: "Zain helps buyers, tenants, and investors compare suitable properties, arrange visits, and move through the inquiry process with clear communication.",
  photo: agentPhoto,
};

const featuredProperties: PropertyListing[] = [
  {
    id: "horizon-crest",
    status: "For Sale",
    name: "Horizon Crest Tower",
    kind: "High-rise apartment",
    city: "Karachi",
    location: "Clifton Block 5, Karachi",
    price: "PKR 2.85 Crore",
    size: "1,450 Sq. Ft.",
    beds: "3",
    baths: "2",
    image: "/property-horizon-crest.webp",
    short:
      "Modern apartment with city views, secure parking, and quick access to Clifton amenities.",
  },
  {
    id: "al-faisal-classic",
    status: "For Sale",
    name: "Al-Faisal Classic Residency",
    kind: "Mid-rise apartment",
    city: "Karachi",
    location: "PECHS Block 2, Karachi",
    price: "PKR 1.45 Crore",
    size: "900 Sq. Ft.",
    beds: "2",
    baths: "2",
    image: "/property-al-faisal.webp",
    short: "Practical family apartment in a connected area near markets, schools, and transport.",
  },
  {
    id: "green-canopy",
    status: "For Rent",
    name: "Green Canopy Cottage",
    kind: "Single-storey house",
    city: "Islamabad",
    location: "Sector F-6, Islamabad",
    price: "PKR 110,000 / Month",
    size: "5 Marla",
    beds: "2",
    baths: "1",
    image: "/property-green-canopy.webp",
    short:
      "Quiet cottage-style rental near Margalla trails with a private yard and active utilities.",
  },
  {
    id: "noor-ul-hayat",
    status: "For Rent",
    name: "Noor-ul-Hayat Grand Plaza",
    kind: "Commercial / mixed use",
    city: "Islamabad",
    location: "Blue Area, Islamabad",
    price: "PKR 1,400,000 / Month",
    size: "8,000 Sq. Ft.",
    beds: "Office",
    baths: "6",
    image: "/property-noor-plaza.webp",
    short:
      "High-visibility commercial space suited for offices, showrooms, or corporate operations.",
  },
  {
    id: "bosphorus-view",
    status: "For Sale",
    name: "Bosphorus View Mansion",
    kind: "Villa",
    city: "Lahore",
    location: "DHA Phase 6, Lahore",
    price: "PKR 12.75 Crore",
    size: "2 Kanal",
    beds: "6",
    baths: "5",
    image: "/property-bosphorus.webp",
    short:
      "Spacious DHA villa with multiple family areas, rooftop space, and landscaped outdoor areas.",
  },
  {
    id: "rawalpindi-green",
    status: "For Rent",
    name: "Rawalpindi Green Enclave",
    kind: "Gated apartment",
    city: "Rawalpindi",
    location: "Chaklala Scheme 3, Rawalpindi",
    price: "PKR 38,000 / Month",
    size: "750 Sq. Ft.",
    beds: "2",
    baths: "2",
    image: "/property-rawalpindi-green.webp",
    short:
      "Affordable apartment in a gated setting with parks, community facilities, and daily amenities.",
  },
];

const services = [
  {
    icon: Home,
    title: "Property Sales",
    copy: "Basic buying support for homes, apartments, villas, and commercial properties.",
  },
  {
    icon: KeyRound,
    title: "Rental Inquiries",
    copy: "Rental options with clear details, direct contact, and quick viewing coordination.",
  },
  {
    icon: Building2,
    title: "Featured Showcase",
    copy: "A focused set of highlighted properties with images, prices, locations, and core details.",
  },
  {
    icon: MapPinned,
    title: "Location Guidance",
    copy: "Simple area guidance for Islamabad, Rawalpindi, Lahore, Karachi, and nearby corridors.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Leads",
    copy: "Direct WhatsApp actions so customers can ask questions without extra steps.",
  },
  {
    icon: Globe2,
    title: "Domain & Hosting Help",
    copy: "Assistance planning the website domain, hosting, and launch setup.",
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <PropertySection />
        <ServicesSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function whatsappUrl(message: string) {
  return `https://wa.me/${business.phoneRaw}?text=${encodeURIComponent(message)}`;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-xl"
          : "bg-black/20 text-white backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="IMEC Real Estate home">
          <img
            src={logo}
            alt="IMEC Real Estate logo"
            width={44}
            height={44}
            className="size-11 rounded-md border border-white/20 object-cover shadow-sm"
          />
          <span className="hidden text-sm font-semibold uppercase md:inline">{business.name}</span>
        </a>

        <nav
          className="hidden items-center gap-5 text-xs font-semibold uppercase lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.phoneDisplay.replaceAll(" ", "")}`}
            className="inline-flex items-center gap-2 rounded-md border border-current/30 px-3 py-2 text-xs font-semibold"
          >
            <Phone className="size-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a
            href={whatsappUrl("Hello IMEC Real Estate, I would like to discuss a property.")}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          className="inline-flex size-11 items-center justify-center rounded-md border border-current/30 lg:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-black/40 lg:hidden" onClick={() => setOpen(false)}>
          <nav
            className="ml-auto flex h-dvh w-[86vw] max-w-sm flex-col bg-white p-5 text-foreground shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="IMEC Real Estate logo"
                  width={40}
                  height={40}
                  className="size-10 rounded-md object-cover"
                />
                <span className="text-sm font-bold uppercase">{business.name}</span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex size-11 items-center justify-center rounded-md border border-border"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-sm font-semibold hover:bg-secondary"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-auto grid gap-3">
              <a
                href={`tel:${business.phoneDisplay.replaceAll(" ", "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold"
              >
                <Phone className="size-4" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
              <a
                href={whatsappUrl("Hello IMEC Real Estate, I would like to discuss a property.")}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[82dvh] items-end overflow-hidden bg-ink text-white"
    >
      <img
        src={heroImage}
        alt=""
        width={1800}
        height={1200}
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 size-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-32 md:px-6 lg:px-8">
        <div className="hero-copy max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase text-gold">{business.tagline}</p>
          <h1 className="max-w-full font-display text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            <span className="block sm:inline">IMEC Real</span>{" "}
            <span className="block sm:inline">Estate</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
            A clean real estate website for property introductions, featured listings, map context,
            WhatsApp contact, and customer inquiries.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl(
                "Hello IMEC Real Estate, I would like to ask about available properties.",
              )}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-whatsapp/90"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a
              href="#properties"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              <Building2 className="size-5" aria-hidden="true" />
              View Properties
            </a>
          </div>
        </div>

        <div className="hero-stats mt-10 grid max-w-2xl grid-cols-1 overflow-hidden rounded-lg border border-white/20 bg-white/10 backdrop-blur-md sm:grid-cols-3">
          {[
            ["6", "Featured"],
            ["4", "Cities"],
            ["Direct", "WhatsApp"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b border-white/20 p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <div className="text-2xl font-bold leading-tight">{value}</div>
              <div className="mt-1 text-xs uppercase text-white/70">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="section-eyebrow">About the business</p>
          <h2 className="section-title mt-3">
            A straightforward real estate presence for Pakistan.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            IMEC Real Estate helps customers browse selected properties, understand basic details,
            and contact the business quickly. The website stays simple: clear sections, useful
            property cards, map information, and an inquiry form.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              ["Office", business.address],
              ["Phone", business.phoneDisplay],
              ["Email", business.email],
              ["Website", business.website],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-border bg-secondary p-4">
                <p className="text-xs font-semibold uppercase text-muted-foreground">{label}</p>
                <p className="mt-2 text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[0.8fr_1fr]">
          <div className="overflow-hidden rounded-lg bg-ink">
            <img
              src={agent.photo}
              alt={agent.name}
              width={600}
              height={760}
              loading="lazy"
              decoding="async"
              className="h-full min-h-80 w-full object-cover"
            />
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <UserRound className="size-5 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase text-primary">Agent Introduction</p>
            </div>
            <h3 className="mt-5 text-3xl font-bold">{agent.name}</h3>
            <p className="mt-1 font-semibold text-muted-foreground">{agent.title}</p>
            <p className="mt-5 leading-7 text-muted-foreground">{agent.bio}</p>
            <div className="mt-6 grid gap-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {agent.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {agent.email}
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                {agent.experience}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PropertySection() {
  return (
    <section id="properties" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="section-eyebrow">Featured properties</p>
          <h2 className="section-title mt-3">Property showcase</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            A small selection of properties with images, price, location, and basic details.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertyCard({ property }: { property: PropertyListing }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={property.image}
          alt={property.name}
          width={900}
          height={675}
          loading="lazy"
          decoding="async"
          className="size-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-md bg-white px-3 py-1 text-xs font-bold uppercase text-foreground shadow-sm">
          {property.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase text-primary">{property.city}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug">{property.name}</h3>
        <p className="mt-1 text-sm font-semibold text-muted-foreground">{property.kind}</p>
        <p className="mt-3 flex gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          {property.location}
        </p>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {property.short}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-border py-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <BedDouble className="size-4 text-primary" aria-hidden="true" />
            {property.beds}
          </span>
          <span className="inline-flex items-center gap-1">
            <Bath className="size-4 text-primary" aria-hidden="true" />
            {property.baths}
          </span>
          <span className="inline-flex items-center gap-1">
            <Ruler className="size-4 text-primary" aria-hidden="true" />
            {property.size}
          </span>
        </div>

        <div className="mt-auto pt-5">
          <p className="text-xs uppercase text-muted-foreground">Price</p>
          <p className="text-lg font-bold text-primary">{property.price}</p>
          <a
            href={whatsappUrl(`Hello IMEC Real Estate, I want to ask about ${property.name}.`)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Services</p>
          <h2 className="section-title mt-3">Simple support for property customers.</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-lg border border-border bg-secondary p-6">
                <div className="flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{service.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="location" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <p className="section-eyebrow">Location</p>
          <h2 className="section-title mt-3">Visit the Islamabad office.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_0.38fr]">
          <div className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
            <iframe
              title="IMEC Real Estate office map"
              src="https://www.google.com/maps?q=Plot%20No%2069%2C%20E%20Block%2C%20B-17%2C%20Islamabad%2C%20Pakistan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full md:h-[500px]"
            />
          </div>

          <aside className="rounded-lg border border-border bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase text-primary">Office Location</p>
            <h3 className="mt-3 text-2xl font-bold">IMEC Islamabad</h3>
            <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
              <p className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                {business.address}
              </p>
              <p className="flex gap-3">
                <Phone className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                {business.phoneDisplay}
              </p>
              <p className="flex gap-3">
                <Mail className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
                {business.email}
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Plot%20No%2069%20E%20Block%20B17%20Islamabad"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink/90"
            >
              <MapPinned className="size-4" aria-hidden="true" />
              Open Map
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const body = [`Name: ${name}`, `Phone: ${phone}`, "", message].join("\n");

    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      "Website Property Inquiry",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mt-3">Send an inquiry or speak directly on WhatsApp.</h2>
          <p className="mt-5 leading-8 text-muted-foreground">
            Share your preferred area, budget, and property type. IMEC can reply with available
            options, viewing details, and next steps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={whatsappUrl(
                "Hello IMEC Real Estate, I want to ask about available properties.",
              )}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-5 py-3 font-semibold text-white"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp IMEC
            </a>
            <a
              href={`tel:${business.phoneDisplay.replaceAll(" ", "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-white px-5 py-3 font-semibold"
            >
              <Phone className="size-5 text-primary" aria-hidden="true" />
              Call {business.phoneDisplay}
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-border bg-secondary p-5 shadow-sm md:p-7"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Full Name
              <input
                name="name"
                required
                className="h-12 rounded-md border border-input bg-white px-4 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Phone Number
              <input
                name="phone"
                type="tel"
                required
                className="h-12 rounded-md border border-input bg-white px-4 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="+92..."
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold">
            Message
            <textarea
              name="message"
              required
              rows={6}
              className="rounded-md border border-input bg-white px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Tell us what kind of property you need."
            />
          </label>
          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <Send className="size-5" aria-hidden="true" />
            Send Inquiry
          </button>
          {sent ? (
            <p className="mt-4 rounded-md bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
              Your email app has been opened with the inquiry details.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const links = ["About", "Properties", "Services", "Location", "Contact"];

  return (
    <footer className="bg-footer text-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="IMEC Real Estate logo"
              width={48}
              height={48}
              className="size-12 rounded-md object-cover"
            />
            <div>
              <p className="font-bold uppercase">{business.name}</p>
              <p className="text-sm text-muted-foreground">{business.tagline}</p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            {[
              ["Facebook", business.facebook],
              ["Instagram", business.instagram],
              ["YouTube", business.youtube],
              ["X", business.x],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-white text-xs font-bold transition hover:border-primary hover:text-primary"
                aria-label={label}
              >
                {label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-primary">Quick Links</h3>
          <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
            {links.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-primary">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-primary">Contact Info</h3>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <p>{business.address}</p>
            <p>{business.phoneDisplay}</p>
            <p>{business.email}</p>
            <p>{business.website}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-sm text-muted-foreground">
        Copyright 2026 IMEC Real Estate. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Hello IMEC Real Estate, I would like to discuss a property.")}
      aria-label="Chat with IMEC Real Estate on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/20 transition hover:scale-105"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}

import { useEffect, useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Menu,
  X,
  Shield,
  Heart,
  Clock,
  Users,
  Award,
  Zap,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUp,
  Send,
} from "lucide-react"

import agentPhoto from "../../Assets to use/agent-headshot.png"
import logo from "../../Assets to use/Logo.jpg"

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Find Your Dream Home",
    subtitle: "Premium properties in the heart of Islamabad",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Luxury Living Awaits",
    subtitle: "Exclusive estates in prime locations",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Your Perfect Address",
    subtitle: "Where comfort meets elegance",
  },
]

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Agent", href: "#agent" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

const agent = {
  name: "Ali Sajid",
  title: "Senior Real Estate Agent",
  company: "IMEC Real Estate",
  phone: "+92 300 2886846",
  email: "Alisajid565@gmail.com",
  address: "B-17 Islamabad",
  photo: agentPhoto,
  experience: "10+",
  clientsServed: "100+",
  propertiesSold: "100%",
  happyClients: "100%",
  bio: "Dedicated real estate agent with deep local expertise in B-17 Islamabad and surrounding areas. Known for exceptional client service and in-depth market knowledge. Whether you're buying, selling, or renting, I provide personalized guidance every step of the way.",
  languages: ["English", "Urdu"],
  specializations: [
    "Residential Sales",
    "Property Investment",
    "Market Analysis",
    "Client Advisory",
  ],
}

const testimonials = [
  {
    name: "Asad Noman",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Absolutely outstanding service! The team helped me find the perfect investment property. Their market knowledge is unmatched, and they guided me through every step of the process.",
  },
  {
    name: "Ammar",
    role: "First-time Home Buyer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a first-time buyer, I was nervous about the process. The team made everything so simple and transparent. They found me exactly what I was looking for within my budget!",
  },
  {
    name: "Abdul Hadi",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The agent was incredibly professional and attentive to our needs. They understood exactly what we were looking for and delivered beyond our expectations. Highly recommended!",
  },
  {
    name: "Fahad",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Professional, responsive, and truly caring. They went above and beyond to ensure we found our dream home. The entire experience was seamless from start to finish.",
  },
  {
    name: "Bilal",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Outstanding experience from beginning to end. The team's expertise in the local market was evident, and they negotiated the best deal for us. couldn't be happier!",
  },
  {
    name: "Aqdas",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The agent was incredibly professional and attentive to our needs. They understood exactly what we were looking for and delivered beyond our expectations. Highly recommended!",
  },
]

function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState("")
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `-${offset}px 0px -50% 0px` },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids, offset])
  return activeId
}

export function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [testimonialPage, setTestimonialPage] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })
  const [isFormValid, setIsFormValid] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const activeSection = useScrollSpy(
    ["hero", "about", "agent", "testimonials", "contact"],
    80,
  )

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const { name, email, phone } = formData
    setIsFormValid(name.trim() !== "" && email.trim() !== "" && phone.trim() !== "")
  }, [formData])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const nextTestimonials = () => {
    setTestimonialPage((prev) =>
      prev < testimonials.length - 3 ? prev + 1 : 0,
    )
  }

  const prevTestimonials = () => {
    setTestimonialPage((prev) =>
      prev > 0 ? prev - 1 : testimonials.length - 3,
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleWhatsApp = () => {
    const phone = "923002886846"
    const message = "Hello! I'm interested in your real estate services."
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleCall = () => {
    window.open("tel:+923002886846", "_blank")
  }

  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-md backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <div className="flex items-center gap-2">
              <a href="/" className="flex items-center gap-2">
                <img src={logo} alt="IMEC Logo" className="h-10 w-10 rounded-full object-cover shadow-sm md:h-12 md:w-12" />
                <span className="text-lg font-bold tracking-tight text-gray-900 md:text-xl">
                  <span className="text-blue-600">IMEC</span> Real Estate
                </span>
              </a>
            </div>

            <div className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                href="tel:+923002886846"
                className="hidden items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-100 sm:flex"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden lg:inline">+92 300 2886846</span>
                <span className="lg:hidden">Call</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:hidden"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-gray-100 bg-white px-4 py-3 shadow-lg md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+923002886846"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-600"
            >
              <Phone className="h-4 w-4" />
              +92 300 2886846
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}

        <div className="relative z-20 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm font-medium text-white">
                  Trusted by 100+ Happy Clients
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {heroSlides[currentSlide].title}
              </h1>

              <p className="mb-8 text-lg text-gray-200 sm:text-xl">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  Contact Agent
                </a>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-16 z-30 pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8 md:grid-cols-4">
            {[
              { icon: Award, label: "Years Experience", value: "10+" },
              { icon: Users, label: "Happy Clients", value: "100+" },
              { icon: Heart, label: "Client Satisfaction", value: "100%" },
              { icon: Zap, label: "Avg. Days to Close", value: "30" },
            ].map((stat, index) => (
              <div key={index} className="flex items-center gap-3 sm:flex-col sm:text-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:mx-auto">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900 sm:text-2xl">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5">
                <Shield className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Why Choose Us</span>
              </div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                Your Trusted Partner in{" "}
                <span className="text-blue-600">Real Estate</span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                With years of experience in the real estate market, we provide
                unparalleled service and expertise to help you find your perfect
                property. Our commitment to excellence and client satisfaction
                sets us apart.
              </p>
              <div className="space-y-4">
                {[
                  "Expert market knowledge and analysis",
                  "Personalized property recommendations",
                  "Transparent and ethical business practices",
                  "End-to-end support throughout your journey",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-50" />
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern home"
                className="relative rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agent Profile Section */}
      <section id="agent" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Meet Your Agent</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Dedicated to Your <span className="text-blue-600">Success</span>
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-20" />
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="relative h-48 w-48 rounded-2xl border-4 border-white object-cover shadow-xl sm:h-56 sm:w-56 md:h-64 md:w-64"
                />
                <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 shadow-lg">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-1 text-2xl font-bold text-gray-900 sm:text-3xl">{agent.name}</h3>
                <p className="mb-1 text-lg font-medium text-blue-600">{agent.title}</p>
                <p className="mb-4 text-sm font-medium text-gray-500">{agent.company}</p>

                <p className="mb-6 text-gray-600 leading-relaxed">{agent.bio}</p>

                <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { label: "Experience", value: agent.experience + " Years" },
                    { label: "Clients Served", value: agent.clientsServed },
                    { label: "Properties Sold", value: agent.propertiesSold },
                    { label: "Happy Clients", value: agent.happyClients },
                  ].map((stat, index) => (
                    <div key={index} className="rounded-xl bg-gray-50 p-3">
                      <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">Specializations</h4>
                  <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                    {agent.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">Languages</h4>
                  <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                    {agent.languages.map((lang, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <a
                    href={`tel:${agent.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md"
                  >
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5">
              <Star className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Testimonials</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              What Our <span className="text-blue-600">Clients Say</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Hear from our satisfied clients about their experience working with us
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${testimonialPage * (100 / 3)}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2 sm:w-1/2 md:w-1/3">
                    <div className="h-full rounded-2xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                      <div className="mb-4 flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-gray-600 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-blue-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonials}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm transition-all hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialPage(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === testimonialPage ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonials}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 shadow-sm transition-all hover:border-blue-600 hover:text-blue-600 hover:shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5">
              <Mail className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Get In Touch</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Let's Start a <span className="text-blue-600">Conversation</span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              Ready to find your dream property? Contact us today and let our experts guide you
              every step of the way.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-lg">
              <div className="grid md:grid-cols-5">
                <div className="p-6 md:col-span-2 md:p-8">
                  <h3 className="mb-6 text-xl font-bold text-gray-900">Contact Information</h3>
                  <div className="space-y-5">
                    <a
                      href={`tel:${agent.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-600"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="font-medium">{agent.phone}</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${agent.email}`}
                      className="flex items-center gap-3 text-gray-600 transition-colors hover:text-blue-600"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="font-medium">{agent.email}</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Office</p>
                        <p className="font-medium">{agent.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Working Hours</p>
                        <p className="font-medium">Mon-Sat: 9AM - 7PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <p className="mb-3 text-sm font-medium text-gray-700">Follow Us</p>
                    <div className="flex gap-3">
                      <a
                        href="https://www.instagram.com/thealisajid?igsh=MW5ibHRiM3JwM3A0eQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all hover:bg-pink-100 hover:text-pink-600"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all hover:bg-blue-100 hover:text-blue-600"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ali-sajid-8a2865353/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-all hover:bg-blue-100 hover:text-blue-700"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:col-span-3 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                          placeholder="+92 300 1234567"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-gray-700">
                          I'm Interested In
                        </label>
                        <select
                          id="interest"
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                          <option value="">Select an option</option>
                          <option value="buying">Buying Property</option>
                          <option value="selling">Selling Property</option>
                          <option value="renting">Renting Property</option>
                          <option value="consultation">General Consultation</option>
                          <option value="investment">Investment Opportunities</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!isFormValid}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-md transition-all sm:w-auto ${
                        isFormValid
                          ? "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
                          : "cursor-not-allowed bg-gray-400"
                      }`}
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="/" className="mb-4 flex items-center gap-2">
                <img src={logo} alt="IMEC Logo" className="h-10 w-10 rounded-full object-cover" />
                <span className="text-xl font-bold text-white">
                  <span className="text-blue-400">IMEC</span> Real Estate
                </span>
              </a>
              <p className="mb-4 text-gray-400">
                Your trusted partner in finding the perfect property. We make
                real estate simple, transparent, and rewarding.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/thealisajid?igsh=MW5ibHRiM3JwM3A0eQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-sajid-8a2865353/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-all hover:bg-gray-700 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#hero" },
                  { label: "About Us", href: "#about" },
                  { label: "Our Agent", href: "#agent" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Contact Us", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                {[
                  "Property Buying",
                  "Property Selling",
                  "Property Renting",
                  "Investment Advisory",
                  "Market Analysis",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <span className="text-gray-400">B-17 Islamabad</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a
                    href="tel:+923002886846"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    +92 300 2886846
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-blue-400" />
                  <a
                    href="mailto:Alisajid565@gmail.com"
                    className="text-gray-400 transition-colors hover:text-white"
                  >
                    Alisajid565@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} IMEC Real Estate. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl ${
          showScrollTop ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  )
}

import { Header } from "@/components/header"
import { OfferBanner } from "@/components/offer-banner"
import { HeroSection } from "@/components/hero-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import ProjectsList from "@/components/projects-list"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <OfferBanner />
      <HeroSection />
      <ProjectsList />
      <ContactForm />
      <Footer />
    </div>
  )
}

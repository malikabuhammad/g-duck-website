import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import StoreAisle from '@/components/StoreAisle'
import Locations from '@/components/Locations'
import About from '@/components/About'
import Footer from '@/components/Footer'
import InteractiveElements from '@/components/InteractiveElements'
import InteractiveRubberDucks from '@/components/InteractiveRubberDucks'

export default function Home() {
  return (
    <main>
      <Header />
      <InteractiveRubberDucks />
      <Hero />
      <FeaturedProducts />
      <StoreAisle />
      <Locations />
      <About />
      <Footer />
      <InteractiveElements />
    </main>
  )
}


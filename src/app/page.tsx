import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'
import Owners from '@/components/Home/Owners'
import Roadmap from '@/components/Home/Raodmap'
import RoomBooking from '@/components/RoomBooking/intex'
import Example from '@/components/ui/dataPicker'
import GoogleTranslate from '@/components/GoogleTranslate '

export default function Home() {
  return (
    <main>
      <GoogleTranslate />
      <Hero />
      <Services />
      <Properties />
      <Owners />
      <Roadmap />
      <RoomBooking/>
      <FeaturedProperty />
      <Testimonial />
      {/* <BlogSmall /> */}
      <GetInTouch />
      <FAQ />
    </main>
  )
}

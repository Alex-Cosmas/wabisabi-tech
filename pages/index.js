import Header from '~/components/wabisabi/global/Header'
import HeroSection from '~/components/wabisabi//global/Hero'
import WhoWeAre from '~/components/wabisabi/WhoWeAre'
import OurProcess from '~/components/wabisabi/OurProcess'
import FeaturedProjects from '~/components/wabisabi/FeaturedProjects'
import ContactUs from '~/components/wabisabi/ContactUs'

const Index = () => (
  <>
    <Header />
    <HeroSection />

    <OurProcess />
    <WhoWeAre />
    <FeaturedProjects />
    <ContactUs />
  </>
)
export default Index

// flex flex-col items-center justify-center

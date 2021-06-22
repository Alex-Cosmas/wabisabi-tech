import Header from '../components/wabisabi/global/Header'
import HeroSection from '../components/wabisabi//global/Hero'
import WhoWeAre from '../components/wabisabi/WhoWeAre'
import OurProcess from '~/components/wabisabi/OurProcess'
import FeaturedProjects from '~/components/wabisabi/FeaturedProjects'
import ContactUs from '~/components/wabisabi/ContactUs'

const Index = () => (
  <>
    <Header />
    <HeroSection />
    <div className='content-wrapper'>
      <div className='flex flex-col items-center justify-center'>
        <OurProcess />
        <WhoWeAre />
        <FeaturedProjects />
        <ContactUs />
      </div>
    </div>
  </>
)
export default Index

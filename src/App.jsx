import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import MissionStatement from './components/MissionStatement'
import CoreValuesCarousel from './components/CoreValuesCarousel'
import TeamProfile from './components/TeamProfile'
import StaffGrid from './components/StaffGrid'
import ContactSection from './components/ContactSection'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <div className="flex flex-col min-h-screen" id="home">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow p-4 pt-28 space-y-8">
        <div id="about" className="w-full"><MissionStatement /></div>
        <div id="services" className="w-full"><CoreValuesCarousel /></div>
        <div id="team" className="w-full flex flex-col items-center space-y-2">
          <TeamProfile />
          <StaffGrid />
          <ContactSection />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default App


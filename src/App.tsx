import { ChakraBaseProvider } from '@chakra-ui/react'
import CreateEvent from './pages/CreateEvent.page'
import customTheme from './chakraUI/theme'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound.page'
import WelcomePage from './pages/WelcomePage'
import Events from './pages/Events.page'
import TestingZaraDesign from './pages/TestingZaraDesign'
import Navbar from './components/navbar-component/Navbar'

// import recoil
import { RecoilRoot } from 'recoil'

import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const noNavbarRoutes = ['/']
  return (
    <ChakraBaseProvider theme={customTheme}>
      <RecoilRoot>
        {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
        <Routes>
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/create-event" element={<CreateEvent />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/zara-design" element={<TestingZaraDesign />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RecoilRoot>
    </ChakraBaseProvider>
  )
}

export default App

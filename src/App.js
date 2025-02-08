import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Projects from './components/projects';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Skills from './components/skills';
import Footer from './components/footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio-React' element={<><Header /> <Home /> <Skills /> <Projects/> <Footer /> </> }>
              <Route path='sec1' element={<> <Section1/> <Section2/> </>}/>
              <Route path='sec2' element={<>  <Section2/> </>}/>
              <Route path='sec3' element={<> <Section3/> <Section2/>  </>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

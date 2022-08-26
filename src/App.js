import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import './App.scss'
import Social from "./Components/Social/Social";
import Education from "./Components/Resume/Education/Education";
import Skills from "./Components/Resume/Skills/Skills";
import Experience from "./Components/Resume/Experience/Experience";
function App() {
    return (<section className='container'>
        <Navbar/>
        <Social/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/portfolio'} element={<Portfolio/>}/>
            <Route path={'/resume'} element={<Resume/>}>
                <Route index element={<Skills/>} />
                <Route path={'skills'} element={<Skills/>} />
                <Route path={'education'} element={<Education/>} />
                <Route path={'experience'} element={<Experience/>} />
            </Route>
            <Route path={'/contact'} element={<Contact/>}/>
        </Routes>
    </section>);
}

export default App;
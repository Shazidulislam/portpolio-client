import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';
import Home from '../../Component/Home/Home';
import Navbar from '../../Component/Navbar/Navbar';
import Project from '../../Component/Project/Project';
import Skills from '../../Component/Skill/Skills';
import About from '../../page/About/About';
import Contact from '../../Component/Contact/Contact';

const RootLayout = () => {
    return (
        <div className='min-h-screen  ' >
            <Navbar></Navbar>
           <div className='px-4 md:px-12 lg:px-16 2xl:px-24 mx-auto'>
            <section id='home'> <Home></Home></section>
            <section id="about"><About></About></section>
            <section id='skills' ><Skills></Skills></section>
            <section id='project' ><Project></Project></section>
            <section><Contact></Contact></section>
           </div>
           <section id="contact"><Footer></Footer></section>
        </div>
    );
};

export default RootLayout;
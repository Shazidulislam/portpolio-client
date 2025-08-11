import Footer from '../../Component/Footer/Footer';
import Home from '../../Component/Home/Home';
import Navbar from '../../Component/Navbar/Navbar';
import Skills from '../../Component/Skill/Skills';
import About from '../../page/About/About';

const RootLayout = () => {
    return (
        <div className='min-h-screen  ' >
            <Navbar></Navbar>
           <div className='px-4 md:px-12 lg:px-16 xl:px-24 mx-auto'>
             <Home></Home>
            <About></About>
            <section id='skills' ><Skills></Skills></section>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
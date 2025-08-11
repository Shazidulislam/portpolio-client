import Home from '../../Component/Home/Home';
import Navbar from '../../Component/Navbar/Navbar';
import About from '../../page/About/About';

const RootLayout = () => {
    return (
        <div className='min-h-screen px-4 md:px-12 lg:px-16 xl:px-24 mx-auto ' >
            <Navbar></Navbar>
            <Home></Home>
            <About></About>
        </div>
    );
};

export default RootLayout;

import './App.css';
import Banner from './components/Banner/Banner';
import Banner1 from './components/Banner1/Banner1';
import Footer from './components/Footer/Footer';

import Navbar from './components/Navbar/Navbar';
import Second from './components/Second/Second';
import Section from './components/Section/Section';
import Section1 from './components/Section/Section1';
import Section2 from './components/Section/Section2';
import Tablist from './components/Table/Tablist';
import Title from './components/Title/Title';
import Youtube from './components/Youtube/Youtube';


function App() {

  return (
    <>
      
        
        <Navbar/>
      
         <Banner /> 
         <Banner1 />
         {/* <Second /> */}
         <Section />
         <Section1 /> 
         <Section2 />
         <Youtube/>
         <Tablist />
         <Title />
         <Footer />


        
    </>
  );
}

export default App;

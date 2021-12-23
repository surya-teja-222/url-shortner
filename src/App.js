import './App.css';
import Header from './Header';
import HeroBody from './bodytop';
import Links from './links';
import Bodybottom from './bodybottom';
import Footer from './footer';



function App() {
  return (
    <div className="App">
      <header><Header/></header>
      <nav><HeroBody/></nav>
      <main>
        <Links/>
        <Bodybottom/>
      </main>
      <Footer/>
    </div>
  );
}




export default App;

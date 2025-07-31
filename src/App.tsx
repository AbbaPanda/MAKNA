import './App.css';
import { PRIMARY_NAV_ITEMS } from './assets/components/constant/header';
import Header from './assets/components/layout/header';
import HeroSection from './assets/components/section/hero';

function App() {
  return (
    <a className="">
      <div>
        <Header navItems={PRIMARY_NAV_ITEMS} />
      </div>
      <main>
        <HeroSection />
      </main>
    </a>
  );
}

export default App;
 
import './App.css';
import { PRIMARY_NAV_ITEMS } from './assets/components/constant/header';
import Header from './assets/components/layout/header';

function App() {
  return (
    <main className="bg-gray-800 min-h-screen w-full">
      <div>
        <Header navItems={PRIMARY_NAV_ITEMS} />
      </div>
    </main>
  );
}

export default App;

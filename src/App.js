import { About } from './components/About/About';
import './App.css';
import { Header } from 'components/Header/Header';
import { Socials } from 'components/Socials/Socials';
export function App() {
  return (
    <div className='container'>
<Header/>
    <About/>
    <About/>
    <About/>
    <Socials/>
    </div>
  );
}

export default App;

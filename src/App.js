import Navbar from './components/Navbar.tsx';
import Chatbot from './components/Chatbot.tsx';
import BackgroundEffects from './components/BackgroundEffects.tsx';
import ScrollProgress from './components/ScrollProgress.tsx';
import './App.css';
import './style.css';
import './styles/Shared.css';

function App() {
  return (
    <>
      <BackgroundEffects />
      <ScrollProgress />
      <main className="app-main">
        <Navbar />
        <Chatbot />
      </main>
    </>
  );
}

export default App;

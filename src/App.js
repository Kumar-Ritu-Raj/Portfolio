import Sidebar from './components/Sidebar.tsx';
import Navbar from './components/Navbar.tsx';
import './App.css';
import './style.css';

function App() {
  return (
    <main>
      <header className="App-header">
        <meta name="description" content="Professional portfolio showcasing my skills, projects, and experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
      </header>
      <Sidebar />
      <div className='main-content'>
        <Navbar />
      </div>
    </main>
  );
}

export default App;

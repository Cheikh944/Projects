import './App.css';
import { Project, Contact, Navbar, Home, Resume, AboutMe } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Contact />
        <Home />
        <Resume />
        <Project />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

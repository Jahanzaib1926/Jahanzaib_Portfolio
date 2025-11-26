import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Navbar />
        <main className="flex-grow">
          {/* Sections rendered inline for single-page layout */}
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

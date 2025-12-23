import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";

export default function App() {
    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full">
                <Home />
                <Skills />
                <Projects />
                <Contacts />
            </div>
            <Footer />
        </div>
    );
}

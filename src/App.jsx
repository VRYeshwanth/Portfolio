import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

export default function App() {
    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full">
                <Home />
                <Skills />
                <Projects />
            </div>
        </div>
    );
}

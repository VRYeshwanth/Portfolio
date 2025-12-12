import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

export default function App() {
    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full">
                <Home />
                <Skills />
            </div>
        </div>
    );
}

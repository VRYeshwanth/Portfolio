import Navbar from "./Components/Navbar";
import Home from "./pages/Home";

export default function App() {
    return (
        <div className="w-full">
            <Navbar />
            <div className="w-full">
                <Home />
            </div>
        </div>
    );
}

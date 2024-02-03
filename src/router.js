import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { aboutLoader, projectsLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <Router path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
    </Router>
))

export default router
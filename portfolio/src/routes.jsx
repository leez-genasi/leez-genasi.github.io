import { createBrowserRouter } from 'react-router';
import NewHome from "./pages/new_home";
import Home from "./pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: NewHome,
    },
    {
        path: "/Home",
        Component: Home,
    }
]);
import About from "../../Pages/About";
import Home from "../../Pages/Home";
import Skill from "../../Pages/Skill";
import Works from "../../Pages/Works";

const routes = [
    {
        path:"/",
        element:<Home />,
        meta: {},
    },
    {
        path:"/about",
        element:<About />,
        meta: {}
    },
    {
        path:"/skills",
        element:<Skill />,
        meta: {}
    },
    {
        path: "/works",
        element: <Works />,
        meta: {}
    }
]


export default routes;
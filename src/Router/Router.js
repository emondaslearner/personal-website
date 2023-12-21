import { useRoutes } from "react-router-dom";
import { getRoutes } from "./routes";



const Router = () => {
    const AllRoutes = getRoutes()
    const routes = useRoutes([...AllRoutes])
    return routes;
};

export default Router;
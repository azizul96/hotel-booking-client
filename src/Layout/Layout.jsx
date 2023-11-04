import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;
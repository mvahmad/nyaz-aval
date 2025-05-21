import { Routes, Route } from "react-router";
import Home from "../pages/home/home";
import Accounts from "../pages/admin/accounts/accounts";
const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/accounts" element={<Accounts />} />
        </Routes>
    )
}
export default AppRoutes;
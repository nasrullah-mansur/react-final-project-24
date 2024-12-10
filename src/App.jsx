import { Route, Routes } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import HomeDashboard from "./pages/HomeDashboard";
import Error from "./Error";
import CreateProduct from "./pages/CreateProduct";
import CreateCategory from "./pages/CreateCategory";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayout />}>
                <Route index element={<HomeDashboard />} />
                <Route path="create-product" element={<CreateProduct />} />
                <Route path="create-category" element={<CreateCategory />} />

                {/* Error Route */}
                <Route path="/*" element={<Error />} />
            </Route>
        </Routes>
    );
}

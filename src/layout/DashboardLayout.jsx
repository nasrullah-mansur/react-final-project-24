import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router";
import Avatar from "react-avatar";

export default function DashboardLayout() {
    const authUser = useSelector((store) => store.auth);

    return (
        <>
            <header className="bg-white shadow-md py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <Link
                        to="/"
                        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                    >
                        Home
                    </Link>

                    <div className="space-x-4">
                        <Link
                            to="create-product"
                            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                        >
                            Create new Product
                        </Link>
                        <Link
                            to="create-category"
                            className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
                        >
                            Create new Category
                        </Link>
                        <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition">
                            Logout
                        </button>
                    </div>
                </div>
            </header>
            <h1 className="text-4xl py-5 text-center">
                <Avatar name={authUser.user.name} round={true} />
                {authUser.user.name}
            </h1>
            <div className="py-5">
                <Outlet />
            </div>
        </>
    );
}

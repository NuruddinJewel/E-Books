import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
    {
        path: "/",
        // element: <MainLayout />,
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "/books",
                element: <Books />
            },
        ],
        errorElement: <ErrorPage />
    },
]);
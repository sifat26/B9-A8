import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import BookDetails from "../Component/Book/BookDetails";
import ListedBook from "../Component/Book/ListedBook";
import About from "../Component/About";
import PagesToRead from "../Component/PagesToRead";

import BestBooks from "../Component/BestBooks";
// import PagesToRead from "../Component/PagesToRead";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: "/",
                element:<Home></Home>,
            },
            {
                path:'/bookDetails/:bookId',
                element:<BookDetails></BookDetails>
            },
            {
                path:'/listed-book',
                element:<ListedBook/>

            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/pages-to-read',
                element:<PagesToRead></PagesToRead>
            },
            {
                path:'/best-book',
                element:<BestBooks></BestBooks>
            }
        ]
    }

])
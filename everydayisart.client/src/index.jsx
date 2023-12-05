import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Layout from './Layout.jsx'
import Art from './components/Art.jsx'
import TermsOfUse from './components/TermsOfUse.jsx'
import About from './components/About.jsx'

const random = 'random';
const tretyakov = 'tretyakov';
const tretyakovPath = `${random}/${tretyakov}`;

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <About></About>
            </Layout>
        ),
    },
    {
        path: tretyakovPath,
        element: (
            <Layout>
                <Art url={`https://localhost:7015/${tretyakovPath}`} org={tretyakov} ></Art>
            </Layout>

        )
    },
    {
        path: 'termsofuse',
        element: (
            <Layout>
                <TermsOfUse></TermsOfUse>
            </Layout>
        )
    },
    {
        path: 'about',
        element: (
            <Layout>
                <About></About>
            </Layout>
        )
    }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
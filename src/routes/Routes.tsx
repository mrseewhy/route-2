import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Layout from "../components/Layout";
import Errorpage from "../pages/Errorpage";
import AboutPage from "../pages/AboutPage";
import Services from "../pages/Services";
import Forms from "../pages/Forms";
import Profiles from "../pages/Profiles";
import ContactPage from "../pages/ContactPage";
import Profile from "../pages/Profile";
import Form1 from "../pages/Form1";
import Form2 from "../pages/Form2";
import Form3 from "../pages/Form3";
import Form4 from "../pages/Form4";


export const router = createBrowserRouter([
    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <Homepage /> },
            { path: "about", element: <AboutPage /> },
            { path: "services", element: <Services /> },
            {
                path: "forms", element: <Forms />, children: [
                    { path: "form1", element: <Form1 /> },
                    { path: "form2", element: <Form2 /> },
                    { path: "form3", element: <Form3 /> },
                    { path: "form4", element: <Form4 /> },
                ]
            },
            { path: "profiles", element: <Profiles /> },
            { path: "profiles/:id", element: <Profile /> },
            { path: "contact", element: <ContactPage /> },
            { path: "*", element: <Errorpage /> },
        ]
    }
])
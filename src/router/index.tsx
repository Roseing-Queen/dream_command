import {createHashRouter, Navigate} from "react-router-dom";
import Layout from "@/layout";
import React from "react";

const router = createHashRouter([{
    path: "/",
    element: <Layout/>
}, {
    path: "",
    element: <Navigate to="/"/>,
},], {
})
export default router;
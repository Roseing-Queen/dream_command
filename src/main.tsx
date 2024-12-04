import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/ipc'
import router from "@/router";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import store from "@/redux";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider  routes={router} />
        </Provider>
    </React.StrictMode>
,
)

postMessage({
payload: 'removeLoading'
}, '*')

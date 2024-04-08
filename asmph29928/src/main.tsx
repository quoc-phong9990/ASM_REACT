import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Form } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ShoppingContextProvider } from "./component/CONTEXT/ShoppingCart";
const queryClient= new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(

    <ShoppingContextProvider>
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>


    </ShoppingContextProvider>







);
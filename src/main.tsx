import App from './App.tsx';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./redux/store/store.ts";
import {AppRoutes} from "./roures/routes.ts";

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement)
root.render(
    <Provider store={store}>
        <BrowserRouter basename={AppRoutes.root}>
            <App/>
        </BrowserRouter>
    </Provider>
);
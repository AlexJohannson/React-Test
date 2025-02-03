import './App.css';
import {MenuComponent} from "./components/menu-component/MenuComponent.tsx";
import {RouterComponent} from "./roures/RouterComponent.tsx";

function App() {

    return (
        <>
            <div className={'wrapper'}>
                 <MenuComponent/>
                 <RouterComponent/>
            </div>
        </>
    )
}

export default App;
import './App.css';
import {Menu} from "./components/menu/Menu.tsx";
import {RouterComponent} from "./roures/RouterComponent.tsx";

function App() {

    return (
        <>
            <div className={'wrapper'}>
                 <Menu/>
                 <RouterComponent/>
            </div>
        </>
    )
}

export default App;
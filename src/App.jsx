import NavBar from "./components/NavBar";
import { Gallería } from './components/Gallería'
import { Todo } from "./components/Todo";


function App() {
  return (
    <>
      <div className="border-b-2 w-[80%] ml-[10%] h-[120px] place-content-center ">
        <NavBar /> {/* SUPER COMPONENTE DE PRIMEREACT*/}
      </div>
      <Todo/>
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acc from "./components/Acc";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { ZeroWidthStack } from "./components/ZeroWidthStack";
import Codenotes from "./components/Codenotes";


function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
       
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;

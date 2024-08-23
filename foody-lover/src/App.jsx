import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import {Provider} from"react-redux";
import Store from "./Store/Store";

function App() {
  return (
    <Provider store={Store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sucess" element={<Success />} />
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;

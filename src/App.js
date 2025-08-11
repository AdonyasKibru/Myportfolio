import './App.css';
import Home from './frontend/home'
import About from './frontend/about'
import Header from './frontend/Header'
import Suggestion from './frontend/Suggestion'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Suggestion" element={<Suggestion />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;

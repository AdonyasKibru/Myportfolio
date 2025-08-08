import './App.css';
import Home from './frontend/home'
import About from './frontend/about'
import Header from './frontend/Header'
import react, { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
      <Header />

      <Routes style="tab">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

const tab = {
  margin: 'auto',

};

export default App;

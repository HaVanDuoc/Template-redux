import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CounterFeature from './features/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Template Redux</h1>
        <BrowserRouter>
          <Link to="/"><li>Home</li></Link>
          <Link to="/products"><li>Products</li></Link>
          <Routes>
            <Route path='/products' element={<CounterFeature />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

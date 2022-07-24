import { Routes, Route } from 'react-router-dom';

import Nav from './routes/nav/nav.component';
import Home from './routes/home/home.component';
import Products from './routes/products/products.component';

function App() {
  return(
    <Routes>
      <Route path='/' element={<Nav />} >
      <Route index element={<Home />} />
      <Route path='/products' element={<Products />} />
      </Route>
    </Routes>
  )
};

export default App;

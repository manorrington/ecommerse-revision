import { Routes, Route } from 'react-router-dom';

import Nav from './routes/nav/nav.route';
import Home from './routes/home/home.route';
import Products from './routes/products/products.route';
import Contact from './routes/contact/contact.route';


function App() {
  return(
    <Routes>
      <Route path='/' element={<Nav />} >
      <Route index element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path= '/contact' element={<Contact />} />      
      
      </Route>

    </Routes>
  )
};

export default App;
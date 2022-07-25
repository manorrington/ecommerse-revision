import { Outlet } from 'react-router-dom';
import Menu from '../../components/menu/menu.component';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';

function Home() {

  const categories = 
  [ 
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://media.pitchfork.com/photos/626be39b8eeb4ac0c1275b4e/1:1/w_600/Future-I-Never-Liked-You-2022.jpeg"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ];

  return(
    <div>
      <Outlet />
      <Slider />
      <Menu categories={categories} />
      <Menu categories={categories} />
      <Footer />
    </div>
  
  
  ) 
};

export default Home;
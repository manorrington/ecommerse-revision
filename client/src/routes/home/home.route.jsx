import { Outlet } from 'react-router-dom';
import Menu from '../../components/menu/menu.component';
import Footer from '../../components/footer/footer.component';
import Slider from '../../components/slider/slider.component'

function Home() {

  const categories = 
  [ 
    {
      "id": 1,
      "title": "Featured",
      "imageUrl": "https://i.scdn.co/image/ab67616d0000b2733ba5fbb1019bab8b4707f5b4"
    },
    {
      "id": 2,
      "title": "Best Sellers",
      "imageUrl": "https://media.pitchfork.com/photos/5929ab805e6ef9596932176d/1:1/w_450%2Cc_limit/620dbc4d.jpg"
    },
    {
      "id": 3,
      "title": "Classics",
      "imageUrl": "https://media.pitchfork.com/photos/61336b7614458bf5df99f2b4/1:1/w_450%2Ch_450%2Cc_limit/baduizm.jpg"
    },
    {
      "id": 4,
      "title": "Greatest Hits",
      "imageUrl": "https://media.pitchfork.com/photos/5c79983c8a62e1373c013f4b/1:1/w_600/solange_when.jpg"
    },
    {
      "id": 5,
      "title": "Record Players",
      "imageUrl": "https://www.zdnet.com/a/img/resize/1b49e19eb964e87a4d39d0adc8a30bd573f7ac5d/2022/04/01/1c2ba148-a0d1-4944-bb61-89f0610eefde/best-record-player.jpg?width=1200&height=900&fit=crop&auto=webp"
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
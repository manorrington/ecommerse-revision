import CategoryItem from '../category-item/category-item.component';
import '../../sass/menu.style.scss';

const Menu = ({categories}) => {
    return (
    <>
    <div className="menu-container">
      {categories.map((category) => (
      <CategoryItem key={category.id} category={category}/>
      ))};
      
      
    </div>

    <img className='banner' src="https://cdn.shopify.com/s/files/1/0287/4323/7725/files/RS_60_Banners_uD_2000x500_be92bd06-1bcd-4b65-9121-401c5aed18ff_1864x466.jpg?v=1657736974" alt="" />
    </>
    );
}
 
export default Menu;
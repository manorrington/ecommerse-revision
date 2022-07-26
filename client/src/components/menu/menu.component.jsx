import CategoryItem from '../category-item/category-item.component';
import '../../sass/menu.style.scss';

const Menu = ({categories}) => {
    return (
    <div className="menu-container">
      {categories.map((category) => (
      <CategoryItem key={category.id} category={category}/>
      ))};
      
    </div>
    
    );
}
 
export default Menu;
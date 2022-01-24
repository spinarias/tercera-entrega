import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
    <div className='NavBar-contenedor'>
        <h1>Heladería</h1>
        <ul>
            <li>Gustos de helado</li>
            <li>Chocolates</li>
            <li>Contacto</li>
        </ul>
        <CartWidget />
    </div>
    );
}

export default NavBar;
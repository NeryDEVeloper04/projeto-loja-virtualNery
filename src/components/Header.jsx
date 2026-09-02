import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">🛍️ ReactShop</div>

            <ul className="nav">
                <li><a href="#produtos">Início</a></li>
                <li><a href="#produtos">Produtos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>

            <div className="header-actions">
                <span className="icon-button"><FaMagnifyingGlass /></span>
                <span className="icon-button"><FaHeart /></span>
                <span className="icon-button cart"><FaShoppingCart />
                    <span className="badge">+99</span>
                </span>
            </div>
        </header>
    )
}

export default Header
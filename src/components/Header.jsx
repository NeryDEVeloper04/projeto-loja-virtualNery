import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">🛍️ ReactShop</div>

            <ul className="nav">
                <li><Link to="/home">Início</Link></li>
                <li><Link Link to="/produtos">Produtos</Link></li>
                <li><Link Link to="/contato">Contato</Link></li>
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
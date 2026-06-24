import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

// Importamos los estilos específicos del carrito
import "./Cart.css";

export const CartView = () => {
    const { cart } = useCart();

    return (
        <section className="cart-container">
            <h1>Carrito de compras</h1>
            
            {cart.length > 0 ? (
                <>
                    <CartList />
                    <CartSummary />
                </>
            ) : (
                <div className="empty-state">
                    <p className="empty-cart">El carrito está vacío</p>
                    
                    {/* Botón volver-inicio */}
                    <Link to={"/"} className="btn primary big btn-volver-inicio">
                        Volver al inicio
                    </Link>
                </div>
            )}
        </section>
    );
};
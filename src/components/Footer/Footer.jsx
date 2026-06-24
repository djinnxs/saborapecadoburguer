import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2026 Sabor a Pecado. La gula no es un delito aquí.</p>
      
      <div className="redes-sociales">
        <a 
          href="https://www.instagram.com/saborapecadoburguer/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        
        <a 
          href="https://www.facebook.com/saborapecadoburguer/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};
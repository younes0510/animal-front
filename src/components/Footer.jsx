import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-[#e6c676] text-[#e34635] py-8">
        <div className="container mx-auto px-4 grid  grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold ">ANIMAL SHOP</h2>
            <p className="mt-2 ">
              Votre boutique en ligne pour tout ce dont vos animaux ont besoin.
            </p>
          </div>
  
          
          <div>
            <h3 className="text-xl font-semibold ">Liens rapides</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/animals" className="hover:text-white transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="text-xl font-semibold ">Contactez-nous</h3>
            <p className="mt-2 ">Email: support@animalshop.com</p>
            <p className="mt-1 ">Téléphone: +33 1 23 45 67 89</p>
            
          </div>
        </div>
  
       
        
      </footer>
    );
  };
  
  export default Footer;
  
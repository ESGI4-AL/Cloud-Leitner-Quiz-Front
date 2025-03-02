import { Link } from 'react-router-dom';
import './Navbar.css'
import Button from '../../components/shared/Button/Button';
import { signInWithGoogle } from '../../pages/HomePage/auth.service';

const Navbar = () => {
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      console.log('Utilisateur connecté:', user);
    } catch (error) {
      console.error('Erreur de connexion:', error);
    }
  };

  return (
    <header className="navbar-container">
    <nav className="navbar">
      <div className="navbar-items">
        <Link to="/">Home</Link>
        <Link to="/add-card">Add Card</Link>
        <Link to="/view-cards">View Cards</Link>
        <Link to="/quiz">Today's Quiz</Link>
      </div>
    </nav>
    <Button onClick={handleGoogleLogin} className="google-login-btn">
      Se connecter avec Google
    </Button>
  </header>
  )
}

export default Navbar;

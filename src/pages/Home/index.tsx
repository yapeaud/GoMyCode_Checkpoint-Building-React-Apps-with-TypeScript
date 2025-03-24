import Counter from "../../components/Counter"; // Importation du composant Counter
import Greeting from "../../components/Greeting"; // Importation du composant Greeting

// Définition du composant Home
const Home = () => {
    return (
        <section>
            <h1>Welcome to Home</h1> {/* Titre principal */}
            <Greeting name="Yapeaud" /> {/* Affichage du message de salutation avec le nom spécifié */}
            <Counter /> {/* Affichage du compteur */}
        </section>
    );
};

export default Home; // Exportation du composant pour une utilisation ailleurs

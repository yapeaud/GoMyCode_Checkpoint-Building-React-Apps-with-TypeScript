import React from "react"; // Importation de React

// Définition des props attendues par le composant
interface GreetingProps {
    name: string; // La prop "name" doit être une chaîne de caractères
}

// Définition du composant fonctionnel Greeting avec les props typées
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>; // Affichage du message de salutation avec le nom fourni
};

export default Greeting; // Exportation du composant pour une utilisation ailleurs

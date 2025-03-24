import { Component } from "react"; // Importation du module Component de React

// Définition de l'interface pour le state du composant
interface CounterState {
    count: number;
}

// Définition du composant de classe Counter
class Counter extends Component<{}, CounterState> {
    // Initialisation du state avec un compteur à 0
    state: CounterState = {
        count: 0,
    };

    // Méthode pour incrémenter le compteur
    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    // Méthode render pour afficher l'UI du composant
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p> {/* Affichage du compteur */}
                <button onClick={this.increment}>Increment</button> {/* Bouton pour incrémenter */}
            </div>
        );
    }
}

export default Counter; // Exportation du composant pour utilisation ailleurs
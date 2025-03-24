import Counter from "../../components/Counter";
import Greeting from "../../components/Greeting";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Home</h1>
            <Greeting name="Yapeaud" />
            <Counter />
        </div>
    );
};

export default Home;

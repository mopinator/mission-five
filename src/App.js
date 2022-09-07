import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import MainBody from "./components/mainBody";


function App() {
	return (
		<div className="App">
			<Navbar />
			<MainBody/>
			<Footer />
		</div>
	);
}

export default App;

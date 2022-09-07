import "./App.css";
import Navbar from "./components/navbar/navbar";
import Login from "./components/login/login";
import LoginExpanded from "./components/login/login-expanded";
import Footer from "./components/footer/footer";
import { useState } from "react";

function App() {
	const [loginBox, setLoginBox] = useState(false);
	return (
		<div className="App">
			<Navbar />
			<Login loginBox={loginBox} setLoginBox={setLoginBox} />
			<LoginExpanded loginBox={loginBox} />
			<Footer />
		</div>
	);
}

export default App;

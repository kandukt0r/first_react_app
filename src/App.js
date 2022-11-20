import React, { useState } from "react";
import './styles/App.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/main/footer/Footer";

function App() {

	return (
		<div className="App">
			<Header />
			<Main/>
			<Footer/>
		</div>
	);
}

export default App;

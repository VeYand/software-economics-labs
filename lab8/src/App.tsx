import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Contacts from './pages/Contacts'
import Features from './pages/Features'
import Home from './pages/Home'

const App: React.FC = () => (
	<Router>
		<div className="app">
			<Header />
			<main>
				<Routes>
					<Route path="/software-economics-labs/" element={<Home />} />
					<Route path="/software-economics-labs/features" element={<Features />} />
					<Route path="/software-economics-labs/contacts" element={<Contacts />} />
					<Route path="/" element={<Home />} />
					<Route path="/features" element={<Features />} />
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</main>
			<Footer />
		</div>
	</Router>
)

export default App
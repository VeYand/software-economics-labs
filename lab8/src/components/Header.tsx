import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const location = useLocation()

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header-content">
					<Link to="/software-economics-labs/" className="logo" onClick={closeMenu}>
						<span className="logo-icon">❄️</span>
						iWinter Cloud
					</Link>

					<nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
						<Link
							to="/software-economics-labs/"
							className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
							onClick={closeMenu}
						>
							Главная
						</Link>
						<Link
							to="/software-economics-labs/features"
							className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}
							onClick={closeMenu}
						>
							Возможности
						</Link>
						<Link
							to="/software-economics-labs/contacts"
							className={`nav-link ${location.pathname === '/contacts' ? 'active' : ''}`}
							onClick={closeMenu}
						>
							Контакты
						</Link>
					</nav>

					<button
						className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
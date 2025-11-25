import React from 'react'

const Footer: React.FC = () => (
	<footer className="footer">
		<div className="container">
			<div className="footer-content">
				<div className="footer-section">
					<h3>iWinter Cloud</h3>
					<p>Профессиональная платформа для создания интерактивных курсов и обучения</p>
				</div>
				<div className="footer-section">
					<h4>Контакты</h4>
					<p>Email: info@iwinter.cloud</p>
					<p>Телефон: +7 (495) 123-45-67</p>
				</div>
				<div className="footer-section">
					<h4>Адрес</h4>
					<p>г. Москва, ул. Тверская, д. 25</p>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; 2024 iWinter Cloud. Все права защищены.</p>
			</div>
		</div>
	</footer>
)

export default Footer
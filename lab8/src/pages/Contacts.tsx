import React from 'react'
import ContactForm from '../components/ContactForm'

const Contacts: React.FC = () => (
	<div className="page contacts">
		<section className="page-header">
			<div className="container">
				<h1>Свяжитесь с нами</h1>
				<p>Готовы ответить на все ваши вопросы о iWinter Cloud</p>
			</div>
		</section>

		<section className="contact-content">
			<div className="container">
				<div className="contact-grid">
					<div className="contact-info">
						<h3>Контактная информация</h3>
						<div className="contact-item">
							<strong>Адрес:</strong>
							<p>г. Москва, ул. Тверская, д. 25</p>
						</div>
						<div className="contact-item">
							<strong>Телефон:</strong>
							<p>+7 (495) 123-45-67</p>
						</div>
						<div className="contact-item">
							<strong>Email:</strong>
							<p>info@iwinter.cloud</p>
						</div>
						<div className="contact-item">
							<strong>Время работы:</strong>
							<p>Пн-Пт: 9:00-18:00</p>
						</div>
					</div>
					<div className="contact-form-wrapper">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	</div>
)

export default Contacts
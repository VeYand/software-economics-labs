import React, {useState} from 'react'

type FormData = {
    name: string,
    email: string,
    company: string,
    message: string,
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		company: '',
		message: '',
	})

	const [isSubmitted, setIsSubmitted] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {name, value} = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Эмуляция отправки формы
		console.log('Форма отправлена:', formData)
		setIsSubmitted(true)
		setFormData({name: '', email: '', company: '', message: ''})

		// Сброс сообщения об успехе через 5 секунд
		setTimeout(() => setIsSubmitted(false), 5000)
	}

	return (
		<div className="contact-form">
			<h3>Оставьте заявку</h3>
			{isSubmitted && (
				<div className="success-message">
                    Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
				</div>
			)}
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						type="text"
						name="name"
						placeholder="Ваше имя"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="company"
						placeholder="Компания"
						value={formData.company}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group">
					<textarea
						name="message"
						placeholder="Сообщение"
						rows={4}
						value={formData.message}
						onChange={handleChange}
						required
					></textarea>
				</div>
				<button type="submit" className="btn btn-primary">
                    Отправить заявку
				</button>
			</form>
		</div>
	)
}

export default ContactForm
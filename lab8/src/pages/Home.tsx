import React from 'react'
import {Link} from 'react-router-dom'
import Feature from '../components/Feature'

const Home: React.FC = () => {
	const previewFeatures = [
		{
			icon: '🚀',
			title: 'Быстрый старт',
			description: 'Начните создавать курсы за считанные минуты без специальной подготовки',
		},
		{
			icon: '📊',
			title: 'Детальная аналитика',
			description: 'Отслеживайте прогресс обучения и эффективность курсов',
		},
		{
			icon: '🌐',
			title: 'Облачная платформа',
			description: 'Работайте из любого места без установки дополнительного ПО',
		},
	]

	return (
		<div className="page home">
			<section className="hero">
				<div className="container">
					<div className="hero-content">
						<h1>Создавайте впечатляющие курсы с iWinter Cloud</h1>
						<p className="hero-subtitle">
                            Профессиональная платформа для разработки интерактивного обучения.
                            Быстрое создание курсов, мощная аналитика и вовлекающий контент.
						</p>
						<div className="hero-buttons">
							<Link to="/features" className="btn btn-primary">
                                Узнать больше
							</Link>
							<Link to="/contacts" className="btn btn-secondary">
                                Начать бесплатно
							</Link>
						</div>
					</div>
					<div className="hero-media">
						<div className="video-placeholder">
							<div className="play-button">▶</div>
							<p>Демонстрация платформы</p>
						</div>
					</div>
				</div>
			</section>

			<section className="features-preview">
				<div className="container">
					<h2>Почему выбирают iWinter Cloud?</h2>
					<div className="features-grid">
						{previewFeatures.map((feature, index) => (
							<Feature
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
import React from 'react'
import Feature from '../components/Feature'

const Features: React.FC = () => {
	const features = [
		{
			icon: '🎨',
			title: 'Интуитивный редактор',
			description: 'Drag-and-drop интерфейс для быстрого создания курсов',
		},
		{
			icon: '📱',
			title: 'Мультиплатформенность',
			description: 'Курсы работают на всех устройствах и браузерах',
		},
		{
			icon: '🎮',
			title: 'Интерактивность',
			description: 'Квизы, симуляции и геймификация обучения',
		},
		{
			icon: '📈',
			title: 'Аналитика в реальном времени',
			description: 'Мониторинг прогресса и результатов обучения',
		},
		{
			icon: '👥',
			title: 'Совместная работа',
			description: 'Командная разработка курсов с системой прав доступа',
		},
		{
			icon: '🔒',
			title: 'Безопасность',
			description: 'Защита данных и соответствие стандартам',
		},
	]

	return (
		<div className="page features">
			<section className="page-header">
				<div className="container">
					<h1>Возможности iWinter Cloud</h1>
					<p>Все инструменты для создания современного электронного обучения</p>
				</div>
			</section>

			<section className="features-detail">
				<div className="container">
					<div className="features-grid detailed">
						{features.map((feature, index) => (
							<Feature
								key={index}
								icon={feature.icon}
								title={feature.title}
								description={feature.description}
								detailed={true}
							/>
						))}
					</div>
				</div>
			</section>

			<section className="cta-section">
				<div className="container">
					<h2>Готовы начать?</h2>
					<p>Присоединяйтесь к тысячам компаний, которые уже используют iWinter Cloud</p>
					<a href="/software-economics-labs/contacts" className="btn btn-primary">Начать бесплатный trial</a>
				</div>
			</section>
		</div>
	)
}

export default Features
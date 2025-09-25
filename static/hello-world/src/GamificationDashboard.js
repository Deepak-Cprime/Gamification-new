import './GamificationDashboard.css';

import React from 'react';

const agents = [
	{
		rank: 1,
		name: 'Sriguru Karthikeyan',
		username: 'sk',
		level: 1,
		xp: 30,
		correct: 3,
		total: 3,
		accuracy: 100,
		achievements: ['First Steps'],
	},
	{
		rank: 2,
		name: 'sriguru.karthikeyan',
		username: 'sriguru.karthikeyan',
		level: 1,
		xp: 14,
		correct: 1,
		total: 3,
		accuracy: 33,
		achievements: ['First Steps'],
	},
];

const GamificationDashboard = () => {
	return (
			<div className="gamification-root">
				<h1 className="gamification-title">Gamification</h1>
				<div className="gamification-container">
					<div className="gamification-header">
						<span className="gamification-header-icon">🏆</span>
						<div>
							<h2 className="gamification-header-title">Gamification Leaderboard</h2>
							<div className="gamification-header-desc">Agent experience points and achievements</div>
						</div>
					</div>
					<div className="gamification-leaderboard">
						{agents.map((agent, idx) => (
							<div
								key={agent.rank}
								className={`gamification-agent-card ${agent.rank === 1 ? 'first' : 'other'}`}
							>
								<div className="gamification-agent-header">
									<div className="gamification-agent-rank">#{agent.rank}</div>
									<div>
										<div className="gamification-agent-info">{agent.name}</div>
										<div className="gamification-agent-username">{agent.username} • Level {agent.level}</div>
									</div>
									<div className="gamification-agent-xp">⚡ {agent.xp} XP</div>
								</div>
								<div className="gamification-agent-stats">
									<div>
										<div className="gamification-agent-stat">{agent.correct}</div>
										<div className="gamification-agent-stat-label">Correct</div>
									</div>
									<div>
										<div className="gamification-agent-stat">{agent.total}</div>
										<div className="gamification-agent-stat-label">Total</div>
									</div>
									<div>
										<div className="gamification-agent-stat">{agent.accuracy}%</div>
										<div className="gamification-agent-stat-label">Accuracy</div>
									</div>
								</div>
								<div>
									{agent.achievements.map((ach, i) => (
										<span key={i} className="gamification-agent-achievement">{ach}</span>
									))}
								</div>
							</div>
						))}
					</div>
					<div className="gamification-all-agents">
						<h3 className="gamification-all-title">All Agents</h3>
						<div className="gamification-all-desc">Complete rankings of all team members</div>
						{agents.map((agent) => (
							<div key={agent.rank} className="gamification-all-agent-row">
								<div className="gamification-all-rank">#{agent.rank}</div>
								<div className="gamification-all-avatar">{agent.name.split(' ')[0][0]}</div>
								<div className="gamification-all-agent-info">
									<div className="gamification-all-agent-name">{agent.name}</div>
									<div className="gamification-all-agent-level">Level {agent.level} • {agent.xp} XP</div>
								</div>
								<div className="gamification-all-agent-stats">
									<div className="gamification-all-agent-stat">
										<div className="gamification-all-agent-stat-value">{agent.correct}</div>
										<div className="gamification-all-agent-stat-label">Correct</div>
									</div>
									<div className="gamification-all-agent-stat">
										<div className="gamification-all-agent-stat-value">{agent.total}</div>
										<div className="gamification-all-agent-stat-label">Total</div>
									</div>
									<div className="gamification-all-agent-stat">
										<div className="gamification-all-agent-stat-value">{agent.accuracy}%</div>
										<div className="gamification-all-agent-stat-label">Accuracy</div>
									</div>
								</div>
								<div className="gamification-all-achievement">
									<span role="img" aria-label="target" className="gamification-all-achievement-icon">🎯</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
	);
};

export default GamificationDashboard;

import React, { useState } from 'react';
import GamificationDashboard from './GamificationDashboard';
import Quiz from './Quiz';

function App() {
    const [tab, setTab] = useState('quiz');
    return (
        <div>
            <div style={{ display: 'flex', borderBottom: '2px solid #e5e7eb', marginBottom: 24 }}>
                
                <button
                    onClick={() => setTab('quiz')}
                    style={{
                        padding: '12px 24px',
                        border: 'none',
                        borderBottom: tab === 'quiz' ? '3px solid #2563eb' : '3px solid transparent',
                        background: 'none',
                        fontWeight: 600,
                        color: tab === 'quiz' ? '#2563eb' : '#374151',
                        cursor: 'pointer',
                        fontSize: 16
                    }}
                >
                    Quiz
                </button>
                <button
                    onClick={() => setTab('dashboard')}
                    style={{
                        padding: '12px 24px',
                        border: 'none',
                        borderBottom: tab === 'dashboard' ? '3px solid #2563eb' : '3px solid transparent',
                        background: 'none',
                        fontWeight: 600,
                        color: tab === 'dashboard' ? '#2563eb' : '#374151',
                        cursor: 'pointer',
                        fontSize: 16
                    }}
                >
                    Gamification Dashboard
                </button>
            </div>
            {tab === 'quiz' ? <Quiz />: <GamificationDashboard />}
        </div>
    );
}

export default App;

import React from 'react';
import './ProgressBar.css';

function ProgressBar({ percentage, className }) {
    // Déterminer la classe de couleur en fonction de la valeur de pourcentage
    const barColorClass =
        percentage < 50 ? 'red' :
        percentage < 80 ? 'orange' :
        'green';

    return (
        <div className={`progress-bar-container ${className}`}>
            <div className={`progress-bar ${barColorClass}`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
}

export default ProgressBar;

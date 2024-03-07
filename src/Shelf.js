import React, { useState } from 'react';
import './style.css';

const Shelf = () => {
    const [columnsConfig, setColumnsConfig] = useState([]);

    const handleSetupShelf = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newColumnsConfig = Array.from(formData.values()).map((value) => parseInt(value, 10));
        setColumnsConfig(newColumnsConfig);
    };

    return (
        <div>
            <h2>Shelf Component</h2>
            <form onSubmit={handleSetupShelf}>
                <label>
                    Sections de la première colonne:
                    <input type="number" name="column1" min="1" required />
                </label>
                <label>
                    Sections de la seconde colonne:
                    <input type="number" name="column2" min="1" required />
                </label>
                {/* Ajouter des colonnes au besoin */}
                <button type="submit">Créer placard</button>
            </form>
        </div>
    );
};

export default Shelf;
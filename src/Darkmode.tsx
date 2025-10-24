import React from 'react';
import { useState, useEffect } from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { invertModeOutline } from 'ionicons/icons';

export const Darkmode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');    

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        }, [theme]);
    
    return (
        // className={`App ${theme}`}
        <div id="darkModeToggleButton">
            <IonButton
                id="DarkModeButton"
                shape="round"
                role="button"
                aria-label='DarkModeToggle'
                size="small" 
                color="medium" 
                className={`${theme}`} 
                onClick={toggleTheme}
            >
                <IonIcon id='darkModeIcon' slot="icon-only" icon={invertModeOutline}></IonIcon>
            </IonButton>
        </div>
    )
}


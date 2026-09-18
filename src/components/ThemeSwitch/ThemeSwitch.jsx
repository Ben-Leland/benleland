import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "./ThemeSwitch.css"

export default function ThemeSwitch() {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);
    
    return (
        <div className={"theme-switch"} onClick={() => setIsDark(!isDark)}>
            <div className="theme-icon">
                {isDark ? <Moon size={15} color="var(--dark-accent-color)"/> : <Sun size={15} color="var(--dark-accent-color)"/>}
            </div>
        </div>
    )
}
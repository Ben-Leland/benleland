import React, { useState, useEffect } from "react";
import "./ThemeSwitch.css"

export default function ThemeSwitch() {
    const [isDark, setIsDark] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);
    
    return (
        <div className={"theme-switch"} onClick={() => setIsDark(!isDark)}>
            <div className="theme-icon"></div>
        </div>
    )
}
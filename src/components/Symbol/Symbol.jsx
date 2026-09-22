import React from "react";
import "./Symbol.css";

export default function Symbol({ size="1rem;" }) {
    return (
        <p className="symbol" style={{ fontSize: `${size}`}}>&lt;&gt;</p>
    );
}
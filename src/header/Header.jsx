import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText.jsx";
import "./Header.css";
import { TgHook } from "../hooks/Telegram.jsx";

export default function Header() {
    const [replay, setReplay] = useState(true);

    const {onClose} = TgHook();

    const tg = window.Telegram.WebApp;
  // Placeholder text data, as if from API
    const placeholderText = [
        {
            type: "heading1",
            text: "Алёна Усенко"
        },
        {
            type: "heading2",
            text: "Профессиональный коуч"
        },
        {
            type: "heading2",
            text: "Поможет тебе -"
        },
        {
            type: "heading3",
            text: tg.initDataUnsafe.user ? tg.initDataUnsafe.user : 'Noname'
        }
    ];
    
    const container = {
        visible: {
        transition: {
            staggerChildren: 0.025
        }
        }
    };

    const handleReplay = () => {
        setReplay(!replay);
        setTimeout(() => {
        setReplay(true);
        }, 600);
    };

    return (
        <motion.div
            className="Header"
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
        >
            <div className="container">
                {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
                })}
            </div>
            <button onClick={onClose}>Close</button>
            <button onClick={handleReplay}>
                Replay <span>⟲</span>
            </button>
        </motion.div>   
    );
}

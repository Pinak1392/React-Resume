import { useState,useEffect, useRef } from "react";

export default function Snake({size, x= Math.random() * window.innerWidth, y= Math.random() * window.innerHeight}) {
    const [position, setPosition] = useState([...Array(size)].map(() => ({ x: x, y: y})));
    const angle = useRef(Math.PI);
    const Deg = 2/Math.PI;

    useEffect(() => {
        const moveSnake = () => {
            setPosition((prev) => {
                return [
                    {
                        x: prev[0].x + (30/2 * (Math.cos(angle.current) + (Math.random() - 0.5)/2)),
                        y: prev[0].y + (30/2 * (Math.sin(angle.current) + (Math.random() - 0.5)/2)),
                    },
                    ...prev.slice(0, -1)
                ];
            });
            angle.current += (Math.random() - 0.5) * Deg;
        };
        const interval = setInterval(moveSnake, 60);
        return () => clearInterval(interval);
    }, []);


    if (position[0].x < -size) {
        setPosition((prev) => [{ x: window.innerWidth + size - 1, y: prev[0].y }, ...prev.slice(0, -1)]);
    }
    if (position[0].x > window.innerWidth + size) {
        setPosition((prev) => [{ x: 0 - size + 1, y: prev[0].y }, ...prev.slice(0, -1)]);
    }
    if (position[0].y < -size) {
        setPosition((prev) => [{ x: prev[0].x, y: window.innerHeight + size - 1 }, ...prev.slice(0, -1)]);
    }
    if (position[0].y > window.innerHeight + size) {
        setPosition((prev) => [{ x: prev[0].x, y: 0 - size + 1 }, ...prev.slice(0, -1)]);
    }

    return (
        <>
            {position.map((pos, i) => (
                <div key={i} className="segment" style={{ 
                    position: "absolute",
                    left: pos.x, 
                    bottom: pos.y,
                    width: 30,
                    height: 30
                 }} />
            )).reverse()}
        </>
    );
}

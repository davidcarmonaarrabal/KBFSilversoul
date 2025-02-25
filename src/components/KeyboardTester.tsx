'use client'

import { useState, useEffect } from "react";

// Definir el diseño de las teclas del teclado ANSI 100% (solo teclas visibles)
const keyboardLayout = [
  ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "PrtSc", "ScrLk", "Pause"],
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
  ["Ctrl", "Win", "Alt", "Space", "Alt", "Win", "Menu", "Ctrl"]
];

const KeyboardTester: React.FC = () => {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [releasedKeys, setReleasedKeys] = useState<Set<string>>(new Set()); // Para las teclas que permanecen amarillas

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevenir acciones predeterminadas de las teclas de función (F1-F12, Esc, etc.)
      if (
        event.key === "F1" ||
        event.key === "F2" ||
        event.key === "F3" ||
        event.key === "F4" ||
        event.key === "F5" ||
        event.key === "F6" ||
        event.key === "F7" ||
        event.key === "F8" ||
        event.key === "F9" ||
        event.key === "F10" ||
        event.key === "F11" ||
        event.key === "F12" ||
        event.key === "Esc" ||
        event.key === "PrtSc" ||
        event.key === "ScrLk" ||
        event.key === "Pause" ||
        event.key === "Tab" ||
        event.key === "Caps" ||
        event.key === "Alt" ||
        event.key === "Win"
      ) {
        event.preventDefault(); // Previene la acción predeterminada del navegador
      }

      // Normalizamos la tecla, en algunos casos `event.key` puede ser el mismo que `event.code`
      const key = event.key === " " ? "Space" : event.key;

      // Añadir la tecla al conjunto de teclas presionadas
      setPressedKeys((prevKeys) => new Set(prevKeys).add(key.toLowerCase()));
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      // Normalizamos la tecla
      const key = event.key === " " ? "Space" : event.key;

      // Añadir la tecla al conjunto de teclas liberadas (para color amarillo)
      setReleasedKeys((prevReleased) => new Set(prevReleased).add(key.toLowerCase()));

      // Eliminar la tecla del conjunto de teclas presionadas
      setPressedKeys((prevKeys) => {
        const newKeys = new Set(prevKeys);
        newKeys.delete(key.toLowerCase());
        return newKeys;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">ANSI 100% Keyboard Tester</h2>
      <div className="flex flex-col items-center gap-2">
        {keyboardLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-2">
            {row.map((key, keyIndex) => (
              <div
                key={`${key}-${rowIndex}-${keyIndex}`} // Clave única para cada tecla
                className={`w-12 h-12 flex items-center justify-center border-2 rounded ${
                  pressedKeys.has(key.toLowerCase()) || pressedKeys.has(key)
                    ? "bg-green-500 text-white"
                    : releasedKeys.has(key.toLowerCase()) || releasedKeys.has(key)
                    ? "bg-yellow-500 text-white" // Color amarillo para teclas ya presionadas
                    : "bg-gray-200"
                }`}
              >
                {key}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyboardTester;

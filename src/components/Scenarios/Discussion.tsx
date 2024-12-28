import React, { useState, useEffect, useRef } from "react";
import { CharacterStep } from "@exploregame/types";

interface DiscussionProps {
  characterSteps: CharacterStep[];
  onFinish: () => void; // Callback appelé lorsque la discussion est terminée
}

const Discussion: React.FC<DiscussionProps> = ({ characterSteps, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Index de la bulle en cours d'affichage
  const scrollRef = useRef<HTMLDivElement>(null); // Référence pour le défilement automatique
  // Passe à la prochaine bulle ou appelle `onFinish` si c'est la fin
  const handleNext = () => {
    if (currentIndex < characterSteps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(); // Fin de la discussion
    }
  };

  // Défile automatiquement vers le bas à chaque changement de bulle
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentIndex]);

  return (
    <div
      ref={scrollRef} // Conteneur défilable
      className="flex flex-col gap-4 p-4 max-h-[70vh] overflow-y-auto"
      onClick={handleNext} // Clique pour avancer
    >
      {characterSteps.slice(0, currentIndex + 1).map((step, index) => {
        const character = step.Character;
        const isLeft = characterSteps[0].Character.id === character.id; // Place le premier personnage à gauche

        return (
          <div
            key={step.id}
            className={`flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
          >
            {/* Avatar à gauche si isLeft */}
            {isLeft && character.image && (
              <img
                src={character.image}
                alt={character.nomPerso}
                className="w-12 h-12 flex-shrink-0 rounded-full object-cover bg-gray-300"
              />
            )}

            {/* Bulle de discussion */}
            <div
              className={`max-w-[60%] px-4 py-2 rounded-xl font-bold text-gray-800 border-2 ${
                isLeft
                  ? "bg-white border-yellow-400 ml-2"
                  : "bg-white border-yellow-400 mr-2"
              }`}
            >
              {step.textOrder}: {character.nomPerso}
            </div>

            {/* Avatar à droite si !isLeft */}
            {!isLeft && character.image && (
              <img
                src={character.image}
                alt={character.nomPerso}
                className="w-12 h-12 flex-shrink-0 rounded-full object-cover bg-gray-300"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Discussion;

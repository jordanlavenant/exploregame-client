import React, { useState, useEffect, useRef } from "react";
import { CharacterStep } from "@exploregame/types";
import { motion } from "framer-motion"; // Import pour les animations
import { useColorsDepartments } from "@/context/ColorsDepartmentContext";

interface DiscussionProps {
  characterSteps: CharacterStep[];
  onFinish: () => void; // Callback appelé lorsque la discussion est terminée
}

const Discussion: React.FC<DiscussionProps> = ({ characterSteps, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Index de la bulle en cours d'affichage
  const scrollRef = useRef<HTMLDivElement>(null); // Référence pour le défilement automatique
  const { getColors } = useColorsDepartments();
  const { primary } = getColors();

  if(characterSteps.length === 0) {
    onFinish();
  }

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
      className="fixed top-16 left-0 right-0 bottom-0 flex flex-col gap-4 p-4 overflow-y-auto"
      onClick={handleNext} // Clique pour avancer
      style={{ marginTop: '8vh' }}
    >
      {characterSteps.slice(0, currentIndex + 1).map((step) => {
        const character = step.Character;
        const text = step.text;
        const isLeft = characterSteps[0].Character.id === character.id; // Place le premier personnage à gauche

        return (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }} // Animation d'apparition
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex items-center ${
              isLeft ? "justify-start" : "justify-end"
            }`}
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
            <motion.div
              className={`max-w-[60%] px-4 py-2 rounded-xl font-bold text-gray-800 border-2 ${
                isLeft
                  ? "bg-white"
                  : "bg-white"
              }`}
              initial={{ scale: 0.9 }} // Animation de mise à l'échelle
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ borderColor: primary }}
            >
              {character.nomPerso}: {text}
            </motion.div>

            {/* Avatar à droite si !isLeft */}
            {!isLeft && character.image && (
              <img
                src={character.image}
                alt={character.nomPerso}
                className="w-12 h-12 flex-shrink-0 rounded-full object-cover bg-gray-300"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Discussion;

import { getLocalScenario, updateLocalScenarioScore } from "./localScenario";

let score : number = 0

export function getScore() {
    console.log("getScore",score)
    return score;
}

export function getLocalScore(): number {
    const localScore = getLocalScenario().score;
    console.log("getLocalScore", localScore)
    return localScore ?? 0; // Récupère le score du scénario stocké
}

export function applyScore(points: number) {
    score += points;
    setLocalScore(score)
    console.log(score)
    localStorage.setItem("scoreUpdated", Date.now().toString());
}

export function setLocalScore(chrono: number) {
    updateLocalScenarioScore(chrono)
}

export function refreshScore(): void{
    score = getLocalScore() ?? 0
    console.log("refreshScore",getLocalScenario())
}


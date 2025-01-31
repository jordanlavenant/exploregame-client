import { updateLocalScenarioChrono, getLocalScenario } from "./localScenario";

let chrono: number = 0; 
let intervalId: NodeJS.Timeout | null = null;

export function getLocalChrono(): number | null {
    const storedChrono = getLocalScenario().chrono;
    if (storedChrono) {
        return storedChrono;
    }
    return null;
}

export function setLocalChrono(chrono: number) {
    updateLocalScenarioChrono(chrono)
}

export function applyPenaltyChrono(penalty: number) {
    chrono -= penalty;
    if(chrono < 0)
        setLocalChrono(0)
    else
        setLocalChrono(chrono);
}

export function stopChrono() {
    if (intervalId) {
        console.log("stop chrono");
        clearInterval(intervalId);
        intervalId = null;
    }
}

export function createChrono(time: number) {
    chrono = time;
    setLocalChrono(chrono);
    console.log(chrono, time, "première création chrono");
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
        chrono -= 1;
        setLocalChrono(chrono);
        if (chrono <= 0) {
            clearInterval(intervalId!);
            chrono = 0;
            setLocalChrono(chrono);
        }
    }, 1000);
}

export function refreshChrono(): void {
    let localChrono = getLocalChrono();
    if (localChrono != undefined) {
        chrono = localChrono;
        createChrono(chrono);
    }
}

export function getChrono(): number {
    return chrono;
}
export function getLocalScenario() {
  return JSON.parse(localStorage.getItem('scenario') as string)
}

export function setLocalScenario(
  id: string,
  playerId: string,
  scriptId: string,
  stepId: string,
  questionId: string,
  chrono: number,
  score: number,
) {
  localStorage.setItem('scenario', JSON.stringify({ id, playerId, scriptId, stepId, questionId, chrono, score }))
}

export function updateLocalScenarioChrono(chrono: number) {
  const scenario = getLocalScenario()
  if (scenario) {
    scenario.chrono = chrono
    localStorage.setItem('scenario', JSON.stringify(scenario))
  }
}

export function updateLocalScenarioScore(score: number) {
  const scenario = getLocalScenario()
  if(scenario) {
    scenario.score = score
    localStorage.setItem('scenario', JSON.stringify(scenario))
  }
}

export function clearLocalScenario() {
  localStorage.removeItem('scenario')
}
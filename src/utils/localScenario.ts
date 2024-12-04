export function getLocalScenario() {
  return JSON.parse(localStorage.getItem('scenario') as string)
}

export function setLocalScenario(
  id: string,
  playerId: string,
  scriptId: string,
  stepId: string,
  questionId: string
) {
  localStorage.setItem('scenario', JSON.stringify({ id, playerId, scriptId, stepId, questionId }))
}

export function clearLocalScenario() {
  localStorage.removeItem('scenario')
}
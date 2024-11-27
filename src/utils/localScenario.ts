export default function getLocalScenario() {
  return JSON.parse(localStorage.getItem('scenario') as string)
}
import { Player } from "@exploregame/types"

function getCurrentPlayer(): Player | null {
  return JSON.parse(localStorage.getItem('player') as string) || null
}

export default getCurrentPlayer
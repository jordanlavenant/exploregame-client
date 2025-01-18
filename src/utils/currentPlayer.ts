import { Player } from "@exploregame/types"

export default function getCurrentPlayer(): Player | null {
  return JSON.parse(localStorage.getItem('player') as string) || null
}
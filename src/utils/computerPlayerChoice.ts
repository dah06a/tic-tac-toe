import { SquareState } from "../features/game/gameSlice";

export function computerPlayerChoice(g: SquareState[]): number {
    // Testing with random selection
    const options: number[] = [];
    for (let i = 0; i < g.length; i++) {
        if (!g[i]) options.push(i);
    }
    
    return options[Math.floor(Math.random() * options.length)];
}
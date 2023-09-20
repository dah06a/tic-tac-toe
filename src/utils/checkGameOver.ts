export function checkGameOver(gameData: ('X' | 'O' | null)[]) {
    const g = gameData;

    if (g[0]) {
        if (g[0] === g[1] && g[1] === g[2]) {
            return g[0];
        }
        if (g[0] === g[3] && g[3] === g[6]) {
            return g[0];
        }
        if (g[0] === g[4] && g[4] === g[8]) {
            return g[0];
        }
    }
    return false;
}
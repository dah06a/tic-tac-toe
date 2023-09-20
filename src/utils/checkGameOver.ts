// Use 'g' for GameData array
export function checkGameOver(g: ('X' | 'O' | null)[]) {
    // Check patterns: top across, left side down, diagonal top-left to bottom-right
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

    // Check patterns: center down
    if (g[1]) {
        if (g[1] === g[4] && g[4] === g[7]) {
            return g[1];
        }
    }

    // Check patterns: right side down, diagonal top-right to bottom-left
    if (g[2]) {
        if (g[2] === g[4] && g[4] === g[6]) {
            return g[2];
        }
        if (g[2] === g[5] && g[5] === g[8]) {
            return g[2];
        }
    }

    // Check patterns: center across
    if (g[3]) {
        if (g[3] === g[4] && g[4] === g[5]) {
            return g[3];
        }
    }

    // Check patterns: bottom across
    if (g[6]) {
        if (g[6] === g[7] && g[7] === g[8]) {
            return g[8];
        }
    }

    // Check for tie or continue game
    for (const square of g) {
        if (!square) return false;
    }
    return 'tie';
}
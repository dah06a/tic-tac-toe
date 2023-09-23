import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type SquareState = 'X' | 'O' | null;
export type GameState = { 
	gameData: SquareState[], 
	isPlayerTurn: boolean,
  isPlayerXs: boolean,
  score: { computer: number, player: number },
}

const initialState: GameState = {
    gameData: [null, null, null, null, null, null, null, null, null],
		isPlayerTurn: true,
    isPlayerXs: true,
    score: { computer: 0, player: 0 },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    takeTurn: (state, action: PayloadAction<{pos: number, val: SquareState}>) => {
      state.gameData[action.payload.pos] = action.payload.val;
			state.isPlayerTurn = !state.isPlayerTurn;
    },
    updateScore: (state, action: PayloadAction<{isPlayerWinner: boolean}>) => {
      const scoreToUpdate = action.payload.isPlayerWinner ? 'player' : 'computer';
      state.score[scoreToUpdate]++;
    },
    newGame: (state) => {
      state.gameData = initialState.gameData;
      const newIsPlayerXs = !state.isPlayerXs;
      state.isPlayerXs = newIsPlayerXs;
      state.isPlayerTurn = newIsPlayerXs;
    },
		resetGame: () => initialState,
  },
});

export const { takeTurn, updateScore, newGame, resetGame } = gameSlice.actions;

export const selectGameData = (state: RootState) => state.game.gameData;
export const selectScore = (state: RootState) => state.game.score;
export const selectPlayerTurn = (state: RootState) => state.game.isPlayerTurn;
export const selectPlayerXs = (state: RootState) => state.game.isPlayerXs;

export default gameSlice.reducer;

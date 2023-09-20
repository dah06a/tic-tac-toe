import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type SquareState = 'X' | 'O' | null;
export type GameState = { 
	gameData: SquareState[], 
	isPlayerTurn: boolean 
}

const initialState: GameState = {
    gameData: [null, null, null, null, null, null, null, null, null],
		isPlayerTurn: true
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    takeTurn: (state, action: PayloadAction<{pos: number, val: SquareState}>) => {
      state.gameData[action.payload.pos] = action.payload.val;
			state.isPlayerTurn = !state.isPlayerTurn;
    },
		resetGame: (state) => {
			state.gameData = initialState.gameData;
		}
  },
});

export const { takeTurn, resetGame } = gameSlice.actions;

export const selectGameData = (state: RootState) => state.game.gameData;
export const selectPlayerTurn = (state: RootState) => state.game.isPlayerTurn;

export default gameSlice.reducer;

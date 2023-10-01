import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type SquareState = 'X' | 'O' | null;
export type GameResult = 'player' | 'computer' | 'tie' | '';
export type GameStatus = { gameOver: boolean, result: GameResult };
export type GameState = { 
	gameData: SquareState[], 
  gameStatus: GameStatus,
	isPlayerTurn: boolean,
  isPlayerXs: boolean,
  score: { computer: number, player: number },
  responseText: string,
  isResponseDone: boolean,
}

const initialState: GameState = {
  gameData: [null, null, null, null, null, null, null, null, null],
  gameStatus: { gameOver: false, result: '' },
  isPlayerTurn: true,
  isPlayerXs: true,
  score: { computer: 0, player: 0 },
  responseText: '',
  isResponseDone: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    takeTurn: (state, action: PayloadAction<{pos: number, val: SquareState}>) => {
      state.gameData[action.payload.pos] = action.payload.val;
			state.isPlayerTurn = !state.isPlayerTurn;
    },
    updateStatus: (state, action: PayloadAction<{ gameOver: boolean, result: GameResult }>) => {
      state.gameStatus = action.payload;
    },
    updateScore: (state, action: PayloadAction<{isPlayerWinner: boolean}>) => {
      const scoreToUpdate = action.payload.isPlayerWinner ? 'player' : 'computer';
      state.score[scoreToUpdate]++;
    },
    updateResponse: (state, action: PayloadAction<{response: string}>) => {
      state.responseText = action.payload.response;
    },
    updateResponseStatus: (state, action: PayloadAction<{isDone: boolean}>) => {
      state.isResponseDone = action.payload.isDone;
    },
    newGame: (state) => {
      state.gameData = initialState.gameData;
      state.gameStatus = initialState.gameStatus;

      const newIsPlayerXs = !state.isPlayerXs;
      state.isPlayerXs = newIsPlayerXs;
      state.isPlayerTurn = newIsPlayerXs;
    },
		resetGame: () => initialState,
  },
});

export const { 
  takeTurn, 
  updateStatus, 
  updateScore, 
  updateResponse, 
  updateResponseStatus, 
  newGame, 
  resetGame 
} = gameSlice.actions;

export const selectGameData = (state: RootState) => state.game.gameData;
export const selectGameStatus = (state: RootState) => state.game.gameStatus;
export const selectPlayerTurn = (state: RootState) => state.game.isPlayerTurn;
export const selectPlayerXs = (state: RootState) => state.game.isPlayerXs;
export const selectScore = (state: RootState) => state.game.score;
export const selectResponse = (state: RootState) => state.game.responseText;
export const selectResponseStatus = (state: RootState) => state.game.isResponseDone;


export default gameSlice.reducer;

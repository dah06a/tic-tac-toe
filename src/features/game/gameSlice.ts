import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type GameState = { gameData: ('X' | 'O' | null)[] }

const initialState: GameState = {
    gameData: [null, null, null, null, null, null, null, null, null]
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    takeTurn: (state, action: PayloadAction<{pos: number, val: 'X' | 'O' | null}>) => {
      state.gameData[action.payload.pos] = action.payload.val;
    },
  },
});

export const { takeTurn } = gameSlice.actions;

export const selectGameData = (state: RootState) => state.game.gameData;

export default gameSlice.reducer;

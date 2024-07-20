import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { data } from "../data.json";
import { RootState } from "./store";

export interface State {
  score: Entry[];
  newEntry: Entry | null;
}

const initialState: State = {
  score: data as Entry[],
  newEntry: null,
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<EntryWithoutId>) {
      const id = +(Math.random() * 10000).toFixed(0);
      const object: Entry = { id, ...action.payload };
      state.score.push(object);
      state.newEntry = object;
    },
    setNewEntry(state, action: PayloadAction<Entry | null>) {
      state.newEntry = action.payload;
    },
  },
});

export const getData = (state: RootState) => state.leaderboard.score;
export const getNewEntry = (state: RootState) => state.leaderboard.newEntry;

export const { addPlayer, setNewEntry } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;

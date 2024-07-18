interface Entry {
  id: number;
  username: string;
  score: string;
}

type EntryWithoutId = Omit<Entry, "id">;

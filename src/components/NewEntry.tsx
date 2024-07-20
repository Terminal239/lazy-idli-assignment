import { getData } from "../redux/slice";
import { useAppSelector } from "../redux/store";
import Entry from "./Entry";
import Container from "./Reusable/Container";

type Props = {
  entry: Entry;
};

const NewEntry = ({ entry }: Props) => {
  const leaderboardData = useAppSelector(getData);

  const sorted = [...leaderboardData].sort((a, b) => (a.score <= b.score ? -1 : 1));
  const index = sorted.findIndex((item) => item.id === entry?.id);
  console.log(index);
  return (
    <div className="border-t-indigo-400 border-t-2 bg-black/50 mt-2 h-max">
      <Container className="!py-2">
        <h3 className="font-bold md:text-xl text-white mb-2">Recent Entry</h3>
        <Entry entry={entry} index={index} />
      </Container>
    </div>
  );
};

export default NewEntry;

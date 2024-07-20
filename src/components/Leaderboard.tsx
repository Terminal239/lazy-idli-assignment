import { FaClock, FaTrophy } from "react-icons/fa6";
import { getData, getNewEntry } from "../redux/slice";
import { useAppSelector } from "../redux/store";
import Entry from "./Entry";
import NewEntry from "./NewEntry";
import Container from "./Reusable/Container";

const Banner = () => {
  return (
    <div className="py-2 sm:py-4 flex bg-black text-white overflow-hidden">
      <div className="relative flex-1 right-4">
        <div className="top-1/4 translate-x bg-orange-400 banner-line"></div>
        <div className="top-1/2 -translate-x-1 bg-orange-400 banner-line"></div>
        <div className="top-3/4 -translate-x-2 bg-orange-400 banner-line"></div>
      </div>
      <div className="relative z-10 px-2 flex-shrink-0">
        <h1 className="uppercase tracking-widest text-xl md:text-3xl text-center font-extrabold italic">Fastest of Today</h1>
      </div>
      <div className="relative flex-1 left-4">
        <div className="top-1/4 translate-x bg-blue-400 banner-line"></div>
        <div className="top-1/2 -translate-x-1 bg-blue-400 banner-line"></div>
        <div className="top-3/4 -translate-x-2 bg-blue-400 banner-line"></div>
      </div>
    </div>
  );
};

const Leaderboard = () => {
  const leaderboardData = useAppSelector(getData);
  const newEntry = useAppSelector(getNewEntry);

  return (
    <div className="leaderboard-bg bg-no-repeat bg-cover">
      <Banner />
      <Container className="text-sm md:text-base lg:text-xl">
        <div className="w-full">
          <div className="flex text-[#FFD700] w-full bg-black/70 tracking-wider uppercase font-[900] rounded py-1 sm:py-2 md:py-3">
            <div className="inline-flex items-center justify-center">
              <FaTrophy className="w-[48px]" />
            </div>
            <div className="px-4 lg:px-8 flex-1">Name</div>
            <div className="w-[96px] lg:w-[164px] inline-flex items-center gap-2">
              <FaClock /> Time
            </div>
          </div>
        </div>
        <div className="leaderboard-entry w-full h-[370px] lg:h-[452px] overflow-y-auto flex flex-col gap-1 lg:gap-2 mt-1 lg:mt-2 font-[900] tracking-wider">
          {[...leaderboardData]
            .sort((a, b) => (a.score <= b.score ? -1 : 1))
            .map((entry, index) => (
              <Entry key={entry.id} entry={entry} index={index} />
            ))}
        </div>
      </Container>
      {newEntry && <NewEntry entry={newEntry} />}
    </div>
  );
};

export default Leaderboard;

import { ChangeEvent, useState } from "react";
import { createPortal } from "react-dom";
import { FaPlus } from "react-icons/fa6";
import { format } from "../lib/utils";
import { addPlayer, setNewEntry } from "../redux/slice";
import { useAppDispatch } from "../redux/store";
import TimeInput from "./Reusable/TimeInput";

const INITIAL_TIME = {
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
};

const AddEntry = () => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [time, setTime] = useState(INITIAL_TIME);

  const handleTimeChange = (field: "minutes" | "seconds" | "milliseconds", value: string) => {
    setTime((object) => {
      const changed = { ...object };
      changed[field] = +value;
      return changed;
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!username) {
      setUsernameError("Username cannot be empty!");
      setTimeout(() => {
        setUsernameError("");
      }, 3000);
      return;
    }

    const { minutes, seconds, milliseconds } = time;
    const leaderboardEntry: EntryWithoutId = {
      username,
      score: `${format(minutes, 2)}:${format(seconds, 2)}:${format(milliseconds, 3)}`,
    };
    dispatch(addPlayer(leaderboardEntry));
    setTimeout(() => {
      dispatch(setNewEntry(null));
    }, 5000);
    setShowModal(false);
    setUsernameError("");
    setUsername("");
    setTime(INITIAL_TIME);
  };

  return (
    <>
      {!showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="z-20 px-4 py-2 rounded bg-blue-400 hover:bg-blue-600 hover:text-white font-bold absolute bottom-12 right-2 shadow flex items-center gap-2 text-sm md:text-xl leading-none"
        >
          <FaPlus />
          <span className="mb-0.5">Add Entry</span>
        </button>
      )}
      {showModal &&
        createPortal(
          <div className="absolute size-full inset-0 isolate z-30 flex items-center justify-center">
            <div onClick={() => setShowModal(false)} className="bg-black/40 absolute inset-0"></div>
            <div className="bg-white relative z-40 px-4 py-2 md:p-6 rounded w-[324px] md:w-[512px]">
              <h2 className="font-bold text-lg mb-2 md:text-2xl">Add a new entry</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-gray-600 md:text-lg">Username</label>
                  <input
                    type="text"
                    value={username}
                    placeholder="e.g. John Smith"
                    className={`border w-full px-2 py-1 rounded md:p-2 ${usernameError && "border-red-600"}`}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                  />
                  {usernameError && <p className="text-red-600">{usernameError}</p>}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-gray-600 md:text-lg">Score (in time)</label>
                  <div className="flex items-center justify-between gap-4">
                    <TimeInput
                      label="MM"
                      placeholder="MM"
                      value={time.minutes}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => handleTimeChange("minutes", event.target.value)}
                    />
                    <TimeInput
                      label="SS"
                      placeholder="SS"
                      value={time.seconds}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => handleTimeChange("seconds", event.target.value)}
                    />
                    <TimeInput
                      label="MSS"
                      placeholder="MSS"
                      value={time.seconds}
                      onChange={(event: ChangeEvent<HTMLInputElement>) => handleTimeChange("milliseconds", event.target.value)}
                    />
                  </div>
                </div>
                <button onClick={handleSubmit} className="bg-green-400 rounded-sm py-1 font-bold hover:bg-green-600 hover:text-white">
                  Create
                </button>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default AddEntry;

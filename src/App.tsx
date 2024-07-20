import bottomBanner from "./assets/bottom-banner.png";
import AddEntry from "./components/AddEntry";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <Leaderboard />
        <AddEntry />
        <div className="bg-black">
          <img src={bottomBanner} className="min-h-0 w-full mx-auto" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;

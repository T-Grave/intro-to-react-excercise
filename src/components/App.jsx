import React from "react";
import trending from "../data/trending.json";
import "./app.css";
import MovieList from "./movielist/MovieList";
import WatchList from "./watchlist/WatchList";
import Sidebar from "./core/Sidebar";
import Title from "./core/Title";
import { WatchListProvider } from "../hooks/useWatchList";
import { useToggle } from "../hooks/useToggle";

const App = () => {
  const [sidebarOpen, toggleSidebar] = useToggle(true);

  return (
    <div className="app">
      <WatchListProvider>
        <main className="main">
          <Title />
          <MovieList trending={trending} />
        </main>
        <Sidebar open={sidebarOpen} handleToggle={toggleSidebar}>
          <WatchList />
        </Sidebar>
      </WatchListProvider>
    </div>
  );
};

export default App;

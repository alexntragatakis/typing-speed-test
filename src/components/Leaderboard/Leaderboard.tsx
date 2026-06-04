import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScores } from "../../hooks/useScores";
import type { Score } from "../../types/scoreTypes";
import "./Leaderboard.css";

type WordCountFilter = 10 | 25 | 50;

const Leaderboard = () => {
  const [bootstrapClass, setBootstrapClass] = useState<string>(
    "btn-outline-secondary",
  );
  useEffect(() => {
    // TODO: move this logic to a hook or context to avoid repeating it in multiple components
    const root = document.documentElement;
    if (root.style.getPropertyValue("--pagebg") === "var(--light-pagebg)") {
      setBootstrapClass("btn-outline-dark");
    } else if (
      root.style.getPropertyValue("--pagebg") === "var(--dark-pagebg)"
    ) {
      setBootstrapClass("btn-outline-light");
    } else {
      setBootstrapClass("btn-outline-secondary");
    }
  }, []);

  const { scores, loading } = useScores();
  const [filter, setFilter] = useState<WordCountFilter>(50);

  const filtered = scores
    .filter((s: Score) => s.wordCount === filter)
    .sort((a: Score, b: Score) => b.wpm - a.wpm)
    .slice(0, 50);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <h1>Leaderboard</h1>
      <div className="leaderboard-page-wrap">
        <div className="leaderboard-filters">
          {([10, 25, 50] as WordCountFilter[]).map((count) => (
            <button
              key={count}
              className={`btn ${filter === count ? bootstrapClass.replace("outline-", "") : bootstrapClass}`}
              onClick={() => setFilter(count)}
            >
              {count} words
            </button>
          ))}
        </div>

        <div className="leaderboard">
          {loading ? (
            <div className="leaderboard-loading">Loading...</div>
          ) : filtered.length === 0 ? (
            <div className="leaderboard-empty">
              No scores yet for {filter} words
            </div>
          ) : (
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th className="col-rank">#</th>
                  <th className="col-username">Player</th>
                  <th className="col-wpm">WPM</th>
                  <th className="col-accuracy">Accuracy</th>
                  <th className="col-date">Date</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((score: Score, index: number) => (
                  <tr
                    key={score.id}
                    className={index < 3 ? `top-${index + 1}` : ""}
                  >
                    <td className="col-rank">{index + 1}</td>
                    <td className="col-username">{score.username}</td>
                    <td className="col-wpm">{score.wpm}</td>
                    <td className="col-accuracy">{score.accuracy}%</td>
                    <td className="col-date">{formatDate(score.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <Link to="/">
          <button className={`btn ${bootstrapClass}`} type="submit">
            Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Leaderboard;

import { useState } from "react";
import "./App.css";
import clsx from "clsx";

function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [progress, setProgress] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
    setProgress((progress) => {
      const newProgress = progress - 33;
      return newProgress;
    });
  };

  const handleNextClick = () => {
    if (currentIndex <= 4) {
      setCurrentIndex(currentIndex + 1);
    }
    setProgress((progress) => progress + 33);
  };

  return (
    <>
      <div className="progress-container">
        <div className="progress">
          <div
            className="progress-line"
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className={clsx("circle", {
              active: currentIndex >= 1,
            })}
          >
            1
          </div>
          <div
            className={clsx("circle", {
              active: currentIndex >= 2,
            })}
          >
            2
          </div>
          <div
            className={clsx("circle", {
              active: currentIndex >= 3,
            })}
          >
            3
          </div>
          <div
            className={clsx("circle", {
              active: currentIndex >= 4,
            })}
          >
            4
          </div>
        </div>
        <div className="btn-box">
          <button
            className="btn"
            id="prev"
            disabled={currentIndex == 1 ? true : false}
            onClick={handlePrevClick}
          >
            Prev
          </button>
          <button
            className="btn"
            id="next"
            onClick={handleNextClick}
            disabled={currentIndex == 4 ? true : false}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

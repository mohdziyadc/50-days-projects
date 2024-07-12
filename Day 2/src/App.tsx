import "./App.css";

function App() {
  return (
    <>
      <div className="progress-container">
        <div className="progress">
          <div className="progress-line"></div>
          <div className="circle active">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>
        <div className="btn-box">
          <button className="btn" id="prev" disabled>
            Prev
          </button>
          <button className="btn" id="next">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import "./MemsLogic.css";

export function MemsLogic({ memes, isHot, setMemes }) {

  const clickHandlerPlus = (id) => {
    setMemes((prevMemes) =>
      prevMemes.map((mem) =>
        mem.id === id ? { ...mem, upvotes: mem.upvotes + 1 } : mem
      )
    );
  };

  const clickHandlerMinus = (id) => {
    setMemes((prevMemes) =>
      prevMemes.map((mem) =>
        mem.id === id ? { ...mem, downvotes: mem.downvotes + 1 } : mem
      )
    );
  };

  const filteredMemes = isHot
    ? memes.filter((mem) => mem.upvotes - mem.downvotes >= 5)
    : memes.filter((mem) => mem.upvotes - mem.downvotes < 5);

  return (
    <div className="memsContainer">
      {filteredMemes.map((mem) => (
        <div key={mem.id} className="oneMem">
          <img className="image" src={mem.img} alt={mem.title} />
          <div className="likesContainer">
            <div className="counters">
              <p className="countingPlus">{mem.upvotes} </p>
              <p className="countingMinus">{mem.downvotes} </p>
            </div>
            <div className="buttons">
              <button
                className="operatorButton"
                onClick={() => clickHandlerPlus(mem.id)}
              >
                +
              </button>
              <button
                className="operatorButton"
                onClick={() => clickHandlerMinus(mem.id)}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

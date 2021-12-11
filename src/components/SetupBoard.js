
import React, { useState, useEffect } from "react";
import Square from "../components/Square";
import Alert from "./Alert";
import { Patterns } from "./Pattern";

const SetupBoard = (props) => {
  let initialBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(initialBoard);
  const [player, setplayer] = useState("O");
  const [result, setresult] = useState({
    winner: "none",
    state: "none",
  });

  useEffect(() => {
    checkIFTie();
    checkWin();
    if (player === "X") {
      setplayer("O");
    } else {
      setplayer("X");
    }
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      props.showAlert(`game is won by  : ${result.winner}`, "success");
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, index) => {
        if (index === square && val === "") {
          return player;
        }
        return val;
      })
    );
  };

  const restartGame = () => {
    setBoard(initialBoard);
    setplayer("O");
  };

  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      const firstPalyer = board[currentPattern[0]];
      let foundWinningPattern = true;
      if (firstPalyer === "") return;
      currentPattern.forEach((index) => {
        if (board[index] !== firstPalyer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setresult({
          winner: player,
          state: "won",
        });
      }
    });
  };

  const checkIFTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });

    if (filled) {
      setresult({
        winner: "No One",
        state: "Tie",
      });
    }
  };

  return (
    <>
    <div className="container-fluid">
    <div className="container my-5" style={{width:"500px"}}>
        <div class="alert alert-info" role="alert" >
        <p className="text-center"><strong>Note : Do not click twice on square. you may loss your change</strong></p>
        <h4 className="text-center">Play the game !! Tic Tac Toe</h4> 
        </div>
        <Alert alert={props.alert}/>
    </div>
    
    <div class="row">
    <div class="col-lg-4">   </div>
    <div class="col-lg-4">   
        <div className="board">
          <div className="row">
            <Square
              val={board[0]}
              chooseSquare={() => {
                chooseSquare(0);
              }}
            />
            <Square
              val={board[1]}
              chooseSquare={() => {
                chooseSquare(1);
              }}
            />
            <Square
              val={board[2]}
              chooseSquare={() => {
                chooseSquare(2);
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[3]}
              chooseSquare={() => {
                chooseSquare(3);
              }}
            />
            <Square
              val={board[4]}
              chooseSquare={() => {
                chooseSquare(4);
              }}
            />
            <Square
              val={board[5]}
              chooseSquare={() => {
                chooseSquare(5);
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[6]}
              chooseSquare={() => {
                chooseSquare(6);
              }}
            />
            <Square
              val={board[7]}
              chooseSquare={() => {
                chooseSquare(7);
              }}
            />
            <Square
              val={board[8]}
              chooseSquare={() => {
                chooseSquare(8);
              }}
            />
          </div>
        </div>
        </div>
        <div class="col-lg-4">   </div>

        </div>
        <div className="text-center">
        <button className="btn btn-danger my-2" onClick={restartGame}>Clear Board</button>
        </div>
        </div>
    </>
  );
};

export default SetupBoard;

import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import { useState } from "react";
import { useEffect } from "react";
import { Scoreboard } from "./scoreboard";
const initialBoard = ['','','','','','','','',''];
export const TicTacToe =()=>{
    const[gameState, setGameState] = useState(initialBoard)
    const[isXTurn, setIsXTurn ] = useState(true);
    const [status, setStatus] = useState('');
    const[scores, setScores] = useState({xScore: 0, oScore: 0})



    useEffect(()=>{
        const winner = checkWinner();
        if(winner){
            setStatus(`winner: ${winner}`);
        }else if(!gameState.includes('')){
            setStatus("Tasapeli")
        }else{
            setStatus(`${isXTurn ? 'X' : 'O'}'s turn`);
        }
    }, gameState)

    useEffect(() =>{
      const winner = checkWinner();
      if(winner === null){
        return;
      }


      if(winner === "X"){
        setScores({xScore: scores.xScore +1, oScore: scores.oScore});
      }else{
        setScores({xScore: scores.xScore , oScore: scores.oScore +1});
      }
    }, [status])

    const onSquareClick = (index) =>{
        let strings = Array.from(gameState);


        if(status.includes("winner")){
            return;
        }
 


        if(strings[index] !== '')
        return;



        strings[index] = isXTurn ? 'X' : 'O';
        setGameState(strings);
        setIsXTurn(!isXTurn);
    }



    const checkWinner = () =>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let i = 0; i < lines.length; i++){
            const [a,b,c] = lines[i]
            if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c])
            return gameState[a]
        }

        return null;
    }
    function clearScoreboard(){
        setScores({xScore:0,oScore:0});
        setGameState(initialBoard);
        setIsXTurn(true);
    }

    return(
        <div>
            <div className="game">
            <h1>TIC-TAC-TOE</h1>
            <Scoreboard scores ={scores}/>
            <button onClick={clearScoreboard}>Clear scoreboard</button>
            <Board gameState={gameState} onSquareClick={onSquareClick}/>


    {!status.includes("winner")&&(
        <>
        
        
        <span>{status}</span>
        <button onClick={()=>{
        setGameState(initialBoard);
        setIsXTurn(true);
    }}>clear board</button>
        </>
    )}

{status.includes("winner")&&(
        <>
        
        
        <span style={{color:"green"}}>{status}</span>
        <button style={{background: "lightgreen"}} onClick={()=>{
        setGameState(initialBoard);
        setIsXTurn(true);
    }}>clear board</button>
        </>
    )}


            
            </div>
        </div>
    )
}
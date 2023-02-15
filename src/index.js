import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const boardSize = this.props.boardSize;
        const squares = [];
        for(let i = 0; i<boardSize; i++){
            let row = [];
            for(let j = 0; j<boardSize; j++){
                row.push(this.renderSquare(i * boardSize + j))
            }
            squares.push(<div key={i} className="board-row">{row}</div>);
        }
        return (
            <div>
                {squares}
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0,
            clickedSquare: null,
            boardSize:3,
            isAscending: true,
        };
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                clickedSquare: i,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    handleOrder(){
        this.setState(
            {isAscending: !this.state.isAscending
            });
    }
    
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const clickedSquare = step.clickedSquare;
            const row = Math.floor(clickedSquare / this.state.boardSize) + 1;
            const col = clickedSquare % this.state.boardSize + 1;
            const desc = move ?
                `Go to move #${move} row: ${row} col: ${col}` :
                'Go to game start';
            return (
                <li key={move}>
                    <button 
                    className={ (move === this.state.stepNumber ?'currentStep' : '')}
                    onClick={() => this.jumpTo(move)}
                    >{desc}</button>
                </li>
            )
        })
        console.log(moves.reverse())

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                        boardSize={this.state.boardSize}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <button
                    onClick={() => this.handleOrder()}
                    >
                        {this.state.isAscending ? 'Ascending':'Descending' }
                    </button>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

/**
 * TODO
 *Display the location for each move in the format (col, row) in the move history list.
 *Bold the currently selected item in the move list.
 *Rewrite Board to use two loops to make the squares instead of hardcoding them.
 *Add a toggle button that lets you sort the moves in either ascending or descending order.
 *When someone wins, highlight the three squares that caused the win.
 *When no one wins, display a message about the result being a draw.
 */
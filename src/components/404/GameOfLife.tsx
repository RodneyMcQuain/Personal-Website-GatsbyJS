import React, { useEffect, useRef } from 'react';
import { getViewportHeightExcludingNavbar, getViewportWidth } from '../../services/dimensions';

type Board = IBoardElement[][];

interface IBoardElement {
    previousState: boolean;
    isAlive: boolean;
}

const ALIVE_COLOR = '#FFFFFF';
const DEAD_COLOR = '#111';
const CELL_SIZE_PX = 5;
const IS_INITIALLY_ALIVE_PROBABILITY = 0.5;

interface GameOfLifeProps {
    className: string;
}

const GameOfLife = ({ className }: GameOfLifeProps) => {
    const canvas = useGameOfLife();

    return <canvas ref={canvas} className={className} />;
}

function useGameOfLife() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        setDimensions(canvasRef.current);
        let ROWS = getRowLength();
        let COLUMNS = getColumnLength();
        let board = getRandomGrid(ROWS, COLUMNS);
        const resize = () => {
            setDimensions(canvasRef.current);
            ROWS = getRowLength();
            COLUMNS = getColumnLength();
            board = getRandomGrid(ROWS, COLUMNS);
        }

        let animationFrameId: number;
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        
        (function draw(): void {
            try {
                drawGrid(ctx, board, ROWS, COLUMNS);
                gameOfLife(board, ROWS, COLUMNS);
            } catch {
                board = getRandomGrid(ROWS, COLUMNS);
            }

            animationFrameId = window.requestAnimationFrame(draw);
        })();

        window.addEventListener('resize', resize);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        }
    }, []);

    return canvasRef;
}

function setDimensions(canvas: HTMLCanvasElement): void {
    canvas.height = getViewportHeightExcludingNavbar();
    canvas.width = getViewportWidth();
}

const getRowLength = (): number => Math.ceil(getViewportHeightExcludingNavbar() / CELL_SIZE_PX);
const getColumnLength = (): number => Math.ceil(getViewportWidth() / CELL_SIZE_PX);

function getRandomGrid(rowLength: number, columnLength: number): Board {
    const board = new Array(columnLength);

    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(rowLength);

        for (let j = 0; j < board[0].length; j++) {
            const isAlive = Math.random() > IS_INITIALLY_ALIVE_PROBABILITY;
            board[i][j] = { isAlive };
        }
    }

    return board;
}

function drawGrid(ctx: CanvasRenderingContext2D, board: Board, ROWS: number, COLUMNS: number): void {
    for (let i = 0; i < COLUMNS; i++) {
        for (let j = 0; j < ROWS; j++) {
            if (board[i][j].previousState !== board[i][j].isAlive) {
                ctx.fillStyle = board[i][j].isAlive ? ALIVE_COLOR : DEAD_COLOR;
                ctx.fillRect(
                    i * CELL_SIZE_PX,
                    j * CELL_SIZE_PX,
                    CELL_SIZE_PX,
                    CELL_SIZE_PX
                );
            }
        }
    }
}

function gameOfLife(board: Board, ROWS: number, COLUMNS: number): void {
    const boardTemp = clone2DArray(board);

    for (let i = 0; i < COLUMNS; i++) {
        for (let j = 0; j < ROWS; j++) {
            const LEFT = (i - 1 + COLUMNS) % COLUMNS;
            const RIGHT = (i + 1 + COLUMNS) % COLUMNS;
            const TOP = (j - 1 + ROWS) % ROWS;
            const BOTTOM = (j + 1 + ROWS) % ROWS;
            
            let neighborCount = 0;
            if (boardTemp[LEFT][TOP].isAlive) neighborCount++;
            if (boardTemp[i][TOP].isAlive) neighborCount++;
            if (boardTemp[RIGHT][TOP].isAlive) neighborCount++;
            if (boardTemp[LEFT][j].isAlive) neighborCount++;
            if (boardTemp[RIGHT][j].isAlive) neighborCount++;
            if (boardTemp[LEFT][BOTTOM].isAlive) neighborCount++;
            if (boardTemp[i][BOTTOM].isAlive) neighborCount++;
            if (boardTemp[RIGHT][BOTTOM].isAlive) neighborCount++;

            board[i][j].previousState = board[i][j].isAlive;
            if (board[i][j].isAlive && shouldDie(neighborCount))
                board[i][j].isAlive = false;
            else if (!board[i][j].isAlive && shouldLive(neighborCount))
                board[i][j].isAlive = true;
        }
    }
}

const clone2DArray = (twoDArray: Board): Board => JSON.parse(JSON.stringify(twoDArray));
const shouldDie = (neighborCount: number): boolean => neighborCount < 2 || neighborCount > 3;
const shouldLive = (neighborCount: number): boolean => neighborCount === 3;

export default GameOfLife;
import React, { useEffect, useRef } from 'react';
import { NAVBAR_HEIGHT_PIXELS } from '../../../styles/helpers/variables';

interface IVector {
    n: number;
    r: number;
    s: number;
    color: string;
}

interface IDimensions {
    height: number;
    width: number;
}

interface ISum {
    x: number;
    y: number;
}

const ParametricCurves = () => {
    const canvas = useParametricCurves();

    return <canvas ref={canvas} className="banner-animation" />;
}

function useParametricCurves() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        setDimensions(canvasRef.current);
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        const vectors: IVector[] = getVectors();

        const resize = () => setDimensions(canvasRef.current);
        
        const drawInterval = setInterval(() => { 
            drawParametricCurves(ctx, vectors, getDimensions(canvasRef.current)); 
        }, 1);
        window.addEventListener('resize', resize);

        return () => {
            clearInterval(drawInterval);
            window.removeEventListener('resize', resize);
        }
    }, []);

    return canvasRef;
}

function setDimensions(canvas: HTMLCanvasElement) {
    canvas.height = Math.min(window.innerHeight, window.outerHeight) - NAVBAR_HEIGHT_PIXELS;
    canvas.width = Math.min(window.outerWidth, window.innerWidth, document.body.scrollWidth, document.body.clientWidth);
}

function getDimensions(canvas: HTMLCanvasElement): IDimensions {
    return {
        height: canvas.height,
        width: canvas.width,
    }
}

function getVectors(): IVector[] {
    const NUMBER_OF_VECTORS = 3;
    const vectors: IVector[] = new Array(NUMBER_OF_VECTORS);

    for (let i = 0; i < vectors.length; i++) {
        const rand = getRandomByRange(200, 255);

        vectors[i] = {
            color: `rgba(${rand}, ${rand}, ${rand})`,
            n: 0,
            r: Math.random() * 100 + 100,
            s: Math.random() * 5 + 50,
        }
    }

    return vectors;
}

function getRandomByRange(min: number, max: number): number {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function drawParametricCurves(ctx: CanvasRenderingContext2D, vectors: IVector[], dimensions: IDimensions) {
    const sum = { x: 0, y: 0 };

    for (let i = 0; i < vectors.length; i++) {
        vectors[i].n += .01;
        const { color, n, r, s } = vectors[i];
        sum.x += Math.cos(s * n) * r;
        sum.y += Math.sin(s * n) * r;
        drawEllipse(ctx, sum, dimensions, color);
    }
}

function drawEllipse(ctx: CanvasRenderingContext2D, sum: ISum, dimensions: IDimensions, color: string) {
    ctx.beginPath();
    ctx.ellipse(
        sum.x + (dimensions.width / 2),
        sum.y + (dimensions.height / 2),
        1,
        1,
        Math.PI / 4, 
        0, 
        2 * Math.PI
    );
    ctx.strokeStyle = color;
    ctx.stroke();
}

export default ParametricCurves;
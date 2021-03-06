import React, { useEffect, useRef } from 'react';
import { getViewportHeightExcludingNavbar, getViewportWidth } from '../../../services/dimensions';
import styles from '../../../styles/layout/components/HomePage/Banner/ParametricCurves.module.scss';

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

const NUMBER_OF_VECTORS = 3;
const MIN_RGB_VALUE = 200;
const MAX_RGB_VALUE = 255;
const OPACITY_VARIATION = 0.15;

const ParametricCurves = () => {
    const canvas = useParametricCurves();

    return <canvas ref={canvas} className={styles.bannerAnimation} />;
}

function useParametricCurves() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        setDimensions(canvasRef.current);
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        const vectors: IVector[] = getVectors();

        let animationFrameId: number;
        (function draw() {
            drawParametricCurves(ctx, vectors, getDimensions(canvasRef.current));
            animationFrameId = requestAnimationFrame(draw);
        })();

        const resize = () => setDimensions(canvasRef.current);
        window.addEventListener('resize', resize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
        }
    }, []);

    return canvasRef;
}

function setDimensions(canvas: HTMLCanvasElement) {
    canvas.height = getViewportHeightExcludingNavbar();
    canvas.width = getViewportWidth();
}

function getDimensions(canvas: HTMLCanvasElement): IDimensions {
    return {
        height: canvas.height,
        width: canvas.width,
    }
}

function getVectors(): IVector[] {
    const vectors: IVector[] = new Array(NUMBER_OF_VECTORS);
    const opacityIncrement = 1 / vectors.length;

    for (let i = 0; i < vectors.length; i++) {
        const rand = getRandomIntByRange(MIN_RGB_VALUE, MAX_RGB_VALUE);
        const opacity = (opacityIncrement * (i + 1)) - getRandomByRange(0, OPACITY_VARIATION);

        vectors[i] = {
            color: `rgba(${rand}, ${rand}, ${rand}, ${opacity})`,
            n: 0,
            r: Math.random() * 100 + 100,
            s: Math.random() * 5 + 50,
        }
    }

    return vectors;
}

const getRandomIntByRange = (min: number, max: number): number => Math.floor((Math.random() * (max - min + 1)) + min);
const getRandomByRange = (min: number, max: number): number => (Math.random() * (max - min)) + min;

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
        0.5,
        0.5,
        Math.PI / 4, 
        0, 
        2 * Math.PI
    );
    ctx.strokeStyle = color;
    ctx.stroke();
}

export default ParametricCurves;
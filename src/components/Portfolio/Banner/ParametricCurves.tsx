import React, { useEffect, useRef } from 'react';
import styles from '../../../styles/helpers/_variables.scss';

interface IVector {
    n: number;
    r: number;
    s: number;
}

interface IDimensions {
    height: number;
    width: number;
}

const NAVBAR_HEIGHT: number = Number(styles.NAVBAR_HEIGHT.replace("px", ""));

const ParametricCurves = () => {
    const canvas = useParametricCurves();

    return <canvas ref={canvas} className="banner-animation" />;
}

function useParametricCurves() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        setDimensions(canvasRef.current);
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        const dimensions = getDimensions(canvasRef.current);
        const vectors: IVector[] = getVectors();

        const resize = () => {
            setDimensions(canvasRef.current);
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
        
        const interval = setInterval(() => { parametricCurves(ctx, vectors, dimensions); }, 1);
        window.addEventListener('resize', resize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resize);
        }
    }, []);

    return canvasRef;
}

function setDimensions(canvas: HTMLCanvasElement) {
    canvas.height = Math.min(window.innerHeight, window.outerHeight) - NAVBAR_HEIGHT;
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
        vectors[i] = {
            n: 0,
            r: Math.random() * 100 + 100,
            s: Math.random() * 5 + 50,
        }
    }

    return vectors;
}

function parametricCurves(ctx: CanvasRenderingContext2D, vectors: IVector[], dimensions: IDimensions) {
    const sum = { x: 0, y: 0 };

    for (let i = 0; i < vectors.length; i++) {
        const { s, n, r } = vectors[i];
        vectors[i].n += .01;
        sum.x += Math.cos(s * n) * r;
        sum.y += Math.sin(s * n) * r;

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
        ctx.strokeStyle = '#FFFFFF';
        ctx.stroke();
    }
}

export default ParametricCurves;
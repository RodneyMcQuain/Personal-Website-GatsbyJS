import React, { useEffect, useRef } from 'react';
import { getViewportHeightExcludingNavbar, getViewportWidth } from '../../../../services/dimensions';
import { bannerAnimation } from '../../../../styles/layout/components/HomePage/Banner/ParametricCurves.module.scss';
import { drawParametricCurves } from './ParametricCurveDrawer';
import { IVector } from './IVector';
import { getVectors } from './VectorGenerator';
import { IDimensions } from '../../../../services/IDimensions';

const NUMBER_OF_VECTORS = 3;
const MIN_RGB_VALUE = 200;
const MAX_RGB_VALUE = 255;
const OPACITY_VARIATION = 0.15;

const ParametricCurves = () => {
    const canvas = useParametricCurves();

    return <canvas ref={canvas} className={bannerAnimation} />;
}

function useParametricCurves() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        setDimensions(canvasRef.current);
        const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
        const vectors: IVector[] = getVectors(NUMBER_OF_VECTORS, MIN_RGB_VALUE, MAX_RGB_VALUE, OPACITY_VARIATION);

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

export default ParametricCurves;
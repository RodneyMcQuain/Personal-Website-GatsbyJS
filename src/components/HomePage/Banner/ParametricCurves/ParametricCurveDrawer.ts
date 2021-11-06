import { IDimensions } from "../../../../services/IDimensions";
import { IVector } from "./IVector";

interface IPoint {
    x: number;
    y: number;
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

function drawEllipse(ctx: CanvasRenderingContext2D, sum: IPoint, dimensions: IDimensions, color: string) {
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

export { drawParametricCurves };
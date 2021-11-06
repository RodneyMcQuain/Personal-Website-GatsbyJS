import { IVector } from "./IVector";

function getVectors(numberOfVectors: number, minRgbValue: number, maxRgbValue: number, opacityVariation: number): IVector[] {
    const vectors: IVector[] = new Array(numberOfVectors);
    const opacityIncrement = 1 / vectors.length;

    for (let i = 0; i < vectors.length; i++) {
        const rand = getRandomIntByRange(minRgbValue, maxRgbValue);
        const opacity = (opacityIncrement * (i + 1)) - getRandomByRange(0, opacityVariation);

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

export { getVectors }
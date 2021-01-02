import React, { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/layout/components/HomePage/Banner/CycleItems.module.scss';

const DELAY_BETWEEN_ITEMS_MS = 3000;
const DELAY_BETWEEN_CHARACTERS_MS = 50;

interface ICycleItemsProps {
    items: string[];
    initialDelay?: number;
}

const CycleItems = ({ items, initialDelay = 0 }: ICycleItemsProps) => {
    const currentText = useDoCycle(items, initialDelay);

    return (
        <span data-cycle-title={createItemCycleHoverText(items)} aria-label={createAriaLabel(items)} className={styles.itemCycleBase}>
            <span>{currentText}</span>
        </span>
    );
};

const useDoCycle = (items: string[], initialDelay: number): string => {
    const [
        currentText, 
        changeItem, 
        incrementCurrentText, 
        decrementCurrentText, 
        hasFinishedTypingdWord, 
        hasFinishedDecrementing
    ] = useSetupCycle(items);
    const isDecrementing = useRef(false);
    const hasStarted = useRef(false);

    useEffect(() => {
        let delay = hasFinishedTypingdWord() ? DELAY_BETWEEN_ITEMS_MS : getCharacterDelay(isDecrementing.current);
        delay += !hasStarted.current ? initialDelay : 0;

        const timeout = setTimeout(() => {
            if (hasFinishedDecrementing()) {
                changeItem();
                isDecrementing.current = false;
            } else if (hasFinishedTypingdWord() || isDecrementing.current) {
                isDecrementing.current = true;
                decrementCurrentText();
            } else
                incrementCurrentText();

            hasStarted.current = true;
            clearInterval(timeout);
        }, delay);

        return () => clearInterval(timeout);
    }, [currentText, decrementCurrentText, incrementCurrentText, changeItem, hasFinishedTypingdWord, hasFinishedDecrementing]);

    return currentText;
};

type UseSetupCycle = [string, () => void, () => void, () => void, () => boolean, () => boolean];
const useSetupCycle = (items: string[]): UseSetupCycle => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [currentText, setCurrentText] = useState(" ");

    const changeItem = () => {
        setCurrentItemIndex(x => (x + 1) % items.length);
        setCurrentText(items[currentItemIndex].charAt(0));
    };
    
    const decrementCurrentText = () => setCurrentText(c => items[currentItemIndex].substring(0, c.length - 1));
    const incrementCurrentText = () => setCurrentText(c => items[currentItemIndex].substring(0, c.length + 1));
    const hasFinishedTypingdWord = () => currentText === items[currentItemIndex];
    const hasFinishedDecrementing = () => currentText === "";

    return [currentText, changeItem, incrementCurrentText, decrementCurrentText, hasFinishedTypingdWord, hasFinishedDecrementing];
};

const createItemCycleHoverText  = (items: string[]): string => (
    items
        .map(item => `- ${item}`)
        .join("\n")
);
const createAriaLabel = (items: string[]): string => (
    items
        .map(item => (
            items[items.length - 1] === item
                ? `and ${item}`
                : item
        ))
        .join(", ")
);

const getCharacterDelay = (isDecrementing: boolean) => isDecrementing ? getDecrementingDelay() : getIncrementingDelay();
const getIncrementingDelay = (): number => DELAY_BETWEEN_CHARACTERS_MS + Math.random() * 50;
const getDecrementingDelay = (): number => DELAY_BETWEEN_CHARACTERS_MS / 2;

export default CycleItems;
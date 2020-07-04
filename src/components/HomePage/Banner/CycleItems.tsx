import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/layout/banner/_item-cycle.scss';

const DELAY_BETWEEN_ITEMS_MS = 3000;
const DELAY_BETWEEN_CHARACTERS_MS = 50;

interface ICycleItemsProps {
    items: string[];
}

const CycleItems = ({ items }: ICycleItemsProps) => {
    const currentText = useDoCycle(items);

    return (
        <span data-cycle-title={createItemCycleHoverText(items)} aria-label={createAriaLabel(items)} className={`item-cycle-base`}>
            <span>{currentText}</span>
        </span>
    );
};

const useDoCycle = (items: string[]): string => {
    const [
        currentText, 
        changeItem, 
        incrementCurrentText, 
        decrementCurrentText, 
        hasTypedWord, 
        hasDecremented
    ] = useSetupCycle(items);
    const isDecrementing = useRef(false);

    useEffect(() => {
        const characterDelay = isDecrementing.current
            ? getDecrementingDelay()
            : getIncrementingDelay();
        const actualDelay = hasTypedWord() 
            ? DELAY_BETWEEN_ITEMS_MS
            : characterDelay;

        const timeout = setTimeout(() => {
            if (hasDecremented()) {
                changeItem();
                isDecrementing.current = false;
            } else if (hasTypedWord() || isDecrementing.current) {
                isDecrementing.current = true;
                decrementCurrentText();
            } else
                incrementCurrentText();

            clearInterval(timeout);
        }, actualDelay);

        return () => clearInterval(timeout);
    }, [currentText, decrementCurrentText, incrementCurrentText, changeItem]);

    return currentText;
};

type UseSetupCycle = [string, () => void, () => void, () => void, () => boolean, () => boolean];
const useSetupCycle = (items: string[]): UseSetupCycle => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [currentText, setCurrentText] = useState(items[currentItemIndex].charAt(0));

    const changeItem = () => {
        setCurrentItemIndex(x => (x + 1) % items.length);
        setCurrentText(items[currentItemIndex].charAt(0));
    };
    
    const decrementCurrentText = () => setCurrentText(c => items[currentItemIndex].substring(0, c.length - 1));
    const incrementCurrentText = () => setCurrentText(c => items[currentItemIndex].substring(0, c.length + 1));
    const hasTypedWord = () => currentText === items[currentItemIndex];
    const hasDecremented = () => currentText === "";

    return [currentText, changeItem, incrementCurrentText, decrementCurrentText, hasTypedWord, hasDecremented];
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

const getIncrementingDelay = (): number => DELAY_BETWEEN_CHARACTERS_MS + Math.random() * 50;
const getDecrementingDelay = (): number => DELAY_BETWEEN_CHARACTERS_MS / 2;

export default CycleItems;
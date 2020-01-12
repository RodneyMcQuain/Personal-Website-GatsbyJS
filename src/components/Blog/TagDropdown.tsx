import React, { useState } from 'react';
import CloseOnOutsideClick from '../CloseOnOutsideClick';
import NavButton from '../NavButton';

interface ITagDropdownProps {
    tags: string[];
    tagFilters: string[];
    setTagFilters: (tagFilters: string[]) => void;
}

const TagDropdown = ({ tags, tagFilters, setTagFilters }: ITagDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <CloseOnOutsideClick className="tag-dropdown" setIsOpen={setIsOpen}>
            <NavButton
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                text='Tags'
                openIcon='fa-caret-up'
                closedIcon='fa-caret-down'
                extraClasses='tag-dropdown-text'
                ariaLabel='Tags'
            />
            <ul className={`tag-contents ${isOpen ? 'open' : ''}`}>
                {tags.map(tag => (
                    <DropdownItem 
                        tag={tag} 
                        tagFilters={tagFilters} 
                        setTagFilters={setTagFilters} 
                    />
                ))}
            </ul>
        </CloseOnOutsideClick>
    );
}

interface IDropdownItemProps {
    tag: string;
    tagFilters: string[];
    setTagFilters: (tagFilters: string[]) => void;
}

const DropdownItem = ({ tag, tagFilters, setTagFilters}: IDropdownItemProps) => {
    const isChecked = tagFilters.includes(tag);

    return (
        <li>
            <label htmlFor={tag} onChange={() => {
                isChecked 
                    ? setTagFilters(tagFilters.filter(tagFilter => tagFilter !== tag)) 
                    : setTagFilters([...tagFilters, tag]); 
            }}>
                <input id={tag} type="checkbox" checked={isChecked} />
                <span></span>
                {tag}
            </label>
        </li>
    );
}

export default TagDropdown;
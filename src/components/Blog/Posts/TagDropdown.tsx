import React, { useState } from 'react';
import CloseOnOutsideClick from '../../Shared/CloseOnOutsideClick';
import NavButton from '../../Shared/NavButton';
import { FaCaretUp, FaCaretDown } from '@meronex/icons/fa';
import styles from '../../../styles/layout/components/Blog/Posts/TagDropdown.module.scss';
const { tagDropdown: tagDropdownClass, tagDropdownText, tagContents, open: openClass } = styles;

interface ITagDropdownProps {
    tags: string[];
    tagFilters: string[];
    setTagFilters: (tagFilters: string[]) => void;
}

const TagDropdown = ({ tags, tagFilters, setTagFilters }: ITagDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <CloseOnOutsideClick className={tagDropdownClass} setIsOpen={setIsOpen}>
            <NavButton
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                text='Tags'
                openIcon={<FaCaretUp />}
                closedIcon={<FaCaretDown />}
                extraClasses={tagDropdownText}
                ariaLabel='Tags'
            />
            <ul 
                role="listbox" 
                className={`${tagContents} -curved-border -layered-box-shadow ${isOpen ? openClass : ''}`}
            >
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
        <li role="option" data-checked={isChecked}>
            <label 
                htmlFor={tag} 
                onChange={() => {
                    isChecked 
                        ? setTagFilters(tagFilters.filter(tagFilter => tagFilter !== tag)) 
                        : setTagFilters([...tagFilters, tag]); 
                }}
            >
                <input id={tag} type="checkbox" checked={isChecked} />
                <span></span>
                {tag}
            </label>
        </li>
    );
}

export default TagDropdown;
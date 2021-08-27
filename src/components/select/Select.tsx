import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSSProperties, KeyboardEvent, useState } from 'react';
import './select.scss';

interface SelectProperties {
    options: Array<string>;
    defaultOption: string;
    style?: CSSProperties;
    onSelect?: (value: string) => void;
}

const Select: React.FC<SelectProperties> = (props) => {
    const { options, defaultOption, onSelect, style } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultOption);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value: string) => () => {
        setSelectedOption(value);
        onSelect && onSelect(value);
        setIsOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            toggling();
        }
    };

    return (
        <div style={style}>
            <div className="select-button" onClick={toggling} role="button" onKeyDown={handleKeyDown} tabIndex={0}>
                <span style={{ flex: 1 }}>{selectedOption}</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
            {isOpen && (
                <ul className="select-dropdown-list" role="menu">
                    {options.map((option: string, index: number) => (
                        <li
                            key={index}
                            role="menuitem"
                            className="dropdown-list-item"
                            onClick={onOptionClicked(option)}
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    setIsOpen(false);
                                    setSelectedOption(option);
                                }
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;

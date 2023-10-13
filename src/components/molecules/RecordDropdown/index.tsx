import React, { useState } from 'react';
import styled from 'styled-components';

import { DropdownOption } from '^/types';
import { DropdownMainButton } from '^/components/atoms/DropdownMainButton';
import { convertDateToString } from '^/utils';
import { DropdownListItem } from '^/components/atoms/DropdownListItem';

const Root = styled.div``;

const DropdownList = styled.ul`
  position: absolute;
  list-style-type: none;
  padding: 0;
`;

interface Props {
  selectedOption?: DropdownOption;
  options: DropdownOption[];
  placeholder: string;
  onSelect(newSelectedOption: DropdownOption): void;
}

export function RecordDropdown({
  selectedOption,
  options,
  placeholder,
  onSelect,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = () => setIsOpen(!isOpen);

  const handleOnSelect = (option: DropdownOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  const renderDropdownList = isOpen ? (
    <DropdownList>
      {options.map((option) => (
        <DropdownListItem
          key={option}
          label={convertDateToString(new Date(option))}
          isSelected={option === selectedOption}
          onClick={() => handleOnSelect(option)}
        />
      ))}
    </DropdownList>
  ) : null;

  return (
    <Root>
      <DropdownMainButton
        label={
          selectedOption !== undefined
            ? convertDateToString(new Date(selectedOption))
            : placeholder
        }
        isOpen={isOpen}
        onClick={handleOnClick}
      />
      {renderDropdownList}
    </Root>
  );
}

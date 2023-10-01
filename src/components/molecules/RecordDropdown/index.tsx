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
  selectedOption: DropdownOption;
  options: DropdownOption[];
  onSelect(newSelectedOption: DropdownOption): void;
}

export function RecordDropdown({ selectedOption, options, onSelect }: Props) {
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
          key={option.id}
          label={convertDateToString(option.when)}
          isSelected={option.id === selectedOption.id}
          onClick={() => handleOnSelect(option)}
        />
      ))}
    </DropdownList>
  ) : null;

  return (
    <Root>
      <DropdownMainButton
        label={convertDateToString(selectedOption.when)}
        isOpen={isOpen}
        onClick={handleOnClick}
      />
      {renderDropdownList}
    </Root>
  );
}

import React, { useState } from 'react';

const optionType = [
  { value: '11', label: 'همه موارد' },
  { value: '1', label: 'ماده', icon: 'nc-icon nc-layers-3' },
  { value: '2', label: 'تبصره', icon: 'nc-icon nc-map-big' },
  { value: '3', label: 'بخشنامه', icon: 'nc-icon nc-bullet-list-67' },
  { value: '4', label: 'دستورالعمل', icon: 'nc-icon nc-notes' },
  { value: '5', label: 'آیین نامه', icon: 'nc-icon nc-single-copy-04' },
  { value: '6', label: 'رای شورا', icon: 'nc-icon nc-tag-content' },
  { value: '7', label: 'دیوان عدالت اداری', icon: 'nc-icon nc-vector' },
  {
    value: '8',
    label: 'تصویب‌نامه‌ها و تصمیم‌نامه‌ها',
    icon: 'nc-icon nc-email-83',
  },
  { value: '9', label: 'دادنامه', icon: 'nc-icon nc-paper-2' },
  { value: '10', label: 'فرامین رهبری', icon: 'nc-icon nc-quote' },
];

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState(optionType[0]);

  return (
    <div className="option-selector">
      <select>
        {optionType.map((option) => (
          <option
            key={option.value}
            option={option}
            selectedOption={selectedOption}
            onClick={() => setSelectedOption(option)}
          />
        ))}
      </select>
    </div>
  );
};

export default Filter;

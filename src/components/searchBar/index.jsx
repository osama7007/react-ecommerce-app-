import React from 'react';
import { Select } from 'antd';

const SearchBar = ({onChange,onSearch }) => (
  <Select
  style={{width:"150px"}}
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Electronics',
        label: 'Electronics',
      },
      {
        value: 'Fashion',
        label: 'Fashion',
      },
      {
        value: 'Fragrances',
        label: 'Fragrances',
      },
      {
        value: 'Detergents',
        label: 'Detergents',
      },
      {
        value: 'Computers',
        label: 'Computers',
      },
      {
        value: 'Appliancies',
        label: 'Appliancies',
      }
    ]}
  />
);
export default SearchBar;
import React from 'react';
import MainInput from './input/MainInput';
import MySelect from './UI/Select/MySelect';
const Postfilter = ({ filter, setFilter }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
      <MainInput
        placeholder="...search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Sort by"
        options={[
          { value: 'title', name: 'Name' },
          { value: 'body', name: 'Description' },
        ]}
      />
    </div>
  );
};

export default Postfilter;

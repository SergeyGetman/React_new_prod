import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const Posfilter = ({filter, setFilter}) => {
  return (
    <div>

      <MyInput
        playceholder={"search..."}
        value={filter.query}
        onChange={e => setFilter({...filter, query : e.target.value})}
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort : selectedSort})}
        defaultValue={"Sort"}
        option={[
          {value: "title", name: "По названию"},
          {value: "body", name: "По описанию"}
        ]}
      />
    </div>
  );
};

export default Posfilter;
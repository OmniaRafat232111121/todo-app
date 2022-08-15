import React from 'react';
import Button, { SelectButton } from './Button';

i;
m;
p;
o;
const AppHeader = () => (
  <div>
    <h1>Hello from Header</h1>
    <Button varient="secondary">Click Here</Button>
    <SelectButton>
      <option value="all">All</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">Completed</option>
    </SelectButton>
  </div>
);

export default AppHeader;

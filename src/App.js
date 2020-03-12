import React from 'react';

import ToDo from './containers/todo/todo';
import Title from './components/title/title';

const App = () => (
  <>
    <Title title="ToDo App" />
    <ToDo />
  </>
);

export default App;

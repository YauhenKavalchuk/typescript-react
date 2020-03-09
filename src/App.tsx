import React from 'react';

// const Title:React.FC<{title: string}> = ({title, children}) => <h1>{title}{children}</h1>;

type TitleProps = {
  title: string,
  test?: string,
}

const Title = ({title, test = 'test'}: TitleProps) => <h1>{title}{test}</h1>;

const App = () => <Title title="test" />

export default App;

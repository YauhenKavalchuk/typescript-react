import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

const App:React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default App;

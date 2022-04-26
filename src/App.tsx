import { Global } from '@emotion/react';

import { CommonCss } from 'assets/css/common';
import { Todo } from 'pages/Todo';

const App = () => {
  return (
    <>
      <Global styles={CommonCss} />
      <Todo />
    </>
  );
};

export default App;

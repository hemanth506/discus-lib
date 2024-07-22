# discus-lib

## Overview

**discus-lib** is a React component library built with TypeScript. It provides components for a `Comment box` where users can post comments and a `Comment thread` to display all the posted comments.

## Installation

You can install **discus-lib** via npm:

```
npm i discus-lib
```

## Usage

To use **discus-lib**, import the `Discus` component and integrate it into your React application. Ensure to remove `<React.StrictMode>` tags when using this component to prevent multiple renders.

The component can also take props which is a "string" that holds the name of the user to be displayed. If the property is not mentioned it will display as __Unknown User__

```node
import React from 'react';
import { Discus } from 'discus-lib';

const discusProps = {
  name: "Person 1"
}

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My App</h1>
      <Discus {...discusProps} />
    </div>
  );
};

export default App;
```
## License

This project is licensed under the *MIT License*. See the [LICENSE](https://docs.npmjs.com/policies/npm-license) file for details.
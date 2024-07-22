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

The component can also take two properties:
 * `name`: "string" that holds the name of the user to be displayed. If the property is not mentioned it will display as __Unknown User__
 * `setDiscussion`: "React state function" that hold the function to set the comments from the package and that can be manipulated in the actual component.

```node
import React, { useState } from 'react';
import { Discus } from 'discus-lib';

// TypeScript types

type ReplyType = {
  id: string;
  userName: string;
  reply: string;
  timestamp: Date;
  likeCount: number;
  dislikeCount: number;
};

type CommentType = {
  id: string;
  userName: string;
  comment: string;
  timestamp: Date;
  reply: ReplyType[];
  likeCount: number;
  dislikeCount: number;
};

type DiscusProps = {
  name: string;
  setDiscussion: React.Dispatch<React.SetStateAction<CommentType[] | undefined>>;
};

// App Component

const App: React.FC = () => {
  const [discussion, setDiscussion] = useState<CommentType[] | undefined>([]);

  const discusProps: DiscusProps = {
    name: "Person 1",
    setDiscussion
  };

  return (
    <div className="App">
      <h1>My App</h1>
      <Discus {...discusProps} />
    </div>
  );
};

export default App;
```

## Output 

The comments structure which is captured in the `setDiscussion` state function will be as an array[] of object and the sample object is shown as below.

```
[
  {
    id: string;
    userName: string;
    comment: string;
    timestamp: Date;
    reply: [
        {
        id: string;
        userName: string;
        reply: string;
        timestamp: Date;
        likeCount: number;
        dislikeCount: number;
      },
    ],
    likeCount: number;
    dislikeCount: number;
  },
]
```

## License

This project is licensed under the *MIT License*. See the [LICENSE](https://docs.npmjs.com/policies/npm-license) file for details.

## Author

Hemanth Raaj G [hemanthraaj31@gmail.com]
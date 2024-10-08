# discus-lib

A user discussion component library where the user can comment on a post and discuss among other users.

## Overview

**discus-lib** is a React component library built using TypeScript. It provides `Comment box` where users can post comments and a `Comment` to display all the posted comments.

## Installation

You can install **discus-lib** via npm:

```
npm i discus-lib
```

## Usage

To use **discus-lib**, import the `Discus` component and integrate it into your React application. Ensure to remove `<React.StrictMode>` tags when using this component to prevent multiple renders.

The component can also take two properties:
 * `name`: "string" that holds the name of the user to be displayed. If the property is not mentioned it will display as *__Unknown User__*
 * `discussion`: "CommentType[]" that hold the initial value for the package.
 * `setDiscussion`: "React state function" that hold the function to set the comments from the package and that can be manipulated in the actual component.

```node
import React, { useState } from 'react';
import { Discus } from 'discus-lib';

// TypeScript types

type CommentType = {
  id: string;
  userName: string;
  comment: string;
  timestamp: Date;
  reply: CommentType[];
  likeCount: number;
  dislikeCount: number;
  parentId: string;
};

type DiscusProps = {
  name: string;
  discussion: CommentType[];
  setDiscussion: React.Dispatch<React.SetStateAction<CommentType[] | undefined>>;
};

// App Component

const App: React.FC = () => {
  const [discussion, setDiscussion] = useState<CommentType[] | undefined>(discussion);

  const discusProps: DiscusProps = {
    name: "Person 1",
    discussion
    setDiscussion,
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

The width of the component can be modified by the width of the outer div in which it is wrapped.

## Output 

The comments schema which is captured in the `setDiscussion` state function will be as an array[] of object that is shown as below.

```
CommentType = [
  {
    id: string;
    userName: string;
    comment: string;
    timestamp: Date;
    reply: [
        {
        id: string;
        userName: string;
        comment: string,
        timestamp: Date;
        reply: CommentType[];
        likeCount: number;
        dislikeCount: number;
        parentId: string;
      },
    ],
    likeCount: number;
    dislikeCount: number;
    parentId: string;
  },
]
```

### Note

*__Discus__* component is a recursion based component where the *__Comment__* component will recursively call the *__CommentBox__* component for replying on that comment.

## License

This project is licensed under the *__MIT License__*. See the [LICENSE](https://docs.npmjs.com/policies/npm-license) file for details.

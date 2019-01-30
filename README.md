# React Window Resize

## Installation
```
$ npm install --save @kamva/react-window-ssr-resize
```

## usage
```jsx
import React from 'react';
import { WindowResize } from "@kamva/react-window-ssr-resize";

const Wrapper = () => (
	<WindowResize>
		{
			({ width, height }) => (
				<div>
          <p>width is: {width}</p>
					<p>height is: {height}</p>
				</div>
			)}
	</WindowResize>
);
```

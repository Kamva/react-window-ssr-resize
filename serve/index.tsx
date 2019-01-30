import * as React from "react";
import { render } from "react-dom";
import { WindowResize } from "../src";

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
render(
	<Wrapper />,
  document.getElementById("root"),
);

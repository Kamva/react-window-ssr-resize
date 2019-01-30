import * as React from "react";
import ssrWindow from "ssr-window";
const { window } = ssrWindow;

export interface IWindowResizeState {
  width: number;
  height: number;
}

export interface IWindowResizeProps {
  children: (arg: any) => React.ReactNode;
}

export class WindowResize extends React.PureComponent<
  IWindowResizeProps,
  IWindowResizeState
> {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }
  public componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  public componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  public updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  public parentProps = () => {
    const { width, height } = this.state;
    return {
      width,
      height,
    };
  };
  public render() {
    const { children } = this.props;
    return <React.Fragment>{children(this.parentProps())}</React.Fragment>;
  }
}

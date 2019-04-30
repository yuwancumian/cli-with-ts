import { Box, render } from "ink";
import * as React from "react";

class Test extends React.Component {
  public render() {
    return <Box> 123 < /Box>;
  }
}
const app = render(<Test />);

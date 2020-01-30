import React from "react";
import { MDXProvider } from "@mdx-js/react";

import CodeBlock from "./CodeBlock";

const components = {
  code: CodeBlock
};

export default props => {
  console.count("render");
  return <MDXProvider components={components}>{props.children}</MDXProvider>;
};

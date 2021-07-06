# Craco Esbuild Playground

## Issues

### Styled components

For some reason we could not import the Theme Provider from 'styled-components/macro', which is where Fluidly FE usually imports the theme provider from. If we try to do this, we get the following error:

***Attempted import error: 'ThemeProvider' is not exported from 'styled-components/macro'.***

It compiles fine when using just importing it from 'styled-components'.

### Typescript & UI-Components

When we added Typescript to the project we got a new error! 

```
./node_modules/@fluidly/icons/svg/arrow-back.svg
SyntaxError: unknown: Unexpected reserved word 'interface' (3:0)

1 | // GENERATED FILE, DO NOT EDIT ME. instead, run yarn generate:react;
2 | import * as React from "react";
3 | interface SVGRProps {
4 |   title?: string,
5 |   titleId?: string,
6 |   blockRender?: boolean 
```

We found that the error occurs in ui-components – in particular the part of ui-components where we import arrow-back and arrow-forward in its svg form (the DateInput component). All the other icons we import from @fluidly/icons in ui-components are the React component versions and do no cause compile failures. Removing the DateInput component allowed the app to successfully compile.


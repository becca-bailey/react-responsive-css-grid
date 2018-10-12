# React Responsive CSS Grid

> A basic responsive grid framework using React and CSS Grid

## Install

```bash
npm install --save react-responsive-grid
```

or

```bash
yarn add react-responsive-grid
```

## Usage

```tsx
import * as React from "react";

import { Column, Row } from "react-responsive-grid";

class Example extends React.Component {
  render() {
    return (
      <Row columns={2}>
        <Column sm={2} md={1} />
      </Row>
    );
  }
}
```

## Components

### Row

```tsx
<Row columns={2}>// Columns can be value from 2 to 12 ...</Row>
```

### Column

```tsx
<Row sm={4} md={2} lg={1}>
  // Accepts small, medium, and large column values that will be used at certain
  breakpoints ...
</Row>
```

## License

MIT © [beccanelson](https://github.com/beccanelson)

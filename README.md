# eos-icons-react

> A react library for EOS icons which delivers a set of icons that are made 1-to-1 following Material Design Icons: eos-icons.com.

## Install

After publishing this package you can run

```bash
npm install --save eos-icons-react
```

## Project Setup

Clone this repo -

```bash
git clone https://github.com/EOS-uiux-Solutions/eos-icons-react.git
```

Run `npm install` in the project root and also in the example directory directory so it downloads all the modules used in this project

Run `npm start` in the project root directory which creates `dist` directoy and also run the example code to see the ouput -

```bash
cd example
npm start
```

## Usage

```jsx
import React from 'react'

import { EosIcon } from 'eos-icons-react'
import 'eos-icons-react/dist/index.css'

const App = () => {
    return <EosIcon name='android' size={60} />
  }
}
```

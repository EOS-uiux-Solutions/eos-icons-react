# eos-icons-react
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## Using eos-icons-react in your projects
Refer to [EOS Icons](eos-icons.com) for more details about all the icons that are supported by EOS-Icons React

[Storybook EOS-Icons React](https://eos-uiux-solutions.github.io/eos-icons-react/), checkout storybook for an in-depth look at the various different icons that are provided by EOS-Icons React as well the props available for configuring icons.

### Installation
```
# yarn
yarn add eos-icons-react
# npm
npm install eos-icons-react
```

### Usage
#### common icons usage
```
import { EOS_STAR } from 'eos-icons-react';

<EOS_STAR />
```
#### Filled/Outlined icons usage
```
import { EOS_STAR_FILED, EOS_STAR_OUTLINED } from 'eos-icons-react';

<EOS_STAR_FILED />
<EOS_STAR_OUTLINED />
```
#### Animated icons usage
```
import { EOS_LOADING_ANIMATED } from 'eos-icons-react';

<EOS_LOADING_ANIMATED />
```

### Props
#### Prop usage
```
import { EOS_LOADING_ANIMATED } from 'eos-icons-react';

# The below icons will have the color #FF5733, size xxl and a rotation of 45 degree
<EOS_LOADING_ANIMATED color="#FF5733" size="xxl" rotate={45}/>
```

#### Prop Details
| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| size | string, number | 'm' | sets the size of icon * |
| color | string | black | sets the color of icon |
| rotate | string, number | 0 | sets the rotation degree of icon |
| horizontalFlip | boolean | false | Flips icon horizontally |
| verticalFlip | boolean | false | Flips icon vertically |
| theme | string | 'filled' | sets icon theme (only available for common components)** |

> * Size can be provided using either string or number. Pre-Defined size list
| Size Name | Size Value |
|:-----|:-----|
| xs | 4 |
| s | 8 |
| base | 14 |
| m | 18 |
| l | 24 |
| xl | 32 |
| xxl | 48 |
| xxxl | 64 |

> ** The theme prop is only available for common icon component. Eos-Icons React has 4 different types of icon components (common / filled / outlined / animated). The common icon component contains both filled and outlined version of the icon. For switching between the two types of version you can either supply 'outlined' or 'filled' to the theme prop. 

## Development of EOS icons React
- Cloning the repo: 
```
git clone https://github.com/EOS-uiux-Solutions/eos-icons-react
```

- run for installing all the required dependencies.
```
npm install
```

### Package build command
- run for producing the final build files.
```
npm run generate
```

### Testing
Follow the above steps before running the test command. The test sequence requires the presence of the final build files in order to test them.

- run to start the testing of the final build files using Jest.
```
npm run test
```

### Build process
![Untitled-2021-07-18-1339](https://user-images.githubusercontent.com/54861487/126060393-13098cd1-e7aa-4fb7-8634-b15e3369f7ff.png)

# Learn more about the EOS Design System

- [EOS Design System](https://www.eosdesignsystem.com/)

- [EOS Icons](eos-icons.com)

- [Follow us on Twitter](https://twitter.com/eosdesignsystem)

- [Join us in Slack](https://slack.eosdesignsystem.com)

# Our "thank you" section

### Tested for every browser in every device

Thanks to [Browserstack](https://www.browserstack.com) and their continuous contribution to open source projects, we continuously test the EOS to make sure all our features and components work perfectly fine in all browsers.
Browserstack helps us make sure our Design System also delivers a peace of mind to all developers and designers making use of our components and layout in their products.

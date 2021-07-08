import generateIconComponents from './iconScript'
import generateIconCommonComponents from './iconCommonScript'

// Script for generating FILLED theme React SVG components
if (process.argv[2] === '--target=filled') {
  generateIconComponents({
    type: 'filled',
    from: 'svg/filled'
  })
}

// Script for generating ANIMATED theme React SVG components
if (process.argv[2] === '--target=animated') {
  generateIconComponents({
    type: 'animated',
    from: 'svg/animated'
  })
}

// Script for generating OUTLINED theme React SVG components
if (process.argv[2] === '--target=outlined') {
  generateIconComponents({
    type: 'outlined',
    from: 'svg/outlined'
  })
}

// Script for generating COMMON theme React SVG components
if (process.argv[2] === '--target=common') {
  generateIconCommonComponents({
    type: 'common',
    from: 'svg/filled'
  })
}

import * as path from 'path'
import * as fs from 'fs'

import { IconGenerateScript } from '../interface/index'
import componentCommonTemplate from '../template/iconCommonComponent'
import iconIndexTemplate from '../template/iconIndex'

async function generateIconCommonComponents ({ type, from }: IconGenerateScript) {
  const iconNames = await fs.promises.readdir(from)
  for (const iconName of iconNames) {
    // SCREAMING_SNAKE_CASE naming for common React component
    const fileName = iconName.slice(0, iconName.length - 4).toUpperCase()
    let filledFlag = false

    // fetching Data of the required SVG file
    fs.readFile(path.resolve(__dirname, `../svg/filled/${iconName}`), 'utf8', async function (err, filled) {
      if (err) {
        // incase there is no filled version
        filledFlag = true
      }

      fs.readFile(path.resolve(__dirname, `../svg/outlined/${iconName}`), 'utf8', async function (err, outlined) {
        if (err) {
          // incase there is no outlined version
          outlined = filled
        }

        if (filledFlag) {
          filled = outlined
        }

        // eslint-disable-next-line no-template-curly-in-string
        const propString = 'svg className={classString} data-testid="eos-svg-component" transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`} fill={color} width={size} height={size}'
        filled = filled.replace('svg', propString)
        outlined = outlined.replace('svg', propString)

        const render = componentCommonTemplate({ fileName, filled, outlined })
        const indexContent = iconIndexTemplate({ fileName })

        // creates a .tsx file at src/icon/ containing a react component
        fs.writeFile(
          path.resolve(__dirname, `../src/icon/${fileName}.tsx`),
          render,
          {
            flag: 'w+'
          },
          err => {
            if (err) {
              console.error(err)
            }
          })

        // creates a .tsx index file at src/icon/ containing exports of all the icons
        fs.writeFile(
          path.resolve(__dirname, '../src/icon/index.tsx'),
          indexContent,
          {
            flag: 'a+'
          },
          err => {
            if (err) {
              console.error(err)
            }
          })
      })
    })
  }
}

export default generateIconCommonComponents

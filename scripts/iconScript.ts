import * as path from 'path'
import * as fs from 'fs'

import { IconGenerateScript } from '../interface/index'
import componentTemplate from '../template/iconComponent'
import iconIndexTemplate from '../template/iconIndex'
import { nameFunction } from '../utils/nameFunction'

async function generateIconComponents ({ type, from }: IconGenerateScript) {
  const iconNames = await fs.promises.readdir(from)
  for (const iconName of iconNames) {
    const fileName = nameFunction({ iconName, type })

    // fetching Data of the required SVG file
    fs.readFile(path.resolve(__dirname, `../svg/${type}/${iconName}`), 'utf8', async function (err, data) {
      if (err) {
        console.error(err)
      }

      if (type === 'animated') {
        data = data.replace('xml:space="preserve"', '')
        if (fileName === 'INSTALLING_ANIMATED') {
          while (data.includes('class="st0"')) {
            data = data.replace('class="st0"', 'className="st0"')
          }
        }
      }

      // eslint-disable-next-line no-template-curly-in-string
      const propString = 'svg className={classString} data-testid="eos-svg-component" transform={`rotate(${rotate}) translate(${translateX}, ${translateY}) scale(${scaleX}, ${scaleY})`} fill={color} width={size} height={size}'
      data = data.replace('svg', propString)

      const render = componentTemplate({ fileName, data })
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
  }
}

export default generateIconComponents

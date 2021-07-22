// Script for generating stories for storybook
import * as path from 'path'
import * as fs from 'fs'

import storybookTemplate from '../template/storybookTemplate'
import { IconGenerateScript } from '../interface/index'
import { nameFunction } from '../utils/nameFunction'

async function generateStoryBookStories ({ type, from }: IconGenerateScript) {
  const iconNames = await fs.promises.readdir(from)
  const iconNamesOutlined = await fs.promises.readdir('svg/outlined')
  for (const iconName of iconNames) {
    let fileName = iconName
    let outlined = ''
    let filled = ''
    if (type === 'common') {
      fileName = iconName.slice(0, iconName.length - 4).toUpperCase()
      type = 'filled'
      filled = nameFunction({ iconName, type })
      // If outlined version exists or not
      const findStringInArray = (array: string[], string: string) => {
        for (const item of array) {
          if (item.includes(string)) {
            return true
          }
        }
        return false
      }

      if (findStringInArray(iconNamesOutlined, iconName)) {
        type = 'outlined'
        outlined = nameFunction({ iconName, type })
      }
      type = 'common'
    } else {
      fileName = nameFunction({ iconName, type })
    }

    const render = storybookTemplate({ fileName, outlined, filled })
    // creates a stories.tsx file at storybook/stories containing a react component
    fs.writeFile(
      path.resolve(__dirname, `../storybook/stories/${fileName}.stories.tsx`),
      render,
      {
        flag: 'w+'
      },
      err => {
        if (err) {
          console.error(err)
        }
      })
  }
}

export default generateStoryBookStories

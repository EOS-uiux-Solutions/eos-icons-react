import * as path from 'path';
import * as fs from 'fs';

import { iconGenerateScript } from '../interface/index';
import componentTemplate from '../template/iconComponent';
import iconIndexTemplate from '../template/iconIndex';

async function generateIconComponents({type,from}: iconGenerateScript) {

  const iconNames = await fs.promises.readdir(from);
  for(const iconName of iconNames) {
    const fileName = iconName.slice(0, iconName.length - 4).concat(type.charAt(0).toUpperCase() + type.slice(1));
    fs.readFile(path.resolve(__dirname,`../svg/${type}/${iconName}`),'utf8', async function (err,data) {
      if(err) {
        console.error(err);
      }

      if(type === 'animated') {
        data = data.replace('xml:space="preserve"','');
        if(fileName === 'installingAnimated') {
          while(data.includes('class="st0"')) {
            data = data.replace('class="st0"','className="st0"');
          }
        }
      }

      const propString = "svg transform={`rotate(${rotate})`} fill={color} width={width} height={height}"
      data = data.replace('svg',propString);

      const render = componentTemplate({fileName,data});
      const indexContent = iconIndexTemplate({fileName});

      // creates a .tsx file at src/icon/ containing a react component
      fs.writeFile(
        path.resolve(__dirname,`../src/icon/${fileName}.tsx`), 
        render, 
        {
          flag: 'w+'
        },
        err => {
          if(err) {
            console.error(err)
          }
      })

      // creates a .tsx index file at src/icon/ containing exports of all the icons
      fs.writeFile(
        path.resolve(__dirname, `../src/icon/index.tsx`),
        indexContent,
        {
          flag: 'a+'
        },
        err => {
          if(err) {
            console.error(err)
          }
      });
    })
    
    fs.close
  }
}

export default generateIconComponents;
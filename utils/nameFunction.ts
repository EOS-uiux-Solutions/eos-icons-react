import { NameProps } from '../interface/index'

export function nameFunction ({ iconName, type }: NameProps) {
  // SCREAMING_SNAKE_CASE naming convention
  // EOS_NAME_THEME
  const NAME = iconName.slice(0, iconName.length - 4).toUpperCase()
  const THEME = `_${type.toUpperCase()}`

  // NAME_THEME
  const fileName = NAME.concat(THEME)

  return fileName
}

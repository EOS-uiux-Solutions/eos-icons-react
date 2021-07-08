import { FlipProps } from './helper'

// Function for providing ScaleX, ScaleY, TranslateX and TranslateY based on prop to React SVG components
export function flipFunction ({ horizontalFlip, verticalFlip }: FlipProps) {
  let translateX = 0
  let translateY = 0
  let scaleX = 1
  let scaleY = 1

  if (horizontalFlip) {
    scaleX = -1
    translateX = 24
  }

  if (verticalFlip) {
    scaleY = -1
    translateY = 24
  }

  return { scaleX, scaleY, translateX, translateY }
}

import { src, dest } from 'gulp'
import { CopyCreatorOptions } from '../interface'

export const copy = ({ from, toDir }: CopyCreatorOptions) =>
  function CopyFiles () {
    return src(from).pipe(dest(toDir))
  }

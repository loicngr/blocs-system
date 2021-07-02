import { getDefaultState } from '@/store/plugins/localStoragePlugin'
import { DEFAULT_SCENES } from '@/consts/app'

export default function () {
  return getDefaultState(
    'scene',
    {
      scenes: DEFAULT_SCENES
    }
  )
}

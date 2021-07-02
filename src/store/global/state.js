import { getDefaultState } from '@/store/plugins/localStoragePlugin'

export default function () {
  return getDefaultState(
    'global',
    {
      currentSource: null,
      currentScene: null
    }
  )
}

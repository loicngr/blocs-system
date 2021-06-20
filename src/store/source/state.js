import { getDefaultState } from '@/store/plugins/localStoragePlugin'
import { DEFAULT_SOURCES } from '@/consts/app'

export default function () {
  return getDefaultState(
    'source',
    {
      sources: DEFAULT_SOURCES
    }
  )
}

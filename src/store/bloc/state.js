import { getDefaultState } from '@/store/plugins/localStoragePlugin'
import { DEFAULT_BLOCS } from '@/consts/app'

export default function () {
  return getDefaultState(
    'bloc',
    {
      blocs: DEFAULT_BLOCS
    }
  )
}

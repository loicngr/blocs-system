import { LAYOUT } from '@/consts/app'
import { getDefaultState } from '@/store/plugins/localStoragePlugin'

export default function () {
  return getDefaultState(
    'bloc',
    {
      blocs: LAYOUT.blocs
    }
  )
}

export function blocs (state) {
  return state.blocs
}

export function lastBlocsId (state) {
  const _blocs = state.blocs
  return _blocs[_blocs.length - 1].id
}

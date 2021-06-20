export function sources (state) {
  return state.sources
}

export function lastSourcesId (state) {
  const _sources = state.sources

  return _.isEmpty(_sources) ? 0 : _sources[_sources.length - 1].id
}

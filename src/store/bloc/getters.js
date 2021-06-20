export function allBlocs (state) {
  return state.blocs
}

export function blocs (state, getters, rootState, rootGetters) {
  const currentSource = rootGetters['global/currentSource']
  const currentScene = rootGetters['global/currentScene']
  const _blocs = _.cloneDeep(state.blocs)
  return _blocs.filter((_b) => _b.sourceId === currentSource && _b.sceneId === currentScene)
}

export function lastBlocsId (state) {
  const _blocs = state.blocs

  return _.isEmpty(_blocs) ? 0 : _blocs[_blocs.length - 1].id
}

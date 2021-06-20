export function allScenes (state) {
  return state.scenes
}

export function scenes (state, getters, rootState, rootGetters) {
  const currentSource = rootGetters['global/currentSource']
  const _scenes = _.cloneDeep(state.scenes)
  return _scenes.filter((_s) => _s.sourceId === currentSource)
}

export function lastScenesId (state) {
  const _scenes = state.scenes

  return _.isEmpty(_scenes) ? 0 : _scenes[_scenes.length - 1].id
}

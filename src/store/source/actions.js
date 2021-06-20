export function updateSourcesAction (state, val) {
  state.commit('updateSourceState', val)
}

export function deleteSourceAction (state, id) {
  const _sources = _.cloneDeep(state.getters.sources)

  _.remove(_sources, function (source) {
    return source.id === id
  })

  updateSourcesAction(state, _sources)
}

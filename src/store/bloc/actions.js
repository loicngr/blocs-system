export function updateBlocsAction (state, val) {
  state.commit('updateBlocState', val)
}

export function deleteBlocAction (state, id) {
  const _blocs = _.cloneDeep(state.getters.allBlocs)

  _.remove(_blocs, function (bloc) {
    return bloc.id === id
  })

  updateBlocsAction(state, _blocs)
}

export function deleteBlocsAction (state, sourceId, sceneId = -1) {
  const _blocs = _.cloneDeep(state.getters.allBlocs)

  _.remove(_blocs, function (bloc) {
    if (bloc.sourceId === sourceId) {
      return sceneId === -1 || bloc.sceneId === sceneId
    }
  })

  updateBlocsAction(state, _blocs)
}

export function updateBlocsAction (state, val) {
  state.commit('updateBlocState', val)
}

export function deleteBlocAction (state, id) {
  const _blocs = _.cloneDeep(state.getters.blocs)

  _.remove(_blocs, function (bloc) {
    return bloc.id === id
  })

  updateBlocsAction(state, _blocs)
}

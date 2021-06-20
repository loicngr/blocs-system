export function updateScenesAction (state, val) {
  state.commit('updateSceneState', val)
}

export function deleteSceneAction (state, id) {
  const _scenes = _.cloneDeep(state.getters.allScenes)

  _.remove(_scenes, function (scene) {
    return scene.id === id
  })

  updateScenesAction(state, _scenes)
}

export function deleteScenesAction (state, sourceId) {
  const _scenes = _.cloneDeep(state.getters.allScenes)

  _.remove(_scenes, function (scene) {
    return scene.sourceId === sourceId
  })

  updateScenesAction(state, _scenes)
}

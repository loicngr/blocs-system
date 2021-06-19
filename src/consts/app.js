/**
 * Clé de stockage de la donnée dans le local storage
 * @type {string}
 */
export const STORAGE_KEY = 'ZY'

export const SCREENS_SIZE = {
  width: 1920,
  height: 1080
}

export const LAYOUT = {
  blocs: [
    {
      id: 1,
      label: 'top bar',
      width: 1920,
      height: 150,
      yPosition: 0,
      xPosition: 0,
      bgColor: 'silver'
    },
    {
      id: 2,
      label: 'Cam in game',
      width: 400,
      height: 400,
      yPosition: 300,
      xPosition: 50,
      bgColor: 'silver'
    }
  ]
}

export const LAYOUT_RULES = {
  blocs: {
    minHeight: 150,
    minWidth: 150,
    maxHeight: 1080,
    maxWidth: 1920
  }
}

export const ERROR_POS_TITLE = 'Alerte de positionnement'
export const ERROR_POS_MESSAGE = 'Le bloc est sortie du cadre prédéfini.'

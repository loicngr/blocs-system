/**
 * Écrit dans le blob dans un fichier
 * @param fileEntry
 * @param blob
 * @returns {Promise}
 */
const writeFile = (fileEntry, blob) => new Promise(
  (resolve, reject) => {
    fileEntry.createWriter((fileWriter) => {
      fileWriter.onwriteend = function () {
        resolve(fileWriter)
      }
      fileWriter.onerror = reject
      fileWriter.write(blob)
    })
  }
)

/**
 * Créé un fichier dans le dossier et écrit le blob
 * @param dirEntry
 * @param fileName
 * @param blob
 * @returns {Promise}
 */
const createFile = async (dirEntry, fileName, blob) => new Promise((resolve, reject) => {
  // Creates a new file or returns the file if it already exists.
  dirEntry.getFile(
    fileName,
    { create: true, exclusive: false },
    (fileEntry) => {
      writeFile(fileEntry, blob)
        .then(() => resolve(fileEntry))
        .catch(reject)
    },
    reject)
})

/**
 * Créé et retourne un fichier temporaire
 * @param fileName
 * @param blob
 * @returns {Promise}
 */
export const createTmpFile = async (fileName, blob) =>
  new Promise((resolve, reject) => {
    window.requestFileSystem(
      window.TEMPORARY,
      blob.size,
      (fs) => {
        createFile(fs.root, fileName, blob)
          .then((file) => resolve(file))
          .catch(reject)
      },
      reject
    )
  })

/**
 * Afficher des logs uniquement en dev
 * Le premier argument peut définir le log lvl `error`, `log`, 'warning`
 * @param args
 */
export const devLog = (...args) => {
  const [message, ...rest] = args
  if (window.showLogs || process.env.DEV) {
    const logLevels = ['error', 'log', 'warn', 'info']
    const mth = logLevels.indexOf(message) !== -1 ? message : null
    const _args = typeof message === 'string' && mth === null
      ? ['[DEV] ' + message, ...rest]
      : ['[DEV]', ...args]
    console[(mth || 'info')](..._args)
  }
}

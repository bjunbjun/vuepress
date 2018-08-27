const AppContext = require('./AppContext')

module.exports = async function prepare (sourceDir, {
  isProd,
  plugins,
  theme
}) {
  const appContext = new AppContext(sourceDir, { plugins, theme, isProd })
  await appContext.process()
  return appContext
}

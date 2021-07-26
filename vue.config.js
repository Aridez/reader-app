module.exports = {
    pluginOptions: {
        electronBuilder: {
            preload: 'src/background/preload.js',
            mainProcessFile: 'src/background/background.js',
            rendererProcessFile: 'src/renderer/renderer.js',
        }
    }
}
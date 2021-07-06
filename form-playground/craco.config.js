const CracoEsbuildPlugin = require('craco-esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');

// SyntaxError: unknown: Unexpected reserved word 'interface' when importing svgs

module.exports = {
  plugins: [{ plugin: CracoEsbuildPlugin, options: {enableSvgr: true,  plugins: [
    svgrPlugin(),
], } }],
};
// const { Compilation } = require("webpack")
const { ConcatSource } = require("webpack-sources");  //源码操作包

class FooterPlugin {
  constructor(options) {
    console.log("options", options);
    this.options = options;
  }

  apply(compiler) {
    // console.log('FooterPlugin',compiler)
    compiler.hooks.compilation.tap("FooterPlugin", (compilation) => {
      compilation.hooks.processAssets.tap("FooterPlugin", () => {
        const chunks = compilation.chunks;
        console.log("chunks", chunks);
        for (const chunk of chunks) {
          for (const file of chunk.files) {
            console.log("file", file);
            const comment = `/* ${this.options.footer} */`;
            compilation.updateAsset(
              file,
              (old) => new ConcatSource(old, "\n", comment)
            );
          }
        }
      });
    });
  }
}

module.exports = FooterPlugin;

const path = require('path');
const pug = require('pug');
const fs = require('fs');
const globby = require('globby');
const config = require('../src/server/config');
const { assetPath } = require('../src/server/helpers/asset');

const inputDir = config.views;
const outputDir = path.resolve(__dirname, '..', 'site');

const mapRelativeFilename = filename => path.basename(filename, '.pug');

const compileHtmlFile = fileName => {
  const compileToFunction = pug.compileFile(`${inputDir}/${fileName}.pug`, {
    basedir: inputDir,
    pretty: true,
  });
  const html = compileToFunction({
    req: { originalUrl: '' },
    assetPath,
  });

  fs.writeFile(`${outputDir}/${fileName}.html`, html, err => {
    if (err) throw err;
  });
};

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

globby(config.autoroutes).then(names =>
  names.map(mapRelativeFilename).forEach(compileHtmlFile)
);

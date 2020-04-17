const path = require('path');
const pug = require('pug');
const fs = require('fs');
const globby = require('globby');
const config = require('../src/server/config');

const inputDir = config.views;
const outputDir = '../site';

const mapRelativeFilename = filename => path.basename(filename, '.pug');

const compileHtmlFile = fileName => {
  const compileToFunction = pug.compileFile(`${inputDir}/${fileName}.pug`, {
    basedir: inputDir,
    pretty: true,
  });
  const html = compileToFunction();

  fs.writeFile(`${outputDir}/${fileName}.html`, html, err => {
    if (err) throw err;
    console.log(`${fileName}.html has been saved!`);
  });
};

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

globby(config.autoroutes).then(names =>
  names.map(mapRelativeFilename).forEach(compileHtmlFile)
);

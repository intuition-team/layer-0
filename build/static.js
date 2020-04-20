const path = require('path');
const pug = require('pug');
const fs = require('fs-extra');
const globby = require('globby');
const config = require('../src/server/config');
const { assetPath } = require('../src/server/helpers/asset');

const inputDir = config.views;
const outputDir = path.resolve(__dirname, '..', 'site');

const mapRelativeFilename = filename => path.basename(filename, '.pug');

const compileHtmlFile = fileName => {
  const template = pug.compileFile(path.resolve(inputDir, `${fileName}.pug`), {
    basedir: inputDir,
    pretty: true,
  });
  const html = template({
    req: { originalUrl: '' },
    assetPath,
  });

  fs.writeFile(path.resolve(outputDir, `${fileName}.html`), html, err => {
    if (err) throw err;
  });
};

if (fs.existsSync(outputDir)) {
  fs.removeSync(outputDir);
}

fs.mkdirSync(outputDir);

globby(config.autoroutes).then(names =>
  names.map(mapRelativeFilename).forEach(compileHtmlFile)
);

fs.copy(
  path.resolve(__dirname, '..', 'static'),
  path.resolve(__dirname, '..', 'site'),
  err => {
    if (err) {
      throw err;
    } else {
      fs.readdir(
        path.resolve(__dirname, '..', 'site', 'assets'),
        (err, files) => {
          files.forEach(file => {
            const m = file.match(/\.([a-z, A-Z, 0-9]){8}\./);
            if (m) {
              const name = file.replace(m[0], '.');
              fs.renameSync(
                path.resolve(__dirname, '..', 'site', 'assets', file),
                path.resolve(__dirname, '..', 'site', 'assets', name)
              );
            }
          });
        }
      );
    }
  }
);

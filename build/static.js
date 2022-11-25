const path = require('path');
const pug = require('pug');
const fs = require('fs-extra');
const globby = require('globby');
const { ncp } = require('ncp');
const config = require('../src/server/config');
const helpers = require('../src/server/helpers');

const viewsDir = config.views;
const staticDir = path.resolve(__dirname, '..', 'static');
const siteDir = path.resolve(__dirname, '..', 'site');

const pugOptions = {
  basedir: viewsDir,
  pretty: true,
};

const getLocals = pugPath => {
  const viewPath = `/${path.relative(config.views, pugPath)}`;
  const url = viewPath.replace(/(index\.pug|\.pug)$/gi, '');

  const req = { url, originalUrl: url };
  const res = { locals: {} };
  const next = () => {};

  helpers()(req, res, next);

  return res.locals;
};

const compilePugToHtml = pugPath => {
  const template = pug.compileFile(pugPath, pugOptions);
  const html = template(getLocals(pugPath));
  const fileDir = path.dirname(path.relative(config.views, pugPath));
  const fileName = path.basename(pugPath, '.pug');
  const htmlPath = path.resolve(siteDir, fileDir, `${fileName}.html`);
  const htmlDir = path.dirname(htmlPath);

  if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir, { recursive: true });
  fs.writeFileSync(htmlPath, html);
};

// Remove stale site's build.
if (fs.existsSync(siteDir)) {
  fs.removeSync(siteDir);
}

// Create site's directory.
fs.mkdirSync(siteDir);

// Build pug files to html files.
globby(config.autoroutes).then(pugPaths => pugPaths.forEach(compilePugToHtml));

// Copy static files.
ncp(staticDir, siteDir);

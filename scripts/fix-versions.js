/* eslint-disable security/detect-non-literal-fs-filename */
const path = require('path');
const fs = require('fs');
const glob = require('glob');

/**
 * Get all package.json in "package" folders
 * @returns {Promise<string[]>}
 */
function getPackages() {
  return new Promise((resolve, reject) => {
    glob(path.resolve(__dirname, '../packages/*/package.json'), (err, files) => (err ? reject(err) : resolve(files)));
  });
}

function updateVersion(content, versions) {
  Object.entries(versions).forEach(([name, version]) => {
    const finalVersion = `^${version}`;
    ['devDependencies', 'dependencies', 'peerDependencies'].forEach((dep) => {
      if (content[dep] && content[dep][name] && content[dep][name] !== finalVersion) {
        // eslint-disable-next-line no-console
        console.log(`[!] ${content.name} found ${name} in "${dep}" of  => ${content[dep][name]} to ${finalVersion}`);
        content[dep][name] = finalVersion;
      }
    });
  });
}

async function init() {
  const files = await getPackages();
  const filesContent = files.map((file) => ({ file, content: JSON.parse(fs.readFileSync(file, 'utf8')) }));
  const versions = filesContent.reduce((a, { content }) => ({ ...a, [content.name]: content.version }), {});
  filesContent.forEach(({ file, content }) => {
    updateVersion(content, versions);
    fs.writeFileSync(file, JSON.stringify(content, null, 2));
  });
}

init();

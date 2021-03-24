const minimist = require('minimist');
const fs = require('fs');
const path = require('path');

const args = minimist(process.argv.slice(2), {
  alias: {
    stateless: 's',
    name: 'n'
  }
});


const componentName = args.name.toLowerCase();

const cssTemplate = `
.${componentName} {

}`;

const jsTemplate = `
  import component from './${componentName}.jsx';

  export default component;
`;

fs.mkdirSync(path.resolve(__dirname, '..', '..', 'src', 'components', componentName));

fs.writeFileSync(path.resolve(__dirname, '..', '..', 'src', 'components', componentName, 'style.scss'), cssTemplate);
fs.writeFileSync(path.resolve(__dirname, '..', '..', 'src', 'components', componentName, 'index.js'), jsTemplate);

let jsxTemplate = '';

if (args.stateless) {
  jsxTemplate = require('./stateless')(componentName);
} else {
  jsxTemplate = require('./statefull')(componentName);
};

fs.writeFileSync(path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`), jsxTemplate);

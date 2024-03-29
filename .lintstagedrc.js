const path = require('path');

const buildEslintCommand = (filenames) =>
  `npx next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': ['npx prettier --write', buildEslintCommand]
};

const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
  '@mui/icons-material'
]);

module.exports = withTM({
  reactStrictMode: true
});

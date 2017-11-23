import buble from 'rollup-plugin-buble'

export default {
  input: 'lib/main.js',
  plugins: [buble()],

  output: {
    file: 'lib/main.build.js',
    format: 'iife'
  }
};

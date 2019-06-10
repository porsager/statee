import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

export default [
  {
    input: 'lib/index.js',
    output: {
      file: 'dist/statee.js',
      exports: 'default',
      format: 'umd',
      name: 'Statee',
      sourcemap: true
    },
    plugins: [
      buble(),
      filesize()
    ]
  }, {
    input: 'lib/index.js',
    output: {
      file: 'dist/statee.min.js',
      exports: 'default',
      format: 'umd',
      name: 'Statee',
      sourcemap: true
    },
    plugins: [
      buble(),
      terser({ mangle: true, compress: true }),
      filesize()
    ]
  }, {
    input: 'lib/index.js',
    output: {
      file: 'dist/statee.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      buble(),
      filesize()
    ]
  }
]

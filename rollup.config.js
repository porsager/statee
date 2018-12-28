import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import filesize from 'rollup-plugin-filesize'

export default [
  {
    input: 'lib/index.js',
    output: {
      file: 'statee.js',
      exports: 'default',
      format: 'umd',
      name: 'b',
      sourcemap: true
    },
    plugins: [
      buble(),
      filesize()
    ]
  }, {
    input: 'lib/index.js',
    output: {
      file: 'statee.min.js',
      exports: 'default',
      format: 'umd',
      name: 'b',
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
      file: 'statee.esm.js',
      format: 'esm',
      sourcemap: true
    },
    plugins: [
      buble(),
      filesize()
    ]
  }
]

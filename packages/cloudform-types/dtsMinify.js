const ts = require('typescript')
const dtsMinify = require('dts-minify')
const path = require('path')
const fs = require('fs')

const dtsMinifier = dtsMinify.createMinifier(ts)
const files = process.argv.slice(2)

for (let file of files) {
  file = path.resolve(file)
  let code = fs.readFileSync(file, 'utf8')
  code = dtsMinifier.minify(code)
  fs.writeFileSync(file, code)
}

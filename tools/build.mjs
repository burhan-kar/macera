// Derleme: src/ → app.js (tek, küçültülmüş dosya) ve sw.js (önbellek listesi + sürüm)
import { build } from 'esbuild';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['safari15', 'chrome100'],
  outfile: 'app.js',
  legalComments: 'none',
});

const list = ['index.html', 'style.css', 'app.js', 'manifest.webmanifest'];
for (const dir of ['fonts', 'icons', 'audio']) {
  for (const f of readdirSync(dir)) if (statSync(join(dir, f)).isFile() && !f.endsWith('.txt')) list.push(`${dir}/${f}`);
}
const hash = createHash('sha256');
list.forEach(f => hash.update(readFileSync(f)));
const version = 'macera-' + hash.digest('hex').slice(0, 10);
const files = ['./', ...list];
writeFileSync('sw.js', readFileSync('tools/sw.template.js', 'utf8')
  .replace('__VERSION__', version)
  .replace('__FILES__', JSON.stringify(files, null, 2)));
console.log(`app.js ${(statSync('app.js').size / 1024).toFixed(0)} KB, sw ${version}, ${files.length} dosya`);

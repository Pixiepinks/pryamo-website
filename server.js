import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const port = process.env.PORT || 4173;
const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png' };

createServer(async (request, response) => {
  const urlPath = decodeURIComponent(new URL(request.url, `http://localhost:${port}`).pathname);
  const safePath = normalize(urlPath === '/' ? '/index.html' : urlPath).replace(/^\.\.(\/|\\|$)/, '');
  try {
    const staticPath = safePath.startsWith('/assets/') ? join(root, 'public', safePath) : join(root, safePath);
    const file = await readFile(staticPath);
    response.writeHead(200, { 'Content-Type': types[extname(safePath)] || 'application/octet-stream' });
    response.end(file);
  } catch {
    const fallback = await readFile(join(root, 'index.html'));
    response.writeHead(200, { 'Content-Type': types['.html'] });
    response.end(fallback);
  }
}).listen(port, () => console.log(`PRYAMO website running on http://localhost:${port}`));

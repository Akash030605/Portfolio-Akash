import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';
import {createLegoAkashSvg} from './src/assets/legoAkashAssets';

function legoHeroAssetFallbackPlugin() {
  return {
    name: 'lego-hero-asset-fallback',
    configureServer(server: {middlewares: {use: (fn: (req: {url?: string}, res: {setHeader: (k: string, v: string) => void; end: (b: string) => void}, next: () => void) => void) => void}}) {
      server.middlewares.use((req, res, next) => {
        const cleanUrl = req.url?.split('?')[0];
        if (cleanUrl === '/favicon.ico') {
          const logoPath = path.resolve(__dirname, 'src/assets/LOGGO.png');
          if (fs.existsSync(logoPath)) {
            res.setHeader('Content-Type', 'image/png');
            res.end(fs.readFileSync(logoPath) as unknown as string);
            return;
          }
        }
        if (cleanUrl === '/assets/akash-hero.png' || cleanUrl === '/assets/akash-hero-reveal.png') {
          const publicFile = path.resolve(__dirname, 'public', cleanUrl.slice(1));
          if (fs.existsSync(publicFile)) {
            return next();
          }
          const isReveal = cleanUrl.includes('reveal');
          res.setHeader('Content-Type', 'image/svg+xml');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(createLegoAkashSvg(isReveal));
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [legoHeroAssetFallbackPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

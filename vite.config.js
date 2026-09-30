import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'hostinger' ? '/menu/' : '/',
  define: { __SINGLE_PAGE__: JSON.stringify(['hostinger', 'subdomain'].includes(mode)) },
  build: { outDir: mode === 'hostinger' ? 'dist-hostinger/menu' : mode === 'subdomain' ? 'dist-subdomain' : 'dist' },
}));

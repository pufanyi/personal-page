import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2'
import zlib from 'zlib'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Brotli compression (best ratio) + Gzip fallback
    compression({
      algorithms: [
        ['brotliCompress', { params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 } }],
        ['gzip', { level: 9 }],
      ],
      exclude: [/\.(br|gz)$/],
    }),
  ],
  build: {
    // Use terser for more aggressive minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Smaller chunks
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
  // CSS minification with LightningCSS
  css: {
    transformer: 'lightningcss',
  },
})

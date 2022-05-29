module.exports = (api) => {
  const mode = process.env.NODE_ENV ?? 'production';

  api.cache.using(() => mode);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
          },
          useBuiltIns: 'usage',
          debug: false,
          corejs: 3,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-throw-expressions',
      '@babel/plugin-proposal-object-rest-spread',
      // Applies the react-refresh Babel plugin on development mode only
      mode !== 'production' && 'react-refresh/babel',
    ].filter(Boolean),
  };
};

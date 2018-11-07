module.exports = {
  staticFileGlobs: [
    'public/assets/**.css',
    'public/**.html',
	'public/**/**.html',
    'public/assets/images/**.*',
    'public/assets/**.js',
  ],
  stripPrefix: 'public/',
  runtimeCaching: [{
    urlPattern: '/',
    handler: 'networkFirst',
  }],
  root: 'public',
};

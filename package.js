Package.describe({
  name: 'poetic:react-velocityjs',
  version: '0.0.1',
  summary: "Meteor wrapper for Twitter-Fabric's velocity-react. Provides velocity component and helpers.",
  git: 'https://github.com/poetic/react-velocityjs.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('react-velocityjs.js');
});


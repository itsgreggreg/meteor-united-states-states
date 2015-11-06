Package.describe({
  name: 'greggreg:united-states-states',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "A US States list with some helpers for SimpleSchema",
  git: "https://github.com/itsgreggreg/meteor-united-states-states",
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('united-states-states.js');
  api.export("USS", ["client", "server"]);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('greggreg:united-states-states');
  api.addFiles('united-states-states-tests.js');
});

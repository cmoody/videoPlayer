module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

  	connect: {
      options: {
        port: 8000,
      },

      dev: {
        options: {
          base: 'src',
          keepalive: true
        }
      }
    },

    // https://npmjs.org/package/grunt-ftp-deploy
    'ftp-deploy': {
      build: {
        auth: {
          host: 'chasethebits.com',
          port: 21,
          authKey: 'key1'
        },
        src: 'build',
        dest: '/demo/videoPlayer',
        exclusions: ['src/**/.DS_Store', 'src/**/Thumbs.db']
      }
    }

  });

  grunt.registerTask('dev', [
  	'connect:dev'
  ]);

  grunt.registerTask('prod', [
    'ftp-deploy'
  ]);

};
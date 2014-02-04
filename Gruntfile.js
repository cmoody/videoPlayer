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
    }

  });

  grunt.registerTask('dev', [
  	'connect:dev'
  ]);

  grunt.registerTask('prod', [

  ]);

};
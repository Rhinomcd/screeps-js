module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        screeps: {
            options: {
                email: 'rhinomcd@gmail.com',
                token: process.env.SCREEPS_API_KEY
            },
            dist {
                src: ['dist/*.js']
            }
        },
        jshint: {

        }
    });
    grunt.registerTaks('default', ['jshint']);
};

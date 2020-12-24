module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-rollup');
    grunt.initConfig({
        screeps: {
            options: {
                email: 'rhinomcd@gmail.com',
                token: process.env.SCREEPS_API_KEY,
                branch: 'Screeps-js'
            },
            dist: {
                src: ['dist/*.js']
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        rollup: {
            options: {
                'sourceMap': 'true'
            },
            main: {
                src: 'src/main.js',
                dest: 'dist/main.js'
            }
        }
    });
    grunt.registerTask('default', ['jshint', 'rollup', 'screeps']);
};

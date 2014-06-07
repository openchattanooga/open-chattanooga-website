module.exports  =   function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/screen.css': 'sass/screen.scss'
                }
            },
            options: {
                loadPath: [
                    'bower_components/bourbon/dist',
                    'bower_components/bootstrap-sass-official/vendor/assets/stylesheets'
                ],
                sourcemap: true,
                style: 'compressed',
                banner: '/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.license %> | <%= pkg.homepage %> */'
            }
        },
        jshint: {
            files: [
                'Gruntfile.js'
            ],
            jshintrc: '.jshintrc'
        },
        uglify: {
            options: {
                sourceMap: true,
                banner: '/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.license %> | <%= pkg.homepage %> */'
            },
            dist: {
                files: {
                    'js/core.min.js': ['js/core.js']
                }
            }
        },
        watch: {
            css: {
                files: 'sass/*.scss',
                tasks: ['sass']
            },
            js: {
                files: [
                    'Gruntfile.js'
                ],
                tasks: ['jshint', 'uglify']
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                commit: true,
                commitMessage: 'Release %VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'Release %VERSION%',
                push: true,
                pushTo: 'gh-pages'
            }
        }
    });
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['sass', 'jshint', 'uglify']);
    grunt.registerTask('rev:patch', ['bump-only:patch', 'sass', 'jshint', 'uglify', 'bump-commit']);
    grunt.registerTask('rev:minor', ['bump-only:minor', 'sass', 'jshint', 'uglify', 'bump-commit']);
    grunt.registerTask('rev:major', ['bump-only:major', 'sass', 'jshint', 'uglify', 'bump-commit']);
    grunt.registerTask('rev',       ['rev:patch']);
};

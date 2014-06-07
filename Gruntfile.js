var watchFiles = {
    'js':   [
                'Gruntfile.js'
            ],
    'css':  [
                'sass/*.scss'
            ]
};

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
            files: watchFiles.js,
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
                files: watchFiles.css,
                tasks: ['sass', 'copy:css']
            },
            js: {
                files: watchFiles.js,
                tasks: ['jshint', 'uglify']
            },
            jekyll: {
                files: [
                    '*.html',
                    '*.md',
                    'js/**.js',
                    '_posts/**',
                    '_includes/**',
                    '_layouts/**',
                    'events/**',
                    'brigade/**'
                ],
                tasks: 'shell:jekyll'
            },
            options: {
                livereload: true
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
        },
        copy: {
            css: {
                files: {
                    './_site/css/screen.css': './css/screen.css'
                }
            }
        },
        shell: {
            jekyll: {
                options: {
                    stdout: true
                },
                command: 'jekyll build -c _config-dev.yml'
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

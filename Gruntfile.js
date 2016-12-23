module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-shell');

    grunt.initConfig({

        // used by the changelog task
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                node: true
            },
            all: ['*.js']
        },

        shell: {
            publish: {
                command: 'npm publish'
            },

            pubinit: {
                command: 'npm publish --access public'
            }
        },

        // To test: grunt bump --dry-run

        bump: {
            options: {

                commit: true,
                createTag: true,
                push: true,
                pushTo: 'origin',

                updateConfigs: ['pkg'],
                commitFiles: ['package.json']
            }
        },

        browserify: {
            dist: {
                options: {
                    browserifyOptions: {
                        standalone: 'MitchAllen.MazeGenerator'
                    },
                    transform: [['babelify', {presets: ['es2015']}]],
                    plugin: [[ "browserify-derequire" ]]
                },
                files: {
                   // if the source file has an extension of es6 then
                   // we change the name of the source file accordingly.
                   // The result file's extension is always .js
                   "./dist/maze-generator.js": ["./modules/index.js"]
                }
            }
        },

        uglify: {
            my_target: {
                files: {
                    './dist/maze-generator.min.js': ['./dist/maze-generator.js']
                }
            }
        },

        watch: {
             scripts: {
                files: ["./modules/*.js"],
                tasks: ["browserify",'uglify']
             }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask('default', ['jshint','browserify','uglify']);
    grunt.registerTask('monitor', ['jshint','watch']);
    grunt.registerTask("build", ['browserify','uglify']);
    grunt.registerTask('pubinit', ['jshint','browserify','uglify','shell:pubinit']);
    grunt.registerTask('publish', ['jshint','browserify','uglify','bump','shell:publish']);
};
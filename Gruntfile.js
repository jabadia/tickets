module.exports = function(grunt)
{
	grunt.loadNpmTasks('grunt-manifest');
	grunt.initConfig({
		manifest: {
			generate: {
				options: {
					basePath: '.',
					cache: [
						'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.js',
						'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.js',
						'//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js',
						'//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css',
						'//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap-theme.min.css'
					],
					network: [],
					fallback: [
						'http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js //ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js',
						'https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js //ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'
					],
					verbose: true,
					master: 'index.html',
					timestamp: true,
					hash: true
				},
				src: [
				'index.html'
				],
				dest: 'tickets.manifest'
			}
		}
	});

	grunt.registerTask('default',['manifest']);
};
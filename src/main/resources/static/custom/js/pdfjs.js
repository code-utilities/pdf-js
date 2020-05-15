//Define that JavaScript code should be executed in "strict mode"
"use strict";

// Wait for the DOM to be fully loaded before executing code
$(document).ready(function() {

	// If absolute URL from the remote server is provided, configure the CORS header on that server.
	// var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf';

	// Get pdf from project classpath
	var url = '/documents/dummy.pdf';

	// Loaded via <script> tag, create shortcut to access PDF.js exports.
	var pdfjsLib = window['pdfjs-dist/build/pdf'];

	// The workerSrc property shall be specified.
	// pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.jsx';

	// Asynchronous download of PDF
	var loadingTask = pdfjsLib.getDocument(url);

	loadingTask.promise.then(function(pdf) {
		console.log('@@@ PDF loaded...');

		// Fetch the first page
		var pageNumber = 1;
		pdf.getPage(pageNumber).then(function(page) {
			console.log('@@@ Page loaded...');

			var viewport = document.querySelector('#canvas-container');
			var container = viewport.children[0];

			var pdfViewport = page.getViewport({
				scale : 1
			});

			// Render at the page size scale.
			pdfViewport = page.getViewport(container.offsetWidth / pdfViewport.width);

			// Prepare canvas using PDF page dimensions
			var canvas = document.getElementById('the-canvas');
			var context = canvas.getContext('2d');
			canvas.height = pdfViewport.height;
			canvas.width = pdfViewport.width;

			// Render PDF page into canvas context
			var renderContext = {
				canvasContext : context,
				viewport : pdfViewport
			};
			var renderTask = page.render(renderContext);
			renderTask.promise.then(function() {
				console.log('@@@ Page rendered...');
			});
		});
	}, function(reason) {
		// PDF loading error
		console.log('@@@ PDF loading error...');
		console.error(reason);
	});

});
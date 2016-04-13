{
	render: function() {
		var a;
		a = 1;
		console.log(a+1);

		return <div>
			Hello World!
		</div>
	}
}

// JSX needs to be compiled to javascript first
// this is syntactic sugar
// JSX, when compiled, converts in React's world to vanilla Javascript which the browser can understand and ingest 

// JSX (browser doesn't understand)
{
	render: function() {
		return <div>
			Hello World!
		</div>
	}
}

// Compile to JS (browser understands)
{
	render: function() {
		return React.createElement('div', null, 'Hello World!');
	}
}


//https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js

//<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js"></script>


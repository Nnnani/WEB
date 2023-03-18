function render(contents) {
    return `
    <!DOCTYPE html>
<html>
<head>
	<title>leena pcn</title>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div>
		${contents
			.map ((content) => `<h2>${content.title}</h2>`)
			.join('')
		}
	</div>
</body>
</html>
`}

module.exports = render;
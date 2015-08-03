d3.select('#caja')
	.append('svg')
		.attr('width', 600)
		.attr('height', 400)
		.style('background', '#1155CC')
	.append("rect")
		.attr('x', 100)
		.attr('y', 100)
		.attr('width', 200)
		.attr('height', 100)
		.style('fill', '#111144')
	
	d3.select('svg')
		.append('circle').attr('cx', 300).attr('cy', 150).attr('r', 50).style('fill', 'red').style('fill-opacity', .5)
	


var posx = '200px'
	d3.select('svg')
		.append("text")
		.attr('x', posx)  
    	.attr('y', '50px')
    	.style('fill', 'orange')
		.style('font-size', "30")
		.text("Este es el texto");



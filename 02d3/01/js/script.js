var bardata = [30, 60, 40, 15, 60, 90, 35, 40, 10, 65];

var w = 600,
	h = 400,
	barW = 50,
	barOff = 1,
	color = 'yellow',
	txt = "El titulo";

d3.select('#caja').append('svg')
	.attr('width', w)
	.attr('height', h)
	.style('background', color)
 	.selectAll('rect').data(bardata)
 	.enter().append('rect')
 		.style('fill', 'blue')
 		.attr('width', barW)
 		.attr('height', function(d){
 			return d;
 		}) 
 		.attr('x', function(d,i){
 			return i * (barW + barOff);
 		})
		.attr('y', function(d){
 			return h - d;
 		})
	 

d3.select('svg')
.append("text")
	.attr('x', 100)
	.attr('y', 100)
	.style('fill', 'green')
	.text(txt)


var posx = '200px'
d3.select('svg')
	.append("text")
	.attr('x', posx)  
	.attr('y', '50px')
	.style('fill', 'orange')
	.style('font-size', "30")
	.text("Este es el texto");


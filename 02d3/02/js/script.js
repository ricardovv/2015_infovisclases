var bardata = [30, 40, 15, 90, 35, 40, 10, 65, 15, 60, 90, 35,];

var w = 600,
	h = 400,
	barW = 50,
	barSpacer = 10,
	color = 'yellow';

//funciones para la escala y rango maximo en y
var yScale = d3.scale.linear()
			.domain([0, d3.max(bardata)])
			.range([0, h])

var xScale = d3.scale.ordinal()
			.domain(d3.range(0, bardata.length ))
			.rangeBands([0, w])


d3.select('#caja').append('svg')
	.attr('width', w)
	.attr('height', h)
	.style('background', color)
 	.selectAll('rect').data(bardata)
 	.enter().append('rect')
 		.style('fill', 'blue')
 		.attr('width', barW)
 		.attr('height', function(d){
 			//return d; 		
 			return yScale(d);
 		})
 		//dibuja pas barras hacoa el lado segun la cantidad de elementos 
 		.attr('x', function(d,i){
 			return barSpacer + xScale(i);
		})
		//arras en negativo partiendo desde abajo
		.attr('y', function(d){
 			//return h - d;
 			return h - yScale(d);//mapea a lo alto de la caja
 		})
	 


//Coloca ext para un titulo usando variables
d3.select('svg').append("text")
	.attr('x', '10')  
	.attr('y', '25px')
	.style('fill', 'brown')
	.style('font-size', "30")
	.text("Este es el Titulo")

//Coloca ext para un titulo c variables
var	txt = "Un texto cualquiera";
var posy = h-10;

//d3.select('body')
d3.select('svg')
.append("text")
	.attr('x', 20)
	.attr('y', posy)
	.style('fill', 'green')
	.style('font-size', '20px')
	.text(txt)


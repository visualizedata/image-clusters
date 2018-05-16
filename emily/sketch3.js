get0();
console.log("0 is loaded");

get1();
console.log("1 is loaded");

get2();
console.log("2 is loaded");

get3();
console.log("3 is loaded");

get4();
console.log("4 is loaded");

get5();
console.log("5 is loaded");

get6();
console.log("6 is loaded");

get7();
console.log("7 is loaded");


function get0() {

	d3.csv("https://raw.githubusercontent.com/3milychu/personal_ml/master/ML_assignment_3/submission_03/results3.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.title = +d.title;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Cluster 0
			  zero = data.filter(function(d) { 
			    	return d.labels == "0"});


		d3.select(".zero").selectAll("img").remove();
		var one = d3.select(".zero").selectAll("#zero")
			.data(zero)
	        .enter()
	        .append('img')
	        .style("width","100px")
	        .style("max-height","200px")
	        .style("background-position","center")
	        .attr("title", function(d){return d.art_movement + ", " + d.artist +", " + d.country_of_origin})
	        .attr("src",function(d) {return d.path;})
	        .exit();
	
	        // end getcsv
			});
// end getCluster
};



function get1() {

	d3.csv("https://raw.githubusercontent.com/3milychu/personal_ml/master/ML_assignment_3/submission_03/results3.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.title = +d.title;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Cluster 0
			  one = data.filter(function(d) { 
			    	return d.labels == "1"});


		d3.select(".one").selectAll("img").remove();
		var one = d3.select(".one").selectAll("#one")
			.data(one)
	        .enter()
	        .append('img')
	        .style("width","100px")
	        .style("max-height","200px")
	        .style("background-position","center")
	        .attr("title", function(d){return d.art_movement + ", " + d.artist +", " + d.country_of_origin})
	        .attr("src",function(d) {return d.path;})
	        .exit();
	
	        // end getcsv
			});
// end getCluster
};

function get2() {

	d3.csv("https://raw.githubusercontent.com/3milychu/personal_ml/master/ML_assignment_3/submission_03/results3.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.title = +d.title;
	   			 });
	  		
	  		data = data;

			// Cluster 2
			  two = data.filter(function(d) { 
			    	return d.labels == "2"});


		d3.select(".two").selectAll("img").remove();
		var zero = d3.select(".two").selectAll("#two")
			.data(two)
	        .enter()
	        .append('img')
	        .style("width","100px")
	        .style("max-height","200px")
	        .style("background-position","center")
	        .attr("title", function(d){return d.art_movement + ", " + d.artist +", " + d.country_of_origin})
	        .attr("src",function(d) {return d.path;})
	        .exit();
	
	        // end getcsv
			});
// end getCluster
};

function get3() {

	d3.csv("https://raw.githubusercontent.com/3milychu/personal_ml/master/ML_assignment_3/submission_03/results3.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.title = +d.title;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Cluster 0
			  three = data.filter(function(d) { 
			    	return d.labels == "3"});


		d3.select(".three").selectAll("img").remove();
		var three = d3.select(".three").selectAll("#three")
			.data(three)
	        .enter()
	        .append('img')
	        .style("width","100px")
	        .style("max-height","200px")
	        .style("background-position","center")
	        .attr("title", function(d){return d.art_movement + ", " + d.artist +", " + d.country_of_origin})
	        .attr("src",function(d) {return d.path;})
	        .exit();
	
	        // end getcsv
			});
// end getCluster
};

function get4() {

	d3.csv("https://raw.githubusercontent.com/3milychu/personal_ml/master/ML_assignment_3/submission_03/results3.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.title = +d.title;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Cluster 0
			 four = data.filter(function(d) { 
			    	return d.labels == "4"});


		d3.select(".four").selectAll("img").remove();
		var four = d3.select(".four").selectAll("#four")
			.data(four)
	        .enter()
	        .append('img')
	        .style("width","100px")
	        .style("max-height","200px")
	        .style("background-position","center")
	        .attr("title", function(d){return d.art_movement + ", " + d.artist +", " + d.country_of_origin})
	        .attr("src",function(d) {return d.path;})
	        .exit();
	
	        // end getcsv
			});
// end getCluster
};

function get5() {

	d3.csv("https://raw.githubusercontent.com/3milychu/personal_ml/master/ML_assignment_3/submission_03/results3.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.title = +d.title;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Cluster 0
			 five = data.filter(function(d) { 
			    	return d.labels == "5"});


		d3.select(".five").selectAll("img").remove();
		var five = d3.select(".five").selectAll("#five")
			.data(five)
	        .enter()
	        .append('img')
	        .style("width","100px")
	        .style("max-height","200px")
	        .style("background-position","center")
	        .attr("title", function(d){return d.art_movement + ", " + d.artist +", " + d.country_of_origin})
	        .attr("src",function(d) {return d.path;})
	        .exit();
	
	        // end getcsv
			});
// end getCluster
};

function get6() {

	d3.csv("https://raw.githubusercontent.com/3milychu/personal_ml/master/ML_assignment_3/submission_03/results3.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.title = +d.title;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Cluster 0
			 six = data.filter(function(d) { 
			    	return d.labels == "6"});


		d3.select(".six").selectAll("img").remove();
		var six = d3.select(".six").selectAll("#six")
			.data(six)
	        .enter()
	        .append('img')
	        .style("width","100px")
	        .style("max-height","200px")
	        .style("background-position","center")
	        .attr("title", function(d){return d.art_movement + ", " + d.artist +", " + d.country_of_origin})
	        .attr("src",function(d) {return d.path;})
	        .exit();
	
	        // end getcsv
			});
// end getCluster
};

function get7() {

	d3.csv("https://raw.githubusercontent.com/3milychu/personal_ml/master/ML_assignment_3/submission_03/results3.csv", function(data) {
	  		data.forEach(function(d) {
	   			d.title = +d.title;
	   			 });
	  			// console.log(data);
	  		
	  		data = data;

			// Cluster 0
			 seven = data.filter(function(d) { 
			    	return d.labels == "7"});


		d3.select(".seven").selectAll("img").remove();
		var six = d3.select(".seven").selectAll("#seven")
			.data(seven)
	        .enter()
	        .append('img')
	        .style("width","100px")
	        .style("max-height","200px")
	        .style("background-position","center")
	        .attr("title", function(d){return d.art_movement + ", " + d.artist +", " + d.country_of_origin})
	        .attr("src",function(d) {return d.path;})
	        .exit();
	
	        // end getcsv
			});
// end getCluster
};
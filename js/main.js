
render([{"id":"1","name":"IndianBudgetZoomable", "url":"2016/02/blog-post.html" ,title: "Where does the money come from?"},
    {"id":"2","name":"IndianExpenditureZoomable", "url": "2016/02/where-does-money-go.html", title: "Where does the money go?"},
    {"id":"3","name":"IndianExpenditureByMinistry", "url":"2016/02/expenditure-by-ministry.html"  ,title: "Expenditure By Ministry"},
    {"id":"4","name":"IndianExpenditureByMinistryComparison", "url": "2016/02/indias-expenditure-by-ministry.html", title: "Expenditure by Ministry - YoY comparison"}]);


function render(viz_list) {
    if (!viz_list.length) return;


    var viz = d3.select(".viz_list").selectAll(".viz")
        .data(viz_list, function(d) { return d.id; })
        .enter().insert("a", "br")
        .attr("class", "viz viz--thumbnail")
        //.attr("href", function(d) { return "//bnamita.github.io/" + d.name }) //blog links
        .attr("href", function(d) { return "//thedatajournal.blogspot.in/" + d.url }) //blog links
        .attr("target", "_blank")
        .style("background-image", function(d) { return "url(css/images/" + d.name + ".png)"; });

//        gist.append("div")
//                .attr("class", "gist-description gist-underline")
//                .text(function(d) { return d.description || d.id; });

    viz.append("div")
        .attr("class", "viz-title")
        .text(function(d) { return d.title; });
}

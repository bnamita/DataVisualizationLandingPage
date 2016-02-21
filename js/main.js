
render([{"id":"1","name":"IndianBudgetZoomable", title: "Indian Budget - Revenue sources"},
    {"id":"2","name":"IndianExpenditureZoomable", title: "Indian Budget - Expenditure"},
    {"id":"3","name":"IndianExpenditureByMinistry", title: "Expenditure By Ministry"},
    {"id":"4","name":"IndianExpenditureByMinistryComparison", title: "Indian Budget by Ministry - YoY comparison"}]);


function render(viz_list) {
    if (!viz_list.length) return;


    var viz = d3.select(".viz_list").selectAll(".viz")
        .data(viz_list, function(d) { return d.id; })
        .enter().insert("a", "br")
        .attr("class", "viz viz--thumbnail")
        .attr("href", function(d) { return "//bnamita.github.io/" + d.name }) //blog links
        .style("background-image", function(d) { return "url(css/images/" + d.name + ".png)"; });

//        gist.append("div")
//                .attr("class", "gist-description gist-underline")
//                .text(function(d) { return d.description || d.id; });

    viz.append("div")
        .attr("class", "viz-title")
        .text(function(d) { return d.title; });
}

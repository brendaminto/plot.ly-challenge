

function populatePieChart(name, myJsonObj){
    let samples = myJsonObj.samples.filter(function(d){
        return d.id == name;
    })
    
    let count=0;
    let values = samples[0].sample_values.slice(0, 9);
    let labels = samples[0].otu_ids.slice(0, 9);
    

    var data = [{
        values: values,
        labels: labels,
        hole: .4,
        type: 'pie'
      }];

    var layout = {
        height: 400,
        width: 500
      };

    Plotly.newPlot('bar', data, layout);
}//populatePieChart

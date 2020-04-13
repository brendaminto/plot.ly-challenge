

function loadJson(){
    let jsonFile = "/Plot.ly-Challenge/samples.json";
    d3.json(jsonFile).then(function(samples_json){        
        var myJsonObj = samples_json;
        mainFunction(samples_json.names, myJsonObj)    
    })    
}//end of loadJson

function mainFunction(names, myJsonObj){

    populateSubjectNo(names, myJsonObj);
    /**
     * populate combo-box
     * @param {*} subjectNo 
     */
    function populateSubjectNo(subjectNo, myJsonObj){    
        let cmbSubNo = d3.select("#selDataset");
        // clear the combo box, before populating it
        cmbSubNo.selectAll("option").remove();
        // populate combo box
        subjectNo.forEach(element => {
            cmbSubNo.append("option").text(element);
        });
        renderInformation(myJsonObj);
    }

    function renderInformation(myJsonObj){
        let selectedName = d3.select("#selDataset").property("value")
        populateDemographicInfo(selectedName, myJsonObj);
        populatePieChart(selectedName, myJsonObj);
        populateBubbleChart(selectedName, myJsonObj);
        populateGaugeChart(selectedName, myJsonObj);
    }

    let cmbSubNo = d3.select("#selDataset");
    cmbSubNo.on("change", function(d){    
        renderInformation(myJsonObj);
    });
}//end of mainMain

loadJson()
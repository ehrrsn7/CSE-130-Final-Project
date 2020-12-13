function embedText(filename, el) {
    fetch(filename)
        .then(results => results.text())
        .then(text => {
            console.log(text)
            el.innerHTML = text
        })
}

function embedHTML(filename, el) {
    fetch(filename)
        .then(results => results.text())
        .then(text => {
            console.log(text)
            el.outerHTML = text
        })
}

embedText("plan-overview.txt", document.getElementById("plan-overview"))
embedText("efficiency.txt", document.getElementById("efficiency"))
embedText("trace.txt", document.getElementById("trace"))
embedText("assert.txt", document.getElementById("assert"))

/*
var structureChartEl = document.getElementById("stonks-structure-chart")
embedHTML("Stonks-Structure-Chart.html", structureChartEl)

var flowchartEl = document.getElementById("stonks-flowchart")
embedHTML("Stonks-Flowchart.html", flowchartEl)
*/
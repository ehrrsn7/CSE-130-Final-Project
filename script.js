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

var planOverviewEl = document.getElementById("plan-overview")
embedText("plan-overview.txt", planOverviewEl)

var structureChartEl = document.getElementById("stonks-structure-chart")
embedHTML("Stonks-Structure-Chart.html", structureChartEl)

var flowchartEl = document.getElementById("stonks-flowchart")
embedHTML("Stonks-Flowchart.html", flowchartEl)
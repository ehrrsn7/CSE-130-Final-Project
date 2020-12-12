console.log("Hello world!")

var planOverviewEl = document.getElementById("plan-overview")

function readTextFile(filename) {
    fetch(filename)
        .then(results => results.text())
        .then(text => {
            planOverviewEl.innerHTML = text
        })
}

readTextFile("plan-overview.txt")
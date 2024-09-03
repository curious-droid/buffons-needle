let totalDrops = 0;
let hits = 0;

// const updatePiEstimate = () => {
//     const piEstimate = (2 * totalDrops) / hits *(1/1); //REPLACE WITH REAL RATIO OF ROLL LENGTH TO LINE SPACING
//     document.getElementById('pi-estimate').textContent = isFinite(piEstimate) ? piEstimate.toFixed(5) : "0.00";
//     document.getElementById('total-drops').textContent = totalDrops;
//     document.getElementById('hits').textContent = hits;
// };

// document.getElementById('no-hit').addEventListener('click', () => {
//     totalDrops += 1;
//     updatePiEstimate();
// });

// document.getElementById('hit').addEventListener('click', () => {
//     totalDrops += 1;
//     hits += 1;
//     updatePiEstimate();
// });


const ctx = document.getElementById('piChart').getContext('2d');
const piData = [];
const labels = [];

const piChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Estimate',
            data: piData,
            borderColor: 'rgba(0, 123, 255, 1)',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderWidth: 1,
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
                suggestedMin: 2,
                suggestedMax: 4
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: Math.PI,
                        yMax: Math.PI,
                        borderColor: 'green',
                        borderWidth: 2,
                        label: {
                            content: 'π (3.14159...)',
                            enabled: true,
                            position: 'end'
                        }
                    }
                }
            },
            legend: {
                display: false  // Hide the legend
            }
        }
    }
});

function updatePiChart(piEstimate, totalDrops) {
    labels.push(totalDrops);
    piData.push(piEstimate);
    piChart.update();
}

// Example: Use updatePiChart in your existing hit/no-hit event listeners
document.getElementById('hit').addEventListener('click', function() {
    totalDrops++;
    hits++;
    const piEstimate = (2 * totalDrops) / hits *(1/1); //REPLACE WITH REAL RATIO OF ROLL LENGTH TO LINE SPACING;
    document.getElementById('pi-estimate').innerText = piEstimate.toFixed(5);
    document.getElementById('total-drops').innerText = totalDrops;
    document.getElementById('hits').innerText = hits;
    updatePiChart(piEstimate, totalDrops);
});

document.getElementById('no-hit').addEventListener('click', function() {
    totalDrops++;
    const piEstimate = (2 * totalDrops) / hits *(1/1); //REPLACE WITH REAL RATIO OF ROLL LENGTH TO LINE SPACING;
    document.getElementById('pi-estimate').innerText = piEstimate.toFixed(5);
    document.getElementById('total-drops').innerText = totalDrops;
    document.getElementById('hits').innerText = hits;
    updatePiChart(piEstimate, totalDrops);
});

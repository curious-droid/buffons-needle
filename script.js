let totalDrops = 0;
let hits = 0;

const updatePiEstimate = () => {
    const piEstimate = (2 * totalDrops) / hits *(1/1); //REPLACE WITH REAL RATIO OF ROLL LENGTH TO LINE SPACING
    document.getElementById('pi-estimate').textContent = isFinite(piEstimate) ? piEstimate.toFixed(5) : "0.00";
    document.getElementById('total-drops').textContent = totalDrops;
    document.getElementById('hits').textContent = hits;
};

document.getElementById('no-hit').addEventListener('click', () => {
    totalDrops += 1;
    updatePiEstimate();
});

document.getElementById('hit').addEventListener('click', () => {
    totalDrops += 1;
    hits += 1;
    updatePiEstimate();
});

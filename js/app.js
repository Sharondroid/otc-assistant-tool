let selected = new Set();

function switchView(viewId) {
    document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    document.getElementById(`view-${viewId}`).classList.add('active');
    document.querySelector(`[data-view="${viewId}"]`).classList.add('active');
}

function init() {
    const syms = [...new Set(OTC_DB.flatMap(d => d.symptoms))];

    document.getElementById('sym-cloud').innerHTML = syms.map(s =>
        `<button onclick="toggle('${s}')" class="symptom-pill" data-symptom="${s}">${s}</button>`
    ).join('');

    document.getElementById('sym-search').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.symptom-pill').forEach(p => {
            p.style.display = p.dataset.symptom.toLowerCase().includes(term) ? 'block' : 'none';
        });
    });

    updateDiagnostics();
}

function toggle(s) {
    selected.has(s) ? selected.delete(s) : selected.add(s);
    updateDiagnostics();
}

function updateDiagnostics() {
    const container = document.getElementById('results-engine');

    const matches = OTC_DB.filter(d =>
        Array.from(selected).some(s => d.symptoms.includes(s))
    );

    container.innerHTML = matches.map(m => `
        <div class="glass-card p-4">
            <h3>${m.name}</h3>
            <p>${m.action}</p>
        </div>
    `).join('');
}

window.onload = init;

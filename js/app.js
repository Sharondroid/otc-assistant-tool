// app.js

let selectedSymptoms = new Set();

// ---------------------- VIEW SWITCHING ----------------------
function switchView(viewId) {
    // Hide all sections
    document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
    // Deactivate all nav links
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    // Activate target section and link
    const targetSection = document.getElementById(`view-${viewId}`);
    const targetLink = document.querySelector(`[data-view="${viewId}"]`);

    if (targetSection) targetSection.classList.add('active');
    if (targetLink) targetLink.classList.add('active');

    // Lazy load content
    if (viewId === 'diagnostics') loadDiagnostics();
    if (viewId === 'firstaid') loadFirstAid();
    if (viewId === 'lab') loadLab();
    if (viewId === 'market') loadMarket();
}

// ---------------------- SYMPTOM CHECKER ----------------------
function toggleSymptom(symptom) {
    selectedSymptoms.has(symptom) ? selectedSymptoms.delete(symptom) : selectedSymptoms.add(symptom);
    updateUI();
}

function updateUI() {
    // Update active pills
    document.querySelectorAll('.symptom-pill').forEach(pill => {
        pill.classList.toggle('active', selectedSymptoms.has(pill.dataset.symptom));
    });

    const container = document.getElementById('results-engine');

    if (selectedSymptoms.size === 0) {
        container.innerHTML = `<div class="col-span-full py-24 text-center text-gray-300 font-bold uppercase text-[10px]">
            Select clinical presentation to begin
        </div>`;
        return;
    }

    const current = Array.from(selectedSymptoms).map(s => s.toLowerCase());

    const matches = OTC_DB.filter(d =>
        d.symptoms.some(sym => current.includes(sym.toLowerCase()))
    );

    container.innerHTML = matches.map(m => `
        <div class="glass-card p-6 rounded-3xl border border-brand-100 animate-fadeIn">
            <span class="text-[9px] font-black text-brand-500 uppercase">${m.category}</span>
            <h4 class="text-xl font-black text-gray-900 mt-1 mb-4">${m.name}</h4>
            <div class="p-3 bg-brand-50 rounded-xl mb-4">
                <div class="text-[11px] text-brand-800 font-bold">${m.brands.join(', ')}</div>
            </div>
            <p class="text-[11px] text-gray-500">${m.action}</p>
        </div>
    `).join('');
}

// ---------------------- LAZY LOAD FUNCTIONS ----------------------
function loadDiagnostics() {
    if (document.getElementById('sym-cloud').children.length > 0) return;

    const syms = [...new Set(OTC_DB.flatMap(d => d.symptoms))].sort();

    document.getElementById('sym-cloud').innerHTML = syms.map(s =>
        `<button data-symptom="${s}" class="symptom-pill px-3 py-2 bg-white border rounded-lg text-[10px] font-bold text-gray-500">${s}</button>`
    ).join('');

    document.querySelectorAll('.symptom-pill').forEach(btn => {
        btn.addEventListener('click', () => toggleSymptom(btn.dataset.symptom));
    });

    // Search logic
    document.getElementById('sym-search').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.symptom-pill').forEach(p => {
            p.style.display = p.dataset.symptom.toLowerCase().includes(term) ? 'block' : 'none';
        });
    });

    updateUI();
}

function loadFirstAid() {
    if (document.getElementById('firstaid-grid').children.length > 0) return;

    document.getElementById('firstaid-grid').innerHTML = PROTOCOLS.firstAid.map(p => `
        <div class="glass-card p-6 rounded-3xl border">
            <div class="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-4">
                <i class="fas ${p.icon}"></i>
            </div>
            <h4 class="font-black text-gray-900 mb-1">${p.title}</h4>
            <p class="text-[11px] text-gray-500">${p.desc}</p>
        </div>
    `).join('');
}

function loadLab() {
    if (document.getElementById('lab-grid').children.length > 0) return;

    document.getElementById('lab-grid').innerHTML = PROTOCOLS.lab.map(l => `
        <div class="glass-card p-6 rounded-3xl border">
            <h4 class="font-black text-gray-900 mb-4">${l.title}</h4>
            <div class="space-y-2">
                ${l.steps.map((s,i) => `
                    <div class="flex gap-2 text-[10px] text-gray-600">
                        <span class="font-black text-brand-600">${i+1}</span>
                        <span>${s}</span>
                    </div>`).join('')}
            </div>
        </div>
    `).join('');
}

function loadMarket() {
    if (document.getElementById('market-table').children.length > 0) return;

    document.getElementById('market-table').innerHTML = OTC_DB.map(d => `
        <tr class="border-b hover:bg-gray-50">
            <td class="p-6 font-bold text-gray-900">${d.name}</td>
            <td class="p-6 text-gray-500 italic">${d.action}</td>
            <td class="p-6 font-black text-brand-600">${d.brands.join(', ')}</td>
        </tr>
    `).join('');
}

// ---------------------- INITIALIZE ----------------------
document.addEventListener('DOMContentLoaded', () => {
    switchView('diagnostics'); // load only the first tab
});

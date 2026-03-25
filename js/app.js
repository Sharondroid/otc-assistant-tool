let selectedSymptoms = new Set();

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
}

function updateUI() {
    // Update symptom pills
    document.querySelectorAll('.symptom-pill').forEach(pill => {
        pill.classList.toggle('active', selectedSymptoms.has(pill.dataset.symptom));
    });

    const container = document.getElementById('results-engine');
    if (selectedSymptoms.size === 0) {
        container.innerHTML = `<div class="col-span-full py-24 text-center text-gray-300 font-bold uppercase text-[10px]">Select clinical presentation to begin</div>`;
        return;
    }

    const current = Array.from(selectedSymptoms);
    const matches = OTC_DB.filter(d => current.some(s => d.symptoms.includes(s)));
    
    container.innerHTML = matches.map(m => `
        <div class="glass-card p-6 rounded-3xl border border-brand-100 animate-fadeIn">
            <span class="text-[9px] font-black text-brand-500 uppercase">${m.category}</span>
            <h4 class="text-xl font-black text-gray-900 mt-1 mb-4">${m.name}</h4>
            <div class="p-3 bg-brand-50 rounded-xl mb-4"><div class="text-[11px] text-brand-800 font-bold">${m.brands.join(', ')}</div></div>
            <p class="text-[11px] text-gray-500">${m.action}</p>
        </div>
    `).join('');
}

function toggleSymptom(s) {
    selectedSymptoms.has(s) ? selectedSymptoms.delete(s) : selectedSymptoms.add(s);
    updateUI();
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load Symptoms
    const syms = [...new Set(OTC_DB.flatMap(d => d.symptoms))].sort();
    document.getElementById('sym-cloud').innerHTML = syms.map(s => 
        `<button onclick="toggleSymptom('${s}')" data-symptom="${s}" class="symptom-pill px-3 py-2 bg-white border rounded-lg text-[10px] font-bold text-gray-500">${s}</button>`
    ).join('');

    // 2. Load First Aid
    document.getElementById('firstaid-grid').innerHTML = PROTOCOLS.firstAid.map(p => `
        <div class="glass-card p-6 rounded-3xl border">
            <div class="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-4"><i class="fas ${p.icon}"></i></div>
            <h4 class="font-black text-gray-900 mb-1">${p.title}</h4>
            <p class="text-[11px] text-gray-500">${p.desc}</p>
        </div>
    `).join('');

    // 3. Load Lab Kits
    document.getElementById('lab-grid').innerHTML = PROTOCOLS.lab.map(l => `
        <div class="glass-card p-6 rounded-3xl border">
            <h4 class="font-black text-gray-900 mb-4">${l.title}</h4>
            <div class="space-y-2">
                ${l.steps.map((s,i) => `<div class="flex gap-2 text-[10px] text-gray-600"><span class="font-black text-brand-600">${i+1}</span><span>${s}</span></div>`).join('')}
            </div>
        </div>
    `).join('');

    // 4. Load Market Table
    document.getElementById('market-table').innerHTML = OTC_DB.map(d => `
        <tr class="border-b hover:bg-gray-50">
            <td class="p-6 font-bold text-gray-900">${d.name}</td>
            <td class="p-6 text-gray-500 italic">${d.action}</td>
            <td class="p-6 font-black text-brand-600">${d.brands.join(', ')}</td>
        </tr>
    `).join('');

    // 5. Search Logic
    document.getElementById('sym-search').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.symptom-pill').forEach(p => {
            p.style.display = p.dataset.symptom.toLowerCase().includes(term) ? 'block' : 'none';
        });
    });

    updateUI();
});

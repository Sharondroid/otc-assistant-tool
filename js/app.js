 const OTC_DB = [
          { name: "Paracetamol", category: "Analgesic & Antipyretic", symptoms: ["Fever", "Headache", "Muscle Ache", "Toothache", "Back Pain", "Sore Throat", "Migraine (Mild)", "Neuralgia", "Ear Pain"], action: "Reduces prostaglandin synthesis in CNS.", precautions: "Max 4g/24h. Avoid with alcohol to prevent liver damage.", brands: ["Panadol", "M&G Paracetamol", "Efpac", "Emzor"] },
            { name: "Ibuprofen / Naproxen", category: "NSAID", symptoms: ["Inflammation", "Menstrual Cramps", "Joint Pain", "Swelling", "Rheumatoid Arthritis", "Sports Injury", "Tendonitis"], action: "Inhibits COX-1/COX-2 enzymes to block inflammation.", precautions: "Take with food. Avoid in asthma or stomach ulcers.", brands: ["Brufen", "Voltaren Oral", "Naprosyn", "Ibugesic"] },
            { name: "Cetirizine / Loratadine", category: "Antihistamine", symptoms: ["Sneezing", "Runny Nose", "Itching", "Watery Eyes", "Hives", "Hay Fever", "Insect Bites", "Skin Allergy"], action: "Selective H1-receptor antagonist.", precautions: "Avoid alcohol. May cause mild sedation in sensitive individuals.", brands: ["Cetrine", "Aller-G", "Lora-Tab", "Piriton"] },
            { name: "Artemether / Lumefantrine", category: "Antimalarial (ACT)", symptoms: ["Uncomplicated Malaria", "Chills", "Body Ache", "Fever with Rigors", "Sweating Episodes"], action: "Fast-acting blood schizonticide for Malaria.", precautions: "Take with milk or fatty food. Finish full 3-day course exactly.", brands: ["Lonart", "Coartem", "Amatem", "Lumartem"] },
            { name: "Gaviscon / Antacids", category: "Gastrointestinal", symptoms: ["Heartburn", "Acid Reflux", "Indigestion", "Bloating", "Sour Stomach", "Abdominal Gaseousness"], action: "Forms an alginate raft/barrier + neutralizes acid.", precautions: "Take after meals. Separate from other meds by 2 hours.", brands: ["Gestid", "Mist Mag", "Gaviscon", "Andrew's Liver Salt"] },
            { name: "Loperamide", category: "Antidiarrheal", symptoms: ["Diarrhea", "Loose Stools", "Frequent Bowel Movement"], action: "Slows intestinal transit time.", precautions: "Do not use if blood in stool or high fever is present.", brands: ["Imodium", "Lopedium", "Normotil"] },
            { name: "ORS (Oral Rehydration)", category: "Rehydration", symptoms: ["Dehydration", "Fluid Loss", "Vomiting", "Heat Exhaustion"], action: "Restores electrolyte balance.", precautions: "Use clean water. Drink small sips continuously.", brands: ["Pharmanova ORS", "Electrolade", "Sachet ORS"] },
            { name: "Clotrimazole / Miconazole", category: "Antifungal", symptoms: ["Athlete's Foot", "Ringworm", "Jock Itch", "White Spots", "Skin Fungus"], action: "Ergotsterol synthesis inhibitor.", precautions: "Use for 7 days after visible symptoms resolve.", brands: ["Canesten", "Daktarin", "Mycoten"] },
            { name: "Dextromethorphan", category: "Antitussive", symptoms: ["Dry Cough", "Tickly Throat", "Non-productive Cough"], action: "Inhibits the cough center in the brain.", precautions: "Do not use for phlegm-based (chesty) coughs.", brands: ["Benylin Dry", "Kofikrom Dry", "Tixylix"] },
            { name: "Bromhexine / Carbocisteine", category: "Expectorant / Mucolytic", symptoms: ["Productive Cough", "Chest Congestion", "Mucus Buildup", "Chesty Cough", "Sticky Phlegm"], action: "Liquefies and thins bronchial secretions.", precautions: "Drink plenty of water to help thin the mucus.", brands: ["Benylin Chesty", "Menthodex", "Bisolvon", "Mucosolvan"] },
            { name: "Xylometazoline", category: "Nasal Decongestant", symptoms: ["Blocked Nose", "Nasal Congestion", "Sinus Pressure"], action: "Vasoconstrictor for nasal mucosa.", precautions: "Limit use to 3-5 days to avoid rebound congestion.", brands: ["Otrivin", "Nasivion", "Galazolin"] },
            { name: "Hydrocortisone / Betamethasone", category: "Steroid", symptoms: ["Skin Rash", "Eczema Flare", "Contact Dermatitis", "Severe Itching", "Inflammatory Skin Disease"], action: "Reduces skin inflammation and immune response.", precautions: "Do not use on face or broken skin without advice.", brands: ["Hydrocort 1%", "Betnovate (Generic)"] },
            { name: "Bisacodyl / Senna", category: "Laxative", symptoms: ["Constipation", "Hard Stool", "Irregular Bowel Movement"], action: "Stimulant laxative to trigger bowel movement.", precautions: "Short-term use only. Risk of dependency if overused.", brands: ["Dulcolax", "Senokot", "Laxatyl"] },
            { name: "Buscopan (Hyoscine)", category: "Antispasmodic", symptoms: ["Stomach Cramps", "Abdominal Pain", "Period Cramps"], action: "Relaxes smooth muscle of the gut.", precautions: "May cause dry mouth or blurred vision.", brands: ["Buscopan"] },
            { name: "Ciprofloxacin / Azithromycin", category: "Antibiotic (Prescription Required)", symptoms: ["Bacterial Infection", "Typhoid Fever", "Severe Diarrhea", "Persistent Fever"], action: "Inhibits bacterial DNA/Protein synthesis.", precautions: "Must be prescribed by a doctor. Complete the full dose.", brands: ["Zithromax", "Cipro-Tab", "Kofikrom Cipro"] }
        ];

        const PROTOCOLS = {
            firstAid: [
                { title: "Minor Burns", desc: "Hold under cool running water for 20 mins. Cover with clean film. Do not use ice or butter.", icon: "fa-fire" },
                { title: "Choking", desc: "Perform 5 back blows followed by 5 abdominal thrusts. Repeat until object is expelled.", icon: "fa-person-circle-exclamation" },
                { title: "Severe Bleeding", desc: "Apply firm direct pressure with sterile dressing. Elevate the limb if possible. Seek ER.", icon: "fa-droplet" },
                { title: "Sprains", desc: "Use R.I.C.E: Rest, Ice (20 mins), Compression (bandage), and Elevation.", icon: "fa-band-aid" },
                { title: "Fractures", desc: "Immobilize the limb using a splint. Do not try to realign the bone. Call for help.", icon: "fa-bone" },
                { title: "Fainting", desc: "Lay flat on back. Raise legs 12 inches. Loosen tight clothing and ensure fresh air.", icon: "fa-user-injured" },
                { title: "High Fever (Child)", desc: "Remove excess clothing. Lukewarm sponge bath. Give Paracetamol if appropriate. Monitor for seizures.", icon: "fa-child-reaching" },
                { title: "Snake Bite", desc: "Keep victim calm and still. Immobilize limb at heart level. Do not suck venom. Identify species if safe.", icon: "fa-staff-snake" }
            ],
            lab: [
                { title: "Malaria RDT", steps: ["Clean finger with alcohol", "Prick with lancet", "Collect blood in loop", "Add to well with 2 drops buffer", "Read at 15 mins"] },
                { title: "COVID Antigen", steps: ["Swab both nostrils (rotate 5x)", "Rotate swab in buffer tube", "Squeeze 3 drops into sample well", "Read at 15-20 mins"] },
                { title: "Typhoid Widal", steps: ["Prick finger for blood", "Add blood to test card", "Mix with specific reagent", "Observe for agglutination (clumping)"] },
                { title: "Pregnancy (HCG)", steps: ["Use first-morning urine", "Dip strip or pee on absorbent tip", "Lay flat on clean surface", "Read at 3 mins (2 lines = +)"] },
                { title: "STI Collection", steps: ["Vaginal swab or mid-stream urine", "Secure tightly in transport tube", "Label and ship to lab", "Await PCR results (24-48h)"] },
                { title: "Ovulation (LH)", steps: ["Test daily mid-afternoon", "Dip strip for 10s", "Monitor line intensity", "Darker T line indicates peak fertility"] },
                { title: "Blood Glucose", steps: ["Insert strip into glucometer", "Prick side of finger", "Touch blood to strip edge", "Read digital result in 5s"] },
                { title: "Blood Pressure", steps: ["Sit still for 5 mins", "Place cuff on bare upper arm", "Keep arm at heart level", "Record Systolic/Diastolic and Pulse"] }
            ]
        };

        let selected = new Set();

        function switchView(viewId) {
            document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.getElementById(`view-${viewId}`).classList.add('active');
            document.querySelector(`[data-view="${viewId}"]`).classList.add('active');
        }

        function init() {
            // Symptom Cloud
            const syms = [...new Set(OTC_DB.flatMap(d => d.symptoms))].sort();
            document.getElementById('sym-cloud').innerHTML = syms.map(s => 
                `<button onclick="toggle('${s}')" data-symptom="${s}" class="symptom-pill px-3 py-2 bg-white border rounded-lg text-[10px] font-bold text-gray-500 transition-all">${s}</button>`
            ).join('');

            // First Aid
            document.getElementById('firstaid-grid').innerHTML = PROTOCOLS.firstAid.map(p => `
                <div class="glass-card p-6 rounded-3xl border border-red-50 hover:border-red-200 transition-colors">
                    <div class="w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-4"><i class="fas ${p.icon}"></i></div>
                    <h4 class="font-black text-gray-900 mb-1">${p.title}</h4>
                    <p class="text-[11px] text-gray-500 leading-relaxed">${p.desc}</p>
                </div>
            `).join('');

            // Lab Grid
            document.getElementById('lab-grid').innerHTML = PROTOCOLS.lab.map(l => `
                <div class="glass-card p-6 rounded-3xl border border-brand-50 hover:border-brand-200 transition-colors">
                    <div class="flex items-center justify-between mb-4">
                        <h4 class="font-black text-gray-900">${l.title}</h4>
                        <i class="fas fa-flask-vial text-brand-200 text-xs"></i>
                    </div>
                    <div class="space-y-2">
                        ${l.steps.map((s,i) => `
                            <div class="flex gap-3 text-[10px] text-gray-600">
                                <span class="flex-shrink-0 w-4 h-4 rounded-full bg-brand-50 text-brand-600 font-black flex items-center justify-center text-[8px]">${i+1}</span> 
                                <span class="leading-tight pt-0.5">${s}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');

            // Market Table
            document.getElementById('market-table').innerHTML = OTC_DB.map(d => `
                <tr class="border-b last:border-0 hover:bg-gray-50/50">
                    <td class="p-6 font-bold text-gray-900">${d.name}</td>
                    <td class="p-6 text-gray-500 italic">${d.action}</td>
                    <td class="p-6 font-black text-brand-600">${d.brands.join(', ')}</td>
                </tr>
            `).join('');

            // Search Filter
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
            document.querySelectorAll('.symptom-pill').forEach(p => p.classList.toggle('active', selected.has(p.dataset.symptom)));
            const container = document.getElementById('results-engine');
            
            if (selected.size === 0) {
                container.innerHTML = `<div class="col-span-full py-24 text-center text-gray-300 font-bold uppercase tracking-widest text-[10px]">Select clinical presentation to begin</div>`;
                return;
            }

            const current = Array.from(selected);
            const matches = OTC_DB.filter(d => current.some(s => d.symptoms.includes(s)));
            
            container.innerHTML = matches.map(m => `
                <div class="glass-card p-6 rounded-3xl border border-brand-100 shadow-sm animate-fadeIn">
                    <span class="text-[9px] font-black text-brand-500 uppercase tracking-tighter">${m.category}</span>
                    <h4 class="text-xl font-black text-gray-900 mt-1 mb-4">${m.name}</h4>
                    <div class="space-y-4">
                        <div class="p-3 bg-brand-50 rounded-xl border border-brand-100">
                            <div class="text-[9px] font-black text-brand-600 uppercase mb-1">Local Registry (Ghana)</div>
                            <div class="text-[11px] text-brand-800 font-bold">${m.brands.join(', ')}</div>
                        </div>
                        <p class="text-[11px] text-gray-500 leading-relaxed">${m.action}</p>
                    </div>
                </div>
            `).join('');
        }

        window.onload = init;

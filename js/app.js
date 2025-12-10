        // Data for the application. This object acts as the offline "database".
        const medicalData = [
            {
                name: "Paracetamol",
                classification: "Analgesic, Antipyretic",
                symptoms: ["headache", "fever", "body ache", "toothache"],
                dosage: "Adults: 500mg - 1000mg every 4-6 hours. Do not exceed 4000mg in 24 hours.",
                advice: "Do not take with other paracetamol-containing products. Avoid alcohol. For short-term use.",
                ghana_status: "Approved for OTC sale by Pharmacy Council Ghana",
                contraindications: "Severe liver disease, hypersensitivity to paracetamol.",
                interactions: "Warfarin (if prolonged use).",
                sideEffects: "Rare: skin rash, blood disorders.",
                storage: "Store below 30°C, away from moisture and direct sunlight.",
                pediatricDosage: {
                    formula: (weight) => {
                        const dose = weight * 15;
                        return `${dose.toFixed(0)}mg per dose`;
                    },
                    notes: "Dosage is typically 10-15 mg/kg every 4-6 hours. Do not exceed 60 mg/kg in 24 hours."
                }
            },
            {
                name: "Amoxicillin",
                classification: "Antibiotic",
                symptoms: ["bacterial infections", "ear infections", "chest infections", "urinary tract infections"],
                dosage: "Dosage varies greatly. Must be prescribed by a physician.",
                advice: "This is a prescription-only medicine. Complete the full course even if you feel better. Not for viral infections.",
                ghana_status: "Prescription-only medicine",
                contraindications: "Penicillin allergy.",
                interactions: "Warfarin, Methotrexate.",
                sideEffects: "Common: diarrhea, nausea. Rare: severe allergic reaction.",
                storage: "Store in a cool, dry place. Reconstituted suspension must be refrigerated.",
                pediatricDosage: null // Not for OTC dosage calculation
            },
            {
                name: "Ibuprofen",
                classification: "NSAID, Analgesic, Antipyretic",
                symptoms: ["headache", "fever", "inflammation", "muscle pain", "joint pain"],
                dosage: "Adults: 200mg - 400mg every 4-6 hours. Take with food to avoid stomach upset.",
                advice: "Do not take if you have a history of stomach ulcers or asthma. Avoid prolonged use.",
                ghana_status: "Approved for OTC sale in specific strengths",
                contraindications: "Stomach ulcers, kidney disease, asthma, late pregnancy.",
                interactions: "Blood thinners, diuretics.",
                sideEffects: "Stomach upset, heartburn, dizziness.",
                storage: "Store below 25°C, protected from light and moisture.",
                pediatricDosage: {
                    formula: (weight) => {
                        const dose = weight * 10;
                        return `${dose.toFixed(0)}mg per dose`;
                    },
                    notes: "Dosage is typically 5-10 mg/kg every 6-8 hours. Do not exceed 40 mg/kg in 24 hours."
                }
            },
            {
                name: "Loratadine",
                classification: "Antihistamine",
                symptoms: ["sneezing", "runny nose", "itchy eyes", "hives", "allergic reactions"],
                dosage: "Adults: 10mg once daily.",
                advice: "Does not cause drowsiness in most people. Can be taken with or without food.",
                ghana_status: "Approved for OTC sale",
                contraindications: "Hypersensitivity to loratadine.",
                interactions: "Avoid with other antihistamines unless advised by a doctor.",
                sideEffects: "Fatigue, headache, dry mouth.",
                storage: "Store at room temperature (15-30°C).",
                pediatricDosage: null
            },
            {
                name: "Omeprazole",
                classification: "Proton Pump Inhibitor (PPI)",
                symptoms: ["heartburn", "acid reflux", "stomach ulcers"],
                dosage: "Adults: 20mg - 40mg once daily. Take before a meal.",
                advice: "For short-term treatment of symptoms. Consult a doctor for long-term use.",
                ghana_status: "Approved for OTC sale in specific strengths",
                contraindications: "Hypersensitivity to omeprazole.",
                interactions: "Warfarin, Clopidogrel, Diazepam.",
                sideEffects: "Headache, stomach pain, nausea.",
                storage: "Store below 25°C in original packaging.",
                pediatricDosage: null
            },
            {
                name: "Multivitamin",
                classification: "Nutritional Supplement",
                symptoms: ["vitamin deficiency", "general weakness", "fatigue"],
                dosage: "Adults: Follow manufacturer's instructions, typically one tablet daily.",
                advice: "A balanced diet is always the best source of nutrients. Supplements should not replace a healthy diet.",
                ghana_status: "Approved for OTC sale",
                contraindications: "None known at standard dosage. Use with caution in specific health conditions.",
                interactions: "Can interact with certain medications. Consult a doctor.",
                sideEffects: "Stomach upset, dark urine.",
                storage: "Store in a cool, dry place.",
                pediatricDosage: null
            },
			
			{
        name: "ORS (Oral Rehydration Salts)",
        classification: "Electrolyte Replacement",
        symptoms: ["diarrhea", "vomiting", "dehydration"],
        dosage: "Adults: 1 sachet in 1L clean water after each loose stool.",
        advice: "Make fresh daily. Continue feeding in children.",
        ghana_status: "Approved for OTC sale",
        contraindications: "Severe dehydration needing IV fluids",
        interactions: "None significant",
        sideEffects: "Rare; mild bloating possible",
        storage: "Store in cool, dry place",
        pediatricDosage: null
    },
    {
        name: "Magnesium Trisilicate",
        classification: "Antacid",
        symptoms: ["heartburn", "acid indigestion"],
        dosage: "Adults: 10–20ml suspension or 2–4 tablets after meals.",
        advice: "Avoid with tetracycline antibiotics.",
        ghana_status: "Approved for OTC sale",
        contraindications: "Kidney disease, low phosphate",
        interactions: "Tetracyclines, iron, ciprofloxacin",
        sideEffects: "Diarrhea or constipation",
        storage: "Below 30°C",
        pediatricDosage: null
    },
    {
        name: "Hydrocortisone 1% Cream",
        classification: "Mild Topical Corticosteroid",
        symptoms: ["skin rash", "eczema", "insect bites"],
        dosage: "Apply thinly 1–2 times daily up to 7 days.",
        advice: "External use only.",
        ghana_status: "Approved for OTC sale",
        contraindications: "Untreated skin infection, acne",
        interactions: "None significant",
        sideEffects: "Skin thinning if overused",
        storage: "Below 25°C",
        pediatricDosage: null
    },
    {
        name: "Cetirizine",
        classification: "Antihistamine",
        symptoms: ["sneezing", "runny nose", "itchy eyes", "hives"],
        dosage: "Adults/12+: 10mg once daily",
        advice: "May cause mild drowsiness.",
        ghana_status: "Approved for OTC sale",
        contraindications: "Severe kidney disease",
        interactions: "Other sedating medicines",
        sideEffects: "Dry mouth, fatigue",
        storage: "Room temperature",
        pediatricDosage: "6–12 years: 5–10mg daily"
    },
    {
        name: "Chlorpheniramine",
        classification: "Antihistamine",
        symptoms: ["allergic rhinitis", "skin allergies", "hay fever"],
        dosage: "Adults: 4mg every 4–6 hours (max 24mg/day)",
        advice: "May cause drowsiness.",
        ghana_status: "Approved for OTC sale",
        contraindications: "Glaucoma, enlarged prostate",
        interactions: "Alcohol, sedatives",
        sideEffects: "Drowsiness, dry mouth",
        storage: "Below 30°C",
        pediatricDosage: "Children 6–12: 2mg every 4–6 hours"
    },
    {
        name: "Guaifenesin Syrup",
        classification: "Expectorant",
        symptoms: ["productive cough", "chest congestion"],
        dosage: "Adults: 200–400mg every 4 hours",
        advice: "Drink plenty of fluids.",
        ghana_status: "Approved for OTC sale",
        contraindications: "Chronic cough without evaluation",
        interactions: "None significant",
        sideEffects: "Nausea, dizziness",
        storage: "Below 30°C",
        pediatricDosage: "6–12 years: 100–200mg every 4 hours"
    },
    {
        name: "Loperamide",
        classification: "Antidiarrheal",
        symptoms: ["acute diarrhea"],
        dosage: "Adults: 4mg initially, then 2mg after each loose stool (max 8mg/day)",
        advice: "Not for children under 12 without advice.",
        ghana_status: "Approved for OTC sale",
        contraindications: "Bloody diarrhea, high fever",
        interactions: "None significant",
        sideEffects: "Constipation, dizziness",
        storage: "Below 30°C",
        pediatricDosage: null
    },
    {
        name: "Zinc Sulphate",
        classification: "Mineral Supplement",
        symptoms: ["diarrhea in children", "zinc deficiency"],
        dosage: "Children 6 months–5 years: 10–20mg daily for 10–14 days",
        advice: "Use with ORS in diarrhea.",
        ghana_status: "Approved for OTC sale",
        contraindications: "Severe nausea/vomiting",
        interactions: "Iron (reduces absorption)",
        sideEffects: "Metallic taste, nausea",
        storage: "Below 30°C",
        pediatricDosage: null
    },
	
	{
        name: "Salbutamol Inhaler 100mcg",
        classification: "Short-Acting Beta-2 Agonist",
        symptoms: ["asthma attack", "wheezing", "shortness of breath"],
        dosage: "1–2 puffs every 4–6 hours as needed.",
        advice: "Seek help if symptoms worsen.",
        ghana_status: "Prescription-only",
        contraindications: "Severe heart disease.",
        interactions: "Beta-blockers, theophylline.",
        sideEffects: "Tremor, fast heartbeat.",
        storage: "Store capped, below 30°C.",
        pediatricDosage: null
    },
	
	{
    name: "Sodium Chloride 0.9% Nasal Drops",
    classification: "Nasal Decongestant (Saline)",
    symptoms: ["nasal congestion", "dry nasal passages", "blocked nose"],
    dosage: "Instill 2-3 drops in each nostril as needed.",
    advice: "Safe for all ages. Helps moisturize and clear nasal passages.",
    ghana_status: "Approved for OTC sale",
    contraindications: "None for normal use.",
    interactions: "None significant.",
    sideEffects: "Mild nasal irritation.",
    storage: "Store in a cool dry place, discard after 4 weeks of opening.",
    pediatricDosage: null
},
{
    name: "Paracetamol Suppository",
    classification: "Analgesic / Antipyretic",
    symptoms: ["fever", "pain", "when oral route not possible"],
    dosage: "Adults: 500mg-1g every 4-6 hours. Children: 15mg/kg every 4-6 hours.",
    advice: "Do not exceed 4g/day in adults.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Severe liver disease.",
    interactions: "Alcohol, warfarin.",
    sideEffects: "Rare; possible rash, liver toxicity in overdose.",
    storage: "Store below 25°C.",
    pediatricDosage: null
},
{
    name: "Albendazole 400mg",
    classification: "Anthelmintic",
    symptoms: ["worm infestation", "roundworms", "hookworms", "pinworms"],
    dosage: "Adults & children over 2 years: 400mg single dose.",
    advice: "Chew tablet before swallowing.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Pregnancy (first trimester).",
    interactions: "Dexamethasone, praziquantel.",
    sideEffects: "Mild abdominal pain, nausea.",
    storage: "Store below 30°C.",
    pediatricDosage: null
},
{
    name: "Ibuprofen Suspension",
    classification: "NSAID Analgesic",
    symptoms: ["fever", "pain", "inflammation"],
    dosage: "Children: 5-10mg/kg every 6-8 hours. Adults: 200-400mg every 6-8 hours.",
    advice: "Take with food to reduce stomach upset.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Peptic ulcer, severe kidney disease.",
    interactions: "Aspirin, warfarin, antihypertensives.",
    sideEffects: "Stomach irritation, dizziness.",
    storage: "Store below 25°C.",
    pediatricDosage: null
},
{
    name: "Metronidazole 400mg",
    classification: "Antiprotozoal / Antibiotic",
    symptoms: ["amoebiasis", "giardiasis", "bacterial vaginosis"],
    dosage: "Adults: 400mg three times daily for 5-7 days.",
    advice: "Avoid alcohol during and for 48 hours after treatment.",
    ghana_status: "Prescription-only medicine",
    contraindications: "First trimester pregnancy.",
    interactions: "Alcohol, warfarin, lithium.",
    sideEffects: "Metallic taste, nausea, dizziness.",
    storage: "Store below 25°C.",
    pediatricDosage: null
},
{
    name: "Oral Glucose Solution",
    classification: "Energy / Hypoglycemia Treatment",
    symptoms: ["low blood sugar", "weakness", "fatigue"],
    dosage: "Adults: 15-20g glucose orally, repeat if necessary.",
    advice: "For diabetics: check blood sugar before use.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Unconscious patient (use IV glucose).",
    interactions: "None significant.",
    sideEffects: "None for short-term use.",
    storage: "Store in a cool, dry place.",
    pediatricDosage: null
},
{
    name: "Vitamin C 1000mg",
    classification: "Vitamin Supplement",
    symptoms: ["immune support", "vitamin C deficiency"],
    dosage: "Adults: 500mg-1000mg daily.",
    advice: "High doses may cause diarrhea.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Kidney stones, hemochromatosis.",
    interactions: "Aluminum antacids, chemotherapy drugs.",
    sideEffects: "Mild stomach upset.",
    storage: "Store below 25°C.",
    pediatricDosage: null
},
{
    name: "Oral Zinc Sulfate",
    classification: "Mineral Supplement",
    symptoms: ["diarrhea in children", "zinc deficiency"],
    dosage: "Adults: 20mg daily. Children: 10mg daily.",
    advice: "Take after meals to reduce nausea.",
    ghana_status: "Approved for OTC sale",
    contraindications: "None significant.",
    interactions: "Reduces absorption of some antibiotics (e.g., tetracyclines).",
    sideEffects: "Nausea, metallic taste.",
    storage: "Store below 30°C.",
    pediatricDosage: null
},
{
    name: "Ferrous Sulfate",
    classification: "Iron Supplement",
    symptoms: ["iron deficiency anemia", "low hemoglobin"],
    dosage: "Adults: 200mg once or twice daily.",
    advice: "Take with food to reduce stomach upset. Avoid tea/coffee around dose time.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Iron overload disorders.",
    interactions: "Antacids, tetracyclines.",
    sideEffects: "Constipation, black stools.",
    storage: "Store below 30°C.",
    pediatricDosage: null
},
{
    name: "Ascorbic Acid (Vitamin C)",
    classification: "Vitamin Supplement",
    symptoms: ["vitamin C deficiency", "scurvy", "immune support"],
    dosage: "Adults: 500-1000mg daily.",
    advice: "May increase absorption of iron supplements.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Kidney stones (oxalate type).",
    interactions: "Warfarin (high doses).",
    sideEffects: "Stomach upset, diarrhea (high doses).",
    storage: "Store in cool, dry place.",
    pediatricDosage: null
},
{
    name: "Chloramphenicol Eye Drops 0.5%",
    classification: "Antibiotic Eye Drop",
    symptoms: ["bacterial conjunctivitis", "red eye with discharge"],
    dosage: "1-2 drops in affected eye every 2 hours while awake for first 48 hours, then reduce.",
    advice: "Do not use for more than 5 days without advice.",
    ghana_status: "Approved for OTC sale for eye infections",
    contraindications: "History of blood disorders.",
    interactions: "None significant for topical use.",
    sideEffects: "Mild eye irritation.",
    storage: "Store in fridge after opening.",
    pediatricDosage: null
},
{
    name: "Glycerin Suppository",
    classification: "Laxative",
    symptoms: ["constipation"],
    dosage: "Adults: 1 suppository once daily as needed. Children: use pediatric size.",
    advice: "Insert rectally; acts within 15-30 minutes.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Intestinal obstruction.",
    interactions: "None significant.",
    sideEffects: "Rectal irritation.",
    storage: "Store below 25°C.",
    pediatricDosage: null
},
{
    name: "Cough Syrup (Dextromethorphan)",
    classification: "Cough Suppressant",
    symptoms: ["dry cough", "non-productive cough"],
    dosage: "Adults: 10-20mg every 4 hours. Children 6-12 years: 5-10mg every 4 hours.",
    advice: "Do not use for productive coughs unless advised.",
    ghana_status: "Approved for OTC sale",
    contraindications: "MAOI use within 14 days.",
    interactions: "MAOIs, SSRIs.",
    sideEffects: "Drowsiness, dizziness.",
    storage: "Store below 30°C.",
    pediatricDosage: null
},
{
    name: "Clotrimazole 1% Cream",
    classification: "Topical Antifungal",
    symptoms: ["athlete's foot", "ringworm", "yeast infection (skin)"],
    dosage: "Apply thinly to affected area 2-3 times daily for at least 2 weeks.",
    advice: "Continue treatment for 1 week after symptoms resolve.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Allergy to clotrimazole.",
    interactions: "None significant.",
    sideEffects: "Skin irritation.",
    storage: "Store below 25°C.",
    pediatricDosage: null
},
{
    name: "Artemether-Lumefantrine",
    classification: "Antimalarial (Artemisinin-based combination therapy - ACT)",
    symptoms: ["fever", "chills", "sweating", "headache", "body pain", "confirmed malaria"],
    dosage: "Adults & children ≥35 kg: 4 tablets (20/120mg) twice daily for 3 days. Adjust for weight in children per PCG guidelines.",
    advice: "Take with fatty food or milk to improve absorption. Complete full course even if symptoms improve.",
    ghana_status: "Prescription-only medicine",
    contraindications: "First trimester pregnancy unless no alternative; hypersensitivity to artemether or lumefantrine.",
    interactions: "Avoid with strong CYP3A4 inhibitors or inducers, quinine, halofantrine.",
    sideEffects: "Loss of appetite, headache, dizziness, sleep problems.",
    storage: "Store below 30°C, away from moisture.",
    pediatricDosage: "Based on body weight bands."
},
{
    name: "Quinine Sulfate",
    classification: "Antimalarial (Cinchona alkaloid)",
    symptoms: ["fever", "chills", "confirmed severe malaria", "pregnancy malaria"],
    dosage: "Adults: 600mg every 8 hours for 7 days. Adjust for children per weight.",
    advice: "Often given with doxycycline (non-pregnant) or clindamycin (pregnant). Monitor for cinchonism symptoms.",
    ghana_status: "Prescription-only medicine",
    contraindications: "Optic neuritis, tinnitus, G6PD deficiency.",
    interactions: "Warfarin, digoxin, mefloquine.",
    sideEffects: "Tinnitus, nausea, visual disturbances.",
    storage: "Store below 25°C.",
    pediatricDosage: "10 mg/kg every 8 hours for 7 days."
},
{
    name: "Paracetamol (Fever Relief in Malaria)",
    classification: "Analgesic / Antipyretic",
    symptoms: ["fever", "headache", "body pain"],
    dosage: "Adults: 500–1000mg every 4–6 hours (max 4g/day). Children: 15mg/kg every 4–6 hours (max 60mg/kg/day).",
    advice: "Use alongside antimalarial treatment. Avoid exceeding maximum dose to prevent liver damage.",
    ghana_status: "Approved for OTC sale",
    contraindications: "Severe liver disease.",
    interactions: "Alcohol, rifampicin (increased liver risk).",
    sideEffects: "Very rare; possible allergic reaction.",
    storage: "Store below 30°C.",
    pediatricDosage: "15mg/kg every 4–6 hours."
}
        ];

        // --- DOM element references ---
        const symptomSelect = document.getElementById('symptomSelect');
        const searchSymptomsButton = document.getElementById('searchSymptomsButton');
        const symptomResultsDiv = document.getElementById('symptomResults');
        const drugNameSelect = document.getElementById('drugNameSelect');
        const drugInfoResultsDiv = document.getElementById('drugInfoResults');
        const alphabeticalIndexDiv = document.getElementById('alphabeticalIndex');
        const calcDrugSelect = document.getElementById('calcDrugSelect');
        const ageInput = document.getElementById('ageInput');
        const weightInput = document.getElementById('weightInput');
        const calculateDosageButton = document.getElementById('calculateDosageButton');
        const dosageResultDiv = document.getElementById('dosageResult');
        const accordionItems = document.querySelectorAll('.accordion-item');

        // --- Initial Data Population and Setup ---

        /**
         * Clears the content of a given result div and shows a "no results" message.
         * @param {HTMLElement} element The div to clear.
         * @param {string} message The message to display.
         */
        const displayNoResults = (element, message) => {
            element.innerHTML = `<p class="text-center text-gray-500 mt-8">${message}</p>`;
        };

        /**
         * Populates the symptom and drug select dropdowns from the medicalData.
         */
        const populateSelects = () => {
            // Get all unique symptoms
            const allSymptoms = new Set();
            medicalData.forEach(drug => {
                drug.symptoms.forEach(symptom => allSymptoms.add(symptom));
            });
            const sortedSymptoms = Array.from(allSymptoms).sort();
            sortedSymptoms.forEach(symptom => {
                const option = document.createElement('option');
                option.value = symptom;
                option.textContent = symptom.charAt(0).toUpperCase() + symptom.slice(1);
                symptomSelect.appendChild(option);
            });

            // Populate the drug name selects
            const sortedDrugs = medicalData.sort((a, b) => a.name.localeCompare(b.name));
            sortedDrugs.forEach(drug => {
                const option = document.createElement('option');
                option.value = drug.name;
                option.textContent = drug.name;
                drugNameSelect.appendChild(option);

                const calcOption = option.cloneNode(true);
                calcDrugSelect.appendChild(calcOption);
            });
        };
        
        /**
         * Renders the alphabetical index buttons.
         */
        const renderAlphabeticalIndex = () => {
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
            letters.forEach(letter => {
                const button = document.createElement('button');
                button.textContent = letter;
                button.classList.add('px-2', 'py-1', 'rounded-md', 'text-sm', 'font-semibold', 'text-gray-600', 'bg-gray-200', 'hover:bg-indigo-200', 'transition-colors');
                button.addEventListener('click', () => {
                    const foundDrug = medicalData.find(d => d.name.toUpperCase().startsWith(letter));
                    if (foundDrug) {
                        drugNameSelect.value = foundDrug.name;
                        searchByDrugName();
                    } else {
                        drugNameSelect.value = '';
                        displayNoResults(drugInfoResultsDiv, `No drugs found starting with '${letter}'.`);
                    }
                });
                alphabeticalIndexDiv.appendChild(button);
            });
        };

        // --- Search and Interaction Logic ---

        /**
         * Searches the medicalData for drugs that treat the selected symptoms.
         */
        const searchBySymptoms = () => {
            const selectedOptions = Array.from(symptomSelect.selectedOptions);
            const selectedSymptoms = selectedOptions.map(option => option.value);

            if (selectedSymptoms.length === 0) {
                displayNoResults(symptomResultsDiv, "Please select one or more symptoms.");
                return;
            }

            const results = medicalData.map(drug => {
                const matchedSymptoms = drug.symptoms.filter(symptom => selectedSymptoms.includes(symptom));
                if (matchedSymptoms.length > 0) {
                    return {
                        ...drug,
                        matchCount: matchedSymptoms.length,
                        matchedSymptoms: matchedSymptoms
                    };
                }
                return null;
            }).filter(Boolean); // Filter out null values

            // Sort results by the number of matched symptoms in descending order
            results.sort((a, b) => b.matchCount - a.matchCount);

            if (results.length === 0) {
                displayNoResults(symptomResultsDiv, "No drugs found for the selected symptoms.");
            } else {
                symptomResultsDiv.innerHTML = results.map(drug => `
                    <div class="p-4 mb-4 border-b border-gray-200 last:border-b-0">
                        <h3 class="text-lg font-semibold text-indigo-700">${drug.name}</h3>
                        <p class="text-gray-600"><span class="font-medium">Matches:</span> ${drug.matchedSymptoms.join(', ')}</p>
                        <p class="text-gray-500 mt-2 text-sm">${drug.ghana_status}</p>
                    </div>
                `).join('');
            }
        };

        /**
         * Searches the medicalData for information on a specific drug.
         */
        const searchByDrugName = () => {
            const query = drugNameSelect.value;

            if (!query) {
                displayNoResults(drugInfoResultsDiv, "Please select a drug name.");
                return;
            }

            const drug = medicalData.find(d => d.name === query);

            if (!drug) {
                displayNoResults(drugInfoResultsDiv, "No information found for that drug.");
            } else {
                drugInfoResultsDiv.innerHTML = `
                    <div class="p-4">
                        <h3 class="text-2xl font-bold text-indigo-700 mb-2">${drug.name}</h3>
                        <p class="text-gray-600 mb-4">${drug.ghana_status}</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div class="bg-gray-50 p-4 rounded-md">
                                <h4 class="font-semibold text-gray-800">Classification</h4>
                                <p class="text-gray-600">${drug.classification}</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-md">
                                <h4 class="font-semibold text-gray-800">Typical Symptoms Treated</h4>
                                <p class="text-gray-600">${drug.symptoms.join(', ')}</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-md col-span-2">
                                <h4 class="font-semibold text-gray-800">Dosage</h4>
                                <p class="text-gray-600">${drug.dosage}</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-md col-span-2">
                                <h4 class="font-semibold text-gray-800">Relevant Medical Advice</h4>
                                <p class="text-gray-600">${drug.advice}</p>
                            </div>
                             <div class="bg-gray-50 p-4 rounded-md col-span-2">
                                <h4 class="font-semibold text-gray-800">Contraindications</h4>
                                <p class="text-gray-600">${drug.contraindications}</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-md col-span-2">
                                <h4 class="font-semibold text-gray-800">Drug Interactions</h4>
                                <p class="text-gray-600">${drug.interactions}</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-md col-span-2">
                                <h4 class="font-semibold text-gray-800">Side Effects</h4>
                                <p class="text-gray-600">${drug.sideEffects}</p>
                            </div>
                            <div class="bg-gray-50 p-4 rounded-md col-span-2">
                                <h4 class="font-semibold text-gray-800">Storage Instructions</h4>
                                <p class="text-gray-600">${drug.storage}</p>
                            </div>
                        </div>
                    </div>
                `;
            }
        };

        /**
         * Calculates and displays dosage based on age and weight.
         */
        const calculateDosage = () => {
            const drugName = calcDrugSelect.value;
            const age = parseFloat(ageInput.value);
            const weight = parseFloat(weightInput.value);

            if (!drugName || isNaN(age) || age <= 0) {
                dosageResultDiv.innerHTML = `<p class="text-red-500">Please select a drug and enter a valid age.</p>`;
                dosageResultDiv.classList.remove('hidden');
                return;
            }

            const drug = medicalData.find(d => d.name === drugName);
            if (!drug) {
                dosageResultDiv.innerHTML = `<p class="text-red-500">No information found for this drug.</p>`;
                dosageResultDiv.classList.remove('hidden');
                return;
            }
            
            let resultHtml = '';
            
            if (age >= 18) {
                // Adult dosage
                resultHtml = `
                    <h4 class="font-semibold">Standard Adult Dosage:</h4>
                    <p class="text-lg font-bold text-indigo-700 mt-2">${drug.dosage}</p>
                `;
            } else {
                // Pediatric dosage
                if (isNaN(weight) || weight <= 0) {
                     dosageResultDiv.innerHTML = `<p class="text-red-500">Please enter a valid weight for a child.</p>`;
                     dosageResultDiv.classList.remove('hidden');
                     return;
                }

                if (drug.pediatricDosage) {
                    const dose = drug.pediatricDosage.formula(weight);
                    resultHtml = `
                        <h4 class="font-semibold">Calculated Dosage for a ${age}-year-old (${weight}kg):</h4>
                        <p class="text-lg font-bold text-indigo-700 mt-2">${dose}</p>
                        <p class="text-sm mt-2 text-gray-600"><strong>Notes:</strong> ${drug.pediatricDosage.notes}</p>
                    `;
                } else {
                    resultHtml = `<p class="text-red-500">Dosage calculation is not available for this age group for this drug.</p>`;
                }
            }

            dosageResultDiv.innerHTML = resultHtml;
            dosageResultDiv.classList.remove('hidden');
        };

        // --- Event Listeners and Initial State ---
        searchSymptomsButton.addEventListener('click', searchBySymptoms);
        drugNameSelect.addEventListener('change', searchByDrugName);
        calculateDosageButton.addEventListener('click', calculateDosage);
        
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            const icon = item.querySelector('.icon');
            header.addEventListener('click', () => {
                // Close other open accordions
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.accordion-content').classList.remove('active');
                        otherItem.querySelector('.icon').classList.remove('rotate-90');
                    }
                });

                // Toggle the clicked accordion
                content.classList.toggle('active');
                icon.classList.toggle('rotate-90');
            });
        });

        // Initialize the app
        window.onload = function() {
            populateSelects();
            renderAlphabeticalIndex();
            displayNoResults(symptomResultsDiv, "Select one or more symptoms and click 'Search' to find drugs.");
            displayNoResults(drugInfoResultsDiv, "Select a drug from the dropdown to see its details.");
        }
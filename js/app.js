let selected = new Set();

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initSymptoms();
  initFirstAid();
  initLab();
  initMarket();
  initSearch();
  updateResults();
});

function initNav() {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const view = link.dataset.view;

      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById(`view-${view}`).classList.add("active");
    });
  });
}

function initSymptoms() {
  const all = [...new Set(OTC_DB.flatMap(d => d.symptoms))];
  const container = document.getElementById("symptoms");

  container.innerHTML = all.map(s =>
    `<div class="symptom" data-symptom="${s}">${s}</div>`
  ).join("");

  document.querySelectorAll(".symptom").forEach(el => {
    el.addEventListener("click", () => {
      const sym = el.dataset.symptom;

      if (selected.has(sym)) {
        selected.delete(sym);
      } else {
        selected.add(sym);
      }

      el.classList.toggle("active");
      updateResults();
    });
  });
}

function initSearch() {
  document.getElementById("search").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();

    document.querySelectorAll(".symptom").forEach(el => {
      el.style.display = el.dataset.symptom.toLowerCase().includes(term)
        ? "block"
        : "none";
    });
  });
}

function updateResults() {
  const container = document.getElementById("results");

  if (selected.size === 0) {
    container.innerHTML = `<p class="text-gray-400">Select a symptom</p>`;
    return;
  }

  const matches = OTC_DB.filter(d =>
    [...selected].some(s => d.symptoms.includes(s))
  );

  if (matches.length === 0) {
    container.innerHTML = `<p>No matches found</p>`;
    return;
  }

  container.innerHTML = matches.map(m => `
    <div class="card">
      <h3 class="font-bold">${m.name}</h3>
      <p>${m.action}</p>
      <p class="text-xs text-gray-500">${m.brands.join(", ")}</p>
    </div>
  `).join("");
}

function initFirstAid() {
  const container = document.getElementById("firstaid");

  container.innerHTML = FIRST_AID.map(f => `
    <div class="card mb-2">
      <h3 class="font-bold">${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  `).join("");
}

function initLab() {
  const container = document.getElementById("lab");

  container.innerHTML = LAB.map(l => `
    <div class="card mb-2">
      <h3 class="font-bold">${l.title}</h3>
      <ul class="text-sm list-disc ml-4">
        ${l.steps.map(s => `<li>${s}</li>`).join("")}
      </ul>
    </div>
  `).join("");
}

function initMarket() {
  const container = document.getElementById("market");

  container.innerHTML = OTC_DB.map(d => `
    <tr class="border">
      <td class="p-2 font-bold">${d.name}</td>
      <td class="p-2">${d.action}</td>
      <td class="p-2">${d.brands.join(", ")}</td>
    </tr>
  `).join("");
}

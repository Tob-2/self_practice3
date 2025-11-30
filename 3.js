async function showStudyPlans() {
  const table = $('table');
  const plans = await getstudyPlans();
  if(Number.isInteger(plans)){
    return Dialog('There is a problem. Please try again later.');
  }
  plans.sort((a, b) => a.id - b.id);
  const tbody = document.createElement('tbody');

  for (const p of plans) {
    const tr = document.createElement('tr');
    tr.className = 'ecors-row';
    tr.innerHTML = `
      <td class="ecors-id py-3 px-5 border-black border-2">${p.id}</td>
      <td class="ecors-planCode py-3 px-5 border-black border-2">${p.planCode}</td>
      <td class="ecors-nameEng py-3 px-5 border-black border-2">${p.nameEng}</td>
      <td class="ecors-nameTh py-3 px-5 border-black border-2">${p.nameTh}</td>
    `;
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
}
document.addEventListener('DOMContentLoaded', async () => {
  showStudyPlans();
});

async function getItems(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      switch (res.status) {
        case 500:
        case 502: Dialog("There is a problem. Please try again later."); break;
        default: return res.status;
      }
    }
    return await res.json();
  } catch (err) {
    Dialog("There is a problem. Please try again later.")
  }
}

async function getstudyPlans() {
  try {
    const studyPlan = await getItems(`${import.meta.env.VITE_APP_URL}/study-plans`);
    return Array.isArray(studyPlan) ? studyPlan : Number.isInteger(studyPlan) ? 
    studyPlan : (studyPlan.data ?? []);
  } catch (err) {
    throw err;
  }
}
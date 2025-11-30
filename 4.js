async function postItems(url, bodyobj) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyobj)
    });
    if (!res.ok) {
      switch (res.status) {
        case 500:
        case 502: Dialog("There is a problem. Please try again later."); return res.status;
        default: return await res.status;
      }
    }
    return await res.json();
  } catch (err) {
    Dialog("There is a problem. Please try again later.")
  }
}
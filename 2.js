async function getIdDeclaredPlan(studentId) {
    if (!studentId) { return "studentId Not Found" }
    try {
        const declaredPlan = await getItems(`${import.meta.env.VITE_APP_URL}/students/${studentId}/declared-plan`);
        return declaredPlan;
    } catch (err) {
        throw err
    }
}

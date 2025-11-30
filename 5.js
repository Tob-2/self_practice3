async function postDeclaredPlan(studentId, planId) {
    if (!studentId || !planId) { throw "studentId or planId Not Found" }
    try {
        const body = {"planId": Number.parseInt(planId)}
        const declaredPlan = await postItems(`${import.meta.env.VITE_APP_URL}/students/${studentId}/declared-plan`,body)
        return declaredPlan;
    } catch (err) {
        throw err
    }
}

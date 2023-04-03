export const sanitizeObject = obj => {
    const newObject = {};
    Object.entries(obj).forEach(([key, value]) => {
        if (!value) return;
        newObject[key] = value;
    })
    return newObject;
}
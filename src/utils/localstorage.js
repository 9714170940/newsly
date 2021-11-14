export const deleteParticularData = (key) => localStorage.removeItem(key)
export const addParticularData = (key,value) => localStorage.setItem(key,value)
export const getParticularData = (key) => localStorage.getItem(key)
export const clearAllData = () => localStorage.clear()
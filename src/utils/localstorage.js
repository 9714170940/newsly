export const deleteParticularData = (key) => localStorage.removeItem(key)
export const addParticularData = (key,value) => localStorage.setItem(key,value)
export const getParticularData = (key,value) => localStorage.getItem(key,value)
export const clearAllData = () => localStorage.clear()
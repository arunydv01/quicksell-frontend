
// Storing data
function storeData(key, value) {
  // Convert the value to a string if it's not already
  const stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
}

// Fetching data
function fetchData(key) {
  const stringValue = localStorage.getItem(key);
  // Try to parse the string as JSON, in case it's an object or array
  try {
    return JSON.parse(stringValue);
  } catch (error) {
    // If parsing fails, return the string value
    return stringValue;
  }
}

export { storeData, fetchData };
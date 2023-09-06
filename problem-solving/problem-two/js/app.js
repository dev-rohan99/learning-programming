

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  strs.sort(); // Sort the array of strings

  const firstStr = strs[0]; // Get the first string in the sorted array
  const lastStr = strs[strs.length - 1]; // Get the last string in the sorted array
  let prefix = "";

  for (let i = 0; i < firstStr.length; i++) {
    // Compare characters of the first and last strings
    if (firstStr[i] === lastStr[i]) {
      prefix += firstStr[i]; // Add character to the prefix if they are the same
    } else {
      break; // Stop the loop when characters are not the same
    }
  }

  return prefix; // Return the longest common prefix
}


const strs1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs1)); // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs2)); // Output: ""


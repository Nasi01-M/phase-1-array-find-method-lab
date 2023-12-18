// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  
  function superbowlWin(records) {
    // Use the find method to search for the first record with a result of "W"
    const winningRecord = records.find(record => record.result === "W");
  
    // Check if a winning record was found
    if (winningRecord) {
      // Return the year of the winning record
      return winningRecord.year;
    } else {
      // If no win is found, return undefined
      return undefined;
    }
  }
  
  // Example 
  const winYear = superbowlWin(record);
  console.log(winYear); // Output: "2015" (or undefined if no win is found)
  
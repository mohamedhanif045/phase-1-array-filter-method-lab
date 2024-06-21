// Code your solution here
// Function to find matching drivers' names (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers whose names begin with the provided letters
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function to find driver objects whose name property matches the provided string
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  // Example usage
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
  const driverObjects = [
    { name: 'Bobby', hometown: 'New York' },
    { name: 'Sammy', hometown: 'Los Angeles' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Houston' },
    { name: 'Sarah', hometown: 'Austin' },
    { name: 'bobby', hometown: 'Denver' }
  ];
  
  // Test the functions
  console.log(findMatching(drivers, 'Bobby')); // ['Bobby', 'bobby']
  console.log(fuzzyMatch(drivers, 'Sa')); // ['Sammy', 'Sally', 'Sarah']
  console.log(matchName(driverObjects, 'Bobby')); // [{ name: 'Bobby', hometown: 'New York' }, { name: 'bobby', hometown: 'Denver' }]
  
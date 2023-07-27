function checkPropInObj (str, obj) {
    return (str in obj);
  }

const myObject = {
    name: "John",
    age: 30,
    city: "New York",
  };
  
  console.log(checkPropInObj("name", myObject)); // Output: true
  console.log(checkPropInObj("gender", myObject)); // Output: false
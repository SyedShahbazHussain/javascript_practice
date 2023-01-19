const arr = [
    { oldName: "Ali", id: "12", fName:'abc'},
    { oldName: "Zain", id: "13", fName:'abc'},
    { oldName: "Abdul", id: "3", fName:'abc'},
  ];
  
  function renameKey(obj, old_key, new_key) {
    // check if old key = new key
    if (old_key !== new_key) {
      Object.defineProperty(
        obj,
        new_key, // modify old key
        // fetch description from object
        Object.getOwnPropertyDescriptor(obj, old_key)
      );
      delete obj[old_key]; // delete old key
    }
  }
  function rename() {
    arr.forEach((obj) => {
      renameKey(obj, "oldName", "newName");
      renameKey(obj, "id", "ID");
    });
    console.log(arr);
  }
  rename();
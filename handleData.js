const databaseFile = 'database.txt';

const postData = (jsonData) => {
    fetch('saveData.php', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: jsonData
    })
    .then(res => res.json())
    .then(res => {
        if (res === 'success') {
            swal({
                icon: "success",
                title: "Information saved!"
            });
        } else {
            swal({
                icon: "error",
                title: "Something went wrong!"
            });
        }
    });
}

const readDataBase = (database) => {
  databaseSchema.dataSource = database;
  $("#forms").alpaca(databaseSchema);
};

// load database
fetch(databaseFile)
  .then(response => response.json())
  .then(json => readDataBase(json));
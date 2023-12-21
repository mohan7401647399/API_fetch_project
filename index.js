var res = fetch("https://jsonplaceholder.typicode.com/users");
res.then((data) => data.json()).then((value) => bar(value));

var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";
container.append(row);
document.body.append(container)

function bar(value) {
    for (var i = 0; i < value.length; i++) {
        // console.log(value[i]);
        var name = value[i].name;
        console.log(name);
        var email = value[i].email;
        console.log(email);
        var addStreet = value[i].address.street;
        console.log(addStreet);
        var addCity = value[i].address.city;
        console.log(addCity);

        row.innerHTML += `
        <div class="col-md-3 col-lg-3 col-sm-4 col-xl-3 p-4 d-flex flex-wrap m-auto">
            <div class="card border-primary mb-3 bg-info" style="min-height:230px">
                <div class="card-body text-light">
                    <p class="card-text font-weight-bold">Name: ${name}</p>
                    <p class="card-text">Email: ${email}</p>
                    <p class="card-text">Street: ${addStreet}</p>
                    <p class="card-text">City: ${addCity}</p>
                </div>
            </div>
        </div>
        `
    }
}

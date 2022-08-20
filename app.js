var carObject = {
    vehicle: "Car",
    imageUrl:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

    farePerKilo: 4,
    capacity: 4,
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var bikeObject = {
    vehicle: "bike",
    imageUrl:
        "https://images.unsplash.com/photo-1637323422762-57a02a20909e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdG9iaWtlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

    farePerKilo: 2,
    capacity: 2,
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var busObject = {
    vehicle: "bus",
    imageUrl:
        "https://images.unsplash.com/photo-1501393091915-82f0cbd8f338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",

    farePerKilo: 3,
    capacity: 30,
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var boatObject = {
    vehicle: "Boat",
    imageUrl:
        "https://images.unsplash.com/photo-1593351415075-3bac9f45c877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9hdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",

    farePerKilo: 3,
    capacity: 4,
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
const allService = [
    carObject, busObject, bikeObject, boatObject
]

function displayService(service) {
    const mainSection = document.getElementById("main-section")
    const stringifedobject = JSON.stringify(service)
    const div = document.createElement('div')
    div.innerHTML = ` 
    <div class="card mt-3 mx-auto" style="max-width:800px;">
        <div class="row g-0 ms-3 d-flex justify-content-center align-items-center">
            <div class="col-md-4">
                <img src=${service.imageUrl} class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Transport Mood : ${service.vehicle}</h5>
                    <p class="card-text">${service.description}.</p>
                    <p class="card-text"><small>Fare Per km : ${service.farePerKilo} </small> <small>Capacity : ${service.capacity} </small></p>

                    <button type="button" class="btn btn-primary" onclick='handleBooking(${stringifedobject})' data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Book Now
                    </button>
                </div>
            </div>
        </div>
  </div>
  `
    mainSection.appendChild(div)
}
function displayAllService(serviceArray) {
    for (let i = 0; i < serviceArray.length; i++) {
        const element = serviceArray[i];
        displayService(element)
    }
}
displayAllService(allService)


//handle booking
function handleBooking(object) {
    const modalBody = document.getElementById("modal-content")
    const stringifedobject = JSON.stringify(object)
    modalBody.innerHTML =
        `
    <div class="card mx-auto" style="width: 100%;">
        <img src=${object.imageUrl} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Transport Mood : ${object.vehicle}</h5>
           
            <p class="card-text">${object.description}.</p>
            <p class="card-text"><small>Fare Per km : ${object.farePerKilo} </small> <small>Capacity : ${object.capacity} </small></p>

            <p class="card-text" > Fare : <small id="fare"> </small></p>
            <p class="card-text">Tax : <small id="tax"></small></p>
            <p class="card-text" id="total-cost"><b>Total : <small id="total"></small> </b></p>

            <div class="input-group mb-3">
                <input id= "distance-input" type="number" class="form-control me-2" placeholder="km" aria-label="Recipient's username" aria-describedby="button-addon2"> 

                <input  id= "quantity-input" type="number" class="form-control me-2" placeholder="amount of car" aria-label="Recipient's username" aria-describedby="button-addon2">
                <br>


                <button id="search-btn" onclick='calculateTotalCost(${stringifedobject})'class="btn btn-success" type="button">Button</button>
          </div>

           
    </div>
  </div>
    
    
    `
}


function calculateTotalCost(object) {
    const distanceInput = document.getElementById("distance-input").value
    const quantityInput = document.getElementById("quantity-input").value

    const fareValue = document.getElementById("fare");
    const taxValue = document.getElementById("tax");
    const totalValue = document.getElementById("total");
    fareValue.innerHTML = Number(distanceInput * quantityInput * object.farePerKilo).toFixed(2)

    taxValue.innerHTML = Number(fareValue.innerHTML * .1).toFixed(2)

    totalValue.innerHTML = (Number(fareValue.innerHTML) + Number(taxValue.innerHTML)).toFixed(2)

    console.log(fareValue);
    console.log(taxValue);
    console.log(totalValue);
}

document.getElementById("src-btn").addEventListener("click", function () {
    const inputValue = document.getElementById("search-field").value;

    for (let i = 0; i < allService.length; i++) {
        const element = allService[i];
        if (inputValue.toLowerCase() == element.vehicle.toLowerCase()) {
            document.getElementById("main-section").innerHTML = ""
            displayService(element)
            return;
        }
    }
    alert("Please Input (bus,bike,car)name")

})

// POST
var button = document.getElementById("postBtn");

function post (){
    axios.request({
        method:"POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        headers:{
            "Content-Type": "application/json"
        },
        data:{
            userId: 1,
            title: 'foo',
            body: 'bar'
        }
    }).then(postSuccess).catch(postFail);
}

function postSuccess(response){
    alert("Successfully posted");
    console.log(response);
}

function postFail(error){
    console.error(error);
}

button.addEventListener("click", post);


// PATCH

    axios.request({
        method: "PATCH",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        headers: {
            "Content-Type": "application/json" 
        },
        data:{
            title: 'It is worth it to go to space?',
        }
    }).then(updateSuccess).catch(updateFail);


function updateSuccess(response){
    console.log(response);
}

function updateFail(error){
    console.error(error);
}

// Delete
axios.request({
    method: "Delete",
    url: "https://jsonplaceholder.typicode.com/posts/1",
    headers:{
        "Content-Type": "application/json"
    }
}).then(deleteSuccess).catch(deleteFail);

function deleteSuccess(response){
    console.log(response);
}

function deleteFail(error){
    console.error(error);
}

// GET

axios.request({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
}).then(getSuccess).catch(getFail);

function getSuccess(response){
    console.log(response);
    document.getElementById("output").innerHTML = response.data;
}

function getFail(error){
    console.error(error);
}







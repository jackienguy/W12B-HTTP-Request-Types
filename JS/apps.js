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
function updatePost(){
    axios.request({
        method: "PATCH",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        headers: {
            "Content-Type": "application/json" 
        },
        data:{
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
    }).then(updateSuccess).catch(updateFail);
}
import React from 'react';
//additional styling
const surveyStyle={
    list:{
       
        flexWrap: 'wrap'
    },

    container:{ 
        height: '200px',
        overflow: 'scroll',
        padding: '10px'
    },
    button:{
        margin:'10px'
    },
    input:{
        width: '100%',
        margin:'2px'
    }
}
//Some helper functions for page functionality
function add_new(){
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var input = document.getElementById("input").value;
    if(input != ""){
      li.appendChild(document.createTextNode(input));    
      ul.appendChild(li);
    }
   
    document.getElementById("input").value = "";
}

function submit_data(){
    //must be connected to database
    document.getElementById("input").value = "";
    document.getElementById("list").innerHTML = "";
   

}

function clear_data(){
    document.getElementById("input").value = "";
    document.getElementById("list").innerHTML = "";
}

const NewSurvey = () => (
    <React.Fragment>  
        <h2>Creating New Survey:</h2>
        <input style={surveyStyle.input}type="text" id="input"></input>
        <div style={surveyStyle.container}>
          
            <ul style={surveyStyle.list} id="list">
            </ul>
        </div>
        <button style={surveyStyle.button}onClick={add_new} type="button" class="btn btn-primary">Add New Category</button>
        <button style={surveyStyle.button}onClick={submit_data} type="button" class="btn btn-primary">Submit</button>
        <button type="button" onClick={clear_data} class="btn btn-danger">Clear</button>
    </React.Fragment>
);

export default NewSurvey;
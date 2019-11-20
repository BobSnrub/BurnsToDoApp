let addBtn = document.getElementById('addBtn');
let pCounter = 0;

let addElements = document.getElementById('addElements');
let keyPress = document.getElementById('keyPress');

let todoList = [];

keyPress.addEventListener('keypress', function(e){
    // console.log(e.code);
    if(e.code == 'Enter' && keyPress.value != ''){
    //Put data entered into p tag.
    createItem(keyPress.value);

    //going to save value into array
    todoList.push(keyPress.value);
    //save item to localStorage
    localStorage.setItem('todo', JSON.stringify(todoList));
    //clears what is entered
    keyPress.value = null;
    }
});


//--------------------------------------------------------------------------------------------//

let itemCounter = 0;

function createItem(content){
    let div_l1_a = document.createElement('div');
    div_l1_a.setAttribute('class', 'list-group-item d-flex align-items-center pl-1 m-2');
    addElements.append(div_l1_a);
    
    let img_l2_a = document.createElement('img')
    img_l2_a.setAttribute('class', 'border border-danger ');
    img_l2_a.setAttribute('src', 'https://img.icons8.com/officexs/16/000000/delete-sign.png');
    img_l2_a.setAttribute('width', '20px');
    img_l2_a.setAttribute('itemCounter', itemCounter.toString());
    console.log(img_l2_a);

    img_l2_a.addEventListener('click', function(){
        this.parentElement.remove();
        saveStorage();
    });

    // console.log(document.getElementsByTagName("p")[0].getAttribute("itemCounter"));
    div_l1_a.append(img_l2_a);
    
    let input_l2_a = document.createElement('input');
    input_l2_a.setAttribute('type', 'checkbox');
    input_l2_a.setAttribute('aria-label', 'Checkbox for following text input');
    input_l2_a.setAttribute('class', 'item-check mx-2');
    div_l1_a.append(input_l2_a);
    
    let p_l2_a = document.createElement('p');
    p_l2_a.setAttribute('class', 'mb-0 listItem');

    p_l2_a.addEventListener('click', function(){
        p_l2_a.contentEditable = 'true';
    });

    //------------------
    p_l2_a.addEventListener('keypress', function(e){
        console.log("adsf");
        if(e.code == 'Enter' && keyPress.value != ''){
            saveStorage();
        }
    })
    //------------------
    
    p_l2_a.innerText = content;
    div_l1_a.append(p_l2_a);
    //console.log(localStorage.getItem('todo'));
    itemCounter++;
}



//--------------------------------------------------------------------------------------------//

function itemReset(){
    if(localStorage.getItem('todo') != undefined){
        console.log(JSON.parse(localStorage.getItem('todo')))
        let todoLocal = JSON.parse(localStorage.getItem('todo'));
        //populate array items into p tags
        for(let i = 0; i<todoLocal.length; i++){
            createItem(todoLocal[i]);
        }
        //saving local storage array into our array.
        todoList = todoLocal;
    }
}



function saveStorage(){
    let myArr = [];
    let pByClass = document.getElementsByClassName('listItem');
    for(let i = 0; i < pByClass.length; i++){
        myArr.push(pByClass[i].innerText);
        console.log(myArr);
    }
    todoList = localStorage.setItem('todo',JSON.stringify(myArr));
    // = JSON.parse(localStorage.getItem('todo'));
    //todoList = myArr;
}



itemReset();








//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------//


// function createPElement(content){
    //     let pElement = document.createElement('p');
    //     pElement.innerText = content;
    //     pElement.setAttribute('class', 'list-group-item');
    //     pElement.addEventListener('click', function (e) {
        //         alert("I am a P Tag!");
        //     });
        //     addElements.append(pElement);
        //     pCounter++;
        // }
        
        // keyPress.addEventListener('keypress', function(e){
            //     // console.log(e.code);
            //     if(e.code == 'Enter' && keyPress.value != ''){
                //     //Put data entered into p tag.
                //     createPElement(keyPress.value);
                
                //     //going to save value into array
                //     todoList.push(keyPress.value);
                //     //save item to localStorage
                //     localStorage.setItem('todo', JSON.stringify(todoList));
                //     //clears what is entered
                //     keyPress.value = null;
                //     }
                // });
                
                
                /* 
                <div class="">
                <img class="" src="" width="20px">
                <input ="" ="" class="">
                <p ="">
                
                </p>
                </div> */

                
                addBtn.addEventListener('click', function(){
                    let div_l1_a = document.createElement('div');
                    div_l1_a.setAttribute('class', 'list-group-item d-flex align-items-center pl-1 m-2');
                    addElements.append(div_l1_a);
                
                    let img_l2_a = document.createElement('img')
                    img_l2_a.setAttribute('class', 'border border-danger');
                    img_l2_a.setAttribute('src', 'https://img.icons8.com/officexs/16/000000/delete-sign.png');
                    img_l2_a.setAttribute('width', '20px');
                    div_l1_a.append(img_l2_a);
                
                    let input_l2_a = document.createElement('input');
                    input_l2_a.setAttribute('type', 'checkbox');
                    input_l2_a.setAttribute('aria-label', 'Checkbox for following text input');
                    input_l2_a.setAttribute('class', 'item-check mx-2');
                    div_l1_a.append(input_l2_a);
                
                    let p_l2_a = document.createElement('p');
                    p_l2_a.setAttribute('class', 'mb-0');
                    p_l2_a.innerText = "Text Text Text Text Text Text Text Text Text Text Text";
                    div_l1_a.append(p_l2_a);
                });
                
let addBtn = document.getElementById('addBtn');

let addElements = document.getElementById('addElements');

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
    input_l2_a.setAttribute('class', 'item-box mx-2');
    div_l1_a.append(input_l2_a);

    let p_l2_a = document.createElement('p');
    p_l2_a.setAttribute('class', 'mb-0');
    p_l2_a.innerText = "Text Text Text Text Text Text Text Text Text Text Text";
    div_l1_a.append(p_l2_a);

    // let newBtn = document.createElement('button');
    // newBtn.setAttribute('id', 'addBtn');
    // newBtn.setAttribute('type', 'button');
    // newBtn.setAttribute('class', 'btn btn-danger m-5');
    // newBtn.innerText='This is a New Button!';
    // addElements.append(newBtn);
});






{/* 
<div class="">
    <img class="" src="" width="20px">
    <input ="" ="" class="">
    <p ="">
        
    </p>
</div> */}
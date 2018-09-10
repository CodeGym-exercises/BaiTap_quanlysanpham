let input= document.getElementById("input");
let result = document.getElementById("all_product");
function Add_Element(){
	let box = "<div class='box'> <strong>"+input.value +"</strong>"
	+"<input class='btn' type='button' name='add' value='Remove' onclick='Remove_Element(this);'>"
	+"<input class='btn' type='button' name='edit' value='Edit' onclick='Edit_Element(this);'>"
	+"</div>";
	result.innerHTML += box;
	input.value="";
}

function Remove_Element(elm){
	elm.parentElement.parentElement.removeChild(elm.parentElement);
}

function Edit_Element(elm){
	let edit_value = prompt("Nhập vào giá trị cần sửa");
	let strong = document.createElement("strong");
	strong.innerText = edit_value;
	elm.parentElement.replaceChild(strong,elm.parentElement.firstElementChild);
}

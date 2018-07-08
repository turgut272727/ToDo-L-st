window.onload = function() {
	
	var addBtn = document.getElementById('todo_btn');
	var listCont = document.getElementById('list-container');
	var input;
	var todoList = [];
	var obj = {};
	var close;
	var listItem;
	
	addBtn.onclick = function() {
		
		obj.todo = input;
		obj.do = false;
		obj.close = document.querySelector('.close');
		var i = todoList.length;
		todoList[i] = obj;
		
		input = document.getElementById('todo_input').value;				
		listCont.innerHTML += '<div class="list_item">'+ input + '<span class="close">X</span>' + '</div>';
		close = document.getElementsByClassName('close');
		listItem = document.getElementsByClassName('list_item');
		
		for(var j=0; j<todoList.length; j++) {
			close[j].onclick = sil;
		}
		
		for(var j=0; j<todoList.length; j++) {
			listItem[j].onclick = ciz;
		}
		

	}
	
	function sil() {
		this.parentElement.remove();
	}
	
	function ciz() {
		this.style.textDecoration = 'line-through';
	}
	
	
	
	
	
}
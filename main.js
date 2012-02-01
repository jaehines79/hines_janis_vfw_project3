// Week 1 
// MiU 1202 
// Janis Jae Hines 
// January 31, 2012 

window.addEventListener("DOMContentLoaded", function(){
    
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }                 
    function makeCats(){
        var formTag = document.getElementsByTagName("form"),
            selectItem = $('select'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("class", "entry");
            makeSelect.setAttribute("id","recurrence");
        for(var i=0, n=recurrenceNumber.length; i<n; i++) {
            var makeOption = document.createElement('option');
            var optionText = recurrenceNumber[i];
            makeOption.setAttribute("value", optionText);
            makeOption.innerHTML = optionText;
            makeSelect.appendChild(makeOption);
        }
        selectItem.appendChild(makeSelect);
    }

    function getSelectedRadio(){
        var radiobox = document.forms[0].relevance;
        for (var i=0; i<radiobox.length; i++){
            if(radiobox[i].checked){
            radioValue = radiobox[i].value;
            }
        }
    }
    
    function toggleView(n){
        switch(n){
            case "on":
                $('event').style.display = "none";
                $('clear').style.display = "inline";
                $('view').style.display = "none";
                $('addItem').style.display = "inline";
                break;
            case "off":
                $('event').style.display = "block";
                $('clear').style.display = "inline";
                $('view').style.display = "inline";
                $('addItem').style.display = "none";
                $('items').style.display = "none";
                break;
            default:
                return false;
        }
    }

    function storeData(key){
    
        var id = 0;
        
        if(!key){
            id = Math.floor(Math.random()*10000001);
        } else {
            id = key;
        }
        getSelectedRadio();
        
        var item = {};
            item.events = ["Event Name: ", $('events').value];
            item.recurrence = ["Recurrence: ", $('recurrence').value];
            item.often = ["Number of Recurrences: ", $('often').value];
            item.info = ["Additional Info: ", $('info').value];
            item.location = ["Location of Event: ", $('location').value];
            item.relevance = ["The Event is for: ", radioValue];
            item.guest = ["Guest: ", $('guest').value];
            item.importance = ["Event Importance: ", $('importance').value];
            item.date = ["Date of Event: ", $('date').value];
            item.notes = ["Notes: ", $('notes').value];
        localStorage.setItem(id, JSON.stringify(item));
        alert("Event Saved");
    }
    function getData(){
        if(localStorage.length == 0){
            alert("No Events Found, default data was added.");
            autoFillData();
        }
        toggleView("on");
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id","items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $('items').style.display = "block";
        for(var i=0, lslen=localStorage.length; i<lslen; i++){
            var makeli = document.createElement('li');
            var linksli = document.createElement('li');
            	makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            getImage(obj.recurrence[1], makeSubList);
            for(var n in obj){
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0]+ " " +obj[n][1];
                makeSubli.innerHTML = optSubText;
                makeSubList.appendChild(linksli);
            }
            makeItemLinks(localStorage.key(i), linksli);
        }
    }

    function getImage(catName, makeSubList){
    	var imageli = document.createElement('li');
    	makeSubList.appendChild(imageli);
    	var newImg = document.createElement('img');
    	var setSrc = newImg.setAttribute("src", "images/" + catName + ".png");
    	imageli.appendChild(newImg);
    }
    
    //Auto populate Local Storage
    function autoFillData(){
    	for(var n in json){
    		var id = Math.floor(Math.random()*10000001);
    		localStorage.setItem(id, JSON.stringify(json[n]));
	    }
	}

    function makeItemLinks(key, linksli){
        var editLink = document.createElement('a');
        editLink.href = "#";
        editLink.key = key;
        var editText = "Edit Event";
        editLink.addEventListener("click", editItem);
        editLink.innerHTML = editText;
        linksli.appendChild(editLink);
        
        var breakTag = document.createElement('br');
        linksli.appendChild(breakTag);
        
        var deleteLink = document.createElement('a');
        deleteLink.href = "#";
        deleteLink.key = key;
        var deleteText = "Delete Event";
        deleteLink.addEventListener("click", deleteItem);
        deleteLink.innerHTML = deleteText;
        linksli.appendChild(deleteLink);
    
    }
    
    function editItem(){
        var value = localStorage.getItem(this.key);
        var object = JSON.parse(value);

		toggleView("off");
        $('events').value = object.events[1];
        $('recurrence').value = object.recurrence[1];
        $('often').value = object.often[1];
        $('info').value = object.info[1];
        $('location').value = object.location[1];
        var radiobox = document.forms[0].relevance;
        for (var i=0; i<radiobox.length; i++){
            if(radiobox[i].value == "family" && object.relevance[1] == "family"){
            radiobox[i].setAttribute("checked", "checked");
            }
            else if(radiobox[i].value == "friend" && object.relevance[1] == "friend"){
            radiobox[i].setAttribute("checked", "checked");
            }
            else if(radiobox[i].value == "other" && object.relevance[1] == "other"){
            radiobox[i].setAttribute("checked", "checked");
            }
        }
        $('guest').value = object.guest[1];
        $('importance').value = object.importance[1];
        $('date').value = object.date[1];
        $('notes').value = object.notes[1];
        
        save.removeEventListener("click", storeData);
        $('submit').value = "Edit Event";
        var editSubmit = $('submit');
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
    }
    
    function deleteItem(){
        var ask = confirm("Removing Selected Event.\nAre you sure?");
        if(ask){
            localStorage.removeItem(this.key);
            alert("Event Removed");
            window.location.reload();
        } else {
            alert("Event NOT Removed");
        }
    }
    
    function clearLocal(){
        if(localStorage.length == 0){
            autoFillData();
            alert("No Events Found");
        } else {
            localStorage.clear();
            alert("All Events Cleared!");
            window.location.reload();
            return false;
        }
    }
    
    function validate(e){  
        var validated = true;
        var eventsName = $('events');
        var recurrenceNumber = $('recurrence');
        var oftenNumber = $('often');
        var guestNumber = $('guest');
        var importanceNumber = $('importance');
        oftenErr.innerHTML = "";
        eventsName.style.border = "1px solid black";
        recurrenceNumber.style.border = "1px solid black";
        oftenNumber.style.border = "1px solid black";
        detailErr.innerHTML = "";
        guestNumber.style.border = "1px solid black";
        importanceNumber.style.border = "1px solid black";
       
       var oftenArray = [];
            if(eventsName.value === ""){
            	var eventsError = "Please enter an Event name";
            	eventsName.style.border = "1px solid red";
            	oftenArray.push(eventsError);
        	}
            if(recurrenceNumber.value === "--Event Recurrence--"){
            	var recurrenceError = "Please choose a valid recurrence value";
            	recurrenceNumber.style.border = "1px solid red";
            	oftenArray.push(recurrenceError);
        	}
            if(oftenNumber.value === ""){
            	var oftenError = "Please enter a valid number of recurrences";
            	oftenNumber.style.border = "1px solid red";
            	oftenArray.push(oftenError);
        	}
            var detailArray = [];
            var re = /^[0-9]{3}$/;
        		if((!(re.exec(guestNumber.value))) || (guestNumber.value === "000")){
            		var guestError = "Please enter a valid 3 digit Guest number ex. 003";
            		guestNumber.style.border = "1px solid red";
           			detailArray.push(guestError);
        		}
            if(importanceNumber.value === ""){
            	var importanceError = "Please choose an importance value";
            	importanceNumber.style.border = "1px solid red";
            	detailArray.push(importanceError);
       		 }
            if(oftenArray.length >= 1){
            	for(var i=0, j=oftenArray.length; i < j; i++){
                var txt = document.createElement('li');
                txt.innerHTML = oftenArray[i];
                oftenErr.appendChild(txt);
            }
            validated = false;
        }
        
        if(detailArray.length >= 1){
            for(var n=0, q=detailArray.length; n < q; n++){
                var msg = document.createElement('li');
                msg.innerHTML = detailArray[n];
                detailErr.appendChild(msg);
            }
            validated = false;
        }
        if (validated){
            storeData(this.key);
        } else {
            e.preventDefault();
            return false;
        }
    }               
    var recurrenceNumber = ["--Event Recurrence--", "Weekly", "Monthly", "Yearly", "Once"],
    radioValue,
    oftenErr = $('oftenErrors'),
    detailErr = $('detailErrors');
    
    makeCats();
                    
    var displayLink = $('view');
    displayLink.addEventListener("click", getData);
    var clearLink = $('clear');
    clearLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", validate);
    
});


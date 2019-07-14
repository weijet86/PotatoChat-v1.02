var retrievedItem;
var myRetrievedItems;
var p;
var index;
var UserNameInList;

//Function to create list elements!
function createListElement(userNameString) {
   
  var node = document.createElement("LI");
  var textnode = document.createTextNode(userNameString);
  node.appendChild(textnode);
  document.getElementById("displayUserList").appendChild(node);

}


function updateListElement(){
//Retrieve item from list with id-"myList"
    retrievedItem=document.getElementById('displayUserList');
    myRetrievedItems=retrievedItem.getElementsByTagName('LI');
    

//Set click function to item in list
retrievedItem.addEventListener("click",function(e){

    //Get element position when clicked
    p = e.target.parentElement;
    index = Array.prototype.indexOf.call(p.children, e.target);

    //Replace element content with intended text!
    UserNameInList=myRetrievedItems[index].innerHTML;
    myRetrievedItems[index].innerHTML+=' is ready to chat!';

    //Include codes to change chat session to the designated potatoBoy users here!
    recipientChatName=UserNameInList;
    imgMsgRecipientChatName=UserNameInList;
})

}
updateListElement();
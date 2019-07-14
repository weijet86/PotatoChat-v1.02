/**Fuction for click button to create text Message */

var chatName="DapaoBoy";
var recipientChatName=chatName;
function textClick(){
    var typedText=document.getElementById("typedTextClient").value;
    /**Try out Message Class */
    var textmessage=new Message("1",typedText);
    textmessage.SetRecipientChatName(recipientChatName);
    textmessage.SetchatName(chatName);
    /**Convert typed text into JSON String**/ 
    var list_msg=MessagetoList(textmessage);
    var json=MsgToJson(list_msg);
    document.getElementById("typedTextClient").value='';
    client(json);
  }
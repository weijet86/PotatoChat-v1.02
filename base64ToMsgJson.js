/** Function to create image message */
var imgMsgRecipientChatName="";
function imgMsg(base64String){
    var imageMessage=new Message("2",base64String);
    imageMessage.SetchatName(chatName);
    imageMessage.SetRecipientChatName(imgMsgRecipientChatName);
    imageMessage.SetBase64Img(base64String);
    /**Convert img into JSON String**/ 
    var list_msg=MessagetoList(imageMessage);
    var json=MsgToJson(list_msg);
    return json;
  }
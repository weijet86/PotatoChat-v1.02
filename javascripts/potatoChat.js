


//Alternative-3 websocket
//This webSocket function is working!
function client(json){

    var displaytext=document.getElementById("displayTextClient");
    /**Convert json string back to message list*/
    var list_msg=JsonToMsg(json);

    /**Test if base64 image string can be put to message area */

    var block_to_insert = document.createElement( 'div' );
    block_to_insert.style.backgroundColor="#f1f1f1";
    block_to_insert.style.border= "2px solid #dedede";
    block_to_insert.style.maxWidth='600px';
    /*
    if(parseInt(list_msg[0])==1){
      //var container=document.getElementById("container");
      //container.innerHTML+=list_msg[1];
      //displaytext.innerHTML+=list_msg[1];
      block_to_insert.innerHTML=list_msg[1];

      displaytext.appendChild(block_to_insert);
     
    }else
    if(parseInt(list_msg[0])==2){
    var image = new Image();
    image.src='data:image/png;base64,'+list_msg[1];
    image.style.maxWidth='700px';
   
    block_to_insert.appendChild(image);
    displaytext.appendChild(block_to_insert);
    document.getElementById("typedTextClient").focus();
    
    }
    displaytext.innerHTML+="<br>";
    displaytext.scrollTop = displaytext.scrollHeight;
    /** */
    
    /**WebSocket settings */ //connection is refreshed every time send button is clicked!
    //var connection=new WebSocket('wss://demos.kaazing.com/echo');
    //var connection=new WebSocket("ws://192.168.1.100:8080"); //This is working with TcpChat app!
    //var connection=new WebSocket("ws://localhost:8080")
    //var connection=new WebSocket("ws://10.0.2.15:6000"); //Connect to android emulator
    //var connection=new WebSocket("ws://127.0.0.1:5037"); 
    //var connection=new WebSocket("ws://192.168.43.255:8080");
    //var connection=new WebSocket("ws://192.168.43.1:8080"); //Phone teathering LAN connection (worked!)
  
    /**Alternative to onopen as websocket is already open when html file is open! */
    connection.send(json)
    //For text message
    if(parseInt(list_msg[0])==1){
      var replystr1=list_msg[6]+": "+list_msg[1]+"<br>";
      var result1=replystr1.fontcolor('f45384');
      block_to_insert.innerHTML+=result1;
      displaytext.appendChild(block_to_insert);    
    }else
    //For image message
    if(parseInt(list_msg[0])==2){
      var image = new Image();
      image.src='data:image/png;base64,'+list_msg[1];
      image.style.maxWidth='600px';
      //Maybe can append image into a conversation box before put to div(displaytext)
      block_to_insert.appendChild(image);
      displaytext.appendChild(block_to_insert);
      document.getElementById("typedTextClient").focus();
    }
    displaytext.scrollTop = displaytext.scrollHeight;
    
    
    
    
    /**WebSocket OnOpen */
    /*
    connection.onopen = () => {
    //Send json string via websocket  
    connection.send(json)
   
    //For text message
    
    if(parseInt(list_msg[0])==1){
      var replystr1=list_msg[6]+": "+list_msg[1]+"<br>";
      var result1=replystr1.fontcolor('f45384');
      block_to_insert.innerHTML+=result1;
      displaytext.appendChild(block_to_insert);  
      
    }else
    //For image message
    if(parseInt(list_msg[0])==2){
      var image = new Image();
      image.src='data:image/png;base64,'+list_msg[1];
      image.style.maxWidth='600px';
      //Maybe can append image into a conversation box before put to div(displaytext)
      block_to_insert.appendChild(image);
      displaytext.appendChild(block_to_insert);
      document.getElementById("typedTextClient").focus();
    }
    displaytext.scrollTop = displaytext.scrollHeight;
    }
   /** */

    /**WebSocket OnError */
    connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
    }

    /**WebSocket OnMessage */
    
    connection.onmessage = (e) => {
     

    //Convert received string back to message list  
    var list_msg_r=JsonToMsg(e.data);

    //Check if message type is 9 for user list
    if(parseInt(list_msg_r[0])==9) {

      var userList=JSON.parse(list_msg_r[1]);
      var userDiv=document.getElementById('displayUserList');
      //Empty userList before insert new one
      userDiv.innerHTML="";
      for(var i=0;i<userList.length;i++){
      //userDiv.innerHTML+=userList[i]+"<br>";
      //Call for function createListElement
      createListElement(userList[i]);
      }
    } else
    //For text message
    if(parseInt(list_msg_r[0])==1) {
      
      var replystr="&emsp;&emsp;"+list_msg_r[6]+": "+list_msg_r[1]+"<br>";
      var result=replystr.fontcolor('#997106');
      block_to_insert.innerHTML+=result;
      displaytext.appendChild(block_to_insert); 
      
    } else
    //For image message
    if(parseInt(list_msg_r[0])==2){
      alert('type 2 msg')
      var image = new Image();
      image.style.maxWidth='600px';
      image.src='data:image/png;base64,'+list_msg_r[1];
      block_to_insert.appendChild(image);
      displaytext.appendChild(block_to_insert);
      document.getElementById("typedTextClient").focus();
    }
    
    displaytext.scrollTop = displaytext.scrollHeight;
  }
  /** */

}

/**Bind "Enter" key to send text message button */
function bindEnterkey(){
var input = document.getElementById("typedTextClient");
        input.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
           event.preventDefault();
           document.getElementById("sendButton").click();
          }
});
}







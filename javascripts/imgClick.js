/**Fuction for image input and send base64 image*/
// Check for the File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }
  
  function handleFileSelect(evt) {
    
    var f = evt.target.files[0]; // FileList object
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        //I could put base64String in list[1] position then JSON.stringify the list and send to Android (this should work).
        var base64String = window.btoa(binaryData); 
        //showing file converted to base64
        //document.getElementById('list').value = base64String;
        //alert('File converted to base64 successfuly!\nCheck in Textarea');
  
        //Convert base64 image string to json string message
        var jsonImgMsg=imgMsg(base64String);
        //Call client() function to send out picture message
        client(jsonImgMsg);
  
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsBinaryString(f);
    //Clear input
    document.getElementById('files').value='';
  }
var connection


class runWebSoc{
runWs(){
   
//alert('wsConnection is running!')

        connection=new WebSocket("ws://localhost:8080") //start websocket
        //connection=new WebSocket("ws://192.168.43.1:8080")
       /*

        connection.onopen=()=>{
            alert('inside onopen')
            connection.send('["1","Welcome! This is echo Server speaking!","192.168.1.103","8080","192.168.1.104","8888","EchoooooMan"]');
        }
        
        connection.onerror = (error) => {
            console.log(`WebSocket error: ${error}`)
        }
        
        connection.onmessage = (e) => {
        }
        */
        
}
        

}
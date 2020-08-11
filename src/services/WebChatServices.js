export const WebChatServices = {
    receiveChat,
    sendChat
}

const chatServer = new WebSocket( 'ws://localhost:8000/ws');

function receiveChat(){
    return chatServer.onmessage = function(event){
        console.log('event.data ', event.data)
        return event.data;
    }
}

function sendChat(value){
    chatServer.send(value);
}
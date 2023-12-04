var isChatOpen = false;
var isChatClosing = false;
const botId = 'websitegpt-chatbot-container';
const chatContainerId = 'websitegpt-chatbot-chat-container';

var chatContainer = document.createElement('div');
chatContainer.id = chatContainerId
chatContainer.style.cssText = 'padding:20px;width:100%;height:100%;';

var closeChatButton = document.createElement('div')
closeChatButton.style.cssText = 'position:absolute;top:10px;right:10px;background-color:white;font-size:30px;width:30px;text-align:center;color:blue;'
closeChatButton.textContent = 'x'
closeChatButton.addEventListener('click', closeChat);

var chat = document.createElement('div');
chat.style.cssText = 'width:100%;height:90%;';

var chatInput = document.createElement('input')
chatInput.style.cssText = 'position:relative;bottom:0px;width:100%;height:30px;background-color:red;';
chatInput.addEventListener('keypress', (e) => {if(e.key == 'Enter') {addMessage(e.target.value, false); e.target.value = ''}})

chatContainer.appendChild(closeChatButton)
chatContainer.appendChild(chat)
chatContainer.appendChild(chatInput);

const messages = ['Hey, how can I help you today ?', 'Please make me a sandwich', 'As an AI that is not part of my capabilities']


function populateChatWithMessages(messages) {
    for (let i = 0; i < messages.length; i++) {
        const isBotMessage = (i + 1) % 2;
        addMessage(messages[i], isBotMessage);
    }
}


function addMessage(message, isBotMessage) {
    let speakerCss = ''
    const messageDiv = document.createElement('div');
    const line = document.createElement('div');

    line.style.cssText = 'width:100%;padding:10px;'

    let mainCss = 'width:70%;padding:10px;';
    if (isBotMessage) {
        speakerCss = 'background-color:red;margin-right:auto';
    } else {
        speakerCss = 'background-color:blue;margin-left:auto';
    }
    messageDiv.style.cssText = mainCss + speakerCss;
    messageDiv.textContent = message;
    line.appendChild(messageDiv)
    chat.appendChild(line)
}

function getContainer() {
    return document.getElementById(botId)
}

function closeChat() {
    if (!isChatOpen) return;
    isChatClosing = true;
    isChatOpen = false;
    const container = getContainer()
    container.style.height = '50px'
    container.style.width = '180px'
    container.textContent = 'Chat with our AI'
    setTimeout(() => isChatClosing = false, 1400)
}

function openChat() {
    if (isChatOpen || isChatClosing) return;
    isChatOpen = true;
    const container = getContainer()
    container.style.height = '500px'
    container.style.width = '500px'
    setTimeout(() => { if (isChatOpen) { container.textContent = ''; container.appendChild(chatContainer) } }, 1400)
}


export function greet(name) {
    console.log(`Hello, ${name}!`);
    var container = document.createElement('div');
    container.style.cssText = 'position:absolute;bottom:20px;right:30px;height:50px;width:180px;z-index:100;border:5px solid blue;display:flex;align-items:center;justify-content:center;border-radius:30px;background-color:white;';
    container.textContent = 'Chat with our AI'
    container.id = botId
    container.addEventListener('click', openChat)
    container.style.transition = "all 1.4s";
    populateChatWithMessages(messages)

    document.body.appendChild(container);
}
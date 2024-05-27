
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');

const createChatMessageElement = (message) => `
    <div class="message ${message.sender === 'Anjali' ? 'blue-bg': 'gray-bg'}">
        <div class="message.sender">${message.sender}</div>
        <div class="message-text">${message.text}</div>
        <div class="message-timestamp">${message.timestamp}</div>
    </div>
`
let messageSender = 'Anjali';
const updateMessageSender = (name) => {
    messageSender = name
    chatHeader.innerText = `${messageSender} chatting...`
}

chatInput.focus()

const sendMessage = (e) => {
    e.preventDefault()

    const timestamp = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true});
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp,
    }

    chatMessages.innerHTML += createChatMessageElement(message);
    chatInputForm.reset();
}

chatInputForm.addEventListener('submit', sendMessage);
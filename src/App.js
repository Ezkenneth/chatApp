import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="43944e9a-03a1-4e5c-9214-b1a0a19a2b5e"
            userName="chatman"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
        
        />
    )
}

export default App;
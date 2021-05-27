import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'
const App = () => {
    
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID="43944e9a-03a1-4e5c-9214-b1a0a19a2b5e"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
        
        />
    )
}

export default App;
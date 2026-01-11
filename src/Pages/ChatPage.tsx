import React from 'react';
import './ChatPage.scss';
import Face1 from "../images/b-sm.jpg.png"
import Face2 from "../images/a-sm.jpg.png"
import { IoSettings } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';


const ChatPage: React.FC = () => {
  return (
    <div className="chat-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
        <img src={Face1} alt="" className='avater' />
          <h2>Chats</h2>
          <div className="settings"><IoSettings />
          <FaEdit />

</div>
        </div>

        <input type="text" className="search" placeholder="Search by name" />

        <div className="recent-chats">
          <h4>RECENT CHAT</h4>
          <div className="chat-users">
            <div className="kl">
            <div className="user-bubble"><img src={Face1} alt="" /><span className="status-dot"></span></div>
            <div className="user-bubble"><img src={Face2} alt="" /><span className="status-dot"></span></div>
            <div className="user-bubblee">AB<span className="status-dot"></span></div>
            <div className="user-bubbleew">KH<span className="status-dot"></span></div>
            <div className="user-bubbleee">VB<span className="status-dot"></span></div>
                       </div>
                       <div className="di">
                              <div className="user-bubble"><img src={Face2} alt="" /><span className="status-dot"></span></div>
                      <div className="user-bubble"><img src={Face1} alt="" /><span className="status-dot"></span></div>
            <div className="user-bubble"><img src={Face2} alt="" /><span className="status-dot"></span></div>
                <div className="user-bubbleeee">Sk<span className="status-dot"></span></div>
                       </div>
          </div>
        </div>
<div className="messages">
  <h4>MESSAGES</h4>

  <div className="message-row active">
    <div className="avatar-wrapper">
      <img src={Face1} alt="Ilias" className="avatar-img" />
      <span className="status-dot"></span>
    </div>
    <div className="message-info">
      <div className="name">Iliash Hossain</div>
      <div className="text">You: Please confirm if you got my last...</div>
    </div>
  </div>

  <div className="message-row">
    <div className="avatar-wrapper initials pink">AB</div>
    <div className="message-info">
      <div className="name">Abu Bin Ishtiyak</div>
      <div className="text">Hi, I am Ishtiyak. Can you help me with...</div>
    </div>
  </div>

  <div className="message-row">
    <div className="avatar-wrapper initials yellow">GP</div>
    <div className="message-info">
      <div className="name">George Philips</div>
      <div className="text">Have you seen the claim from Rose?</div>
    </div>
  </div>

  
  <div className="message-row active">
    <div className="avatar-wrapper">
      <img src={Face1} alt="Ilias" className="avatar-img" />
      <span className="status-dot"></span>
    </div>
    <div className="message-info">
      <div className="name">Iliash Hossain</div>
      <div className="text">You: Please confirm if you got my last...</div>
    </div>
  </div>


  
  <div className="message-row active">
    <div className="avatar-wrapper">
      <img src={Face2} alt="Ilias" className="avatar-img" />
      <span className="status-dot"></span>
    </div>
    <div className="message-info">
      <div className="name">Iliash Hossain</div>
      <div className="text">You: Please confirm if you got my last...</div>
    </div>
  </div>


    <div className="message-row">
    <div className="avatar-wrapper initials yellow">GP</div>
    <div className="message-info">
      <div className="name">George Philips</div>
      <div className="text">Have you seen the claim from Rose?</div>
    </div>
  </div>
</div>
      </aside>

      {/* Main Chat Window */}
      <main className="chat-window">
        <header className="chat-header">
          <div className="user-info">
            <div className="avatar green">IH</div>
            <div>
              <p>Iliash Hossain</p>
              <small>Active • 35m ago</small>
            </div>
          </div>
          <div className="options">⚙️</div>
        </header>

<div className="chat-body">
  <div className="left-msg">
    <div className="avatar-bubble">IH</div>
    <div className="left">Hello!</div>
  </div>
  <div className="left-msg">
    <div className="avatar-bubble">IH</div>
    <div className="left">I found an issue when trying to purchase the product.</div>
  </div>
  <div className="right">Thanks for inform. We just solved the issue. Please check now.</div>
  <div className="left-msg">
    <div className="avatar-bubble">IH</div>
    <div className="left">This is really cool.</div>
  </div>
  <div className="left-msg">
    <div className="avatar-bubble">IH</div>
    <div className="left">It's perfect. Thanks for letting me know.</div>
  </div>
  <div className="left-msg">
    <div className="avatar-bubble">IH</div>
    <div className="left">Hey, I am facing a problem as I cannot log into the application. Can you help me reset my password?</div>
  </div>
  <div className="right">Definitely. We are happy to help you.</div>
  <div className="left-msg">
    <div className="avatar-bubble">IH</div>
    <div className="left">Thank you! Let me know when it's done.</div>
  </div>
  <div className="right">We just reset your account. Please check your email for verification.</div>
  <div className="right">Please confirm if you got the email</div>
</div>
<div className="chat-input-container">
  <div className="chat-input-wrapper">
    <i className="fas fa-plus left-icon"></i>

    <input type="text" placeholder="Type a message..." />

    <div className="right-icons">
      <i className="far fa-smile"></i>
      <i className="fas fa-paper-plane send-icon"></i>
    </div>
  </div>
</div>



      </main>
    </div>
  );
};

export default ChatPage;

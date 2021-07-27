import "./MessageAuth.css";
const MessageAuth = ({ msg, color }) => {
  console.log(msg, color);
  return (
    <div className="msg-auth" style={{ backgroundColor: color }}>
      {msg}
    </div>
  );
};

export default MessageAuth;

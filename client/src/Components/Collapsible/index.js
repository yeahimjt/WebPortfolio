
import  React ,{useState, useRef} from 'react';
function Collapsible (props)  {

  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="collapsible">
        <button className={isOpen ? "toggle show" : "toggle"} onClick={() => setIsOpen(!isOpen)}>{props.title}</button>
        <div className={isOpen ? "content show" : "content"}>{props.children}</div>
    </div>

  );
}

export default Collapsible
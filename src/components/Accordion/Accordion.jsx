import React, { useState } from "react";
import './Accordion.css';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="accordion-section">
      <div className="accordion-header" onClick={handleClick}>
        <h2>{title}</h2>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default Accordion;




// import React, { useState } from "react";
// import './Accordion.css';

// function Accordion({ title, content }) {
//   const [isOpen, setIsOpen] = useState(false);

//   function handleClick() {
//     setIsOpen(!isOpen);
//   }

//   return (
//       <div className="accordion-section">
//         <div className="accordion-header" onClick={handleClick}>
//           <h2>{title}</h2>
//           <span>{isOpen ? "-" : "+"}</span>
//         </div>
//         {isOpen && <div className="accordion-content">{content}</div>}
//       </div>
//   );
// }

// export default Accordion;

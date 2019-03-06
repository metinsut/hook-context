import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const DIV = styled.div`
  background-color: #d1d1d1;
  width: 300px;
`;

const data = [
   {
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui!"
   },
   {
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui!"
   }
];
const dummy = {
   name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, qui!"
};

const TogglePage = () => {
   const divElem = useRef(null);

   const [array, setArray] = useState(data);

   const toggle = () => {
      divElem.current.style.height = divElem.current.scrollHeight + "px";
      if (divElem.current.clientHeight !== 0) {
         divElem.current.style.height = "0px";
      }
   };
   const pushData = () => {
      divElem.current.style.height = divElem.current.clientHeight + "px";
      setArray(state => [...state, dummy]);
   };
   const resetData = () => {
      setArray(data);
   };

   useEffect(() => {
      divElem.current.style.height = "auto";
      divElem.current.style.overflow = "hidden";
      divElem.current.style.transition = "height 0.3s ease";
      window.addEventListener("transitionend", onTransitionend);
      return () => {
         window.removeEventListener("transitionend", onTransitionend);
      };
   });

   const onTransitionend = () => {
      if (divElem.current.clientHeight !== 0) {
         divElem.current.style.height = "auto";
      }
   };

   return (
      <div className="App">
         <button onClick={toggle}>Toggle</button>
         <button onClick={pushData}>Add Data</button>
         <button onClick={resetData}>Reset</button>
         <br />
         <br />
         <DIV ref={divElem}>
            {array.map((item, key) => (
               <p key={key}>{item.name}</p>
            ))}
         </DIV>
      </div>
   );
};

export default TogglePage;
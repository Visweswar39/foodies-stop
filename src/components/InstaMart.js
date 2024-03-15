import React, { useState } from "react";

const Section = ({ title, description, visible, setVisible }) => {
  return (
    <div className="border-black border-2 m-4 p-4">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl align-middle">{title}</h1>
        {
          visible === title ? <button onClick={()=>setVisible('')}>hide</button> : <button onClick={()=>setVisible(title)}>show</button>
        }
        
      </div>
      {visible === title && <h1>{description}</h1>}
    </div>
  );
};

function InstaMart() {

  const [visible,setVisible] = useState('');
  return (
    <div>
      <Section
        title={"About instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        visible = {visible}
        setVisible = {setVisible}
      />
      <Section
        title={"Team instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        visible = {visible}
        setVisible = {setVisible}
      />
      <Section
        title={"carrer instamart"}
        description={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        visible = {visible}
        setVisible = {setVisible}
      />
    </div>
  );
}

export default InstaMart;

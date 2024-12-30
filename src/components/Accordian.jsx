import { StyledAccordian } from "./styles/Accordian.styled";
import { useState } from "react";
import data from "./data";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId);
  }
  return (
    <StyledAccordian>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div key={dataItem.id} className="item">
            <div
              onClick={() => handleSingleSelection(dataItem.id)}
              className="title"
            >
              <h3>{dataItem.title}</h3>
              <span>+</span>
            </div>
            {selected === dataItem.id ? (
              <div className="content">{dataItem.text}</div>
            ) : null}
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
    </StyledAccordian>
  );
}

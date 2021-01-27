import React from "react";

const Accordion = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
  const renderItem = props.items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => {
            onTitleClick(index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderItem}</div>;
};

export default Accordion;

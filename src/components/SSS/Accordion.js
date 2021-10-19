import React from "react";
import "./accordionStyle.css";

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.";

const data = [
  {
    title: "Proje Tabanlı Etkinlikler",
    paragraph,
  },
  {
    title: "Zengin İçerikler",
    paragraph,
  },
  {
    title: "Online Turnuvalar",
    paragraph,
  },
  {
    title: "Atölyeler",
    paragraph,
  },
];

class AccordionItem extends React.Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { paragraph, title },
      state: { opened },
    } = this;

    return (
      <div
        {...{
          className: `accordion-item, ${opened && "accordion-item--opened"}`,
          onClick: () => {
            this.setState({ opened: !opened });
          },
        }}
      >
        <div {...{ className: "accordion-item__line accordion__background" }}>
          <h3 {...{ className: "accordion-item__title" }}>{title}</h3>
          <span {...{ className: "accordion-item__icon" }} />
        </div>
        <div {...{ className: "accordion-item__inner accordion__desc" }}>
          <div {...{ className: "accordion-item__content" }}>
            <p {...{ className: "accordion-item__paragraph" }}>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}

const Accordion = () => {
  return (
    <div {...{ className: "wrapper" }}>
      <ul {...{ className: "accordion-list" }}>
        {data.map((data, key) => {
          return (
            <li {...{ className: "accordion-list__item", key }}>
              <AccordionItem {...data} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;

import React from "react";
const Nav = () => {
  const pages = [
    { title: "About", link: "#", id: 1 },
    { title: "Contact", link: "#", id: 2 },
    { title: "more", link: "#", id: 3 },
  ];

  const listItems = pages.map((page) => (
    <a href={page.link} key={page.id}>
      <li>{page.title}</li>
    </a>
  ));

  return <ul>{listItems}</ul>;
};

export default Nav;

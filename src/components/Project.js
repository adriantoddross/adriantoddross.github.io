import React from 'react';

export default function Project(props) {
  return (
    <div>
      <div>
        <img src={props.image} alt=""/>
      </div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <a href={props.link}>Live Demo</a>
    </div>
  );
}

Project.defaultProps = {
  image: '',
  title: 'Project coming soon!',
  description: "This project isn't finished yet, but will be added soon!",
  link: ''
}
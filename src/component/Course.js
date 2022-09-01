import React from "react";
import "./Style.css"

const Course = (props) => {
  return (
    <article className="card">
    <a className="course"  href={props.course.link} >
    <img src={props.course.image} alt={props.course.title} />
      <h3>{props.course.title}</h3>
      <h4>{props.course.author}</h4>
      <div>
        <span class="checked">{props.course.rating} </span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star-half-full checked"></span>
        <span class="fas fa-star-half-alt checked"></span>
      </div>

      <h5>E£  {props.course.number}</h5>
    </a>
  </article>
  );
};


export default Course
import React from 'react';


const FunctionalGreetingWithProps = (props, name, age) => {
    return <h1>Hello, {props.greeting} {props.name}, I see you're {props.age} </h1>;
}

export default FunctionalGreetingWithProps;
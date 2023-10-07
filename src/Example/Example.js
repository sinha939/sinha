
import React, { Component } from "react";    // component imported for class component
//function component
// function Example() {
//     return (
//         <div>
// <h1> hello from stateless function or funtion component,it also recieves 'props'properties </h1>
//         </div>
//     );
// }

//arrow function
// const Example = () => 
// return ( 
//     <div>

//     <h1> hello from arrow function</h1>

//     </div>
//     ) 

//class component
// class Example extends Component {
//     render () {
//         return <h1> hello from class component, this is stateful component and and maintain private data , accept "this" key word, and providee life cycle hooks</h1>
//     }
// }

// props using in funtion component; this make reusable component, props paased the data to the component, function parameter, props can't changed by children component
// const Example = (props) => {

//     console.log(props)
//     return (
//         <div>

//             <h1> hello {props.name} and {props.heroName} </h1>
//             {props.children}
//         </div>
//     )
// }

// props using in class component : here "this" keyword required
// class Example extends Component{
//     render() {
// return <div> 
//     <h1> hello {this.props.name} </h1>
//     {this.props.children}
// </div>
//     }
// }

// "State, setState" keyword : its managed data within the component,variable declared with in the body, childrens component have full control they can change the data
// class Example extends Component {
//     constructor() {
//         super()                      // its required because we extend react component class
//         this.state = {
//             message: 'hello visitor'
//         }
//     }
//     changeMessage() {
//         this.setState({                 // this is new set message wich run after button click

//             message: 'hello sinha'
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1> {this.state.message} </h1>
//                 <button onClick={() => this.changeMessage()}> login</button>

//             </div>
//         );
//     }
// }

// count component : 
// class Example extends Component {
//     constructor(props) {

//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
//     increment() {          // here we use unique method  to make changes in console rather than setstae method but for make changes in display we use setstate method
//         this.setState({
//             count: this.state.count + 1
//         }
//         )

//         console.log('callback value' ,this.state.count)
//     }

//     render() {
//         return (
//             <div>
//                 count - {this.state.count}
//                 <button onClick={() => this.increment()}> increment</button>
//             </div>
//         )
//     }
// }


// destructuring in props in function component 
// const Example = ({name,heroName}) => {               // here use 'props' for below method
//     // const {name, heroName} = props       // we can also declare in function body rather than paras
//     return (
//         <div>
//             <h1> hello {name} and {heroName} </h1>
//         </div>
//     )
// }


// destructuring in props and state in class component
// class Example extends Component{
//         render() {
//             const {name, heroName} = this.props
//    const {state1, state2} = this.state           // htis is for state

//     return <div> 
//         <h1> hello {name}  and {heroName} </h1>

//     </div>
//         }
//     }

//event handling in function component
// function Example() {
//     function clickHandler(){
//         console.log('clicked')
//     }
//     return(
//         <div>
//             <button onClick={clickHandler}>click Me</button>      here if we use clickHandler() (paranthesis added) then it work as a function called which means it automatic run when page get reload, so don't add
//         </div>
//     )
// }

//event handling in class component
// class Example extends Component {
//     clickHandler(){
//         console.log('clicked')
//     }
//     render() {
//         return(
//             <div>
//                 <button onClick={this.clickHandler} >click me</button>
//             </div>
//         )
//     }
// }

// event binding
// class Example extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             message: 'hello'
//         }
//     }
//     clickHandler() {
//         this.setState({
//             message: 'good bye'
//         })
//         console.log(this.state.message)
//     }
//     render() {
//         return (
//             <div>
//                 <div> {this.state.message} </div>
//                 <button onClick={this.clickHandler.bind(this)} >click me</button>      
//                 <div>
//                 <button onClick={() => this.clickHandler() }>click again</button>       or we can also use arrow function, in arrow function '(paranthesis)' is required
//                 </div>
//             </div>
//         )
//     }
// }

// method as props

// function childExample (props) {
//     return (
//         <div>
//             <button onClick={props.sinha}>sinhaParent</button>
//         </div>
//     )
// }

// import childExample from './childExample';
// class Example extends Component {
//     constructor(props) {
//         super(props) 
//         this.state = {
//             parentsName: 'parents'
//         }
//         this.sinhaParent = this.sinhaParent.bind(this)
//     }
// sinhaParent() {
// alert('hello' {this.state.parentsName})
// }
// render() {
//     return(
//         <div>
//             <childExample sinha={this.sinhaParent} />
//         </div>
//     )
// }
// }

// condition rendering , its same as js condition
// class Example extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLoggedIn: false
//         }
//     }
//     render() {
//         if (this.state.isLoggedIn) {

//             return
//                 <div>hello sinha</div>

//             }
//             else {
//                 return <div>hello guest</div>
//             }

//     }
// }


// list rendering using map method
// function Example() {
//     const person = [
//         {
//             id: 1,
//             name: 'keshav',
//             age: 22,
//             skill: 'react'

//         },
//         {
//             id: 2,
//             name: 'sinha',
//             age: 21,
//             skill: 'javaScript'
//         }

//     ]
//     const personList = person.map(person => (
//         <h1> i'm {person.name} , years old {person.age} i know {person.skill} </h1>
//     ))
//     return (<div> {personList} </div> )                                         //   we can also use this method and comment below line
//         {/* // return (
//     //     <div>
//     //         {
//     //             names.map(name => <h1>im {name.names} </h1>)    
//     //         }
//     //     </div>
//     // ) */}
// }

// adding key in list rendering  method
// function Example() {
//     const person = [
//         {
//             id: 1,
//             name: 'keshav',
//             age: 22,
//             skill: 'react'

//         },
//         {
//             id: 2,
//             name: 'sinha',
//             age: 21,
//             skill: 'javaScript'
//         }

//     ]
//     const personList = person.map(person => ( person => <person key={person.id} person={person/>}           // key value must be uniqe, like here id have unique value // here this all things passes as props
//     ))
//     return (<div> {personList} </div> )                                        

// }

// index as key in anti pattern
// function Example() {
//         const names = ['keshav', 'sinha', 'banti', 'sinha']
//         const nameList = names.map((name, index) => <h1 key={index} > {index} {name} </h1>)
//         return (
//                 <div> {nameList} </div>
//         )
// }

// form handeling
// class Example extends Component {
//         constructor(props) {
//                 super(props)
//                 this.state = {
//                         username: '',
//                         comments: ''
//                 }
//         }
//         handlerusernameChange = (event) => {
//                 this.setState({
//                         username: event.target.value
//                 })
//         }
//         handleCommentChange = (event) => {
//                         this.setState({
//                                 comments: event.target.value
//                         })
//                 }
//         handleSubmit = (event) => {
//                 alert ('${this.state.username} ${this.state.comment}')
//         }
//         render() {
//                 return (
//                         <form onSubmit={this.handleSubmit}>
//                                 <div>
//                                         <input type='text' value={this.state.username} onChange={this.handlerusernameChange} />
//                                         <lavel>username</lavel>
//                                 </div>
//                                 <div>
//                                         <label>comment</label>
//                                         <textarea value={this.state.comments} onChange={this.handleCommentChange} ></textarea>
//                                 </div>
//                                         <button type="sumbit" onClick={this.handleSubmit}>Submit</button>
//                         </form>
//                 )
//         }
// }

// component lyfecycle method in class component : mounting -> update -> unmounting -> error handeling

// export default Example;
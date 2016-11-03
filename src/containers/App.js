// import React, { PropTypes } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// //import Header from '../components/Header'
// //import MainSection from '../components/MainSection'
// //import * as TodoActions from '../actions'

// // const App = ({todos, actions}) => (
// //   <div>
// //     <Header addTodo={actions.addTodo} />
// //     <MainSection todos={todos} actions={actions} />
// //   </div>
// // )
 
//  const App = ({todos, actions}) => (
//   <div>
//     Hi!!....
//   </div>
// )

// App.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//   todos: state.todos
// })

// // const mapDispatchToProps = dispatch => ({
// //     actions: bindActionCreators(TodoActions, dispatch)
// // })

// export default connect(
//   mapStateToProps
// )(App)


import React, { Component } from 'react';

const Hello = ({ name }) =>  <h1 > Hello {name} </h1> // Stateless/Pure component

export default class App extends Component {
    render() {
        return (
          <div>
              <Hello name={'world'} /> 
          </div>
        );
    }
}
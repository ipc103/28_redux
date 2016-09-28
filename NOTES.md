//Sophie / Ian

0. Draw out the components that we want
// Ian

1. React router
  + Get the routes setup that we need
  + We're going to show
  + Get the Cats Index Component up and displaying
  + Don't break the web

  ```javascript
  import React from 'react';
  import App from './components/app'
  import CatsPage from './components/cats_page'
  import CatsShow from './components/cats_show'
  import {Route} from 'react-router';

  export default (
    <Route path="/" component={App} >
      <Route path='/cats' component={CatsPage} >
        <Route path='/cats/:id' component={CatsShow} />
      </Route>
    </Route>
  ```

2. Setting up the default data
  + Create the store
  + Action Creators
  + Provider - passing in the store
  + Build out the reducers / create reducers
  + Build out one action create for 'FETCH_CATS'
  + MapStateToProps / connect
// Sophie
3. Add the Show Component
  + Review
4. Create Action
  + mapDispatchToProps
  + Mainly review

Create
  + mapDispatchToProps
Index
  + combineReducers / multiple reducers
  + Provider
  + mapStateToProps
  + Action Creators
  + connect
Show
  + React Router
  + MapStateToProps
Edit / Update
Delete



//

+ Making API calls from action
+ Promises
+ middleware

+ Forms

+ Auth / JWT

```javascript
function connect(mapStateToProps, mapDispatchToProps) {
  // It lets us inject component as the last step so people can use it as a decorator.
  // Generally you don't need to worry about it.
  return function (WrappedComponent) {
    // It returns a component
    return class extends React.Component {
      render() {
        return (
          // that renders your component
          <WrappedComponent
            {/* with its props  */}
            {...this.props}
            {/* and additional props calculated from Redux store */}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        )
      }

      componentDidMount() {
        // it remembers to subscribe to the store so it doesn't miss updates
        this.unsubscribe = store.subscribe(this.handleChange.bind(this))
      }

      componentWillUnmount() {
        // and unsubscribe later
        this.unsubscribe()
      }

      handleChange() {
        // and whenever the store state changes, it re-renders.
        this.forceUpdate()
      }
    }
  }
}
```

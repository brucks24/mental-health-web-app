# Client Documentation

### Important Information
The entire client side is packaged together in a way that makes it light weight, but also easy to modify.

Everything is broken down into two main things: containers and components.

**containers** hold components, and **components** are reusable UI objects that can have data passed to them by the containers.

For example: 
  - The AppContainer hold the MainLayout, which houses all of the containers.
  - The DashboardContainer holds the Dashboard component which displays the information on the home page of the dashboard and houses any other components related to itself
  - The LoginContainer holds the LoginForm which contains things like text fields and forms.

## Redux
Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

### Action
An action is a plain object that represents an intention to change the state. Actions are the only way to get data into the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions.

Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for type than Symbols because strings are serializable.

### Reducer
A reducer (also called a reducing function) is a function that accepts an accumulation and a value and returns a new accumulation. They are used to reduce a collection of values down to a single value.
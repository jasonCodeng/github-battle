var React = require('react');
var ReactDom = require('react-dom');

var HelloWorld = React.createClass({
    render: function () {
        return (
           <div> Hello React </div>
        )
    }
});

ReactDom.render(
    <HelloWorld/> ,
    document.getElementById('app')
);

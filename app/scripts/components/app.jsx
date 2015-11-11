(function(React, module, undefined) {
  var text = 'From components';
  module.exports = React.createClass({
    render: function() {
      return (
        <div className="container">
          <div className="row well">
            <h1 className="col-md-4 col-md-offset-4">
              <label className="label label-primary">
              Hello World!! {text}
              </label>
            </h1>
          </div>
        </div>
      );
    }
  });
}(React, module));
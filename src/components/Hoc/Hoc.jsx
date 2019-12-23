import React from 'react';

const Hoc = (WrapComponent) => {
  class withData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    }
    
    componentDidMount() {
      // some api call
    }

    render() {
      return <WrapComponent data={this.state.data} {...this.props}/>
    }
  }

  return withData;
};

export default Hoc;
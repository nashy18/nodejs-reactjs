import React from 'react';
import ReactDOM from 'react-dom';
import DefaultLayout from './default.jsx';
class Index extends React.Component {
    render() {
		return(
			 <DefaultLayout title={this.props.title}>
				<div>Hello {this.props.name}</div>
			 </DefaultLayout>
		);
        return <div>Hello {this.props.name}</div>;
    }
}

module.exports = Index;
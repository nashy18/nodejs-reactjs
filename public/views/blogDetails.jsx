import React from 'react';
import ReactDOM from 'react-dom';
import DefaultLayout from './default.jsx';
class BlogDetails extends React.Component {
    render() {        
        return(
			  <DefaultLayout title={this.props.blogDetails[0].title}>
				<div className="container">
                    <div className="row">
                            <h2>{this.props.blogDetails[0].title}</h2>
                            <p className="text-justified text-uppercase">Posted By {this.props.blogDetails[0].createdBy} on {this.props.blogDetails[0].dateCreated} Comments ({this.props.blogDetails[0].commentCount})</p>
				    </div>
                    <div className="row text-justified">
                        <img src={this.props.blogDetails[0].imageURL}  className="img-responsive"/>
                    </div>
                    <div className="row form-group">
                        <p className="text-justified">
                            {this.props.blogDetails[0].description}
                        </p>
                    </div>
                </div>     
			 </DefaultLayout>
		);
    }
}

module.exports = BlogDetails;
import React from 'react';
import ReactDOM from 'react-dom';
import DefaultLayout from './default.jsx';
class Blog extends React.Component {
    render() {
        var blogPosts = [];
        for (var i = 0; i < this.props.blogEntry.length; i++) {
            blogPosts.push(
                <div className="container-fluid">
                    <div className="row">
                        <h2>{this.props.blogEntry[i].title}</h2>
                        <p className="text-justified text-uppercase">Posted By {this.props.blogEntry[i].createdBy} on {this.props.blogEntry[i].dateCreated} Comments ({this.props.blogEntry[i].commentCount})</p>
                    </div>
                    <div className="row text-justified">
                        <img src={this.props.blogEntry[i].imageURL}  className="img-responsive"/>
                    </div>
                    <div className="row">
                        <p className="text-justified">
                            {this.props.blogEntry[i].description} 
                        </p>
                    </div>
                </div>                     
             );
        }
        var popularPosts = [];
        for (var i = 0; i < this.props.popularPosts.length; i++) {
            popularPosts.push(
                <div className="row">                    
                    <div className="col-md-12 text-justified form-group">
                        <img src={this.props.popularPosts[i].imageURL}  className="img-responsive"/>
                    </div>
                    <div className="col-md-12 text-justified">
                        <a className="h4 text-primary">{this.props.popularPosts[i].title}</a>
                        <p className="">({this.props.popularPosts[i].subTitle})</p>
                    </div>
                </div>                     
             );
        }
        var keywordsTask = [];
        for (var i = 0; i < this.props.task.length; i++) {
            keywordsTask.push(                
                <div className="col-md-6 form-group">                    
                    <button id={'btnTask_'+ this.props.task[i].id} className="btn btn-sm btn-primary pull-left">{this.props.task[i].title}</button>
                </div>                     
             );
        }
        return(
			  <DefaultLayout title={this.props.title}>
				<div className="row">
                    <div className="col-md-8">
				        {blogPosts}
                    </div>
                    <div className="col-md-4">
                        <div className="container-fluid">  
                            <h2 className="text-primary">Popular Posts</h2>                     
				            {popularPosts}
                            <h2 className="text-primary">Tasks</h2>
                            <div className="row text-justified">
				                {keywordsTask}
                            </div>                       				            
                        </div>
                    </div>                    
               </div>
			 </DefaultLayout>
		);
    }
}

module.exports = Blog;
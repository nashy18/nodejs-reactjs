import React from 'react';
import ReactDOM from 'react-dom';
import DefaultLayout from './default.jsx';
class Blog extends React.Component {
    render() {
        var latestBlog = [];
        var popularBlog = [];
        var keywordsTask = [];
        var categoryFilter = [];
        if(this.props.blog.length==0){
            latestBlog.push(<h4>No records found</h4>);
            popularBlog.push(<h4>No records found</h4>);
        }
        else {
            for (var i = 0; i < this.props.blog.length; i++) {            
                if(this.props.blog[i].blogTrendCode == this.props.blogTrendCode_Latest)
                {
                    latestBlog.push(
                        <div className="container-fluid">
                            <div className="row">
                                <h2>{this.props.blog[i].title}</h2>
                                <p className="text-justified text-uppercase"><span className="color-grey">Posted By </span>{this.props.blog[i].createdBy} <span className="color-grey">on </span>{this.props.blog[i].dateCreated}<span className="pull-right"> <span className="color-grey">Comments</span> ({this.props.blog[i].commentCount})</span></p>
                            </div>
                            <div className="row text-justified">
                                <img src={this.props.blog[i].imageURL}  className="img-responsive"/>
                            </div>
                            <div className="row form-group">
                                <p className="text-justified">
                                    {this.props.blog[i].description}<br/>
                                    <a className="h5 text-primary" href={'/blog/' + this.props.blog[i].code}>READ MORE</a>
                                </p>
                            </div>
                        </div>                     
                    );
                }
                else if(this.props.blog[i].blogTrendCode == this.props.blogTrendCode_Popular)
                {
                    popularBlog.push(
                        <div className="row">                    
                            <div className="col-md-12 text-justified form-group">
                                <img src={this.props.blog[i].imageURL}  className="img-responsive"/>
                            </div>
                            <div className="col-md-12 text-justified">
                                <a className="h4 text-primary" href={'/blog/' + this.props.blog[i].code}>{this.props.blog[i].title}</a>
                                <p className="">({this.props.blog[i].subTitle})</p>
                            </div>
                        </div>                     
                    );
                }
            }
        }
        for (var i = 0; i < this.props.task.length; i++) {
            keywordsTask.push(                
                <div className="col-md-6 form-group">                    
                    <li className="nav text-center blog-task-list"><h5 className="blog-task-list-title">{this.props.task[i].title}</h5></li>                                     
                </div>                     
             );
        }       
        for (var i = 0; i < this.props.category.length; i++) {
            categoryFilter.push(                
                   <li className="blog-filter-list"><a className="text-uppercase blog-filter-list-title" href={'/blog?filterCode=' + this.props.category[i].code}>{this.props.category[i].name}</a></li>                  
             );
        }
        return(
			  <DefaultLayout title={this.props.title}>
                <div className="color-bckg-theme-blue" id="divFilterGrid">
                    <nav className="navbar">
                        <div className="container" >
                            <ul className="nav navbar-nav">
                                {categoryFilter}
                            </ul>                          
                        </div>
                    </nav>
                </div>
                <div className="container">  
                    <div className="row">&nbsp;</div>
                    <div className="row">
                        <div className="col-md-12">
                             <small><span className="color-dark-blue">HOME / </span><span className="color-grey">BLOG</span></small>
                        </div>
                    </div>
				    <div className="row">
                        <div className="col-md-8">
                            {latestBlog}
                        </div>
                        <div className="col-md-4">
                            <div className="container-fluid">
                                <h2 className="text-primary">Popular Posts</h2>
                                {popularBlog}
                                <h2 className="text-primary">Tasks</h2>
                                <div className="row text-justified">
                                    {keywordsTask}
                                </div>
                            </div>
                        </div>
				    </div>
                     </div>
			 </DefaultLayout>
		);
    }
}

module.exports = Blog;
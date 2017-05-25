import React from 'react';
import ReactDOM from 'react-dom';
import DefaultLayout from './default.jsx';
class Blog extends React.Component {
    render() {
        var latestBlog = [];
        var popularBlog = [];
        for (var i = 0; i < this.props.blog.length; i++) {
            if(this.props.blog[i].blogTrendCode =="BLOGCAT01")
            {
                latestBlog.push(
                    <div className="container-fluid">
                        <div className="row">
                            <h2>{this.props.blog[i].title}</h2>
                            <p className="text-justified text-uppercase">Posted By {this.props.blog[i].createdBy} on {this.props.blog[i].dateCreated}<span className="pull-right"> Comments ({this.props.blog[i].commentCount})</span></p>
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
            else if(this.props.blog[i].blogTrendCode =="BLOGCAT02")
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
        var keywordsTask = [];
        for (var i = 0; i < this.props.task.length; i++) {
            keywordsTask.push(                
                <div className="col-md-6 form-group">                    
                    <button id={'btnTask_'+ this.props.task[i].id} className="btn btn-sm btn-primary pull-left">{this.props.task[i].title}</button>
                </div>                     
             );
        }
        var categoryFilter = [];
        for (var i = 0; i < this.props.category.length; i++) {
            categoryFilter.push(                
                   <li style={{border: '1px solid #F1BC32'}}><a className="text-uppercase" href="#" style={{color :'white',paddingLeft: '35px',paddingRight: '35px'}}>{this.props.category[i].name}</a></li>                  
             );
        }
        return(
			  <DefaultLayout title={this.props.title}>
                <div className="" style={{backgroundColor: '#507FAB'}}>
                    <nav className="navbar">
                        <div className="container" >
                            <ul className="nav navbar-nav" style={{paddingTop: '20px',paddingBottom:'20px'}}>
                                {categoryFilter}
                            </ul>                          
                        </div>
                    </nav>
                </div>
                <div className="container">  
                    <div className="row">&nbsp;</div>
                    <div className="row">
                        <div className="col-md-12">
                             <small><span style={{color: '#507FAB' }}>HOME / </span><span style={{color: 'grey' }}>BLOG</span></small>
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
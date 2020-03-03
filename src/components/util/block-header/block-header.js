import React , {Component}from 'react';
import "./block-header.css"
class BlockHeader extends Component {
    state = {  }
    render() { 
        const {title}= this.props;
        return (  
            <div className="row block-header">
            <div className="col-md-2 col-lg-3"></div>
            <div className="col-md-8 col-lg-6">
              <div className="row content">
                <div className="container p-3">
                  <h1 className="">
                    <span>{title}</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-lg-4"></div>
          </div>
        );
    }
}
 
export default BlockHeader;
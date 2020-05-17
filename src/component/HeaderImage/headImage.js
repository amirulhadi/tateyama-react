import React from 'react';

class HeadImage extends React.Component{
    render(){
        return(
            <div>
                <img src = {this.props.img} alt="" />
            </div>
        )
    }
}

export default HeadImage;
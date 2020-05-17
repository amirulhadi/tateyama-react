import React from 'react';
import HomeImage from '../../assets/Home_Header.jpeg';
import HeadImage from './headImage';

class HomeHeadImage extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         image = HomeImage
    //     }
    // }
    render(){
        return (
            <div>
                {this.props.data.map((img)=> {
                    return (
                        <HeadImage image = {img.image} />
                    )
                })}
            </div>
        )
    }
}

export default HomeHeadImage;
import React, { Component } from 'react'

export class Carousel extends Component {
    state = {
        active: 0
    };

    static defaultProps = {
        images: [`http://pets-images.dev-apis.com/pets/none.jpg`]
    }
  render() {
    const {active} = this.state;
    const{images} = this.props;

    return (
        <div className='carousel'>
            <img src={images[active]} alt="animal" />
            <div className='carousel-smaller'>
                {images.map((img,index)=>(
                    <img 
                    key={img}
                    src={img}
                    className={index === active? "active" : ""}
                    alt="animal thumbnail"
                    />
                ))}
            </div>
        </div>
    )
  }
}

export default Carousel
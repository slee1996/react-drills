import React, {Component} from 'react'

class Image extends Component {
    render(){
        return(
            <div>
                <img src={this.props.url} />
                <h1>King Kendrick</h1>
            </div>
        )
    }
}

export default Image
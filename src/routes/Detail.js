import React from "react"


class Detail extends React.Component{

    componentDidMount(){       
        const { location, history } = this.props;
        console.log(history);
        if (location.state === undefined){
            history.push("/")
        }

    }

    render(){
        const { location } = this.props;
        if (location.state){
            return (
                <span>{this.props.location.state.title}</span>
            )
        }
        else{
            return null;
        }
    }
}

export default Detail;
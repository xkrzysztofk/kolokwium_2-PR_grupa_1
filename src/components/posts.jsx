import React, {Component} from "react";
import Kknavbar from "./kknavbar";
class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://blogtai.herokuapp.com/api/posts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        const {items} = this.state;

        return (

            <React.Fragment>

                {items.map((item, key) => {
                    return <div key={key}>
                        <Kknavbar/>
                        <div className="card">
                            <img className="card-img-top" src={item.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className={item.title}>{item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                })}
            </React.Fragment>)
    }
}

export default Posts;
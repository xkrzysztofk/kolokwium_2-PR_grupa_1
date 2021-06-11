import React from 'react';
import Kknavbar from "./kknavbar";

const KKhome = () => {
    function changeName(){
        document.getElementById('moje_id').innerHTML="Hello,Krzysztof";
    }
    return (
        <React.Fragment>
            <div className="jumbotron">
                <h1 className="display-4" id="moje_id">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button" onClick={changeName}>Learn more</a>
                    </p>
            </div>
        </React.Fragment>)
}
export default KKhome;
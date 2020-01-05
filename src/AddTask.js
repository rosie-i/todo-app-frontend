import React from 'react';

class AddTask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-8" style={{backgroundColor: "red"}}>
                    Input field code here
                </div>
                <div className="col-4" style={{backgroundColor: "blue"}}>
                    Button code here
                </div>
            </div>
        )
    }
}

export default AddTask;
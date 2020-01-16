import React from 'react';
import CompletedTask from './CompletedTask';

class CompletedTaskList extends React.Component {
    render() {
        return (
            <div>
                <CompletedTask />
                <CompletedTask />
                <CompletedTask />
            </div>
        );
    }
}

export default CompletedTaskList;
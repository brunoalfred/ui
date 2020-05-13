import React, {Component} from 'react';

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    }, {
        title: 'Redux',
        url: 'https://github.com/reactjs/redux',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    }

]


class Maincontent extends Component {
    render() {

        return (
            <div>
                {list.map(function (item) {
                    return (
                        <div key={item.objectID}>
                            <span>
                            <a href="item.url">{item.url}</a>
                        </span>
                            <span>{item.author}</span>
                            <span>{item.points}</span>
                            <span>{item.num_comments}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}


export default Maincontent;
import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postsList: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const fetchedPosts = data.map(item => new Post(item.id, item.title, item.body));
                this.setState({ postsList: fetchedPosts });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("An error occurred in the component: " + error.toString());
    }

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <h2>Blog Posts Fetch API Output</h2>
                <hr />
                {this.state.postsList.map(post => (
                    <div key={post.id} style={{ marginBottom: '20px' }}>
                        <h3 style={{ color: 'darkblue' }}>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;
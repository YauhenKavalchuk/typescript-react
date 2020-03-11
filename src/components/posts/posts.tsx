import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface IPost {
  title?: string,
  id?: number,
}

type PostState = {
  data: IPost[],
}

interface IPosts extends RouteComponentProps {
  test?: number,
}

class Posts extends Component<IPosts, PostState> {
  state = {
    data: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(res => res.json() as Promise<IPost[]>)
      .then(data => { this.setState({ data }) })
  }

  render() {
    const { data } = this.state;
    console.log(this.props.match.params);

    return (
      <div>
        <h1>Posts:</h1>
        <ul className="posts">
          {data.map(({ id, title }: IPost) =>
            <li key={id}><Link to={`/posts/${id}`}>{title}</Link></li>
          )}
        </ul>
      </div>
    );
  }
};

export default Posts;

import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

/*
// Example of full response:
interface HttpResponse<T> extends Response {
  parsedBody?: T;
  status: number,
  redirect: boolean,
  ...
}

export async function http<T>(request: string): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);
  response.parsedBody = await response.json();
  return response;
}

// Example of errors handling
export async function http<T>(request: string): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);

  try {
    // Error if there is no body
    response.parsedBody = await response.json();
  } catch (ex) {}

  if (!response.ok) {
    // Error if there is response status issue
    throw new Error(response.statusText);
  }

  return response;
}

// Using:
try {
  const resp = await http<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  console.log("response", resp);
} catch (resp) {
  console.log("Error", resp);
}
*/

type RouteParams = {
  id: string,
}

interface IPost {
  title?: string,
  body?: string,
}

type PostState = {
  post: IPost,
}

export async function http<T>(reques: string): Promise<T> {
  const response = await fetch(reques);
  const body = await response.json();
  return body;
}

class Post extends Component<RouteComponentProps<RouteParams>, PostState> {
  state = {
    post: {
      title: '',
      body: '',
    },
  }

  async componentDidMount() {
    const id = this.props.match.params.id || '';

    const post = await http<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
    this.setState({ post });
  }

  render() {
    const { post } = this.state;
    const { title, body } = post;

    return (
      <section>
        <h1>Post</h1>
        <article>
          <h2>{title}</h2>
          <p>{body}</p>
        </article>
      </section>
    );
  }
};

export default Post;
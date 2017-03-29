import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import api from '../../api';

// import styles from './Post';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: props.user || null,
      comments: props.comments || null,
    };
  }

  componentDidMount() {
    this.initialFetch();
  }

  async initialFetch() {
    if (!this.state.user && !!this.state.comments) return this.setState({ loading: false });
    const [
      user,
      comments,
    ] = await Promise.all([
      !this.state.user ? api.users.getSingle(this.props.userId) : Promise.resolve(null),
      !this.state.comments ? api.posts.getComments(this.props.id) : Promise.resolve(null),
    ]);

    return this.setState({
      loading: false,
      user: user || this.state.user,
      comments: comments || this.state.comments,
    });
  }

  render() {
    return (
      <article id={`post-${this.props.id}`} className="post">
        <h2 className="title">
          <Link to={`/post/${this.props.id}`}>
            {this.props.title}
          </Link>
        </h2>
        <p className="body">
          {this.props.body}
        </p>
        {!this.state.loading && (
          <div className="meta">
            <Link to={`/user/${this.state.user.id}`} className="user">
              {this.state.user.name}
            </Link>
            <span className="comments">
              hay {this.state.comments.length} comentarios
            </span>
          </div>
        )}
      </article>
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Post;

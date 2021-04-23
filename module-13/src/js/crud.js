import jsonPlaceholderService from './services/jsonPlaceholder.service';
import axios from 'axios';

// get post
jsonPlaceholderService
  .getPostById(1)
  .then(data => console.log(data))
  .catch(error => console.log(error));

// create post
// jsonPlaceholderService
//   .createPost({ title: 'new title', body: 'asdsadas', id: 2312, userId: 1 })
//   .then(data => console.log(data));

// update post
// jsonPlaceholderService
//   .updatePost(2, { title: 'new title', body: 'asdsadas' })
//   .then(data => console.log(data));

// delete post
// jsonPlaceholderService.deletePost(2).then(data => console.log(data));

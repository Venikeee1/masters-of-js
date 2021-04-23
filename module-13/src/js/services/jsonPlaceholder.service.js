const BASE_URL = 'https://jsonplaceholder.typicode.com';

const request = async (path, options) => {
  const result = await fetch(path, { ...options });
  if (!result.ok) {
    throw result;
  }

  return await result.json();
};

const jsonPlaceholderService = {
  createPost(payload) {
    return request(`${BASE_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  getPostById(id) {
    return request(`${BASE_URL}/users/${id}`);
  },

  updatePost(id, payload) {
    return request(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    });
  },

  deletePost(id) {
    return request(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
    });
  },
};

export default jsonPlaceholderService;

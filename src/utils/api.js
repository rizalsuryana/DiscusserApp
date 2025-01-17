const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  // Fungsi untuk memeriksa status respons
  const checkStatus = async (response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseJson = await response.json();
    const { status, message } = responseJson;

    if (status !== 'success') {
      throw new Error(message);
    }

    return responseJson.data;
  };

  // Fungsi untuk melakukan fetch dengan header Authorization
  const _fetchWithAuth = async (url, options = {}) => {
    const token = getAccessToken();
    if (!token) {
      throw new Error('No access token found.');
    }

    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      },
    });
  };

  // Fungsi untuk menyimpan token di localStorage
  const putAccessToken = (token) => {
    localStorage.setItem('accessToken', token);
  };

  // Fungsi untuk mengambil token dari localStorage
  const getAccessToken = () => {
    return localStorage.getItem('accessToken');
  };

  const register = async ({ name, email, password }) => {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await checkStatus(response);
    return data.user;
  };

  const login = async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await checkStatus(response);
    return data.token;
  };

  const getAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await checkStatus(response);
    return data.users;
  };

  const getOwnProfile = async () => {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`);
    const data = await checkStatus(response);
    return data.user;
  };

  const getAllThreads = async () => {
    const response = await fetch(`${BASE_URL}/threads`);
    const data = await checkStatus(response);
    return data.threads;
  };

  const getThreadDetail = async (threadId) => {
    const response = await fetch(`${BASE_URL}/threads/${threadId}`);
    const data = await checkStatus(response);
    return data.detailThread;
  };

  const createThread = async ({ title, body, category = '' }) => {
    const response = await fetch(`${BASE_URL}/threads`, {
      method: 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        title,
        body,
        category
      }),
    });

    const data = await checkStatus(response);
    return data.thread;
  };

  const createComment = async ({ threadId, comment }) => {
    const response = await _fetchWithAuth(`${BASE_URL}/${threadId}/comments`, {
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        content: comment,
      })
    });
    const data = await checkStatus(response);
    return data.comment;
  };

  const upVoteThread = async (threadId) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/up-vote`, {
      method: 'POST',
    });
    await checkStatus(response);
  };

  const downVoteThread = async (threadId) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/down-vote`, {
      method: 'POST',
    });
    await checkStatus(response);

  };

  const neutralizeThreadVote = async (threadId) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
      method: 'POST',
    });
    await checkStatus(response);
  };

  const upVoteComment = async (threadId, commentId) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`, {
      method: 'POST',
    });
    await checkStatus(response);
  };

  const downVoteComment = async (threadId, commentId) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`, {
      method: 'POST',
    });
    await checkStatus(response);
  };

  const neutralizeCommentVote = async (threadId, commentId) => {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`, {
      method: 'POST',
    });
    await checkStatus(response);
  };

  const getLeaderboards = async () => {
    const response = await fetch(`${BASE_URL}/leaderboards`);
    const data = await checkStatus(response);
    return data.leaderboards;
  };

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
    getThreadDetail,
    createThread,
    createComment,
    upVoteThread,
    downVoteThread,
    neutralizeThreadVote,
    upVoteComment,
    downVoteComment,
    neutralizeCommentVote,
    getLeaderboards,
  };
})();

export default api;

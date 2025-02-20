async function getCommentsPost(postId) {
  try {
    const responsePost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postData = await responsePost.json()
    console.log('Данные поста:\n ', postData);

    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postData.id}`);
    const commentsData = await responseComments.json();
    console.log('Комменты поста:\n ', commentsData);
  } catch(e) {
    console.error('Error', e)
  }
}

getCommentsPost(2)
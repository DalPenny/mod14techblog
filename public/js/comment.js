const commentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = document.querySelector('#data-id').value.trim();

    const comment_text = document.querySelector('#comment-text').value.trim();

    if (comment_text) {

        const response = await fetch('/api/addcomment', {
            method: 'POST',
            body: JSON.stringify({
                comment_text,
                post_id,
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    
        if (response.ok) {
            document.location.replace('/login');
        } else {
            alert('Failed to sign up');
        }
    }
}
//comment-form pointing at form class in comments.handlebar
document.querySelector('.commentform').addEventListener('submit', commentFormHandler);

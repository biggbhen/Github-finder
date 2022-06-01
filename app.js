const github = new Github();
const input = document.querySelector('input[type="text"]');
input.addEventListener('input', (e) => {
  const user = e.target.value;
  if (user != '') {
    github.getUser(user).then((data) => {
      if (data.profileData.message === 'Not Found') {
        // show alert
      } else {
        // show user
      }
    });
  } else {
    // clear profile
  }
  e.preventDefault();
});

const github = new Github();
const ui = new UI();

const input = document.querySelector('input[type="text"]');
input.addEventListener('input', (e) => {
  let user = e.target.value;
  if (user != '') {
    github.getUser(user).then((data) => {
      if (data.profileData.message === 'Not Found') {
        // show alert
        ui.showAlert();
      } else {
        // show user
        console.log(data);
        ui.showProfile(data);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
  e.preventDefault();
});

class UI {
  showProfile(data) {
    const userProfile = document.querySelector('.githubProfile'),
      location = document.querySelector('.location'),
      website = document.querySelector('.website'),
      twitter = document.querySelector('.twitter'),
      company = document.querySelector('.company'),
      profileImageLink = document.querySelector('.profile-link');
    userProfile.style.display = 'block';
    document.querySelector('.followers').textContent =
      data.profileData.followers;
    document.querySelector('.repos').textContent =
      data.profileData.public_repos;
    document.querySelector('.following').textContent =
      data.profileData.following;
    document.querySelector('.profile-fullName').textContent =
      data.profileData.name;
    document.querySelector('.profileImage').src = data.profileData.avatar_url;
    profileImageLink.href = `https://github.com/${data.profileData.login}`;
    document.querySelector('.profile-userName').textContent =
      data.profileData.login;
    document.querySelector('.timeCreated').textContent = new Date(
      data.profileData.created_at
    ).toLocaleDateString('en-US');
    if (data.profileData.location !== null) {
      location.textContent = data.profileData.location;
    } else {
      location.textContent = 'Not available';
    }

    if (data.profileData.blog !== '') {
      website.textContent = data.profileData.blog;
      website.href = data.profileData.blog;
    } else {
      website.textContent = 'Not available';
    }

    if (data.profileData.twitter_username !== null) {
      twitter.textContent = data.profileData.twitter_username;
      twitter.href = `https://twitter.com/${data.profileData.twitter_username}`;
    } else {
      twitter.textContent = 'Not available';
    }

    if (data.profileData.company !== null) {
      company.textContent = data.profileData.company;
    } else {
      company.textContent = 'Not available';
    }
  }
  clearProfile() {
    const userProfile = document.querySelector('.githubProfile');
    userProfile.style.display = 'none';
  }
  showAlert() {
    this.clearAlert();
    const div = document.createElement('div');
    const input = document.querySelector('input[type="text"]');
    const container = document.querySelector('.container');
    div.className = 'alert';
    div.appendChild(document.createTextNode('User not found'));
    container.insertBefore(div, input);
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}

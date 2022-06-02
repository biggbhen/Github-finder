class UI {
  showProfile(data) {
    const userProfile = document.querySelector('.githubProfile');
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
    document.querySelector('.profile-userName').textContent =
      data.profileData.login;
    document.querySelector('.timeCreated').textContent = new Date(
      data.profileData.created_at
    ).toLocaleDateString('en-US');
  }
}

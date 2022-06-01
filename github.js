class Github {
  constructor() {
    this.client_id = '7602859b82b71fa3a8fc';
    this.client_secret = 'f340da3606565ba13c97aa0fc1d04bc011211ab5';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id = ${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return {
      profileData,
    };
  }
}

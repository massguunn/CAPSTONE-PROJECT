const login = {
  async render() {
    return `
    <div class="login-container">
    <img src="./lombok/pantai-kuta-1.jpeg" alt="Travel Icon" class="login-icon">
    <h1>LOGIN</h1>

    <form class="login-form">
        <input type="text" placeholder="Username or email" required>
        <input type="password" placeholder="Password" required>
        <div class="buttons">
            <button type="submit" class="login-btn">Login</button>
            <button type="button" class="signup-btn">Sign Up</button>
        </div>
    </form>

    <div class="login-google">
        <p>Login as</p>
        <a href="#/home"><img src="google-icon.png" alt="Login with Google"></a>
    </div>
</div>
          `;
  },

  async afterRender() {},
};

export default login;

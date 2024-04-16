class UserProfileManager {
  constructor() {
      this.users = [];
  }

  addUser(userInfo) {
      const id = this.generateUniqueId();
      const newUser = { id, ...userInfo };
      this.users.push(newUser);
  }

  removeUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
  }

  updateUser(userId, newInfo) {
      this.users.forEach(user => {
          if (user.id === userId) {
              user.name = newInfo.name || user.name;
              user.email = newInfo.email || user.email;
          }
      });
  }

  findUserByName(name) {
      return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
  }

  getAllUsers() {
      return this.users;
  }

  generateUniqueId() {
      return Date.now(); 
  }
}


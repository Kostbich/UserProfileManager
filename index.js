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

const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers());

profileManager.updateUser(1, { name: "Alicia" });
profileManager.removeUser(2);

console.log(profileManager.findUserByName("Ali"));

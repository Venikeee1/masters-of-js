const token = 'asdsadsadasjj123h12jh3j21b3hjqwvbdvj21hvb3123';
localStorage.setItem('token', token);

const initialSettings = {
  openSideBar: true,
  showAvatar: true,
  theme: 'dark',
};

const savedSettings = localStorage.getItem('settings');

class UserSettings {
  constructor() {
    this.settings = savedSettings
      ? JSON.parse(savedSettings)
      : { ...initialSettings };
    this.update = this.update.bind(this);
  }

  saveToClientStorage() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  update(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    this.saveToClientStorage();
  }

  reset() {
    this.settings = { ...initialSettings };
    this.saveToClientStorage();
  }
}

export const userSettings = new UserSettings();

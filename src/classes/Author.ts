interface AuthorData {
  name: string;
  email: string;
  avatar: string;
}

export class Author implements AuthorData {
  name: string;
  email: string;
  avatar: string;

  constructor(name: string, email: string, avatar: string) {
    this.name = name;
    this.email = email;
    this.avatar = avatar;
  }

  toFireStore() {
    return {
      name: this.name,
      email: this.email,
      avatar: this.avatar
    }
  }
}
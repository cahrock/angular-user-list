import { Users } from '../../assets/mock-users';
export class InMemoryDb implements InMemoryDb {
  createDb() {
    const users = Users;
    return {users};
  }
}

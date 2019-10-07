import { User } from './user';

export class Task {
  id: string;
  creator: User;
  title: string;
  description: string;
  priority: string;
  status: string;
  deadline: Date;
  assigneeID: number;
  creationDate: Date;

  public constructor(init?: Partial<Task>) {
    Object.assign(this, init);
  }
}

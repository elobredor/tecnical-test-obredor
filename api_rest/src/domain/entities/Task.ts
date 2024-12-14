export class Task {
  constructor(
    public id: string,
    public description: string,
    public completed: boolean = false,
    public createdAt: Date = new Date()
  ) {}
}
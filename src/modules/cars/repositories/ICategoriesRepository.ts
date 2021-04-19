import { Category } from "../model/Category";

interface ICreateDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateDTO): void;
}

export { ICategoriesRepository, ICreateDTO };

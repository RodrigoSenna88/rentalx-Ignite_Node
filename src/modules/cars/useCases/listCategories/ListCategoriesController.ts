/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handle(request: Request, response: Response) {
    const all = this.listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { ListCategoriesController };

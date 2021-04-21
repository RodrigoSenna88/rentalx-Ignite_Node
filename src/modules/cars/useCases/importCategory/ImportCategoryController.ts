import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCae: ImportCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoryUseCae.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };

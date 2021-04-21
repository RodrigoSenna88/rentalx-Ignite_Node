import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCae = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCae
);

export { importCategoryController };

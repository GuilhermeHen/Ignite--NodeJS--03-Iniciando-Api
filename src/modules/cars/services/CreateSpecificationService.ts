import { ISpecificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    const specificationAlreadyExist = this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExist) {
      throw new Error("Specification already exists.");
    }

    this.specificationsRepository.create({ name, description });
  }
}

export default CreateSpecificationService;
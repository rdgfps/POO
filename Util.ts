import { faker } from '@faker-js/faker';
export class Util {
    gerarNome(): string {
        const randomName = faker.person.firstName();
    }
}
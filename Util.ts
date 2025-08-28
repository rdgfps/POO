import { faker } from '@faker-js/faker';
export class Util {
    gerarNome(): string {
        const randomName = faker.person.firstName();
        return randomName;
    }
}

const u: Util = nem Util();
const nomeGerado = u.gerarNome();

console.log
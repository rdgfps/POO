import { faker } from '@faker-js/faker';
export class Util {
    gerarNome(): string {
        const randomName = faker.person.firstName();
        return randomName;
    }
}

const u: Util = new Util();
const nomeGerado = u.gerarNome();
console.log(nomeGerado);
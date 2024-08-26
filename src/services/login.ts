
import { getBaseRepository } from "../repositories/base";
import IUSPMRepository from "../repositories/base/repository";

class BaseService {

    base_rep: IUSPMRepository;

    constructor() {
        this.base_rep = getBaseRepository("good");
    }

    async connection(username: string, password: string): Promise<string> {
        const data = await this.base_rep.connection(username, password)
        return `${data.access}`
    }

}

export default BaseService;

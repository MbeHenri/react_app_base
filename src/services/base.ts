import { UserAuth } from "../models/user";
import { getBaseRepository } from "../repositories/base";
import BaseRepository from "../repositories/base/repository";

class BaseService {

    base_rep: BaseRepository;

    user?: UserAuth

    constructor(user?: UserAuth) {
        this.base_rep = getBaseRepository("fake");
        if (user) {
            this.user = user
        }
    }
}

export default BaseService;

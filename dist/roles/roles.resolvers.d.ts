import { RolesService } from './roles.service';
import { RolesDto } from './dto/roles.dto';
export declare class RolesResolvers {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    getRoles(): Promise<RolesDto[]>;
    findOneById(id: string): Promise<RolesDto>;
    createRole(name: string): Promise<RolesDto>;
    updateRole(id: string, name: string): Promise<RolesDto>;
    deleteRole(id: string): Promise<boolean>;
}

import { Repository } from 'typeorm';
import { RolesEntity } from './roles.entity';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<RolesEntity>);
    findAll(page?: number): Promise<import("./dto/roles.dto").RolesDto[]>;
    findOneById(id: string): Promise<import("./dto/roles.dto").RolesDto>;
    createRole(name: string): Promise<import("./dto/roles.dto").RolesDto>;
    updateRole(id: string, name: string): Promise<import("./dto/roles.dto").RolesDto>;
    deleteRole(id: string): Promise<boolean>;
}

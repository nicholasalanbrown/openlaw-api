"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_entity_1 = require("./users/users.entity");
const roles_entity_1 = require("./roles/roles.entity");
const proposals_entity_1 = require("./proposals/proposals.entity");
const messages_entity_1 = require("./messages/messages.entity");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const proposals_module_1 = require("./proposals/proposals.module");
const messages_module_1 = require("./messages/messages.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const logging_interceptor_1 = require("./shared/logging.interceptor");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                name: 'default',
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'openlaw',
                password: 'openlaw',
                database: 'openlaw',
                synchronize: true,
                dropSchema: false,
                logging: true,
                entities: [users_entity_1.UsersEntity, roles_entity_1.RolesEntity, proposals_entity_1.ProposalsEntity, messages_entity_1.MessagesEntity],
            }),
            auth_module_1.AuthModule,
            messages_module_1.MessagesModule,
            proposals_module_1.ProposalsModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                context: ({ req }) => {
                    return { req };
                },
                installSubscriptionHandlers: true,
                definitions: {
                    path: path_1.join(process.cwd(), 'src/graphql.schema.ts'),
                    outputAs: 'class',
                },
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: logging_interceptor_1.LoggingInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
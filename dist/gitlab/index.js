"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.getProject = (id) => __awaiter(this, void 0, void 0, function* () {
    return axios_1.default
        .get(`${process.env.GITLAB_BASE_URL}/projects/${id}?private_token=${process.env.GITLAB_ACCESS_TOKEN}`)
        .then(response => {
        return response.data;
    })
        .catch(error => {
        console.log(error);
    });
});
exports.getProjectData = (id) => __awaiter(this, void 0, void 0, function* () {
    return axios_1.default
        .get(`${process.env.GITLAB_BASE_URL}/projects/${id}?private_token=${process.env.GITLAB_ACCESS_TOKEN}`)
        .then(response => {
        return response.data;
    })
        .catch(error => {
        console.log(error);
    });
});
exports.createProject = (name) => __awaiter(this, void 0, void 0, function* () {
    return axios_1.default
        .post(`${process.env.GITLAB_BASE_URL}/projects?private_token=${process.env.GITLAB_ACCESS_TOKEN}`, {
        name,
    })
        .then(response => {
        return response.data;
    })
        .catch(error => {
        console.log(error);
    });
});
exports.seedRepo = (id, title) => __awaiter(this, void 0, void 0, function* () {
    return axios_1.default
        .post(`${process.env.GITLAB_BASE_URL}/projects/${id}/repository/commits?private_token=${process.env.GITLAB_ACCESS_TOKEN}`, {
        id,
        branch: 'master',
        commit_message: 'Proposal created',
        actions: [
            {
                action: 'create',
                file_path: 'metadata.json',
                content: JSON.stringify({
                    title,
                    description: '',
                }),
            },
            {
                action: 'create',
                file_path: 'summary.md',
            },
            {
                action: 'create',
                file_path: 'legal.md',
            },
        ],
    })
        .then(response => {
        return response.data;
    })
        .catch(error => {
        console.log(error);
    });
});
exports.createBranch = (projectId, newBranchName, sourceBranchName) => __awaiter(this, void 0, void 0, function* () {
    return axios_1.default
        .post(`${process.env.GITLAB_BASE_URL}/projects/${projectId}/repository/branches?private_token=${process.env.GITLAB_ACCESS_TOKEN}`, {
        projectId,
        branch: newBranchName,
        ref: sourceBranchName,
    })
        .then(response => {
        return response.data;
    })
        .catch(error => {
        console.log(error);
    });
});
exports.commitToBranch = (projectId, branchName, message, title, description, summary, legal) => __awaiter(this, void 0, void 0, function* () {
    console.log(projectId, branchName, message, title, description, summary, legal);
    return axios_1.default
        .post(`${process.env.GITLAB_BASE_URL}/projects/${projectId}/repository/commits?private_token=${process.env.GITLAB_ACCESS_TOKEN}`, {
        id: projectId,
        branch: branchName,
        commit_message: message,
        actions: [
            {
                action: 'update',
                file_path: 'metadata.json',
                content: JSON.stringify({
                    title,
                    description,
                }),
            },
            {
                action: 'update',
                file_path: 'summary.md',
                content: summary,
            },
            {
                action: 'update',
                file_path: 'legal.md',
                content: legal,
            },
        ],
    })
        .then(response => {
        return response.data;
    })
        .catch(error => {
        console.log(error);
    });
});
exports.deleteBranch = (projectId, branchName) => __awaiter(this, void 0, void 0, function* () {
    return axios_1.default
        .delete(`${process.env.GITLAB_BASE_URL}/projects/${projectId}/repository/branches/${branchName}?private_token=${process.env.GITLAB_ACCESS_TOKEN}`, {
        params: {
            id: projectId,
            branch: branchName,
        },
    })
        .then(response => {
        return response.data;
    })
        .catch(error => {
        console.log(error);
    });
});
//# sourceMappingURL=index.js.map
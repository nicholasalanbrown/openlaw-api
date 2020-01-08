export declare const getProject: (id: number) => Promise<any>;
export declare const getProjectData: (id: number) => Promise<any>;
export declare const createProject: (name: any) => Promise<any>;
export declare const seedRepo: (id: any, title: any) => Promise<any>;
export declare const createBranch: (projectId: number, newBranchName: string, sourceBranchName: string) => Promise<any>;
export declare const commitToBranch: (projectId: number, branchName: string, message: string, title: string, description: string, summary: string, legal: string) => Promise<any>;
export declare const deleteBranch: (projectId: number, branchName: string) => Promise<any>;

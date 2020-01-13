import axios from 'axios';

export const getProject = async (id: number) => {
  return axios
    .get(`${process.env.GITLAB_BASE_URL}/projects/${id}?private_token=${process.env.GITLAB_ACCESS_TOKEN}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getProjectData = async (id: number) => {
  return axios
    .get(`${process.env.GITLAB_BASE_URL}/projects/${id}?private_token=${process.env.GITLAB_ACCESS_TOKEN}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const createProject = async name => {
  return axios
    .post(`${process.env.GITLAB_BASE_URL}/projects?private_token=${process.env.GITLAB_ACCESS_TOKEN}`, {
      name,
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const seedRepo = async (id, title, description, summary, legal) => {
  return axios
    .post(`${process.env.GITLAB_BASE_URL}/projects/${id}/repository/commits?private_token=${process.env.GITLAB_ACCESS_TOKEN}`, {
      id,
      branch: 'master',
      commit_message: 'Proposal created',
      actions: [
        {
          action: 'create',
          file_path: 'title.md',
          content: title,
        },
        {
          action: 'create',
          file_path: 'description.md',
          content: description,
        },
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
          content: summary,
        },
        {
          action: 'create',
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
};

export const createBranch = async (projectId: number, newBranchName: string, sourceBranchName: string) => {
  return axios
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
};

export const commitToBranch = async (
    projectId: number,
    branchName: string, 
    message: string,
    title: string,
    description: string,
    summary: string,
    legal: string,
  ) => {
    console.log(projectId, branchName, message, title, description, summary, legal)
  return axios
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
};

export const deleteBranch = async (projectId: number, branchName: string) => {
  return axios
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
};
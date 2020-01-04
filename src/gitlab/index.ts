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

export const seedProject = async (id, title) => {
  return axios
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
};

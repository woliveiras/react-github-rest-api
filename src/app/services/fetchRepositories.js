import axios from 'axios'
import { GITHUB_URI } from '../../shared/config'

const fetchRepositories = async user => {
  try {
    const response = await axios.get(`${GITHUB_URI}/users/${user}/repos`)
    return response.data
  } catch(error) {
    throw error
  }
}

export default fetchRepositories

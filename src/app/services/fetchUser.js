import axios from 'axios'
import { GITHUB_URI } from '../../shared/config'

const fetchUser = async user => {
  try {
    const response = await axios.get(`${GITHUB_URI}/users/${user}`)
    return response.data
  } catch(error) {
    throw error
  }
}

export default fetchUser

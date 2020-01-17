import axios from 'axios';
import qs from 'qs';

const apiUrl = process.env.REACT_APP_API_URL;

export function fetch(path, filter) {
  return axios.get(`${apiUrl}/${path}?${qs.stringify(filter)}`)
}

export function find(path, id) {
  return axios.get(`${apiUrl}/${path}/${id}`)
}

export function create(path, payload) {
  return axios.post(`${apiUrl}/${path}`, payload)
}

export function update(path, id, payload) {
  return axios.put(`${apiUrl}/${path}/${id}`, payload)
}

export function destroy(path, id) {
  return axios.delete(`${apiUrl}/${path}/${id}`)
}

/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

axios.interceptors.request.use((config: AxiosRequestConfig) => {
	if (config.headers && localStorage.getItem('token')) {
		config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	}

	// TODO: add base-url to environment variable
	config.baseURL = 'localhost:3001'
	return config
})

axios.interceptors.response.use((response: AxiosResponse) => {
	if (response.data?.token) {
		localStorage.setItem('token', response.data.token)
	}

	return response
})

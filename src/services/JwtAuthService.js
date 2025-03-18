import fetch from 'auth/FetchInterceptor'

const JwtAuthService = {}

JwtAuthService.login = function (data) {
	return setTimeout(() => data, 1000)
}

JwtAuthService.signUp = function (data) {
	return setTimeout(() => data, 1000)
}

export default JwtAuthService
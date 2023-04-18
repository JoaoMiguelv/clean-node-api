class LoginRouter {
    route(httpRequest) {
        const { email, password } = httpRequest.body
        if (!email || !password) {
            return { statusCode: 400 }
        }
    }
}

describe('Login Router', () => {
    test('Should return 400 if no email is provided', () => {
        const sut = new LoginRouter() // System Under Test
        const httpRequest = {
            body: {
                password: 'any_password'
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
})

describe('Login Router', () => {
    test('Should return 400 if no password is provided', () => {
        const sut = new LoginRouter() // System Under Test
        const httpRequest = {
            body: {
                email: 'any_email@hotmail.com'
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
})
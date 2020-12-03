export interface agentRequest {
    success: boolean,
    message: string,
    accounts: {
        id:string,
        role: string,
        firstName: string,
        lastName: string,
        userName: string,
        email: string,
        password: string
    },
    phoneNumber: string,
    isApproved: boolean

}
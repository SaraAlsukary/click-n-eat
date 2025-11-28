export type TAuth = {
    status: string,
    user: {
        id: number,
        name: string,
        email: string,
        email_verified_at: null,
        created_at: string,
        updated_at: string,
    },
    authorisation: {
        token: string,
        type: string
    }
}
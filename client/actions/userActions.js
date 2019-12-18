export const sentPanicEmail = (message) => {
    return {
        type: 'PANIC_EMAIL_SENT',
        message
    }
}

export const sentPanicEmailFailed = (error) => {
    return {
        type: 'PANIC_EMAIL_SENT_FAILED',
        error
    }
}
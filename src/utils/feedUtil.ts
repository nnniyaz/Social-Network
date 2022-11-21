export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
}

export const formatTime = (date: string) => {
    return new Date(date).getHours() + ':' + new Date(date).getMinutes();
}
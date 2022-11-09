interface User {
    name: string;
    id: number;
}
function deleteUser(user: User) {
    return user.id && user.name
}
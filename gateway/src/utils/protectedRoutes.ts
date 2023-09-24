const protectedPostsRoutes: { [key: string]: { method: string } } = {
    '/': { method: 'POST' },
}

export const isPostProtectedRoute = (path: string = '', method: string) => {
    const route = protectedPostsRoutes[path]
    if (!route || route.method !== method) {
        return false
    }
    return true
}



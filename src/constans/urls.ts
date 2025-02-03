export const baseUrl = import.meta.env.VITE_API_URL

export const urls = {
    users: '/auth/users',
    recipes: '/auth/recipes',
    recipesByTag: '/auth/recipes/tag/:tagItem',
}
export const asset = (path) => {
    const base = process.env.NODE_ENV === 'production'
        ? '/portfolio-2025'
        : '';

    return `${base}${path}`;
};
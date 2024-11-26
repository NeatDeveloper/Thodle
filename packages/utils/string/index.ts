export const
    insert = (template: string, values: Record<string, any>, key = '$') => template.replace(
        new RegExp(`\\${key}(\\w+)`, 'g'), (match, token) => {
            return values[token] || match;
        });

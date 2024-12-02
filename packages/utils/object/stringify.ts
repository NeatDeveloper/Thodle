export default (object: object, space = 4): string =>
    JSON.stringify(object,
        (_, value) =>
            typeof value === 'bigint' ? Number(value) :
                value instanceof Date ? value.toISOString() :
                    value,
        space
    );

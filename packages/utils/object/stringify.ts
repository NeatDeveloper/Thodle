export default (object: object): string =>
    JSON.stringify(object,
        (_, value) =>
            typeof value === 'bigint' ? Number(value) :
                value instanceof Date ? value.toISOString() :
                    value
    );

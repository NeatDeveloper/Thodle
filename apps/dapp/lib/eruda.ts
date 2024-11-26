export default async () => {
    const eruda = (await import('eruda')).default;

    eruda.init();
}

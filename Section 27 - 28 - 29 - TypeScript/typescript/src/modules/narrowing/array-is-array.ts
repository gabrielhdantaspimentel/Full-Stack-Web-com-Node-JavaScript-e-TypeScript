export const bootstrap = (): void => {
    const arr: number[] | undefined = [1, 2, 3]
    // let arr: number[] | undefined;

    console.log('Typeof de array: ', typeof arr);
    console.log('Instaceof de array: ', arr instanceof Array);
    console.log('Instaceof de array: ', Array.isArray(arr));


    if ( Array.isArray(arr)) {
        arr?.map(item => {
            console.log(item)
        });
    }
};
export const bootstrap = ():void => {
    const x = 'teste'
    console.log('string: ', typeof x);
    console.log('Number: ', typeof 123);
    console.log('BigInt: ', typeof 123n);
    console.log('Symbol: ', typeof Symbol ('teste'))
    console.log('undefined: ', typeof undefined)
    console.log('Object: ', typeof {})
    console.log('Object: ', typeof Object())
    console.log('Array (object): ', typeof []);
    console.log('Function: ', typeof function () {});
    
    

}
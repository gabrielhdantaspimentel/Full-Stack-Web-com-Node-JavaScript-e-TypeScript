export const bootstrap = ():void => {
    
    enum orderStatus{
        PENDING, //default 0
        DELIVERED = 'Entregue',
        CANCELED = 'Cancelado'
    }

    console.log(orderStatus);
    console.log(orderStatus.CANCELED);
    // console.log(orderStatus[1]);

    enum OrderStatus {
        WAITINGFORPAYMENT = 500,
        SENT = 'Enviado',
    }

    function changeOrderStatus(newStatus: OrderStatus ): void{
        if(newStatus === OrderStatus.SENT){
            //... para enviar um e-mail para o cliente
            console.log('Novo Status: ', newStatus)
        }
    }

    changeOrderStatus(OrderStatus.SENT)
};
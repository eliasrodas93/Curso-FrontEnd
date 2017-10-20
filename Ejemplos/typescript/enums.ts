enum AlertType {
    Success = 1,
    Error,
    Warning
};

function createAlert(message: string, type: AlertType) : void{
    switch (type) {
        case AlertType.Success:
            alert(message);
            break;
        case AlertType.Warning:
            console.warn(message);
            break;
        default:
            console.error('TYPE NOT FOUND');
            break;
    }
}
createAlert('Hola', AlertType.Success);
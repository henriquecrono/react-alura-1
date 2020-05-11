import M from 'materialize-css';

const PopUp = {
    showMessage: (status, msg) => {
        if (status === 'success') M.toast({html: msg, classes: 'green', displayLength: 2000});
        else M.toast({html: msg, classes: 'red', displayLength: 3000});
    }
}

export default PopUp;
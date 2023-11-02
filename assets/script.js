function toggleNav() {
    let sideNav = document.querySelector('.sidebarnav');
    let content = document.querySelector('.sidebarnav-content');
    
    if(sideNav.style.width === '0px' || sideNav.style.width === '') {
        sideNav.style.width = '250px';
        content.style.display = 'block';
    } else {
        sideNav.style.width = '0';
        content.style.display = 'none';
    }
}

var userEmail = document.myForm.userEmail.value;
function isEmail() {
    

    const regexx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


}

function validator() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z.0-9-]+)*$/;
    if (document.myForm.urName.value == "") {
        alert(" must fill in name");
        document.myForm.urName;
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.urName.value)) {
        alert(" must be a valid Name please enter actual characters. ");
        document.myForm.urName.focus();
        return false;
    }

    if (document.myForm.userEmail.value == "") {
        alert(" must fill in email");
        document.myForm.userEmail;
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(document.myForm.userEmail.value.trim())) {
        alert(document.myForm.userEmail.value + " your email was valid");
    } else {
        alert(document.myForm.userEmail.value + ' Email is not valid');
    }



    if (document.myForm.sTopic.value == "") {
        alert(" must fill in Subject");
        document.myForm.sTopic;
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.sTopic.value)) {
        alert(" must be a valid Name please enter actual characters. ");
        document.myForm.sTopic.focus();
        return false;
    }




    return (true);

}
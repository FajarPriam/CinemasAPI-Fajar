$(document).ready(function () {
    LoadHiddenNotification();
    ClearScreen();
})

function LoginAdmin() {
    debugger;
    var user = new Object();
    user.Username = $('#Username').val();
    user.Password = $('#Password').val();
    $.ajax({
        url: 'http://localhost:17940/api/Logins/Login',
        type: 'GET',
        data: user,
        dataType: 'json',
        success: function (request, response) {
            if (request == null) {
                swal("Failed", "Username or Password Incorrect", "error");
            } else {
                swal({
                    title: "Success!",
                    text: "Welcome",
                    type: "success"
                },
            function () {
                window.location.href = '/Admins/Index/';
            });
            }

        },
        error: function (response) {
            swal("Oops", "You culd connect to the server", "error");
        }

    });
}

function ClearScreen() {
    $('#Username').val('');
    $('#Password').val('');
};

function ValidationLoginAdmin() {
    // asumsi semua text box valid
    var isAllValid = true

    //cek textbox name
    if ($('#Username').val() == "" || ($('#Username').val() == " ")) {
        isAllValid = false; //kalau textbox nama kosong maka
        $('#Username').siblings('span.error').css('visibility', 'visible'); //notifikasi validasi muncul
    }
    else {
        $('#Username').siblings('span.error').css('visibility', 'hidden');
    }

    if ($('#Password').val() == "" || ($('#Password').val() == " ")) {
        isAllValid = false; //kalau textbox nama kosong maka
        $('#Password').siblings('span.error').css('visibility', 'visible'); //notifikasi validasi muncul
    }
    else {
        $('#Password').siblings('span.error').css('visibility', 'hidden');
    }

    //kalau semua fild terisi
    if (isAllValid) {
        LoginAdmin();
    }
}

//untuk menghide notifikasi validasi agar tidak muncul saat pertamakali di load
function LoadHiddenNotification() {
    $('#Username').siblings('span.error').css('visibility', 'hidden');
    $('#Password').siblings('span.error').css('visibility', 'hidden');
}

$(document).ready(function () {
    LoadIndexAdmins();
    HideAlert();
    ClearScreen();
    $('#table').DataTable({
        "ajax": LoadIndexAdmins()
    })
})

function LoadIndexAdmins() {

    $.ajax({
        types: "GET",
        url: "http://localhost:25246/api/Admins",
        async: false,
        dataType: "json",
        success: function (data) {
            var html = '';
            var i = 1;
            $.each(data, function (index, val) {
                html += '<tr>';
                html += '<td>' + i + '</td>';
                html += '<td>' + val.Username + '</td>';
                html += '<td>' + val.Password + '</td>';
                html += '<td> <a href="#" onclick="return GetById(' + val.Id + ')">Edit</a>';
                html += ' | <a href="#" onclick="return Delete(' + val.Id + ')">Delete</a> </td>';
                html += '</tr>';
                i++;
            });
            $('.tbody').html(html);
        }
    });
}

function Save() {
    var admin = new Object();

    admin.username = $('#Username').val();
    admin.password = $('#Password').val();
    $.ajax({
        url: 'http://localhost:25246/api/Admins',
        type: 'POST',
        dataType: 'json',
        data: admin,
        success: function (result) {
            LoadIndexAdmins();
            $('#myModal').modal('hide');
        }
    });
    ClearScreen();
}

function Edit() {
    var admin = new Object();
    admin.id = $('#Id').val();
    admin.username = $('#Username').val();
    admin.password = $('#Password').val();
    $.ajax({
        url: "http://localhost:25246/api/Admins/" + $('#Id').val(),
        data: admin,
        type: "PUT",
        dataType: "json",
        success: function (result) {
            LoadIndexAdmins();
            $('#myModal').modal('hide');
            $('#Username').val('');
            $('#Password').val('');
        }
    });
    ClearScreen();
}

function GetById(Id) {
    $.ajax({
        url: "http://localhost:25246/api/Admins/" + Id,
        type: "GET",
        dataType: "json",
        success: function (result) {
            $('#Id').val(result.Id);
            $('#Username').val(result.Username);
            $('#Password').val(result.Password);

            $('#myModal').modal('show');
            $('#Update').show();
            $('#Save').hide();
        }
    })
}

function Delete(Id) {
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
    }, function () {
        $.ajax({
            url: "http://localhost:25246/api/Admins/" + Id,
            type: "DELETE",
            success: function (response) {
                swal({
                    title: "Deleted!",
                    text: "That data has been soft delete!",
                    type: "success"
                },
                function () {
                    window.location.href = '/admins/Index/';
                });
            },
            error: function (response) {
                swal("Oops", "We couldn't connect to the server!", "error");
            }
        });
    });
}

function ValidationSave() {
    var isAllValid = true;
    if ($('#Username').val() == "" || ($('#Username').val() == " ")) {
        isAllValid = false;
        $('#Username').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Password').val() == "" || ($('#Password').val() == " ")) {
        isAllValid = false;
        $('#Password').siblings('span.error').css('visibility', 'visible');
    }
    if (isAllValid) {
        Save();
    }
}

function ValidationEdit() {
    var isAllValid = true;
    if ($('#Username').val() == "" || ($('#Username').val() == " ")) {
        isAllValid = false;
        $('#Username').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Password').val() == "" || ($('#Password').val() == " ")) {
        isAllValid = false;
        $('#Password').siblings('span.error').css('visibility', 'visible');
    }
    if (isAllValid) {
        Edit();
    }
}

function HideAlert() {
    $('#Username').siblings('span.error').css('visibility', 'hidden');
    $('#Password').siblings('span.error').css('visibility', 'hidden');
}

function ClearScreen() {
    $('#Username').val('');
    $('#Password').val('');
    $('#Id').val('');
    $('#Update').hide();
    $('#Save').show();
    HideAlert();
}
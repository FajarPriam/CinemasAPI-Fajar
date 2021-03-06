﻿$(document).ready(function () {
    LoadIndexProvince();
    HideAlert();
    ClearScreen();
    $('#table').DataTable({
        "ajax": LoadIndexProvince()
    })
})

function LoadIndexProvince() {

    $.ajax({
        types: "GET",
        url: "http://localhost:17940/api/Provinces",
        async: false,
        dataType: "json",
        success: function (data) {
            var html = '';
            var i = 1;
            $.each(data, function (index, val) {
                html += '<tr>';
                html += '<td>' + i + '</td>';
                html += '<td>' + val.Name + '</td>';
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
    var province = new Object();

    province.name = $('#Name').val();
    $.ajax({
        url: 'http://localhost:17940/api/Provinces',
        type: 'POST',
        dataType: 'json',
        data: province,
        success: function (result) {
            LoadIndexProvince();
            $('#myModal').modal('hide');
        }
    });
    ClearScreen();
}

function Edit() {
    var province = new Object();
    province.id = $('#Id').val();
    province.name = $('#Name').val();
    $.ajax({
        url: "http://localhost:17940/api/Provinces/" + $('#Id').val(),
        data: province,
        type: "PUT",
        dataType: "json",
        success: function (result) {
            LoadIndexProvince();
            $('#myModal').modal('hide');
            $('#Name').val('');
        }
    });
    ClearScreen();
}

function GetById(Id) {
    $.ajax({
        url: "http://localhost:17940/api/Provinces/" + Id,
        type: "GET",
        dataType: "json",
        success: function (result) {
            $('#Id').val(result.Id);
            $('#Name').val(result.Name);

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
            url: "http://localhost:17940/api/Provinces/" + Id,
            type: "DELETE",
            success: function (response) {
                swal({
                    title: "Deleted!",
                    text: "That data has been soft delete!",
                    type: "success"
                },
                function () {
                    window.location.href = '/Provinces/Index/';
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
    if ($('#Name').val() == "" || ($('#Name').val() == " ")) {
        isAllValid = false;
        $('#Name').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Name').siblings('span.error').css('visibility', 'hidden');
    }
    if (isAllValid) {
        Save();
    }
}

function ValidationEdit() {
    var isAllValid = true;
    if ($('#Name').val() == "" || ($('#Name').val() == " ")) {
        isAllValid = false;
        $('#Name').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Name').siblings('span.error').css('visibility', 'hidden');
    }
    if (isAllValid) {
        Edit();
    }
}

function HideAlert() {
    $('#Name').siblings('span.error').css('visibility', 'hidden');
}

function ClearScreen() {
    $('#Id').val('');
    $('#Name').val('');
    HideAlert();
}
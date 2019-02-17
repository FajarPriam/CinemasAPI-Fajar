$(document).ready(function () {
    LoadIndexFilm();
    HideAlert();
    LoadCategoryCombo();
    ClearScreen();
    $('#table').DataTable({
        "ajax": LoadIndexFilm()
    })
})

function LoadIndexFilm() {

    $.ajax({
        types: "GET",
        url: "http://localhost:25246/api/Films",
        async: false,
        dataType: "json",
        success: function (data) {
            var html = '';
            var i = 1;
            $.each(data, function (index, val) {
                html += '<tr>';
                html += '<td>' + i + '</td>';
                html += '<td>' + val.Title + '</td>';
                html += '<td>' + val.Rating + '</td>';
                html += '<td>' + val.Synopsis + '</td>';
                html += '<td>' + val.Description + '</td>';
                html += '<td>' + val.Duration + '</td>';
                html += '<td>' + val.Status + '</td>';
                html += '<td>' + val.Categories.Name + '</td>';
                html += '<td> <a href="#" onclick="return GetById(' + val.Id + ')">Edit</a>';
                html += ' | <a href="#" onclick="return Delete(' + val.Id + ')">Delete</a> </td>';
                html += '</tr>';
                i++;
            });
            $('.tbody').html(html);
        }
    });
}

function LoadCategoryCombo() {
    $.ajax({
        url: 'http://localhost:25246/api/Categories',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var category = $('#Category');
            $.each(result, function (i, Categories) {
                $("<option></option>").val(Categories.Id).text(Categories.Name).appendTo(category);
            });
        }
    });
    ClearScreen();
}

function Save() {
    var film = new Object();

    film.title = $('#Title').val();
    film.rating = $('#Rating').val();
    film.synopsis = $('#Synopsis').val();
    film.description = $('#Description').val();
    film.duration = $('#Duration').val();
    film.status = $('#Status').val();
    film.categories = $('#Category').val();
    $.ajax({
        url: 'http://localhost:25246/api/Films',
        type: 'POST',
        dataType: 'json',
        data: film,
        success: function (result) {
            LoadIndexFilm();
            $('#myModal').modal('hide');
        }
    });
    ClearScreen();
}

function GetById(Id) {
    $.ajax({
        url: 'http://localhost:25246/api/Films/' + Id,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $('#Id').val(result.Id);
            $('#Title').val(result.Title);
            $('#Rating').val(result.Rating);
            $('#Synopsis').val(result.Synopsis);
            $('#Description').val(result.Description);
            $('#Duration').val(result.Duration);
            $('#Status').val(result.Status);
            $('#Category').val(result.Categories.Id);

            $('#myModal').modal('show');
            $('#Save').hide();
            $('#Update').show();
        }
    })
}

function Edit() {
    var film = new Object();
    film.Id = $('#Id').val();
    film.Title = $('#Title').val();
    film.Rating = $('#Rating').val();
    film.Sinopsis = $('#Sinopsis').val();
    film.Description = $('#Description').val();
    film.Duration = $('#Duration').val();
    film.Status = $('#Status').val();
    film.Categories = $('#category').val();
    $.ajax({
        url: 'http://localhost:25246/api/Films/' + film.Id,
        type: 'PUT',
        data: film,
        dataType: 'json',
        success: function (response) {
            swal({
                title: "Updated!",
                text: "your data has been updated!",
                type: "success"
            },
            function () {
                window.location.href = '/Films/Index/';
                $('#Id').val('');
                $('#Title').val('');
                $('#Rating').val('');
                $('#Synopsis').val('');
                $('#Description').val('');
                $('#Duration').val('');
                $('#Status').val('');
            });
        },
        error: function (response) {
            swal("Oops", "We couldn't connect to the server!", "error");
        }
    });
    ClearScreen();
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
            url: "http://localhost:25246/api/Films/" + Id,
            type: "DELETE",
            success: function (response) {
                swal({
                    title: "Deleted!",
                    text: "That data has been soft delete!",
                    type: "success"
                },
                function () {
                    window.location.href = '/Films/Index/';
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
    if ($('#Title').val() == "" || ($('#Title').val() == " ")) {
        isAllValid = false;
        $('#Title').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Rating').val() == "Choose Rating") {
        isAllValid = false;
        $('#Rating').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Synopsis').val() == "" || ($('#Synopsis').val() == " ")) {
        isAllValid = false;
        $('#Synopsis').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Description').val() == "" || ($('#Description').val() == " ")) {
        isAllValid = false;
        $('#Description').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Duration').val() == "" || ($('#Duration').val() == " ")) {
        isAllValid = false;
        $('#Duration').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Status').val() == "Choose Status") {
        isAllValid = false;
        $('#Status').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Category').val() == "Choose Category") {
        isAllValid = false;
        $('#Category').siblings('span.error').css('visibility', 'visible');
    }
    if (isAllValid) {
        Save();
    }
}

function ValidationEdit() {
    var isAllValid = true;
    if ($('#Title').val() == "" || ($('#Title').val() == " ")) {
        isAllValid = false;
        $('#Title').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Rating').val() == "Choose Rating") {
        isAllValid = false;
        $('#Rating').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Synopsis').val() == "" || ($('#Synopsis').val() == " ")) {
        isAllValid = false;
        $('#Synopsis').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Description').val() == "" || ($('#Description').val() == " ")) {
        isAllValid = false;
        $('#Description').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Duration').val() == "" || ($('#Duration').val() == " ")) {
        isAllValid = false;
        $('#Duration').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Status').val() == "Choose Status") {
        isAllValid = false;
        $('#Status').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Category').val() == "Choose Category") {
        isAllValid = false;
        $('#Category').siblings('span.error').css('visibility', 'visible');
    }
    if (isAllValid) {
        Edit();
    }
}

function HideAlert() {
    $('#Title').siblings('span.error').css('visibility', 'hidden');
    $('#Rating').siblings('span.error').css('visibility', 'hidden');
    $('#Synopsis').siblings('span.error').css('visibility', 'hidden');
    $('#Description').siblings('span.error').css('visibility', 'hidden');
    $('#Duration').siblings('span.error').css('visibility', 'hidden');
    $('#Status').siblings('span.error').css('visibility', 'hidden');
    $('#Category').siblings('span.error').css('visibility', 'hidden');
}

function ClearScreen() {
    $('#Title').val('');
    $('#Id').val('');
    $('#Rating').val('');
    $('#Synopsis').val('');
    $('#Description').val('');
    $('#Duration').val('');
    $('#Status').val('');
    $('#Category').val('Choose Category');
    $('#Update').hide();
    $('#Save').show();
    HideAlert();
}
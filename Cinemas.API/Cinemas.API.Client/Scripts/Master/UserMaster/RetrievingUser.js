$(document).ready(function () {
    LoadIndexUser();
    LoadReligionCombo();
    LoadProvinceCombo();
    LoadRegencyCombo();
    LoadSubDistrictCombo();
    LoadVillageCombo();
    clearUserScreen();
    //hiddenUserAlert();
    $('#table').DataTable({
        "ajax": LoadIndexUser()
    });
});

function LoadIndexUser() {
    $.ajax({
        url: 'http://localhost:25246/api/Users',
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function (user) {
            var html = '';
            var i = 1;
            $.each(user, function (index, val) {
                html += '<tr>';
                html += '<td>' + i + '</td>';
                //html += '<td>' + val.Username + '</td>';
                //html += '<td>' + val.Password + '</td>';
                html += '<td>' + val.First_Name + '</td>';
                html += '<td>' + val.Last_Name + '</td>';
                html += '<td>' + val.Gender + '</td>';
                html += '<td>' + val.Phone + '</td>';
                html += '<td>' + val.Amount + '</td>';
                html += '<td>' + val.Address + '</td>';
                html += '<td>' + val.Religions.Name + '</td>';
                //html += '<td>' + val.Provinces.Name + '</td>';
                //html += '<td>' + val.Regencies.Name + '</td>';
                //html += '<td>' + val.SubDistricts.Name + '</td>';
                html += '<td>' + val.Villages.Name + '</td>';
                html += '<td> <a href="#" onclick="return GetById(' + val.Id + ');">Edit</a> ';
                html += '| <a href="#" onclick="return Delete(' + val.Id + ')">Delete</a></td>';
                html += '</tr>';
                i++;
            });
            $('.tbody').html(html);
        }
    });
}

function LoadReligionCombo() {
    $.ajax({
        url: 'http://localhost:25246/api/Religions',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var religion = $('#Religions');
            religion.empty();
            religion.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, Religion) {
                $("<option></option>").val(Religion.Id).text(Religion.Name).appendTo(religion);
            });
        }
    });
}

function LoadProvinceCombo() {
    $.ajax({
        url: 'http://localhost:25246/api/Provinces',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var province = $('#Provinces');
            province.empty();
            province.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, Provinces) {
                $("<option></option>").val(Provinces.Id).text(Provinces.Name).appendTo(province);
            });
        }
    });
}

function LoadRegencyCombo() {
    $.ajax({
        url: 'http://localhost:25246/api/Regencies',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var regency = $('#Regencies');
            regency.empty();
            regency.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, Regency) {
                $("<option></option>").val(Regency.Id).text(Regency.Name).appendTo(regency);
            });
        }
    });
}

function LoadSubDistrictCombo() {
    $.ajax({
        url: 'http://localhost:25246/api/SubDistricts',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var subdistrict = $('#SubDistricts');
            subdistrict.empty();
            subdistrict.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, Subdistrict) {
                $("<option></option>").val(Subdistrict.Id).text(Subdistrict.Name).appendTo(subdistrict);
            });
        }
    });
}

function LoadVillageCombo() {
    $.ajax({
        url: 'http://localhost:25246/api/Villages',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var village = $('#Villages');
            village.empty();
            village.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, Village) {
                $("<option></option>").val(Village.Id).text(Village.Name).appendTo(village);
            });
        }
    });
}

function Save() {
    var user = new Object();
    user.Username = $('#Username').val();
    user.Password = $('#Password').val();
    user.First_Name = $('#First_Name').val();
    user.Last_Name = $('#Last_Name').val();
    user.Gender = $('#Gender').val();
    user.Phone = $('#Phone').val();
    user.Amount = $('#Amount').val();
    user.Address = $('#Address').val();
    user.Religions_Id = $('#Religions').val();
    user.Provinces_Id = $('#Provinces').val();
    user.Regencies_Id = $('#Regencies').val();
    user.SubDistricts_Id = $('#SubDistricts').val();
    user.Villages_Id = $('#Villages').val();
    $.ajax({
        url: 'http://localhost:25246/api/Users',
        type: 'POST',
        dataType: 'json',
        data: user,
        success: function (response) {
            swal({
                title: "Saved!",
                text: "That data has been inserted!",
                type: "success"
            },
            function () {
                window.location.href = '/Users/Index/';
            });
        },
        error: function (response) {
            swal("Oops", "We couldn't connect to the server!", "error");
        }
    });
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
            url: "http://localhost:25246/api/Users/" + Id,
            type: "DELETE",
            success: function (response) {
                swal({
                    title: "Deleted!",
                    text: "That data has been soft delete!",
                    type: "success"
                },
                function () {
                    window.location.href = '/Users/Index/';
                });
            },
            error: function (response) {
                swal("Oops", "We couldn't connect to the server!", "error");
            }
        });
    });
}

function GetById(Id) {
    $.ajax({
        url: 'http://localhost:25246/api/Users/' + Id,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $('#Id').val(result.Id);
            $('#Username').val(result.Username);
            $('#Password').val(result.Password);
            $('#First_Name').val(result.First_Name);
            $('#Last_Name').val(result.Last_Name);
            $('#Gender').val(result.Gender);
            $('#Phone').val(result.Phone);
            $('#Amount').val(result.Amount);
            $('#Address').val(result.Address);
            $('#Religions').val(result.Religions_Id);
            $('#Provinces').val(result.Provinces_Id);
            $('#Regencies').val(result.Regencies_Id);
            $('#SubDistricts').val(result.SubDistricts_Id);
            $('#Villages').val(result.Villages_Id);

            $('#myModal').modal('show');
            $('#Save').hide();
            $('#Update').show();
        }
    })
}

function Edit() {
    var user = new Object();
    user.Id = $('#Id').val();
    user.Username = $('#Username').val();
    user.Password = $('#Password').val();
    user.First_Name = $('#First_Name').val();
    user.Last_Name = $('#Last_Name').val();
    user.Gender = $('#Gender').val();
    user.Phone = $('#Phone').val();
    user.Amount = $('#Amount').val();
    user.Address = $('#Address').val();
    user.Religions_Id = $('#Religions').val();
    user.Provinces_Id = $('#Provinces').val();
    user.Regencies_Id = $('#Regencies').val();
    user.SubDistricts_Id = $('#SubDistricts').val();
    user.Villages_Id = $('#Villages').val();
    $.ajax({
        url: 'http://localhost:25246/api/Users/' + user.Id,
        type: 'PUT',
        data: user,
        dataType: 'json',
        success: function (response) {
            swal({
                title: "Updated!",
                text: "your data has been updated!",
                type: "success"
            },
            function () {
                window.location.href = '/Users/Index/';
                $('#Id').val('');
                $('#Username').val('');
                $('#Password').val('');
                $('#First_Name').val('');
                $('#Last_Name').val('');
                $('#Gender').val('');
                $('#Phone').val('');
                $('#Amount').val('');
                $('#Address').val('');
            });
        },
        error: function (response) {
            swal("Oops", "We couldn't connect to the server!", "error");
        }
    });
}

function validateInsertUser() {
    var allValid = true;
    if ($('#Username').val() == "" || $('#Username').val() == " ") {
        allValid = false;
        $('#Username').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Password').val() == "" || $('#Password').val() == " ") {
        allValid = false;
        $('#Password').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#First_Name').val() == "" || $('#First_Name').val() == " ") {
        allValid = false;
        $('#First_Name').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Last_Name').val() == "" || $('#Last_Name').val() == " ") {
        allValid = false;
        $('#Last_Name').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Gender').val() == "" || $('#Gender').val() == " ") {
        allValid = false;
        $('#Gender').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Phone').val() == "" || $('#Phone').val() == " ") {
        allValid = false;
        $('#Phone').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Amount').val() == "" || $('#Amount').val() == " ") {
        allValid = false;
        $('#Amount').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Address').val() == "" || $('#Address').val() == " ") {
        allValid = false;
        $('#Address').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Religions').val() == 0 || $('#Religions').val() == "0") {
        allValid = false;
        $('#Religions').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Provinces').val() == 0 || $('#Provinces').val() == "0") {
        allValid = false;
        $('#Provinces').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Regencies').val() == 0 || $('#Regencies').val() == "0") {
        allValid = false;
        $('#Regencies').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#SubDistricts').val() == 0 || $('#SubDistricts').val() == "0") {
        allValid = false;
        $('#SubDistricts').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Villages').val() == 0 || $('#Villages').val() == "0") {
        allValid = false;
        $('#Villages').siblings('span.error').css('visibility', 'visible');
    }

    if (allValid == true) {
        Save();
    }
}

function validateEditUser() {
    var allValid = true;
    if ($('#Username').val() == "" || $('#Username').val() == " ") {
        allValid = false;
        $('#Username').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Password').val() == "" || $('#Password').val() == " ") {
        allValid = false;
        $('#Password').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#First_Name').val() == "" || $('#First_Name').val() == " ") {
        allValid = false;
        $('#First_Name').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Last_Name').val() == "" || $('#Last_Name').val() == " ") {
        allValid = false;
        $('#Last_Name').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Gender').val() == "" || $('#Gender').val() == " ") {
        allValid = false;
        $('#Gender').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Phone').val() == "" || $('#Phone').val() == " ") {
        allValid = false;
        $('#Phone').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Amount').val() == "" || $('#Amount').val() == " ") {
        allValid = false;
        $('#Amount').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Address').val() == "" || $('#Address').val() == " ") {
        allValid = false;
        $('#Address').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Religions').val() == 0 || $('#Religions').val() == "0") {
        allValid = false;
        $('#Religions').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Provinces').val() == 0 || $('#Provinces').val() == "0") {
        allValid = false;
        $('#Provinces').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Regencies').val() == 0 || $('#Regencies').val() == "0") {
        allValid = false;
        $('#Regencies').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#SubDistricts').val() == 0 || $('#SubDistricts').val() == "0") {
        allValid = false;
        $('#SubDistricts').siblings('span.error').css('visibility', 'visible');
    }
    if ($('#Villages').val() == 0 || $('#Villages').val() == "0") {
        allValid = false;
        $('#Villages').siblings('span.error').css('visibility', 'visible');
    }

    if (allValid == true) {
        Edit();
    }
}

function hiddenUserAlert() {
    $('#Username').siblings('span.error').css('visibility', 'hidden');
    $('#Password').siblings('span.error').css('visibility', 'hidden');
    $('#First_Name').siblings('span.error').css('visibility', 'hidden');
    $('#Last_Name').siblings('span.error').css('visibility', 'hidden');
    $('#Gender').siblings('span.error').css('visibility', 'hidden');
    $('#Phone').siblings('span.error').css('visibility', 'hidden');
    $('#Amount').siblings('span.error').css('visibility', 'hidden');
    $('#Address').siblings('span.error').css('visibility', 'hidden');
    $('#Religions').siblings('span.error').css('visibility', 'hidden');
    $('#Provinces').siblings('span.error').css('visibility', 'hidden');
    $('#Regencies').siblings('span.error').css('visibility', 'hidden');
    $('#SubDistricts').siblings('span.error').css('visibility', 'hidden');
    $('#Villages').siblings('span.error').css('visibility', 'hidden');
}

function clearUserScreen() {
    $('#Id').val('');
    $('#Username').val('');
    $('#Password').val('');
    $('#First_Name').val('');
    $('#Last_Name').val('');
    $('#Gender').val('');
    $('#Phone').val('');
    $('#Amount').val('');
    $('#Address').val('');
    $('#Religions').val(0);
    $('#Provinces').val(0);
    $('#Regencies').val(0);
    $('#SubDistricts').val(0);
    $('#Villages').val(0);
    hiddenUserAlert();
}
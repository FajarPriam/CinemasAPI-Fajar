$(document).ready(function () {
    LoadProvinceCombo();
    LoadReligionCombo();
    hiddenUserAlert();
});

function LoadProvinceCombo() {
    $.ajax({
        url: 'http://localhost:17940/api/Provinces',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var province = $('#Provinces');
            province.empty();
            province.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, Province) {
                $("<option></option>").val(Province.Id).text(Province.Name).appendTo(province);
            });
        }
    });
}

function LoadRegencyCombo() {
    $.ajax({
        url: 'http://localhost:17940/api/Regencies/GetRegency/' + $('#Provinces').val(),
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
    debugger;
    $.ajax({
        url: 'http://localhost:17940/api/SubDistricts/GetSubDistrict/' + $('#Regencies').val(),
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
        url: 'http://localhost:17940/api/Villages/GetVillage/' + $('#SubDistricts').val(),
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

function LoadReligionCombo() {
    $.ajax({
        url: 'http://localhost:17940/api/Religions',
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

function LoadAllRegencyCombo() {
    $.ajax({
        url: 'http://localhost:17940/api/Regencies',
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

function LoadAllSubDistrictCombo() {
    $.ajax({
        url: 'http://localhost:17940/api/SubDistricts',
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

function LoadAllVillageCombo() {
    $.ajax({
        url: 'http://localhost:17940/api/Villages/',
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
    user.FirstName = $('#FirstName').val();
    user.LastName = $('#LastName').val();
    user.Gender = $('#Gender').val();
    user.Phone = $('#Phone').val();
    user.Email = $('#Email').val();
    user.Amount = $('#Amount').val();
    user.Username = $('#Username').val();
    user.Password = $('#Password').val();
    user.Address = $('#Address').val();
    user.SecretQuestion = $('#SecretQuestion').val();
    user.SecretAnswer = $('#SecretAnswer').val();
    user.Religions_Id = $('#Religions').val();
    user.Villages_Id = $('#Villages').val();
    $.ajax({
        url: 'http://localhost:17940/api/Registers',
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
                window.location.href = '/LoginAdmin/Index/';
            });
        },
        error: function (response) {
            swal("Oops", "We couldn't connect to the server!", "error");
        }
    });
}

function GetById(Id) {
    $.ajax({
        url: 'http://localhost:17940/api/Registers/' + Id,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $('#Id').val(result.Id);
            $('#FirstName').val(result.FirstName);
            $('#LastName').val(result.LastName);
            $('#Gender').val(result.Gender);
            $('#Phone').val(result.Phone);
            $('#Email').val(result.Email);
            $('#Amount').val(result.Amount);
            $('#Username').val(result.Username);
            $('#Password').val(result.Password);
            $('#Address').val(result.Address);
            $('#SecretQuestion').val(result.SecretQuestion);
            $('#SecretAnswer').val(result.SecretAnswer);
            $('#Religions').val(result.Religions_Id);
            LoadProvinceCombo();
            LoadRegencyCombo();
            LoadAllSubDistrictCombo();
            LoadVillageCombo();

            $('#myModal').modal('show');
            $('#Save').hide();
            $('#Update').show();
        }
    })
}

function Edit() {
    var user = new Object();
    user.Id = $('#Id').val();
    user.FirstName = $('#FirstName').val();
    user.LastName = $('#LastName').val();
    user.Gender = $('#Gender').val();
    user.Phone = $('#Phone').val();
    user.Email = $('#Email').val();
    user.Amount = $('#Amount').val();
    user.Username = $('#Username').val();
    user.Password = $('#Password').val();
    user.Address = $('#Address').val();
    user.SecretQuestion = $('#SecretQuestion').val();
    user.SecretAnswer = $('#SecretAnswer').val();
    user.Religions_Id = $('#Religions').val();
    user.Villages_Id = $('#Villages').val();
    $.ajax({
        url: 'http://localhost:17940/api/Registers/' + user.Id,
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
                $('#FirstName').val('');
                $('#LastName').val('');
                $('#Gender').val('');
                $('#Email').val('');
                $('#Amount').val('');
                $('#Username').val('');
                $('#Password').val('');
                $('#Address').val('');
                $('#SecretQuestion').val('');
                $('#SecretAnswer').val('');
            });
        },
        error: function (response) {
            swal("Oops", "We couldn't connect to the server!", "error");
        }
    });
}

function validateInsertUser() {
    var allValid = true;
    if ($('#FirstName').val() == "" || $('#FirstName').val() == " ") {
        allValid = false;
        $('#FirstName').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#FirstName').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#LastName').val() == "" || $('#LastName').val() == " ") {
        allValid = false;
        $('#LastName').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#LastName').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Gender').val() == "" || $('#Gender').val() == " ") {
        allValid = false;
        $('#Gender').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Gender').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Phone').val() == "" || $('#Phone').val() == " ") {
        allValid = false;
        $('#Phone').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Phone').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Email').val() == "" || $('#Email').val() == " ") {
        allValid = false;
        $('#Email').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Email').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Amount').val() == "" || $('#Amount').val() == " " || $('#Amount').val() < 0) {
        allValid = false;
        $('#Amount').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Amount').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Username').val() == "" || $('#Username').val() == " ") {
        allValid = false;
        $('#Username').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Username').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Password').val() == "" || $('#Password').val() == " ") {
        allValid = false;
        $('#Password').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Password').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Address').val() == "" || $('#Address').val() == " ") {
        allValid = false;
        $('#Address').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Address').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Religions').val() == 0 || $('#Religions').val() == "0") {
        allValid = false;
        $('#Religions').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Religions').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#SecretQuestion').val() == 0 || $('#SecretQuestion').val() == "0") {
        allValid = false;
        $('#SecretQuestion').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#SecretQuestion').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#SecretAnswer').val() == 0 || $('#SecretAnswer').val() == "0") {
        allValid = false;
        $('#SecretAnswer').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#SecretAnswer').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Provinces').val() == 0 || $('#Provinces').val() == "0") {
        allValid = false;
        $('#Provinces').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Provinces').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Regencies').val() == 0 || $('#Regencies').val() == "0") {
        allValid = false;
        $('#Regencies').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Regencies').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#SubDistricts').val() == 0 || $('#SubDistricts').val() == "0") {
        allValid = false;
        $('#SubDistricts').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#SubDistricts').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Villages').val() == 0 || $('#Villages').val() == "0") {
        allValid = false;
        $('#Villages').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Villages').siblings('span.error').css('visibility', 'hidden');
    }

    if (allValid == true) {
        Save();
    }
}

function validateEditUser() {
    var allValid = true;
    if ($('#FirstName').val() == "" || $('#FirstName').val() == " ") {
        allValid = false;
        $('#FirstName').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#FirstName').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#LastName').val() == "" || $('#LastName').val() == " ") {
        allValid = false;
        $('#LastName').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#LastName').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Gender').val() == "" || $('#Gender').val() == " ") {
        allValid = false;
        $('#Gender').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Gender').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Phone').val() == "" || $('#Phone').val() == " ") {
        allValid = false;
        $('#Phone').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Phone').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Email').val() == "" || $('#Email').val() == " ") {
        allValid = false;
        $('#Email').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Email').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Amount').val() == "" || $('#Amount').val() == " " || $('#Amount').val() < 0) {
        allValid = false;
        $('#Amount').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Amount').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Username').val() == "" || $('#Username').val() == " ") {
        allValid = false;
        $('#Username').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Username').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Password').val() == "" || $('#Password').val() == " ") {
        allValid = false;
        $('#Password').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Password').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Address').val() == "" || $('#Address').val() == " ") {
        allValid = false;
        $('#Address').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Address').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#SecretQuestion').val() == 0 || $('#SecretQuestion').val() == "0") {
        allValid = false;
        $('#SecretQuestion').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#SecretQuestion').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#SecretAnswer').val() == 0 || $('#SecretAnswer').val() == "0") {
        allValid = false;
        $('#SecretAnswer').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#SecretAnswer').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Religions').val() == 0 || $('#Religions').val() == "0") {
        allValid = false;
        $('#Religions').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Religions').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Provinces').val() == 0 || $('#Provinces').val() == "0") {
        allValid = false;
        $('#Provinces').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Provinces').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Regencies').val() == 0 || $('#Regencies').val() == "0") {
        allValid = false;
        $('#Regencies').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Regencies').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#SubDistricts').val() == 0 || $('#SubDistricts').val() == "0") {
        allValid = false;
        $('#SubDistricts').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#SubDistricts').siblings('span.error').css('visibility', 'hidden');
    }
    if ($('#Villages').val() == 0 || $('#Villages').val() == "0") {
        allValid = false;
        $('#Villages').siblings('span.error').css('visibility', 'visible');
    }
    else {
        $('#Villages').siblings('span.error').css('visibility', 'hidden');
    }

    if (allValid == true) {
        Edit();
    }
}

function hiddenUserAlert() {
    $('#FirstName').siblings('span.error').css('visibility', 'hidden');
    $('#LastName').siblings('span.error').css('visibility', 'hidden');
    $('#Gender').siblings('span.error').css('visibility', 'hidden');
    $('#Phone').siblings('span.error').css('visibility', 'hidden');
    $('#Email').siblings('span.error').css('visibility', 'hidden');
    $('#Amount').siblings('span.error').css('visibility', 'hidden');
    $('#Username').siblings('span.error').css('visibility', 'hidden');
    $('#Password').siblings('span.error').css('visibility', 'hidden');
    $('#Address').siblings('span.error').css('visibility', 'hidden');
    $('#Religions').siblings('span.error').css('visibility', 'hidden');
    $('#SecretQuestion').siblings('span.error').css('visibility', 'hidden');
    $('#SecretAnswer').siblings('span.error').css('visibility', 'hidden');
    $('#Provinces').siblings('span.error').css('visibility', 'hidden');
    $('#Regencies').siblings('span.error').css('visibility', 'hidden');
    $('#SubDistricts').siblings('span.error').css('visibility', 'hidden');
    $('#Villages').siblings('span.error').css('visibility', 'hidden');
}

function clearUserScreen() {
    $('#Id').val('');
    $('#FirstName').val('');
    $('#LastName').val('');
    $('#Gender').val('');
    $('#Phone').val('');
    $('#Email').val('');
    $('#Amount').val('');
    $('#Username').val('');
    $('#Password').val('');
    $('#Address').val('');
    $('#SecretQuestion').val('');
    $('#SecretAnswer').val('');
    $('#Religions').val(0);
    $('#Provinces').val(0);
    $('#Regencies').val(0);
    $('#SubDistrics').val(0);
    $('#Villages').val(0);
    hiddenUserAlert();
}

function ShowPass() {
    $('#Password').val();
}
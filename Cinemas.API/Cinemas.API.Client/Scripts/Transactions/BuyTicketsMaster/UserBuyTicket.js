$(document).ready(function () {
    $('#add').click(function () {
        //validation and add order items
        var isAllValid = true;

        if (isAllValid) {
            var $newRow = $('#mainrow').clone().removeAttr('Id');
            $('.theaters', $newRow).val($('#Theaters').val());
            $('.cinema', $newRow).val($('#Cinemas').val());
            $('.room', $newRow).val($('#Rooms').val());
            $('.film', $newRow).val($('#Films').val());
            $('.price', $newRow).val($('#Price').val() * $('#Quantity').val());

            //Replace add button with remove button
            $('#add', $newRow).addClass('remove').val('Remove').removeClass('btn-success').addClass('btn-danger');

            //remove id attribute from new clone row
            $('#itemSupplier,#item,#quantity,#add', $newRow).removeAttr('Id');
            $('span.error', $newRow).remove();
            //append clone row
            $('#orderdetailsItems').append($newRow);

            //clear select data
            $('#itemSupplier,#item').val('0');
            $('#quantity').val('');
            $('#orderItemError').empty();
        }
    });
    LoadTheaterCombo();
    LoadIndexBuyTicket();
    $('#table').DataTable({
        "ajax": LoadIndexBuyTicket()
    });
});

function LoadIndexBuyTicket() {
    $.ajax({
        url: 'http://localhost:17940/api/FilmRooms',
        type: 'GET',
        async: false,
        dataType: 'json',
        success: function (filmroom) {
            var html = '';
            var i = 1;
            $.each(filmroom, function (index, val) {
                html += '<tr>';
                html += '<td>' + i + '</td>';
                html += '<td>' + val.Films.Title + '</td>';
                html += '<td>' + val.ShowDate + '</td>';
                html += '<td>' + val.Hour + '</td>';
                html += '<td>' + val.Films.Duration + " Minutes" + '</td>';
                html += '<td>' + val.Rooms.Name + '</td>';
                html += '<td>' + val.Rooms.Cinemas.Name + '</td>';
                html += '<td>' + val.Rooms.Cinemas.Address + '</td>';
                html += '<td>' + val.Rooms.Seat + '</td>';
                html += '<td> <a href="#" onclick="return GetById(' + val.Id + ');">Order</a> ';
                html += '</tr>';
                i++;
            });
            $('.tbody').html(html);
        }
    });
}

function LoadTheaterCombo() {
    $.ajax({
        url: 'http://localhost:17940/api/Theaters',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var theater = $('#Theaters');
            theater.empty();
            theater.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, Theater) {
                $("<option></option>").val(Theater.Id).text(Theater.Name).appendTo(theater);
            });
        }
    });
}

function LoadCinemaByTheater() {
    $.ajax({
        url: 'http://localhost:17940/api/Cinemas/GetCinemaByTheater/' + $('#Theaters').val(),
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var cinema = $('#Cinemas');
            cinema.empty();
            cinema.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, Cinema) {
                $("<option></option>").val(Cinema.Id).text(Cinema.Name).appendTo(cinema);
            });
        }
    });
}

function LoadRoomByCinema() {
    $.ajax({
        url: 'http://localhost:17940/api/Rooms/GetRoomByCinema/' + $('#Cinemas').val(),
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var room = $('#Rooms');
            room.empty();
            room.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, Room) {
                $("<option></option>").val(Room.Id).text(Room.Name).appendTo(room);
            });
        }
    });
}

function LoadFilmRoomByRoom() {
    $.ajax({
        url: 'http://localhost:17940/api/FilmRooms/GetFilmRoomByRoom/' + $('#Rooms').val(),
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            var filmroom = $('#Films');
            filmroom.empty();
            filmroom.append($('<option/>').val('0').text('Select'));
            $.each(result, function (i, FilmRoom) {
                $("<option></option>").val(FilmRoom.Id).text(FilmRoom.Films.Title).appendTo(filmroom);
            });
        }
    });
}

function LoadPriceByFilm() {
    $.ajax({
        url: 'http://localhost:17940/api/FilmRooms/' + $('#Films').val(),
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $('#Prices').val(result.Price);
        }
    });
}
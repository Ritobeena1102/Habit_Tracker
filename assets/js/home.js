

$('.habit-status-dropdown').on('change', function () {

    let id = this.id
    let status = $(this).val();

    window.location.href = `http://habit-tracker-a9hn.onrender.com/habits/toggleStatus?id=${id}&status=${status}`;
})
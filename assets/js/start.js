
{
    // Method to redirect to the home page of habits
    $('#startButton').click(function (event) {
        event.preventDefault();
        window.location.href = `http://habit-tracker-a9hn.onrender.com/habits/dailyView`;
    }
    )
}
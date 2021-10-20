$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = () => {
        $("#fname").val("Enter your name here");
        $("#lname").val("");
		$("#atime").val("");
        $("#msg").text("Data added successfully on the server");
        $("#fname").focus();
        setTimeout(clearMsg, 10000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        const data = {
            fname: $("#fname").val(),
            lname: $("#lname").val(),
			atime: $("#atime").val(),
            food: $("#food").val(),
        };
        $.post({
            url: "/add",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});
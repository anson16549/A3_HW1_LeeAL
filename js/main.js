(() => {

    //make an AJAX requst using the Fetch API
    fetch('./data/classData.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // handleData
            //here's where u would call the fnction that puts the pieces on the page
            handleDataset(data);

        })
        .catch((err) => {
            console.log(err);
        })

    function handleDataset(data) {
        let profPanelText = document.querySelector(".profPanelText"),
            profPanelTextchildren = profPanelText.children;
        profPanelTextchildren[0].textContent = classData.coursename + " - " + classData.coursecode;
        profPanelTextchildren[1].textContent = " Professor " + " - " + classData.profname;
        profPanelTextchildren[2].textContent = classData.classtime;
    }


})();